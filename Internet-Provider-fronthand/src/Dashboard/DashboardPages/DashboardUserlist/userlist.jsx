import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

const Userlist = () => {
  const [userData, setUSerData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const result = await axios("http://127.0.0.1:8000/api/users");
      console.log(result.data.results);
      setUSerData(result.data.results);
    } catch (err) {
      console.log("somthing Wrong");
    }
  };

  const handleDelete = async (id) => {
    console.log(id);
    await axios.delete("http://127.0.0.1:8000/api/userdelete/" + id);
    const newUserData = userData.filter((item) => {
      return item.id !== id;
    });
    setUSerData(newUserData);
  };

  return (
    <div className="ml-48 px-8  pt-32">
      <h3 className="text-center text-bold font-6xl">User Details</h3>
      <table className="table table-bordered pt-20">
        <thead>
          <tr>
            <th>S No.</th>
            <th>User Name</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Number</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {userData.map((user, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{user.username} </td>
                <td>{user.fullname} </td>
                <td>{user.email} </td>
                <td>{user.numder} </td>
                <td>{user.address} </td>
                <td>
                  <NavLink
                    to={`/view/${user.id}`}
                    className="btn bg-green-500 text-gray-100 mx-2"
                  >
                    View
                  </NavLink>
                  <NavLink
                    to={`/edit/${user.id}`}
                    className="btn bg-gray-500 text-gray-100 mx-2"
                  >
                    Edit
                  </NavLink>
                  <button
                    onClick={() => handleDelete(user.id)}
                    className="btn bg-red-500 text-gray-100"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Userlist;
