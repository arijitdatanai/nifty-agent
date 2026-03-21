import './App.css';
import { useState } from "react";

const App = () => {

    const [dataFlask, setDataFlask] = useState("");
    const [question, setQuestion] = useState("");
    
    const handleChangeQuestion = (event) => {
      setQuestion(event.target.value);
    }

    const handleSubmissionQuestion = () => {
   
        fetch(
            'http://127.0.0.1:5001/nifty_agent',
            {
                method: 'POST',
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify({ "question": question }),
            }
        )
          .then((response) => response.json())
          .then((dataFlask) => {
              setDataFlask(dataFlask);
            })
          .catch((error) => {
              console.error('Error:', error);
          });

  };

    return (
      <div className="content">
          <h1>Nifty Agent</h1>
          <p></p>
      <div className="content">
        <label><b>Ask Here: </b></label>
        <p></p>
        <label>
          <textarea 
            value={question}
            onChange={handleChangeQuestion}
            rows={5} cols={60} />
        </label>
        </div>
        <p></p>
        <button onClick={handleSubmissionQuestion}>Submit</button>
        <p></p>
        <p><b>{dataFlask["value"]}</b></p>
      </div>)
};

export default App;
