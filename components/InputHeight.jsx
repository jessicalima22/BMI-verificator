export default function InputHeight(props){
    return (
        <>
            <label name="inputHeight">Type your height:</label>
            <input name="inputHeight" type="number" value={props.h} 
            onChange={(e)=>{props.sh(e.target.value)}}></input>
        </>
    )
}
