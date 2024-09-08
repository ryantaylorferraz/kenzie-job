import React, { createContext, useContext, useEffect, useState } from 'react'
import { api } from '../service/api'
import { useLocation } from 'react-router-dom'

export const JobContext = createContext({})

export const JobProvider = ({children}) => {
    const [ listJob, setListJob ] = useState([])
    const [ search, setSearch ] = useState("")
    const [vagas, setVagas] = useState(false);
    const [showModal, setShowModal] = useState(false)
    const [jobModal, setJobModal] = useState(null)
    
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
                console.log(data);
                 
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

  return (
    <JobContext.Provider value={{listJob, filterJob, setSearch, vagas, setVagas, registerVaga, showModal, setShowModal, registerShowModal, jobModal}}>
        {children}
    </JobContext.Provider>
  )
}

export const useJobContext = () => useContext(JobContext)
