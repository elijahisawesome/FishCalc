import {useState} from 'react';


export default function Species(props){
    let [sampweight, setSampWeight] = useState(0);

    
    return(
        <div className = "species">
            <form className = 'speciesName'>

                <input className='name'></input>
                <input readOnly={true} className = "genericField"></input>
                <input className = "genericField" onChange ={ (e)=> {setSampWeight(e.target.value)}}></input>
                <span className = "genericField" id="boldNumber" >{sampweight * props.multiplier} </span>
                <input className = "genericField"></input>
                <input className = "genericField"></input>
            </form>
            
        </div>
    )
}
export function Template(){
    return(
    <div id="header">
        <div className='name'>Species Name</div>
        <div className = "genericField">Code</div>
        <div className = "genericField">Sub-Sample Weight</div>
        <div className = "genericField">Disp Code</div>
        <div className = "genericField">D/R</div>
        <div className = "genericField">Est Code</div>
    </div>)
}