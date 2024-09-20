import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const AdminPanel = () => {
  const [user] = useAuthState(auth);

  if (user && user.role === 'admin') {
    return <div>Bienvenue dans le panneau d'administration</div>;
  } else {
    return <div>Accès interdit</div>;
  }
};

export default AdminPanel;
