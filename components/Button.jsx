export default function Button(props){
        const calc=()=>{
          props.sr(props.w/(props.h*props.h))
        }
    return (
        <>
            <button onClick={calc}>Calculate</button>
        </>
    )
}
