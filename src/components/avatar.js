import React from "react";

export default class NotesList extends React.Component {
  
  render() {
    
    return <div>
        <img src={"/avtar1.png"} alt="boohoo" className="avatar" />
        <p>Apple</p>
        <img src={"/avtar2.png"} alt="boohoo" className="avatar" />
        <p>Google</p>
        
      </div>;
  }
}
