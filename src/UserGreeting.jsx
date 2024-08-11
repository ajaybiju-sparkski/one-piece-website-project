
function UserGreeting(props){
    return(props.isLoggedIn ? <h2 className="logged-in">Welcome {props.username}</h2> : 
                                <h2 className="un-logged">Login first</h2>)
}

export default UserGreeting
