import Species, {Template} from "./Species.js";
import {useState} from "react";
import Sampweight from "./V2VCalc.js"
import './App.css';


function App() {
  let [Multiplier, setMultiplier] = useState(0)
  let speciesList = [];
  let speciesListCount = 20;

  function SetMultiplier(val){
    setMultiplier(val);
  }
  function SampleWeightMultiplier(){
    return(
      <form id="multiplier">
        Multiplier: 
        <input type="text" id = "multiplier" value = {Multiplier} readOnly={true} onChange = {SetMultiplier}></input>
      </form>
    )
  }
  function speciesDuplicator(){
    for(let i = 0; i<speciesListCount; i++){
      speciesList.push(<Species multiplier = {Multiplier}/>)
    }
    return speciesList;
  }


  return (
    <div className="App">
      {SampleWeightMultiplier()}
      {Template()}
      {Template()}
      {speciesDuplicator().map((e)=>{return e})}
      <Sampweight setmultiplier = {SetMultiplier}/>
    </div>
  );
}

export default App;
