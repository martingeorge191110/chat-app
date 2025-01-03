import React, { useEffect, useState } from "react";
import Input from "../../components/my.input.tsx";
import LoadingSpinner from "../../components/loading.spinner.tsx";
import { reset_link } from "../../services/auth.api.ts";
// import { return_errors } from "../../utilis/auth.utilies.tsx";
import { PayloadTypes } from "../../app.types.ts";
import { showAlert } from "../../components/alerts.tsx";






const ForgotPasswordPage: React.FC<{setPage: (page: string) => void}> = ({setPage}) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState<PayloadTypes | null>(null)

  const requeset_link_btn = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    setLoading(true)
    try {
      const resposne = await reset_link({email})

      setData(resposne)
      setLoading(false)
    } catch (err) {

    }
  }

  useEffect(() => {
    if (data?.success)
      showAlert(), setPage("login")
  }, [data])

  return (
    <div className="min-h-screen bg-teal-600 flex items-center justify-center">
      {/* Container */}
      <div
        className="bg-white shadow-2xl rounded-lg w-full max-w-lg"
        style={{ boxShadow: "0 0 12px 10px rgba(255, 255, 255, 0.4)" }}
      >
        {/* Header */}
        <div className="bg-teal-600 text-white py-4 px-6 rounded-t-lg">
          <h2 className="text-2xl font-bold text-center">Reset Your Password</h2>
          <p className="text-center text-teal-200 mt-1">
            Enter your email address to reset your password.
          </p>
        </div>
        {/* Form */}
        <div className="p-6">
          <form className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-teal-800">
                Email Address
              </label>
              <Input id="email" type="email" stateValue={email} handleChange={setEmail} placeholder="you@example.com"
                className="w-full mt-1 px-4 py-2 text-gray-700 border rounded-md focus:ring-2 focus:ring-teal-500"/>
              {data?.errors && data.errors.length > 0 && <p className="text-sm text-center text-red-600">{(data.errors[0] as {msg?: string}).msg}</p>}
              {data?.success && <p className="text-sm text-center text-green-500">{data.message}</p>}
            </div>
            <button onClick={(e) => requeset_link_btn(e)} type="submit" className="w-full py-3 px-4 bg-teal-600 text-white rounded-lg font-bold hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500">
              {loading ? <LoadingSpinner operation="Sending Email" /> : "Send Reset Link"}
            </button>
          </form>
          <div className="text-center mt-5">
            <p className="text-sm text-gray-600">
              Remembered your password?{" "}
              <button onClick={() => setPage("login")} className="text-teal-700 font-bold hover:underline">
                Sign In
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
