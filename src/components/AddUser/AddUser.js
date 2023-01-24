import React from "react";
import Button from "../Button/Button";
import FormInput from "../FomInput/FormInput";
import Form from "../Form/Form";

const AddUser = () => {
  function addUser(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const number = e.target.number.value;
    const data = {
      name,
      email,
      number,
    };
    fetch("http://localhost:5000/add-user", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("add user success");
        e.target.reset();
        console.log(data);
      });
  }
  return (
    <div className="mt-5 w-100  d-flex  justify-content-center">
      <Form onSubmit={addUser}>
        <FormInput label="User Name" type="text" name="name" />
        <FormInput label="Email Address" type="email" name="email" />
        <FormInput label="Phone Number" type="number" name="number" />
        <Button btnName="Add User" className="btn-success w-100" />
      </Form>
    </div>
  );
};

export default AddUser;
