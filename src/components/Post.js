import React from "react"

import '../css/Post.css'

import PostData from '../PostData.js'

export default function Post() {

    const [loveCounters, setLoveCounters] = React.useState(PostData.map(() => false));
    // const [likes, setLikes] = React.useState(PostData[0].likes);

    function LoveCounter(index) {
        // console.log(index)
        setLoveCounters(prevCounters => {
            const newCounters = [...prevCounters];
            newCounters[index] = !newCounters[index];
            return newCounters;
        });
    }

    const Posts = PostData.map((item, index) => {
        const backgroundHeroImageStyle = {
            backgroundImage: `url(${item.hero})`,
        };

        const backgroundPostProfileImageStyle = {
            backgroundImage: `url(${item.profileImg})`,
        };

        return (
            <div className="postItem" key={index}>
                <div className="postNav">
                    <div className="postUserProfile" style={backgroundPostProfileImageStyle}>
                    </div>
                    <div className="postNavContent">
                        <span className="postUserName">{item.userName}</span>
                        {
                            item.verified &&
                            <span className="verified"><img src="./images/icon/verified.png" alt="verified" /></span>
                        }
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
                    <div className="heroPost" style={backgroundHeroImageStyle}>
                    </div>
                </div>
                <div>
                    <div className="postFoot">
                        <div>
                            <span className="postFootIconLeft" onClick={() => LoveCounter(index)}>{
                                loveCounters[index] ?  <i class="fa-solid fa-heart fa-xl" style={{color: "#ff3040"}}></i> : <i class="fa-regular fa-heart fa-xl"></i>}</span>
                            <span className="postFootIconLeft"><i class="fa-regular fa-comment fa-flip-horizontal fa-xl"></i></span>
                            <span className="postFootIconLeft"><i class="fa-regular fa-paper-plane fa-xl"></i></span>
                        </div>
                        <div>
                            <span className="postFootIconRight"><i class="fa-regular fa-bookmark fa-xl"></i></span>
                        </div>
                    </div>
                    <div className="postFootContent">
                        <span className="likesCounter">{item.likes} likes</span>
                        <span className="caption">
                            <span id="postUserName">{item.userName + " "} </span>{item.caption}
                        </span>
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