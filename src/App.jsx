import React from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "./notes.js"

function createNote(noteCreation){
  return (
    <Note 
	    key={noteCreation.key}
	    title={noteCreation.title}
	    content={noteCreation.content}
    /> 
    );
}

function App() {
    return (
        <div>
            <Header /> 
            <Footer />
            {notes.map(createNote)}
        </div>
        );
}

export default App; 