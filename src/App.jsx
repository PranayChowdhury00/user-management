import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const App = () => {
  const loaderUser = useLoaderData();
  const [users, setUsers] = useState(loaderUser);

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/user/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "User has been deleted successfully.",
                icon: "success",
              });
              // Filter out the deleted user from the state
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
            }
          })
          .catch((error) => console.error("Error deleting user:", error));
      }
    });
  };

  return (
    <div>
      <h1 className="text-2xl mt-5 mb-8">All Users: {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* Table Head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Created At</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body */}
          <tbody>
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.createdAt}</td>
                <td>
                  <button className="btn btn-primary mr-2">View</button>
                  <button className="btn btn-secondary mr-2">Edit</button>
                  <button
                    onClick={() => handelDelete(user._id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;
