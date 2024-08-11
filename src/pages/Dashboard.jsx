import { useEffect } from "react"
import StudentsCards from "../Components/StudentsCards/StudentsCards"
import { useGlobalState } from "../ContextApi/ContextApi"
import axios from "axios"

function Dashboard() {
    const { token, userId, studentData, setStudentData } = useGlobalState()
    useEffect(() => {
        (async () => {
            try {
                const response = await axios.post(
                    "https://student-poratl-server.vercel.app/getStudentData",
                    { userId },
                    {
                        headers: {
                            'Authorization': `Bearer ${token}`,
                            'Content-Type': 'application/json'
                        },
                    }
                );
                const data = response.data.data;
                setStudentData(data);

            } catch (error) {
                console.error("Error fetching student data:", error);
            }
        })();
    }, [token, userId]);
    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-capitalize">Hi! {studentData[0].name} 👋</h1>
                        <p className="fw-semibold text-secondary" style={{ fontSize: "16px" }}>Welcome to the SMIT student portal. You can find all your courses listed below</p>
                    </div>
                </div>
            </div>
            <StudentsCards />
        </>
    )
}

export default Dashboard