import React from "react"

import '../css/Post.css'

import PostData from '../PostData.js'

export default function Post() {

    const Posts = PostData.map((item, index)=>{
        return(
            <div className="postItem" key={index}>
                <span><i class={item.icon}></i> </span>
                <p>{item.title}</p>
                <div className="postNav">
                    <span>{item.profileImg} </span>
                    <span>{item.userName}</span>
                    <span>tick</span>
                    <span>.</span>
                    <span>{item.time}</span>
                </div>
                <div className="hero">
                    <h1>{item.hero}</h1>
                </div>
                <div className="postFoot">
                    <div>
                    <span><i class="fa-regular fa-heart fa-xl"></i></span>
                    <span><i class="fa-regular fa-comment fa-flip-horizontal fa-xl"></i></span>
                    <span><i class="fa-regular fa-paper-plane fa-xl"></i></span>
                    <div>
                    <span>{item.likes} likes</span>
                    </div>
                    <div>
                    <span>{item.userName}</span>
                    <span>{item.caption}</span>
                    </div>
                    <div>
                    <span>View all {item.comments} comments</span>
                    </div>
                    <div> 
                        Add a comment...
                        </div>
                    </div>
                    <div>
                    <span><i class="fa-regular fa-bookmark fa-xl"></i></span>
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