import React from 'react';

const VerificationPage: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b to-teal-900 px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-teal-900">Verify Your Account</h1>
        <p className="text-center text-sm text-gray-600">
          Enter the verification code sent to your phone number
        </p>
        <form className="space-y-4">
          <div>
            <label htmlFor="verificationCode" className="block text-sm font-medium text-gray-700">
              Verification Code
            </label>
            <input
              type="text"
              id="verificationCode"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="123456"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-teal-600 text-white py-2 px-4 rounded-md shadow hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50"
          >
            Verify
          </button>
        </form>
        <div className="text-center text-sm text-gray-500">
          Didn't receive the code? <a href="#" className="text-teal-500 hover:underline">Resend Code</a>
        </div>
      </div>
    </div>
  );
};

export default VerificationPage;
