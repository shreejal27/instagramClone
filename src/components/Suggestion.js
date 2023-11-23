import React from "react"

import '../css/Suggestion.css'


import suggestionData from '../SuggestionData.js'

export default function Suggestion() {

    const backgroundImageStyle = {
        backgroundImage: `url(${suggestionData.user[0].userImg})`,
    };

    const suggestionElement = suggestionData.suggestion.map((suggestion, index) => {
        const suggestionImg = {
            backgroundImage: `url(${suggestion.userImg})`,
        };
        return (
            <div className="spaceBetween suggestionItems" key={index}>
                <div className="userProfile">
                    <div className="suggestionUserImage" style={suggestionImg}> </div>
                    <div className="flexRow">
                        <span className="suggestionUserName">  {suggestion.userName}</span>
                        <span className="followedBy">Followed by {suggestion.followedBy}</span>
                    </div>
                </div>
                <div>
                    <span className="follow">Follow</span>
                </div>
            </div>
        )
    })

    const suggestionFootElement = suggestionData.suggestionFoot.map((suggestionFoot, index) => {
        return (

            <div key={index} className="userProfile">
                <div className="suggestionsContentItems">
                    {suggestionFoot} <span className="dot">.</span> 
                </div>
            </div>
        )
    })

    return (
        <div className="suggestion">

            <div className="spaceBetween userProfileMain">
                <div className="userProfile">
                    <div className="suggestionUserImage" style={backgroundImageStyle}> </div>
                    <div className="flexRow">
                        <span className="userName">shreejal27</span>
                        <span className="profileName">Shree</span>
                    </div>
                </div>
                <div>
                    <p className="switch">Switch</p>
                </div>
            </div>

            <div className="spaceBetween suggestionInfo">
                <div className="suggestionTitle">
                    <p>Suggested for you</p>
                </div>
                <div className="suggestionSeeAll">
                    <p>See All</p>
                </div>
            </div>

            {suggestionElement}

            <div className="spaceBetween suggestionsContent">
                {suggestionFootElement}
            </div>

            <div className="tradeMark">
                <p>© 2023 INSTAGRAM FROM META</p>
            </div>
        </div>
    )
}