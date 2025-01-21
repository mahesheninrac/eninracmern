import axios from "axios";
import React, { useState } from "react";

function RegisterPage() {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    photo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    setNewUser({ ...newUser, photo: file });
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", newUser.name);
    formData.set("email", newUser.email);
    formData.set("photo", newUser.photo);
    console.log(formData);
    await axios.post("http://localhost:5000/api/users/adduser", formData);
  };

  return (
    <div>
      <div className="card">
        <div className="card-header"></div>
        <div className="card-body">
          <form className="form" onSubmit={formSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newUser.name}
                onChange={handleChange}
                placeholder="Enter name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="email"
                value={newUser.email}
                onChange={handleChange}
                placeholder="Enter email"
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">upload photo:</label>
              <input
                type="file"
                name="photo"
                className="form-control"
                id="photo"
                onChange={handlePhoto}
                placeholder="Upload file"
              />
            </div>
            <div className="form-group">
              <button className="btn btn-submit" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
