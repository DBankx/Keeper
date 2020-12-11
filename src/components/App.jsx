import React from "react";
import Card from "./Card";
import notes from "./notes";

function App(){
    return <div className="wrapper">
        {notes.map((note)=>{
            return <Card key={note.id} heading={note.heading} body={note.body}/>
        })}
    </div>
}

export default App;