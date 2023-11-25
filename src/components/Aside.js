import React from "react"

import '../css/Aside.css'

import asideData from '../AsideData.js'

export default function Aside() {

    const dialogOptions = ['Settings', 'Your Activity', 'Saved', 'Switch apperance', 'Report a problem'];

    const dialogMenu = dialogOptions.map((item, index) => {
        return (
            <div className="dialogMenuItem">
            <span key={index}>{item}</span>
            </div>
        )
    })

    const asideElements = asideData.map((item, index) => {
        return (
            <div className="asideItem" key={index}>
                <span className="asideIcon">{item.icon ? <i className={item.icon}></i>
                    :
                    <div className="asideUserImage" style={{ backgroundImage: `url(${item.profileImg})` }}> </div>}</span>
                <p>{item.title}</p>
            </div>
        )
    })

    function show(){
        document.getElementById("moreDialog").style.display = "block"
        console.log("show")
    }

    function hide(e) {
        if (e.target.id === "moreDialog") {
            e.target.style.display = "none"
        }
    }

    return (
        <div className="aside">
            <div className="asideHead">
                <span className="title">Instagram</span>
            </div>

            <div className="asideBody">
                {asideElements}
            </div>

            <div className="asideFoot">
                <div className="asideFootItem">
                    <span className="asideIcon"><i className="fa-brands fa-threads fa-xl"></i> </span>
                    <p>Threads</p>
                </div>
                <div className="asideFootItem" onClick={show}>
                    <span className="asideIcon"><i className="fa-solid fa-bars fa-xl"></i></span>
                    <p >More</p>
                </div>
                <div id="moreDialog" className="customDialog" onClick={hide}>
                       {dialogMenu}
                       <hr/>
                       <div>
                        <span>
                       Switch Accounts 
                        </span>
                       </div>
                       <div>
                        <span>
                      Logout
                        </span>
                       </div>
                </div>
            </div>
        </div >
    )
}