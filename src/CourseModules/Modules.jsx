import { useEffect, useState } from "react";
import {  Spin,  } from "antd";
import { useNavigate } from "react-router-dom";
import "./Module.css";
import Header from "../Components/Header/Header";

const demoData = [
  {
    moduleName: "HTML",
    attendence: 80,
    test: 75,
    quiz1: 85,
    quiz2: 90,
    quiz3: 78,
    totalQuiz: 3,
    totalMarks: 85 + 90 + 78,
  },
  {
    moduleName: "CSS",
    attendence: 70,
    test: 80,
    quiz1: 60,
    quiz2: 70,
    quiz3: 65,
    totalQuiz: 3,
    totalMarks: 60 + 70 + 65,
  },
  {
    moduleName: "JS",
    attendence: 80,
    test: 70,
    quiz1: 60,
    quiz2: 55,
    quiz3: 79,
    totalQuiz: 3,
    totalMarks: 60 + 55 + 79,
  },
];

const Modules = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate fetching data from an API
    const fetchData = async () => {
      setLoading(true);
      try {
        const result = demoData;

        setData(result);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log("DATA:", data);

  if (loading) {
    return (
      <div className="spinner-container">
        <Spin size="large" />
      </div>
    );
  }

  const handleCardClick = (module) => {
    navigate(`/module-details`, { state: { module } });
  };
  return (
    <>
     <Header/>
      <div className="container mt-5">
        <div className="row" style={{gap:"0px 5px"}}>
          {data.map((module, index) => (
            <>
              <div className="col-lg-3 col-md-6 col-sm-12 py-3 px-4 border rounded-3" key={index} onClick={()=>{handleCardClick(module)}}>
                <div className="" >
                  <h4>{module.moduleName}</h4>
                  <h5>Attendence: {module.attendence}</h5>
                  <h5>Attendence: {((module.totalMarks / 300) * 100).toFixed(2)}</h5>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Modules;
