function UserCard ({user}){
  return(
    <div className="py-3 border mb-2">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  )
}

export default UserCard;