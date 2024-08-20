import React from 'react';
import { useUser } from '../context/UserContext';

const UserProfile: React.FC = () => {
  const { user, logout, isAuthenticated } = useUser();

  if (!isAuthenticated) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div>
      <h2>Welcome, {user}!</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default UserProfile;
