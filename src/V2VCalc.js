import { useState, useEffect } from "react"


export default function Vol(props){
    let [Depths, setDepths] = useState(0);
    let [penVolume, setPenVolume] = useState(0);
    let [BasketCount, setBasketCount] = useState(0);
    let [ToteCount, setToteCount] = useState(0);
    let depthsInputs = [];
    let alsoDepths = [];
    let [totalVolume, setTotalVolume] = useState(0);
    let [subSampMultiplier, SetSubSampMultiplier] = useState(0);
    for(let i = 0; i<10; i++){
        depthsInputs.push(<input key={i} onChange={calcDepth} className = "genericField1"></input>);
    }
    function calcDepth(){
        let total=0;
        let vals = document.getElementsByClassName('genericField1');
        for(let i =0; i<10;i++){
            alsoDepths[i]=vals[i].value;
        }
        alsoDepths.forEach(val=>{
            if(!!val){
                total+= parseFloat(val);
            }
        })
        total = total/10;
        setDepths(total);
    }
    function setvolume(e){
        setPenVolume(parseFloat(e.target.value).toFixed(2))

    }
    function SetBasketCount(e){
        
        if(!!e.target.value){
            setBasketCount((parseFloat(e.target.value)*1.47).toFixed(2));

        }
    }
    function SetToteCount(e){
        if(!!e.target.value){
            setToteCount((parseFloat(e.target.value)*2.65).toFixed(2));

        }
    }
    function SetTotalVolume(e){
        setTotalVolume((Depths*penVolume).toFixed(2));
        SetSubSampMultiplier((totalVolume/(BasketCount + ToteCount)).toFixed(2));
        
        props.setmultiplier(subSampMultiplier);
    }

    
    return(
        <div id="vol2vol">
            <form>
                {depthsInputs.map(e=>{
                    alsoDepths[e.key]=e.value;
                    return e;
                    })}
                
            </form>

            <form>
                Pen Volume: <input onChange={e=>setvolume(e)}></input>
                <div></div>
                Average Depth: {Depths.toFixed(2)}
                <div></div>
                Total Haul Volume: {totalVolume}
                <div></div>
                Basket Count: <input onChange = {e=>SetBasketCount(e)}></input>
                <div></div>
                Tote Count: <input onChange={e=>SetToteCount(e)}></input>
                <div></div>
                Sample Weight Multiplier: {subSampMultiplier}
                <div><button type="button" onClick = {SetTotalVolume}>Calculate</button></div>
            </form>
        </div>
    )
}