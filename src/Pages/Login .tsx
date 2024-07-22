import React, { useState } from 'react';
import { useNavigate , Link} from 'react-router-dom';
import { Toaster,toast } from 'sonner';
import { prodUrl

  
 } from '../utils/utils';
interface FormState {
  email: string;
  password: string;
  
 
}

function Login () {
  const [formState, setFormState] = useState<FormState>({
    email: '',
    password: '',
    

  });

  const [errors, setErrors] = useState<FormState>({
    email: '',
    password: '',
   
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const validate = () => {
    let valid = true;
    let errors = {} as FormState;

    if (!formState.email) {
      valid = false;
      
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      valid = false;
      
      errors.email = 'Email address is invalid';
      
    }

    if (!formState.password) {
      valid = false;
      errors.password = 'Password is required';
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await fetch(`${prodUrl}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formState),
        });
      
        if (response.ok) {
          const data = await response.json();
         
          console.log('Login successful:', data);
          
          navigate('/Userprofile');
          toast.success('Login successful')
        } else {
          toast.error('Login failed');
          console.error('Login failed');
        }
      } catch (error) {
        
        console.error('Error during login:', error);
        
      }
    }
  };

  return (
    <>
    <div className="Top">
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 border border-gray-300 rounded-lg shadow-md bg-white">
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>
      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
        
      </div>
      <button type="submit" className="w-full p-2 bg-blue-600 text-white rounded hover:bg-blue-700">Login</button>
      <Link to="/register">
      <button type="submit" className="w-full p-2 bg-blue-400 text-white rounded hover:bg-blue-500">Register</button>
      </Link>
    </form>
    </div>
    <Toaster 
    position='top-right'
    toastOptions={{
      classNames: {
        error: 'bg-red-400',
        success: 'text-green-400',
        warning: 'text-yellow-400',
        info: 'bg-blue-400',
      }
    }}
    />
   
    </>
  );
};

export default Login;
