import { useNavigate, Link } from "react-router-dom";
import { firebaseConfig, auth } from './firebaseConfig.js';
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const navigate = useNavigate();
  const [user,setUser] = useState(false);

  const clickHandler = (e) => {
    e.preventDefault();
    navigate('/login');
  }

  
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          //setUser(user);
          // ...
          console.log("uid", uid)
        } else {
          // User is signed out
          // ...
          console.log("user is logged out")
        }
      });
     
}, [])

  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar">
            <form className="d-flex" role="search">
              <select>
                <option>English</option>
                <option>Hindi</option>
              </select>
              {!user && <button className="btn btn-danger" onClick={clickHandler}>Signin</button>}
            </form>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;