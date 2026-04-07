import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8000/api/user",
        user
      );

      toast.success("User added successfully", {
        position: "top-right",
      });

      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="addUser">
      <Link to="/" className="btn btn-secondary backBtn">
        Back
      </Link>
      <h3>Add User Form</h3>

      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            onChange={inputHandler}
            placeholder="Enter your name"
          />
        </div>

        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            onChange={inputHandler}
            placeholder="Enter your email"
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            onChange={inputHandler}
            placeholder="Enter your address"
          />
        </div>

        <div className="inputGroup">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
