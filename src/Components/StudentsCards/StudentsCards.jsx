import { useGlobalState } from "../../ContextApi/ContextApi"

function StudentsCards() {
    const { studentData} = useGlobalState()

    return (
        <>
            <div className="container mt-4">
                <div className="row" style={{gap:"10px 10px"}}>
                    {
                        studentData.map((data)=>(
                            <>
                            <div className="col-lg-3 col-md-6 col-sm-12 px-4 py-4 rounded-3" style={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}>
                        <h4 className="text-capitalize fw-bold mb-4">{data.course}</h4>
                        <div className="d-flex" style={{ gap: "0px 20px" }}>
                            <p className="text-capitalize fs-6 fw-semibold">Batch: {data.batchNo}</p>
                            <p className="text-capitalize fs-6 fw-semibold">Roll: {data.rollno}</p>
                        </div>
                        <div className="d-flex" style={{ gap: "0px 20px" }}>
                            <p className="text-capitalize fs-6 fw-semibold">city: karachi</p>
                            <p className="text-capitalize fs-6 fw-semibold">Campus: N/A</p>
                        </div>
                        {
                           data.courseIsComplete ? (
                                <>
                                <span style={{ fontSize: "14px" }} className="fw-semibold bg-success text-white px-2 py-2 rounded-3">Complete</span>
                                </>
                            ):(
                                <>
                                <span style={{ fontSize: "14px" }} className="fw-semibold bg-primary text-white px-2 py-2 rounded-3">Pending</span>
                                </>
                            )
                        }
                        
                    </div>
                            </>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default StudentsCards