import React, { useState, useEffect } from "react";
import Definition from "./Definition";

const App = () => {
  const [word, setWord] = useState();
  const [mean, setMean] = useState([]);
  const [main, setMain] = useState([]);
  
  
  const dataApi = async () => {
    const data = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const dataJ = await data.json();
    setMean(dataJ);
    console.log(dataJ);
    setMain(dataJ[0]);
    console.log(dataJ[0]);
  };


  useEffect(() => {
    dataApi();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const Search = () => {
    dataApi();
    setWord("");
  };
  
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 text-center fw-bold fs-1 p-3 bg-primary text-white">
            POCKET DICTIONARY 📕
          </div>
          <div className="form-floating bg-primary py-3 pb-5 d-flex justify-content-center">
            <input
              type="text"
              className="form-control-sm border-0 px-2 col-md-3 col-sm-4"
              placeholder="Type your word"
              id="floatingInput"
              value={word}
              onChange={(e) => setWord(e.target.value)}

             />
            <button
              className="btn btn-dark text-light col-md-1 col-sm-2 mx-2"
              onClick={Search}
              
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {word === "" ? (
        <Definition mean={mean} main={main} />
      ) : (
        <div className="fs-1 text-capitalize text-center fw-bold text-decoration-underline text-white bg-dark extra">
          type a word in the box
        </div>
      )}
    </>
  );
};
  
export default App;



