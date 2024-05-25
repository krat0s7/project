import React, { useState } from 'react';
import './UserProfile.css'; 

const UserProfile = ({ user }) => {
  const [editing, setEditing] = useState(false);
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
    alert("Redirecting to Order History page");
  };

  const handleMyReviewsClick = () => {
    alert("Redirecting to My Reviews page");
  };

  const handleChangePasswordClick = () => {
    alert("Opening Change Password modal");
  };

  return (
    <div className="user-profile-container">
      {editing ? (
        <div className="edit-profile-form">
          <h2>Edit Profile</h2>
          <form>
            <label>Name:</label>
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleInputChange} />
            <label>Address:</label>
            <textarea name="address" value={formData.address} onChange={handleInputChange} />
          </form>
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="user-profile-info">
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}

      <div className="user-actions">
        <h3>User Actions</h3>
        <ul>
          <li><button onClick={handleOrderHistoryClick}>Order History</button></li>
          <li><button onClick={handleMyReviewsClick}>My Reviews</button></li>
          <li><button onClick={handleChangePasswordClick}>Change Password</button></li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfile;