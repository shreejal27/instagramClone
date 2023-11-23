import React from "react"

import '../css/Post.css'

import PostData from '../PostData.js'

export default function Post() {

    const Posts = PostData.map((item, index) => {
        const backgroundImageStyle = {
            backgroundImage: `url(${item.profileImg})`,
        };

        return (
            <div className="postItem" key={index}>
                <div className="postNav">
                    <div className="postUserProfile" style={backgroundImageStyle}>
                    </div>
                    <div className="postNavContent">
                        <span className="postUserName">{item.userName}</span>
                        <span></span>
                        <span className="userNameDot">.</span>
                        <span className="postTime">{item.time}</span>
                    </div>
                    <div className="postThreeDots">
                        <span className="postDot">.</span>
                        <span className="postDot">.</span>
                        <span className="postDot">.</span>
                    </div>
                </div>
                <div className="hero">
                    <div className="heroPost" style={backgroundImageStyle}>
                    </div>
                </div>
                <div>
                    <div className="postFoot">
                        <div>
                            <span className="postFootIconLeft"><i class="fa-regular fa-heart fa-xl"></i></span>
                            <span className="postFootIconLeft"><i class="fa-regular fa-comment fa-flip-horizontal fa-xl"></i></span>
                            <span className="postFootIconLeft"><i class="fa-regular fa-paper-plane fa-xl"></i></span>
                        </div>
                        <div>
                            <span className="postFootIconRight"><i class="fa-regular fa-bookmark fa-xl"></i></span>
                        </div>
                    </div>
                    <div className="postFootContent">
                        <span className="likesCounter">{item.likes} likes</span>
                        <span>
                            <span id="postUserName">{item.userName + " "} </span>{item.caption}</span>
                        <span id="postComments">View all {item.comments} comments</span>
                        <span >Add a comment...</span>
                    </div>
                </div>

            </div>
        )
    })

    return (
        <div className="Post">
            {Posts}
        </div>
    )
}