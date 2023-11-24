import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let tempErrors = {};
    if (!formData.username) {
      tempErrors.username = 'Username is required';
    }
    if (!formData.email) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Email is invalid';
    }
    if (!formData.password) {
      tempErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters long';
    }
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', formData);
      // ここでバックエンドにデータを送信する処理を追加する
    }
  };

  return (
<div className="container">
  <h2 className="text-center">Sign Up</h2>
  <form>
    <div className="form-group">
      <label>Username</label>
      <input type="text" className="form-control" placeholder="Enter username" />
    </div>
    <div className="form-group">
      <label>Email address</label>
      <input type="email" className="form-control" placeholder="Enter email" />
    </div>
    <div className="form-group">
      <label>Password</label>
      <input type="password" className="form-control" placeholder="Password" />
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
  </form>
</div>

  );
}

export default Signup;
