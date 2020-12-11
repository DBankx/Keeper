import React from "react";

function Card(prop){
    return <div className="card">
        <div className="card-header">
            <h1 className="work">{prop.heading}</h1>
        </div>
        <div className="card-body">
            <p>{prop.body}</p>
        </div>
    </div>
}

export default Card