import React, { useState } from 'react';

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
    // Здійсніть дії для збереження змінених даних, наприклад, відправлення запиту на сервер
    setEditing(false);
  };

  return (
    <div>
      {editing ? (
        <div>
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
        <div>
          <h2>User Profile</h2>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Address:</strong> {user.address}</p>
          <button onClick={handleEditClick}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
