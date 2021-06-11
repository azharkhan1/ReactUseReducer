


const UserList = props => {
  
    return <ul>
        {props.users.map((value,index)=>{
        return <div key={index}> <li >{value.userName}</li> <button onClick={()=> props.delete(index)}>Delete user</button> </div>
        })}
    </ul>
}

export default UserList