import React from 'react'
import {MyPosts} from "./myPosts/MyPosts";

export const Profile = props => {
    return (
        <div>
            <div className={"w-auto"} style={{
                backgroundImage:`url('https://s1.1zoom.ru/b5050/297/Canada_Mountains_Scenery_488936_1680x1050.jpg')`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'centre',
                backgroundSize: 'cover',
                height: '30vh'
            }}>
            </div>

            <div className={"col-sm-12"}>
                <div>
                    avatar + descr
                </div>

                <MyPosts/>
            </div>
        </div>
    )
}