import React , {useReducer} from 'react'
import './App.css';
import AddUser from './components/Users/AddUser';


const credentialsValidtaor = (state , action)=>{
  if (action.type === 'PASSWORD'){
    console.log('it is password');
    return {value : action.payload }
  }
  if (action.type==='EMAIL'){
    console.log('its email')
  }
}


function App(props) {
 
  const [email , setEmail ] = React.useState();
  const [password , setPassword ] = React.useState();
  const [credentials , dispatchCredentials ] = useReducer(credentialsValidtaor);

  const emailChangeHandler = (event) =>{
    dispatchCredentials({
      type : 'EMAIL',
      payload : event.target.value
    })
    setEmail(event.target.value)
  }

  const passwordChangeHandler = (event) =>{
    dispatchCredentials({
      type : 'PASSWORD',
      payload : event.target.value
    })
    setPassword(event.target.value);
  }

  
    return (
      <div className="App">
        <input placeholder='email' onChange={emailChangeHandler}
      
        />
        <input placeholder='password' onChange={passwordChangeHandler}

        />
        <button>Validate</button>

    </div>
  );
}

export default App;
