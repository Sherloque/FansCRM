import React from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const UserProfile: React.FC = () => {
  const { user, logout, isAuthenticated } = useUser();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/login');
  };

  if (!isAuthenticated) {
    return (
      <>
        <p>Please log in to view your profile.</p>
        <button onClick={handleButtonClick}>Login</button>
      </>
    );
  }

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
