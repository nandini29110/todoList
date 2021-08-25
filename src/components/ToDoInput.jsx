import { placeholder } from "@babel/types";
import React,{useState} from "react";

const ToDoInput = () => {
    const [items, setItems] = useState([]);
    const [text, setText] = useState("");   
    return(
        <>
        <input
        type="text"
        placeholder="Add ToDO here ... "
        onChange={(event)=>{setText(event.target.value)}}
        value={text}
     />
      <button
        onClick={() => {
          setItems( (items) => items.concat(text));
          setText("");
        }}
      >+</button>
    
     {
         items.map((item)=>{
          return(
              <li>{item}</li>
          );
        })
     }
     
     </>
    );
    
}


export default ToDoInput ;