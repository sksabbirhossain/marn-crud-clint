import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../Button/Button";
import FormInput from "../FomInput/FormInput";
import Form from "../Form/Form";

const UpdateUser = () => {
  const [user, setUser] = useState({});
  const { id } = useParams();
  const navigate = useNavigate()
  useEffect(() => {
    fetch(`http://localhost:5000/user/update/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => alert(err.message));
  }, [id]);

  //update a
  const handleUserUpdate = (e) => {
    e.preventDefault();
    const userDetails = {
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
    };
    // update user
    fetch(`http://localhost:5000/user/update/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          alert(data.message);
          navigate("/")
        } else {
          alert(data.message);
        }
      })
      .catch((err) => {
        alert("not update");
        console.log(err);
      });
  };

  return (
    <div className="mt-5 w-100  d-flex  justify-content-center">
      <Form onSubmit={handleUserUpdate}>
        <FormInput
          label="User Name"
          type="text"
          name="name"
          defaultValue={user?.name}
        />
        <FormInput
          label="Email Address"
          type="email"
          name="email"
          defaultValue={user?.email}
        />
        <FormInput
          label="Phone Number"
          type="number"
          name="number"
          defaultValue={user?.number}
        />
        <Button btnName="Update User" className="btn-success w-100" />
      </Form>
    </div>
  );
};

export default UpdateUser;
