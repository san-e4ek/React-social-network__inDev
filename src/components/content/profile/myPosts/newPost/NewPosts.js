import React from 'react'

export const NewPost = props => {
    return (
        <div>
            <form>
                <div className="form-group">
                    <label>Ваш комментарий</label>
                    <textarea className="form-control" name={"message"}></textarea>
                </div>
                <button className={"btn btn-info"} type={"submit"}>Отправить</button>
            </form>
        </div>
    )
}