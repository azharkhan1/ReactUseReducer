import React , {useState} from 'react';
import Button from '../UI/button'
import UserList from './UsersList';
export default function AddUser(){
    const [enteredUserName , setEnteredUsername] =  useState('')
    const [age , setUserAge] = useState('');
    var [users , setUsersInfo ]  = useState([
        {
        userName : 'Azhar',
        age : 123,
    },
    {
        userName : 'Khan',
        age : 123,
    }
]); 


    const addUserHandler = (event)=>{
        event.preventDefault();
        if (enteredUserName.length === 0 || age.length === 0 ) {
            return;
        }
        console.log(enteredUserName.length)
       setUsersInfo(prevValue => [...prevValue , {userName : enteredUserName , userAge : age}])
        setEnteredUsername('')
        setUserAge('')
    }
    const setNameChangeHandler = event =>  {
        setEnteredUsername(event.target.value);
    }
    const AgeChangeHandlder = event =>  {
        setUserAge(event.target.value);
    }

    const deleteUser = index => {
        console.log('delete user running')
        console.log(users[index])
        // var prevUsers = [...users];
        // prevUsers.splice(index , 1);
        // setUsersInfo(prevUsers);
        setUsersInfo((prevValue)=>{
           prevValue = [...prevValue];
           prevValue.splice(index , 1 );
           return prevValue;
        })
    }

    return (
        <div>
            <form onSubmit={addUserHandler}>
                <label htmlFor='username' >UserName</label>
                <input  id='username'
                value={enteredUserName}
                onChange={setNameChangeHandler}
                type='text'
                />
                <label htmlFor='age'>Age</label>
                <input id='age'
                value={age}
                type='number'
                onChange={AgeChangeHandlder}
                />
                <Button type='submit'>Add User</Button>
            </form>
            <UserList users={users} delete={deleteUser}/>
        </div>
    )
}