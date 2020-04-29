import React from 'react'
import {Message} from "./message/Message";
import {User} from "./user/User";

export const Messages = props => {
    return (
        <div className={"row p-3"}>
            <h2 className={"col-sm-12"}>Dialogs</h2>
            <div className={"col-sm-2 flex-column"} style={{borderRight: '3px solid #343a40'}}>
                <User name={"Vadim"} id={"1"}/>
                <User name={"Lera"} id={"2"}/>
                <User name={"Pitson"} id={"3"}/>
            </div>

            <div className={"col-sm-10"}>
                <Message text={"Hi"}/>
                <Message text={"Hello"}/>
                <Message text={"What"}/>
            </div>
        </div>
    )
}