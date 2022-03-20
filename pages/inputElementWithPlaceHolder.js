import React, { useState } from "react";

const InputElement = () => {
  const [inputText, setInputText] = useState("");
  const [historyList, setHistoryList] = useState([]);

  return (<div>
        <input onChange={(e) => {
          setInputText(e.target.value);
          setHistoryList([...historyList, e.target.value]);
        }}
        placeholder="this is a placeholder" />
        <p>{inputText}</p>
        <hr/><br/>
        <ul>
        {historyList.map((item) => { return <div key="">{item}</div>;})}
        </ul>
  
          </div>
  );
};

export default InputElement;