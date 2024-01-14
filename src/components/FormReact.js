import { useState } from "react";

export function UserForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        placeholder="Enter Name"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <br />
      <label>Email:</label>
      <input
        type="email"
        placeholder="Enter email"
        value={formData.email}
        onChange={handleChange}
      />
      <br />
      <label>Message:</label>
      <textarea
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <br />
      <input type="submit" value="submit" />
    </form>
  );
}
