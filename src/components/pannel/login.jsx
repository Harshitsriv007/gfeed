// import { Replay } from "@mui/icons-material";
import {useState,useEffect} from "react";
// import Loginroute from "../../routing/loginroute";
// import { Link } from "react-router-dom";
// // import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Approute from "../../routing/approute";


import { Routes,Route,createSearchParams, useNavigate,useLocation,Navigate } from 'react-router-dom';
// import Loginroute from "../../routing/loginroute";

function Login() {
  const navigate = useNavigate();
    const [allowredirect, setAllowredirect] = useState(false);
    const [credentails,setCredenatils] = useState("");
    const [errorshow , setErrorshow] = useState("");
    const location = useLocation();

    
    
    useEffect(() => {
        const search = location;
        // const name = new URLSearch(search).get('user_token');
        // let { user_token } = params; 
        // const tokendata=location.state.user_token?location.state.user_token:'';
        // const tokendata = AuthToken.get("user_token");
    
        if(search['pathname'] === '/app')
        {
        <Navigate to="Dashboard" replace={true}/>
        }
        console.log(search['pathname']);
          // let User = localStorage.getItem('user');
          // if(tokendata)
          // {
          //   setToken(tokendata);
          // }
          // if(User){
          //   if(token){
          //   localStorage.setItem('token', token);
          //   }
          // <Navigate to="Dashboard" replace={true}/>
          // }
          // else
          // {
          //   <Navigate to="/" replace={true}/>
          //  }
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
            // setErrorshow({ ...errorshow,msg });

            // setErrorshow({...errorshow,["msg"]:msg});
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
                // <Routes>
                //   <Route path="/login" element={goToPosts()}/>

                //   {/* <Route path="*" element={<Navigate to="/login" replace={true}/>}/> */}
                // </Routes>
                // <Navigator to="dashboard" />
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
    <div>
      {/* Login form */}
         <div><label>UserName : </label><input type="text" onChange={Input} name="username"/></div>
         <div><label>Password : </label><input type="password" onChange={Input} name="password"/></div>
         <button name = "Dashboard" type="submit" onClick={(e)=>{Home(e)}}>Dashboard</button>
         {(!allowredirect)??<div>{errorshow.msg}</div>}
    </div>
  );
}

export default Login;
