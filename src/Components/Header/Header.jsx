import logo from "../../assets/logo.png"

function Header() {
  return (
    <div className="d-flex justify-content-between align-items-center px-4 py-2" style={{ boxShadow: "0px 0px 5px" }}>
    <img src={logo} width={100} alt="" />
    <button className="btn btn-success">Get Certificate</button>
  </div>
  )
}

export default Header