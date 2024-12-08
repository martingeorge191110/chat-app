import React, { useEffect, useState } from 'react';
import Input from '../../components/my.input.tsx';
import { useDispatch } from 'react-redux';
import { submit_register } from '../../redux/actions.tsx';
import LoadingSpinner from '../../components/loading.spinner.tsx';
import { PayloadTypes } from '../../app.types.ts';
import { return_errors } from '../../utilis/auth.utilies.tsx';

const RegisterPage: React.FC<{ setPage: (page: string) => void }> = ({ setPage }) => {
  const dispatch = useDispatch();

  const [first_n, setFirst_n] = useState('');
  const [last_n, setLast_n] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm_password, setConfirm_password] = useState('');
  const [registerLoading, setRegisterLoading] = useState<boolean>(false);

  const [data, setData] = useState<{ type: string; payload: PayloadTypes } | null>(null);

  const createAccount = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setRegisterLoading(true);
    const body = { first_n, last_n, email, password, confirm_password };
    try {
      const data = await submit_register(body);
      setData(data);
      setRegisterLoading(false);
    } catch (err) {
      // Handle error
    }
  };

  useEffect(() => {
    if (data?.payload && data.payload.success === true)
      dispatch(data),
        localStorage.setItem('token', JSON.stringify((data.payload.result as { token?: string }).token));
  }, [data]);

  return (
    <div className="min-h-screen bg-teal-600 flex items-center justify-center">
      {/* Container */}
      <div
        className="bg-white shadow-2xl rounded-lg w-full max-w-2xl"
        style={{ boxShadow: '0 0 12px 10px rgba(255, 255, 255, 0.4)' }}
      >
        {/* Header */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">Create Your Account</h2>
          <p className="text-center text-teal-200 mt-1">Sign up to get started and enjoy all features!</p>
        </div>
        {/* Form */}
        <div className="p-6">
          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="firstNameUnique"
                  className="block text-sm font-medium text-teal-800"
                >
                  First Name
                </label>
                <Input
                  id={`firstNameUnique${Math.random()}`}
                  type="text"
                  stateValue={first_n}
                  handleChange={setFirst_n}
                  placeholder="John"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label
                  htmlFor={`lastNameUnique${Math.random()}`}
                  className="block text-sm font-medium text-teal-800"
                >
                  Last Name
                </label>
                <Input
                  id={`lastNameUnique${Math.random()}`}
                  type="text"
                  stateValue={last_n}
                  handleChange={setLast_n}
                  placeholder="Doe"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="emailUnique"
                className="block text-sm font-medium text-teal-800"
              >
                Email Address
              </label>
              <Input
                id={`emailUnique${Math.random()}`}
                type="email"
                stateValue={email}
                handleChange={setEmail}
                placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="passwordUnique"
                  className="block text-sm font-medium text-teal-800"
                >
                  Password
                </label>
                <Input
                  id={`passwordUnique${Math.random()}`}
                  type="password"
                  stateValue={password}
                  handleChange={setPassword}
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"
                />
                {return_errors('password', data)}
              </div>
              <div>
                <label
                  htmlFor="confirmPasswordUnique"
                  className="block text-sm font-medium text-teal-800"
                >
                  Confirm Password
                </label>
                <Input
                  id={`confirmPasswordUnique${Math.random()}`}
                  type="password"
                  stateValue={confirm_password}
                  handleChange={setConfirm_password}
                  placeholder="••••••••"
                  className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"
                />
                {return_errors('confirm_password', data)}
              </div>
            </div>
            <button
              onClick={async (e) => createAccount(e)}
              type="submit"
              className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500"
            >
              {registerLoading ? <LoadingSpinner operation="Registering" /> : 'Create Account'}
            </button>
          </form>
          <div className={`text-center ${data?.payload.success === false ? 'mt-0' : 'mt-5'}`}>
            <button
              onClick={() => setPage('forget-password')}
              className="text-sm text-teal-700 hover:underline"
            >
              Forgot Password?
            </button>
          </div>
          <div className="text-center mt-3">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <button
                onClick={() => setPage('login')}
                className="text-teal-700 font-bold hover:underline"
              >
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
