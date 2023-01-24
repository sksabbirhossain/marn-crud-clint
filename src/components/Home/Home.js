import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

let i = 0;
const Home = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:5000/all-users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.allUser);
      });
  }, [loading]);

  // delete user
  function deleteUser(id) {
    fetch(`http://localhost:5000/user/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          setLoading(!loading);
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }
  return (
    <div className="container mt-5">
      <Link className="btn btn-success mb-3" to="/add-user">
        {" "}
        Add User
      </Link>
      <table className="table table-striped table-secondary">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{(i = i + 1)}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.number}</td>
              <td>
                <button
                  className="btn btn-sm btn-danger"
                  onClick={() => deleteUser(user._id)}
                >
                  X
                </button>{" "}
                <Link
                  to={`/user/${user._id}`}
                  className="btn btn-sm btn-success"
                >
                  update
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
