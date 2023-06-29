import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import AvatarPage from './pages/AvatarPage';

function App() {
  return (
    <div className="App"> 
        <ToastContainer />
        <Routes>
          <Route path='/' element={<AvatarPage />} />
        </Routes> 
    </div> 
  );
}

export default App;