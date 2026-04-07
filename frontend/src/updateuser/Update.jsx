import React, { useEffect, useState } from "react";
import "./update.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate();
    const {id} = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`)
    .then((response) => {
      setUser(response.data);
  })
  .catch((error) => {
    console.log(error);
  },);
},[id]);

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


      <h3>Update User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={user.name}
            onChange={inputHandler}
            placeholder="Enter your name"
          />
        </div>

        <div className="inputGroup">
          <label>Email:</label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={inputHandler}
            placeholder="Enter your email"
          />
        </div>

        <div className="inputGroup">
          <label>Address:</label>
          <input
            type="text"
            id="address"
            value={user.address}
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

export default UpdateUser;

