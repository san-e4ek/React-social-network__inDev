import React from 'react'

export const Post = props => {
    return (
        <div className={"col-sm-12 mt-4"}>
            <div className="media">
                <img className={"align-self-center mr-3 rounded-circle"} style={{width: 65}}
                     src="https://www.meme-arsenal.com/memes/a9db27eca07ebf9ce4d20f120d94eaf7.jpg"/>
                <div className="media-body">
                    <h5 className="mt-0">Pitson</h5>
                    <div>{props.massage}</div>
                    <div>Like: {props.likesCount}</div>
                </div>
            </div>
        </div>


    )
}