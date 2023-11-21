import React from "react"

import '../css/Suggestion.css'

export default function Suggestion() {
    return (
        <div className="suggestion">
            <div className="profile">
                <span>Img</span>
                <p className="userName">shreejal27</p>
                <p className="profileName">Shree</p>
            </div>
                <p className="profileName">Suggested for you</p>
            <div>
                <span>Img1</span>
                <p className="userName">Someone</p>
                <p >Followed by someone + 10 others</p>
            </div>
            <div>
                <span>Img1</span>
                <p className="userName">Someone</p>
                <p >Followed by someone + 10 others</p>
            </div>
            <div>
                <span>Img1</span>
                <p className="userName">Someone</p>
                <p >Followed by someone + 10 others</p>
            </div>
            <div>
                <span>Img1</span>
                <p className="userName">Someone</p>
                <p >Followed by someone + 10 others</p>
            </div>
        </div>
    )
}