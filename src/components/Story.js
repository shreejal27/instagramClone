import React from "react"

import storyData from '../StoryData.js'

import '../css/Story.css'

export default function Story() {

    const stories = storyData.map((story, index) => {

        const backgroundImageStyle = {
            backgroundImage: `url(${story.userImg})`,
            // backgroundColor: "lightblue",
            // Add other styles as needed
          };
        return (
           
             <div className="storyItem" key={index} >
             <div className="storyImage" style={backgroundImageStyle}></div>
                <p className="storyUserName">{story.userName}</p>
             </div>
       
        )
    })
    return (
        <div className="Story">
           {stories}
        </div>
    )
}