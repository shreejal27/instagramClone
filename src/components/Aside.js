import React from "react"

import '../css/Aside.css'

import asideData from '../AsideData.js'

export default function Aside() {

    const dialogOptions = [
        {
            title: "Settings",
            icon: "fa-solid fa-gear fa-xl"
        },
        {
            title: "Your Activity",
            icon: "fa-solid fa-chart-line"
        },
        {
            title: "Saved",
            icon: "fa-solid fa-bookmark"
        },
        {
            title: "Switch apperance",
            icon: "fa-solid fa-moon"
        },
        {
            title: "Report a problem",
            icon: "fa-solid fa-triangle-exclamation"
        },
    ]

    const dialogMenu = dialogOptions.map((item, index) => {
        return (
            <div className="dialogMenuItem">
                <span><i className={item.icon}></i></span>
                <span key={index}>{item.title}</span>
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

    function show() {
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
                    <div className="moreDialog">
                        {dialogMenu}
                        <hr />
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
            </div>
        </div >
    )
}