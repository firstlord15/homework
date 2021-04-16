import React from 'react';

const App = () => {
  const rightma = "margin-right:"
  const leftma = "margin-left:"
  const upma = "margin-top:"
  const downma = "margin-bottom:"
  const end = ";"
  const [right, setRight] = useState("")
  const [up, setUp] = useState("")
  const [down, setDown] = useState("")
  const [left, setLeft] = useState("")

  return (
    <div className="container">
      <div>
          <button onClick = {()=>setRight()} className="button">right</button>
          <button onClick = {()=>setUp("10px")} className="button">up</button>
          <button onClick = {()=>setDown("10px")} className="button">down</div>
          <button onClick = {()=>setLeft("10px")} className="button">left</div>
      </div>
      <div>
        <div style={right} className="box">

        </div>
      </div>
    </div>
  );
};

export default App;