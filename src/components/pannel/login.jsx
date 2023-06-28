import {useState,useEffect} from "react";
import { createSearchParams, useNavigate,useLocation,Navigate } from 'react-router-dom';
import "./login.css";

function Login() {
  const navigate = useNavigate();
    const [allowredirect, setAllowredirect] = useState(false);
    const [credentails,setCredenatils] = useState("");
    const [errorshow , setErrorshow] = useState("");
    const location = useLocation();

    
    
    useEffect(() => {
        const search = location;
    
        if(search['pathname'] === '/app')
        {
        <Navigate to="Dashboard" replace={true}/>
        }
        console.log(search['pathname']);
      
      },[]);
 

    const Input = ({ target }) =>
    {
        setCredenatils(credentails => ({ ...credentails, [target.name]: target.value }));
    }
    const Home = (e) =>
    {
        let hasuserkey = credentails.hasOwnProperty('username'); 
        let haspasswordkey = credentails.hasOwnProperty('password');   
        if((!hasuserkey || !haspasswordkey) && e.target.type === 'submit')
        {
            var msg="error occured !";
            setErrorshow(msg);
            console.log(msg);
            console.log(errorshow);
        }
        else
        {
            // Check if key exists
            let hasuserkey = credentails.hasOwnProperty('username'); 
            let haspasswordkey = credentails.hasOwnProperty('password');   
            if (hasuserkey && haspasswordkey) {
                setAllowredirect(true);
                localStorage.setItem('user', true);
                navigate({
                    pathname:"dashboard",
                    search:createSearchParams({
                      user_token:"sabaoon"
                    }).toString()
                });
            }
        }
    }
   

  return (
    <div className="login-container">
    <form className="login-form" onSubmit={(e)=>{Home(e)}}>
      <h2 className="login-title">Log in to Your Account</h2>
      <input
        type="email"
        placeholder="Email"
        name="username"
        onChange={Input}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={Input}
        name="password"
      />
      <button type="submit" name = "Dashboard" onClick={(e)=>{Home(e)}}>Log In</button>
    </form>
  </div>
  );
}

export default Login;
