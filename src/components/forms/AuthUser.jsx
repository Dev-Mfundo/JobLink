import { useState } from 'react';

const AuthUser = () => {
  const [activeForm, setActiveForm] = useState('login');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (activeForm === 'login') {
//login logic
      console.log('Logging in with:', formData);
    } else if (activeForm === 'createAccount') {
//create logic
      console.log('Creating account with:', formData);
    } else if (activeForm === 'forgotPassword') {
// forgot logic
      console.log('Resetting password for:', formData.email);
    }
  };

  const renderForm = () => {
    switch (activeForm) {
      case 'login':
        return (
          <>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Login</button>
            </form>
            <p className='bottomForm'>
              <button onClick={() => setActiveForm('forgotPassword')}>Forgot Password?</button> |{' '}
              <button onClick={() => setActiveForm('createAccount')}>Create Account</button>
            </p>
          </>
        );
      case 'createAccount':
        return (
          <>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Create Account</button>
            </form>
            <p>
              <button onClick={() => setActiveForm('login')}>Already have an account? Login</button>
            </p>
          </>
        );
      case 'forgotPassword':
        return (
          <>
            <h2>Forgot Password</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="submit-btn">Reset Password</button>
            </form>
            <p>
              <button onClick={() => setActiveForm('login')}>Back to Login</button>
            </p>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="auth-user">
      {renderForm()}
    </div>
  );
};

export default AuthUser;
