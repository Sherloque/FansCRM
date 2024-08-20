import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const User: React.FC = () => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  if (!user || !user.isLoggedIn) {
    return <p>Please log in first.</p>;
  }

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h1>User Page</h1>
      <p>Welcome, {user.username}!</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default User;
