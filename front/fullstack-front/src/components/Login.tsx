import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
  const { login } = useUser();
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username);
    navigate('/user');
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter username"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
