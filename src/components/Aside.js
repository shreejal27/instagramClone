import React from "react"

import '../css/Aside.css'

import asideData from '../AsideData.js'

export default function Aside() {

    const asideElements = asideData.map((item, index) => {
        return (
            <div className="asideItem" key={index}>
                <span className="asideIcon"><i class={item.icon}></i> </span>
                <p>{item.title}</p>
            </div>
        )
    })

    return (
        <div className="aside">
            <div className="asideHead">
                <p className="title">Instagram</p>
            </div>

            <div className="asideBody">
                {asideElements}
            </div>

            <div className="asideFoot">
                <div className="asideFootItem">
                    <span className="asideIcon"><i class="fa-brands fa-threads fa-xl"></i> </span>
                    <p>Threads</p>
                </div>
                <div className="asideFootItem">
                    <span className="asideIcon"><i class="fa-solid fa-bars fa-xl"></i></span>
                    <p>More</p>
                </div>

            </div>
        </div>
    )
}