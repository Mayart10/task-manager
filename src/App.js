import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebaseConfig';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import TaskList from './components/TaskList';
import AdminPanel from './components/AdminPanel';

const App = () => {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/tasks" element={user ? <TaskList /> : <Navigate to="/signin" />} />
        <Route path="/admin" element={user && user.role === 'admin' ? <AdminPanel /> : <Navigate to="/signin" />} />
      </Routes>
    </Router>
  );
};

export default App;
