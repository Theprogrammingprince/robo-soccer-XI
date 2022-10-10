import React from "react";
import Card from "./Card";

const CardList = ({Players}) =>{
    return(
        <div>
            {
                Players.map((user, i) => {
                return (
                <Card 
                key={i} 
                id={Players[i].id} 
                name={Players[i].name} 
                username={Players[i].username}
                email={Players[i].email}
                />
                );
            })
        }
        </div>
        );
}
export default CardList;