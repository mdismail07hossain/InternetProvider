import axios from "axios";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const View = () => {
  const { id } = useParams();
  // console.log(id);
  const [user, setUser] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUser();
  }, [id]);

  const fetchUser = async () => {
    try {
      const result = await axios.get("http://127.0.0.1:8000/api/users/" + id);
      console.log(result.data.user);
      setUser(result.data.user);
    } catch (err) {
      console.log("Something Wrong");
    }
  };

  const clickToBackHandler = () => {
    navigate("/");
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1>User Details</h1>
            <table className="table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>User Name</th>
                  <th>Full Name</th>
                  <th>Email</th>
                  <th>Number</th>
                  <th>Address</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{user.id}</td>
                  <td>{user.username}</td>
                  <td>{user.fullname}</td>
                  <td>{user.email}</td>
                  <td>{user.numder}</td>
                  <td>{user.address}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="container d-flex justify-content-center">
        <div>
          <button className="btn btn-primary" onClick={clickToBackHandler}>
            Back To Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default View;
