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
            <div className="spaceBetween" key={index}>
                <div className="userProfile">
                    <div className="suggestionUserImage" style={suggestionImg}> </div>
                    <div>
                        <p className="userName">{suggestion.userName}</p>
                        <p>Followed by {suggestion.followedBy}</p>
                    </div>
                </div>
                <div>
                    <h4>Follow</h4>
                </div>
            </div>
        )
    })

    return (
        <div className="suggestion">

            <div className="spaceBetween">
                <div className="userProfile">
                    <div className="suggestionUserImage" style={backgroundImageStyle}> </div>
                    <div>
                        <p className="userName">shreejal27</p>
                        <p className="profileName">Shree</p>
                    </div>
                </div>
                <div>
                    <h4>Switch</h4>
                </div>
            </div>

            <div className="spaceBetween">
                <div>
                    <p>Suggested for you</p>
                </div>
                <div>
                    <p>See All</p>
                </div>
            </div>

            {suggestionElement}

        </div>
    )
}