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
                        <span>{item.userName}</span>
                        <span>tick</span>
                        <span>.</span>
                        <span>{item.time}</span>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-ellipsis-h"></i></span>
                    </div>
                </div>
                <div className="hero">
                <div className="heroPost" style={backgroundImageStyle}>
                    </div>
                </div>
                <div >
                    <div className="postFoot">
                        <div>
                            <span><i class="fa-regular fa-heart fa-xl"></i></span>
                            <span><i class="fa-regular fa-comment fa-flip-horizontal fa-xl"></i></span>
                            <span><i class="fa-regular fa-paper-plane fa-xl"></i></span>
                        </div>
                        <div>
                            <span><i class="fa-regular fa-bookmark fa-xl"></i></span>
                        </div>
                    </div>
                    <div className="postFootContent">
                        <p>{item.likes} likes</p>
                        <div>
                            <span>{item.userName + " "}</span>
                            <span>{item.caption}</span>
                        </div>
                        <p>View all {item.comments} comments</p>
                        <p>
                            Add a comment...
                        </p>
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