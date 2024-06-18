import { useEffect } from "react";

function App() {
  const padding = '10px';
  const color = 'red';

  useEffect(()=>{
    fetchData()
  },[]);

  const fetchData = () =>{
    console.log('page on load')
  }

  return (
    <div style={{ marginTop: "50px", marginLeft:"50px"}}>
     <input style={{borderColor: color, padding: padding}} />
    </div>
  );
}

export default App;
