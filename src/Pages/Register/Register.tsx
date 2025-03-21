import React, { useState } from 'react';
import { Toaster, toast } from 'sonner';
import { Navigate } from 'react-router-dom';
import { useRegisterUserMutation } from './RegisterAPI';

interface RegisterData {
  full_name: string;
  email: string;
  role: 'admin' | 'user';
  address: string;
  password: string;
  contact_phone: number;
}

function Register () {
  const [formData, setFormData] = useState<RegisterData>({
    full_name: '',
    email: '',
    role: 'user',
    password: '',
    address: '',
    contact_phone: 0,
  });

  const [isRegistered, setIsRegistered] = useState(false);
  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === 'contact_phone' ? parseInt(value) : value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const errors: string[] = [];

    if (formData.full_name.trim() === '') {
      errors.push('Full Name is required.');
    }
    if (!isValidEmail(formData.email)) {
      errors.push('Invalid email address.');
    }
    if (!['admin', 'user'].includes(formData.role)) {
      errors.push('Role must be either "admin" or "user".');
    }
    if (formData.password.trim() === '') {
      errors.push('Password is required.');
    }

    if (errors.length > 0) {
      toast.error(errors.join(' '), {
        position: 'top-right',
      });
      return;
    }

    try {
      await registerUser(formData).unwrap();
      toast.success('Registration successful', {
        position: 'top-right',
      });
      setIsRegistered(true);
    } catch (error) {
      toast.error('Registration failed', {
        position: 'top-right',
      });
      console.error('Registration failed:', error);
    }
  };
 //login vavigation
  if (isRegistered) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="bg-white max-w-md mx-auto mt-10 p-6 border border-gray-300 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-6 text-center">Register</h1>
        <form onSubmit={handleSubmit}>
          <label className="block mb-4">
            <span className="text-gray-700">Full Name:</span>
            <input
              type="text"
              name="full_name"
              value={formData.full_name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Email:</span>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Address:</span>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Contact:</span>
            <input
              type="number"
              name="contact_phone"
              value={formData.contact_phone}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Role:</span>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </label>
          <label className="block mb-4">
            <span className="text-gray-700">Password:</span>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-bold rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={isLoading}
          >
            {isLoading ? 'Registering...' : 'Register'}
          </button>
        </form>
      </div>
      <Toaster />
    </>
  );
}

export default Register;
