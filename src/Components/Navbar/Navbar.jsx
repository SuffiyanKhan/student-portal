
import logo from "../../assets/logo.png"
import Logout from "../Logout/Logout"

function Navbar() {
  return (
    <>
        <nav className="d-flex justify-content-between align-items-center bg-light px-5 py-2" style={{boxShadow:"0px 0px 10px"}}>
            <img src={logo} width={120} alt="" />
            <div className="d-none d-lg-flex d-md-flex align-items-center justify-content-center" style={{gap:"10px"}}>
                <div className="d-flex align-items-center justify-content-center">
                <img src={logo} style={{width:"50px" ,height:"50px", borderRadius:"50%",objectFit:"cover"}} alt="" />
                <p className="mt-3">suffiyan@gmail.com</p>
                </div>
                <Logout/>
                {/* <button className="btn btn-primary">Logout</button> */}
            </div>
            <div className="d-lg-none d-md-none">
                <Logout/>
                 {/* <button className="btn btn-primary">Logout</button> */}
            </div>
        </nav>
    </>
  )
}

export default Navbar