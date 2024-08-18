import React, {useState} from "react";
import './UserCard.css'


function UserCard (props) {

  const {index, userInfo, expandMe, expanded} = props
  

  return (
    <div id="main">
      {/* <p>{index}</p> */}
      <p id="name" onClick={expandMe}>{userInfo.name.first} {userInfo.name.last}</p>
      <p>{expanded ? <p>Phone #: {userInfo.cell}</p> : null}</p>
      <p>{expanded ? <p>Age: {userInfo.dob.age}</p> : null}</p>
      <p>{expanded ? <p>BirthDay: {userInfo.dob.date.slice(0,10)}</p> : null}</p>
      <p>{expanded ? <p>City: {userInfo.location.city}</p> : null}</p>
      <p>{expanded ? <p>Country: {userInfo.location.country}</p> : null}</p>

    </div>


  )
}

export default UserCard