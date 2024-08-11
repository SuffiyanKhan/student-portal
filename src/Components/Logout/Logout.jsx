import Cookies from 'js-cookie';
function Logout() {
    const handleDeleteCookies = () => {
        Cookies.remove('authToken');
        Cookies.remove('userId');
        console.log("Cookies removed");
        window.location.reload()
      };
  return (
    <button className="btn btn-primary" onClick={handleDeleteCookies}>Logout</button>
  )
}

export default Logout