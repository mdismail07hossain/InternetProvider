import React, { useState } from "react";
import List from "./List";
import axios from "axios";

const Home = () => {
  const [userField, setUserField] = useState({
    username: "",
    fullname: "",
    email: "",
    numder: "",
    address: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
    // console.log(userField);
  };
  const [loading, setLoading] = useState();

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      const responce = await axios.post(
        "http://127.0.0.1:8000/api/addnew",
        userField
      );
      console.log(responce);
      setLoading(true);
    } catch (err) {
      console.log("Something Wrong");
    }
  };
  if (loading) {
    return <Home />;
  }

  return (
    <div className="container">
      <h2 className="w-100 d-flex justify-content-center p-3">
        React JS Laravel 11 REST API CRUD (Create, Read, Update and Delete) |
        Axios Mysql
      </h2>
      <div className="row">
        <div className="col-md-4">
          <h3>Add New User</h3>
          <form>
            <div className="mb-3 mt-3">
              <label className="form-label"> User Name:</label>
              <input
                type="text"
                className="form-control"
                id="username"
                placeholder="Enter Your user Name"
                name="username"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label"> Full Name:</label>
              <input
                type="text"
                className="form-control"
                id="fullname"
                placeholder="Enter Your Full Name"
                name="fullname"
                onChange={(e) => changeUserFieldHandler(e)}
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
            </div>

            <div className="mb-3 mt-3">
              <label className="form-label">Number:</label>
              <input
                type="text"
                className="form-control"
                id="numder"
                placeholder="Enter number"
                name="numder"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
            </div>
            <div className="mb-3 mt-3">
              <label className="form-label">Address:</label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter number"
                name="address"
                onChange={(e) => changeUserFieldHandler(e)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onClick={(e) => onSubmitChange(e)}
            >
              Add User
            </button>
          </form>
        </div>
        <div className="col-md-10">
          <List />
        </div>
      </div>
    </div>
  );
};

export default Home;
