import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import Axios from 'axios';

const UserTable = () => {
  const [data, setData] = useState([]);
  const url = "https://dummyjson.com/users";
  useEffect(() => {
    Axios.get(url)
    .then((res)=>{
        if(res.status===200){
            setData(res.data.users)
        }else{
            Promise.reject();
        }
    })
    .catch((err)=>{alert(err)});
  }, []);

  console.log(data);
  const renderTable = ()=> {
    return data.map(user =>{
        return (
            <tr>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.age}</td>
                <td>{user.gender}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.username}</td>
                <td>{user.birthDate}</td>
                <td>{user.image}</td>
                <td>{user.height}</td>
                <td>{user.weight}</td>
                <td>{user.address.city}</td>
                <td>{user.bank.cardType}</td>
                <td>{user.company.name}</td>
            </tr>
        )
    })
  }
  
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Username</th>
          <th>BirthDate</th>
          <th>Image</th>
          <th>Height</th>
          <th>Weight</th>
          <th>Address City</th>
          <th>Bank</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {renderTable()}
    </tbody>
    </Table>
  );
};

export default UserTable;
