import React, { useState } from "react";
import axios from "axios";
const Adduser = () => {
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
    return <Adduser />;
  }

  return (
    <div className="ml-48 px-8  pt-28">
      <div className="  ">
        <h2 className="text-center text-2xl font-semibold mb-6">
          Add New User
        </h2>
        <div className=" ">
          <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
            <form className="px-20">
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <td>
                      <label
                        htmlFor="username"
                        className="block text-sm font-medium text-gray-700"
                      >
                        User Name:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="username"
                        name="username"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter Your user Name"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="fullname"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Full Name:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="fullname"
                        name="fullname"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter Your Full Name"
                        onChange={(e) => changeUserFieldHandler(e)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email:
                      </label>
                    </td>
                    <td>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter email"
                        onChange={(e) => changeUserFieldHandler(e)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="numder"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Number:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="numder"
                        name="numder"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter number"
                        onChange={(e) => changeUserFieldHandler(e)}
                        required
                      />
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label
                        htmlFor="address"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Address:
                      </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                        placeholder="Enter address"
                        onChange={(e) => changeUserFieldHandler(e)}
                        required
                      />
                    </td>
                  </tr>
                </thead>
              </table>

              <button
                type="submit"
                className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50"
                onClick={(e) => onSubmitChange(e)}
              >
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adduser;
