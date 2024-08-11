
import logo from "../../assets/logo.png"
import Logout from "../Logout/Logout"

function Navbar() {
  return (
    <>
      <nav className="d-flex justify-content-between align-items-center bg-light px-5 py-2" style={{ boxShadow: "0px 0px 10px" }}>
        <img src={logo} width={120} alt="" />
        <div className="d-none d-lg-flex d-md-flex align-items-center justify-content-center" style={{ gap: "10px" }}>
          <div className="d-flex align-items-center justify-content-center">
          </div>
          <Logout />
        </div>
        <div className="d-lg-none d-md-none">
          <Logout />
        </div>
      </nav>
    </>
  )
}

export default Navbar