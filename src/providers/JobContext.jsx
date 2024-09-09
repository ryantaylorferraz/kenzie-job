import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../service/api'
import { useLocation } from 'react-router-dom'
import { toast } from 'react-toastify'

export const JobContext = createContext({})

export const JobProvider = ({children}) => {
    const [ listJob, setListJob ] = useState([])
    const [ search, setSearch ] = useState("")
    const [vagas, setVagas] = useState(false);
    const [showModal, setShowModal] = useState(false)
    

    const [jobModal, setJobModal] = useState(null)
    const [jobByCompany, setJobByCompany] = useState([])

    const token = localStorage.getItem("@TOKEN:")
    const userId = localStorage.getItem("@USERID:")
    
    const location = useLocation()

    useEffect(() => {
      if (location.pathname !== "/jobSearch") {
          setSearch(""); // Reseta o search quando o caminho não é "/jobSearch"
      }

  }, [location.pathname])


    useEffect(() => {
        const getJob = async () => {
            try {
                const { data } = await api.get("jobs?_expand=user")
                 
                setListJob(data)
            } catch (error) {
                console.error('Erro ao buscar dados:', error);
                
            }
          };  getJob()
    }, [])

    const filterJob = listJob.filter((product) => {
      const position = product.position || "";
      const filterSearch = typeof search === "string" && search !== "" ? position.toLowerCase().includes(search.toLowerCase()) : true;
      return filterSearch;
    }) 

    const registerVaga = async (formData) => {
      try {
        await api.post("applications", formData)
      } catch (error) {
        console.error(error);
        
      }
    }

    const registerShowModal = (payload) => {
      setShowModal(!showModal)
      setJobModal(payload)
    }

    const createVaga = async (formData) => {
      try {
        const {data} = await api.post("jobs", formData, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })

        setJobByCompany([...jobByCompany, data])
        toast.success("Vaga adicionada com sucesso!");

      } catch (error) {
        console.error(error);
      }
    }

    useEffect(() => {
      const getVagas = async () => {
        try {
          const {data} = await api.get(`users/${userId}/jobs`)
          setJobByCompany(data);         
        } catch (error) {
          console.error(error);
          
        }
      };
      if(userId) {
        getVagas();
      }
  
    }, [userId])

    const deleteVaga = async (deletingId) => {
      try {
        await api.delete(`jobs/${deletingId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
        setJobByCompany((prevJobs) => prevJobs.filter(job => job.id !== deletingId));
        toast.success("Vaga deletada com sucesso")

      } catch (error) {
        console.error(error);
      }
    }

  return (
    <JobContext.Provider value={{listJob, filterJob, setSearch, vagas, setVagas, registerVaga, showModal, setShowModal, registerShowModal, jobModal, createVaga, jobByCompany, setJobByCompany, deleteVaga}}>
        {children}
    </JobContext.Provider>
  )
}

export const useJobContext = () => useContext(JobContext)
