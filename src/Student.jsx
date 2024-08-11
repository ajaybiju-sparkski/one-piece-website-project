
function Student(props){
    return(
        <div className ="student">
            <p>Name = {props.name}</p>
            <p>Age = {props.age}</p>
            <p>Pirate = {props.isPirate ? "Yes" : "No"}</p>
        </div>
    )
}
export default Student