import React from "react";

const Card = ({ name }) => {
    return (
        <div
        style={{
            backgroundColor: "white",
            color:"black",
            width:200,
            height:70,
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:10,
            marginBottom: 10,
        }}
        >
        <div>
        <p>{name}</p>
        </div>
        </div>
    );
};

export default Card;