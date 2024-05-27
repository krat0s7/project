import React, { useState } from 'react';
import './UserProfile.css'; 

const UserProfile = ({ user }) => {
  const [editing, setEditing] = useState(true);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    address: user.address
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    setEditing(false);
  };

  const handleOrderHistoryClick = () => {
    alert("Перенаправлення на сторінку «Історія замовлень»");
  };

  const handleMyReviewsClick = () => {
    alert("Перенаправлення на сторінку Мої відгуки");
  };

  const handleChangePasswordClick = () => {
    alert("Відкривається модальна зміна пароля");
  };

  return (
    <div className="user-profile-container">
      {editing ? (
        <div className="edit-profile-form">
          <h2>Редагувати профіль</h2>
          <form>
            <label>Ім'я:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Електронна пошта:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            <label>Адреса:</label>
            <textarea name="address" value={formData.address} onChange={handleInputChange} />
          </form>
          <button onClick={handleSaveClick}>Зберегти</button>
        </div>
      ) : (
        <div className="user-profile-info">
          <h2>Профіль користувача</h2>
          <p><strong>Ім'я:</strong> {user.name}</p>
          <p><strong>Електронна пошта:</strong> {user.email}</p>
          <p><strong>Адреса:</strong> {user.address}</p>
          <button onClick={handleEditClick}>Редагувати</button>
        </div>
      )}

      <div className="user-actions">
        <h3>Дії користувача</h3>
        <ul>
          <li><button onClick={handleOrderHistoryClick}>Історія Замовлень</button></li>
          <li><button onClick={handleMyReviewsClick}>Мої відгуки</button></li>
          <li><button onClick={handleChangePasswordClick}>Змінити пароль</button></li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;