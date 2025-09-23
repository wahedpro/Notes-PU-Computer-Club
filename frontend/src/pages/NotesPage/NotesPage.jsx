import { useState } from "react"

const NotesPage = () => {

  const [user, setUsers] = useState([]);

  fetch("https://jsonplaceholder.typicode.com/users")
  .then((res)=>res.json()).then((data)=>setUsers(data));

  return (
    <div>
      <h3>User List:</h3>
      {
        user.map((user)=><UserCard key={user.id} user={user}/>)
      }
    </div>
  )
}


function UserCard ({user}){
  return(
    <div className="py-3 border mb-2">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
}

export default NotesPage