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
                club={Players[i].club}
                position={Players[i].position}
                />
                );
            })
        }
        </div>
        );
}
export default CardList;