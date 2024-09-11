import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../service/api";
import { useLocation, useNavigate } from "react-router-dom";
import { useJobContext } from "./JobContext";

export const UserContext = createContext({})


export const UserProvider = ({children}) => {
    const {setJobByCompany} = useJobContext()


    const [user, setUser] = useState(null)

    const token = localStorage.getItem("@TOKEN:")
    const userId = localStorage.getItem("@USERID:")



    const navigate = useNavigate()
    const location = useLocation()
    

    useEffect(() => {
        const loadUser = async () => {
            if(token && userId) {
                try {
                    const {data} = await api.get(`users/${userId}`)
                    
                    setUser(data.name);
                    navigate(location.pathname)
                } catch (error) {
                    console.error(error);
                }
            }
        };
        loadUser()
    }, [])

    
    const userRegister = async (formData) => {
        try {
            const {data} = await api.post("users", formData)
            navigate("/loginpage")
        } catch (error) {
            console.error(error);
        }
    }

    const userLogin = async (formData) => {
        try {
            const {data} = await api.post("login", formData)
            const token = data?.accessToken;
            const userId = data?.user.id;

            if(token && userId) {
                setUser(data.user.name)
                localStorage.setItem("@TOKEN:", token);
                localStorage.setItem("@USERID:", userId);

                navigate("/landingpage")
            } else {
                throw new Error("Token ou UserId ausenstes")
            }
        } catch (error) {
            console.error(error);

            if (error.response?.data === "Incorrect password" || error.response?.data === "Cannot find user") {
                alert("Credenciais inválidas!");
            } else {
                alert("Erro ao fazer login, tente novamente.");
            }
        }
    }

    const userLogout = () => {
        setUser(null)
        localStorage.removeItem("@TOKEN:")
        localStorage.removeItem("@USERID:")
        localStorage.removeItem("@JOB:")
        navigate("/")
        setJobByCompany([])
    }

  return (
    <UserContext.Provider value={{userRegister, userLogin, user, userLogout}}>
        {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)