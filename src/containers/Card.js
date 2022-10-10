import React from "react";

const Card = ({name, username, email, id}) =>{
    return(
        <div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow">
            <img alt="Lionel messi" src={`https://robohash.org/messi${id}?size=200x200`}/>
            <div>
                <h2>{name}</h2>
                <h4>{username}</h4>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card;