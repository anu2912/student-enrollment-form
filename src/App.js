import './App.css';
import Multipleinput from './component/form/multipleinput';
import {useState} from 'react';
import { Student } from './component/student';

function App() {
  const [registeredUsers, setRegisteredUsers] = useState([])
  return (
    <div>
      <Multipleinput setRegisteredUsers={setRegisteredUsers}/> 
      
      {registeredUsers.length!==0 &&
        <h1>Enrolled Student</h1>
        
      }
      {
        registeredUsers.map((user) =>{
          return <Student key={user.email} userData={user} />
        }
        )
      }
    </div>
  );
}

export default App;