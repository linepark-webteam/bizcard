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
    <div className="container mt-5">
      <h2 className="mb-4">新規会員登録</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">ユーザー名:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            className="form-control"
          />
          {errors.username && <div className="text-danger">{errors.username}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">メールアドレス:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="form-control"
          />
          {errors.email && <div className="text-danger">{errors.email}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">パスワード:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="form-control"
          />
          {errors.password && <div className="text-danger">{errors.password}</div>}
        </div>
        <button type="submit" className="btn btn-primary">会員登録</button>
      </form>
    </div>
  );
}

export default Signup;
