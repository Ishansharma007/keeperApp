import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";

function createNote(note){
   
}

function App() {
    
    return (
        <div>
            <Header />
            <div className="flex-container">
            {notes.map((note) => 
                    <Note 
                        key={note.id}
                        name={note.name}
                        content={note.content}
                    />
            )}
            <Footer />
            </div>
        </div>
    ); 
}

export default App ;

