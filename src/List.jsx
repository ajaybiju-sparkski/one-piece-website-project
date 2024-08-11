
function List(props){
    const members = [   {key: 1, name: "Monkey D Luffy", bounty: 3000000000},
                        {key: 2, name: "Rononoa Zoro", bounty: 1111000000},
                        {key: 3, name: "Nami", bounty: 366000000}, 
                        {key: 4, name: "God D Ussop", bounty: 500000000},
                        {key: 5, name: "Vinsmoke Sanji", bounty: 1032000000},
                        {key: 6, name: "Tony tony Chopper", bounty: 1000}];

    members.sort((a, b) => b.bounty - a.bounty);

    const listItems = members.map(members => <li key = {members.id}><b>{members.name}</b> :&nbsp; {members.bounty}</li>)
    return(
       <div>
        <h2 className = "Lheading">List of StrawHat pirates</h2>
        <ul className = "list-members">{listItems}</ul>
       </div>
    );
}
export default List