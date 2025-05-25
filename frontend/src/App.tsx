import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import UsersPage from './pages/UsersPage';
import AddUserPage from './pages/AddUserPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header className="app-header">
          <Navigation />
        </header>

        <main className="app-main">
          <Routes>
            <Route path="/" element={<UsersPage />} />
            <Route path="/add-user" element={<AddUserPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;