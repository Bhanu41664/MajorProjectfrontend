import React from 'react'
import '../Header/Header.css'

function Header() {
  return (
    <div className="nav3">
    <div className="nav2" >
        <div className="specialconetent">
            <div className="logo">
                <img src=""alt="" />
            </div>
            <div className="content">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Start practice</li>
                    <li>Docs</li>
                    <li>Help</li>
                </ul>
            </div>
        </div>
        <div className="leftcontent">
            <ul>
                <li>
                    <div className="profile">
                        <img src="https://static.vecteezy.com/system/resources/previews/020/765/399/non_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg" alt="" />
                    </div>
                </li>
                <li ><button className="button2">Login</button></li>
                <li ><button className="button">Sign up</button></li>

             
            </ul>
           
        </div>
    </div>
</div>
  )
}

export default Header