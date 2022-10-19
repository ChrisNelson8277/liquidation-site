import React from 'react'
import { useNavigate } from 'react-router-dom'
import './css/footer.css'
import { GiElephant } from "react-icons/gi";
import { IconContext } from 'react-icons/lib';





function BodyFooter(props) {
    let navigate = useNavigate()
    function handleLogin() {
        navigate("/login")}
  return (
    <div className='footer-container'>
        <IconContext.Provider value={{
            className:"ele-login"
        }}>
            <GiElephant onClick={handleLogin}/>
        </IconContext.Provider>

    </div>
  )
}

export default BodyFooter