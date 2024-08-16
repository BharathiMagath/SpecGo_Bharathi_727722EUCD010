import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import UsersManagement from '../Admin/UsersManagement';
import ProductManagement from '../Admin/ProductManagement';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [flashMessage, setFlashMessage] = useState('');
  const [totalUsers, setTotalUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    fetchUserCounts();
  }, []);

  const fetchUserCounts = async () => {
    try {
      const response = await axios.get('http://localhost:8080/getuser');
      const users = response.data;
      setTotalUsers(users.length);
      setActiveUsers(users.filter(user => user.isActive).length); // Assuming each user has an isActive field
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  };

  const handleLogout = () => {
    alert('Logged out successfully!');
    navigate('/');
  };

  return (
    <div className="admin-dashboard">
      <nav className="admin-navbar">
        <div className="admin-navbar-left">
          <div className="admin-logo">SpecGo</div>
        </div>
        <div className="admin-navbar-right">
          <button className="admin-icon" onClick={() => navigate('/')}>Home</button>
          <button className="admin-icon" onClick={handleLogout}>Logout</button>
        </div>
      </nav>

      <div className="admin-main">
        <div className="admin-sidebar">
          <button
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button
            className={activeTab === 'products' ? 'active' : ''}
            onClick={() => setActiveTab('products')}
          >
            Products
          </button>
        </div>

        <div className="admin-content">
          {flashMessage && <div className="flash-message">{flashMessage}</div>}
          {activeTab === 'dashboard' && (
            <div className="dashboard-stats">
              <div className="stat-item">
                <span>👥</span>
                <h3>Total Users</h3>
                <p>{totalUsers}</p>
              </div>
              <div className="stat-item">
                <span>🔔</span>
                <h3>Active Users</h3>
                <p>{activeUsers}</p>
              </div>
              <div className="stat-item">
                <span>📦</span>
                <h3>Total Products</h3>
                <p>150</p>
              </div>
              <div className="stat-item">
                <span>🛒</span>
                <h3>Products Sold</h3>
                <p>0</p>
              </div>
              <div className="stat-item">
                <span>💰</span>
                <h3>Revenue</h3>
                <p>₹0.00</p>
              </div>
            </div>
          )}
          {activeTab === 'users' && <UsersManagement setFlashMessage={setFlashMessage} />}
          {activeTab === 'products' && <ProductManagement setFlashMessage={setFlashMessage} />}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;