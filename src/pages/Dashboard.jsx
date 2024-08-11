import { useEffect, useState } from "react";
import StudentsCards from "../Components/StudentsCards/StudentsCards";
import { useGlobalState } from "../ContextApi/ContextApi";
import axios from "axios";
import { Spin } from "antd"; 

function Dashboard() {
    const { token, userId, studentData, setStudentData } = useGlobalState();
    const [isLoading, setIsLoading] = useState(true);

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
                setIsLoading(false); 

            } catch (error) {
                console.error("Error fetching student data:", error);
                setIsLoading(false); 
            }
        })();
    }, [token, userId, setStudentData]);

    if (isLoading) {
        return (
            <div className="d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                <Spin size="large" />
            </div>
        );
    }

    return (
        <>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-capitalize">Hi! {studentData[0]?.name} 👋</h1>
                        <p className="fw-semibold text-secondary" style={{ fontSize: "16px" }}>Welcome to the SMIT student portal. You can find all your courses listed below</p>
                    </div>
                </div>
            </div>
            <StudentsCards />
        </>
    );
}

export default Dashboard;
