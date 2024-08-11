
function Pirate(props){
    return(
        <div className = "pirate">
            <p>Name = {props.name}</p>
            <p>Age = {props.age}</p>
            <p>Pirate = {props.isPirate ? "Yes" : "No"}</p>
        </div>
    )
};

export default Pirate