export default function InputWeight(props){
    return (
        <>
            <label name="inputWeight">Type your weight:</label>
            <input name="inputWeight" type="number" value={props.w} 
            onChange={(e)=>{props.sw(e.target.value)}}></input>
        </>
    )
}
