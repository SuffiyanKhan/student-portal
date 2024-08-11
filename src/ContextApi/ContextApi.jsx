import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState, } from "react";


const GlobalContext = createContext();

const useGlobalState = () => useContext(GlobalContext)

let GlobalStates = (children) => {
    const [studentCnic, setStudentCnic] = useState('');
    const [rollno, setrollno] = useState("");
    const [error, setError] = useState("");
    const [token, setToken] = useState("")
    const [userId, setUserId] = useState("")
    const[studentData,setStudentData]=useState([]);
    // Cookie se data get karna
    // const token = Cookies.get('authToken');
    // const userId = Cookies.get('userId');
useEffect(()=>{
    setToken(Cookies.get('authToken'));
    setUserId(Cookies.get('userId'));
},[])
   
    return <GlobalContext.Provider value={{
        studentCnic, setStudentCnic,
        error, setError,
        rollno, setrollno,
        token, setToken,
        userId, setUserId,
        studentData,setStudentData
    }}>
        {children.children}
    </GlobalContext.Provider>
}

export {
    GlobalStates,
    useGlobalState
}