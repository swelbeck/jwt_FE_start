import './App.css';
import { Routes, Route } from 'react-router-dom';
import AuthPage from './pages/auth/Index';
import Dashboard from './pages/dashboard/Index';
import Navbar from './components/navbar/Index';

function App() {
  return (
    <>
      <Navbar />
      <h2>My App</h2>
      <Routes>
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/dashboard' element={<Dashboard />} />

      </Routes>
    </>
  );
}

export default App;
