"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";

const SetupPassword = () => {
  const router = useRouter();
  const { email, randomPassword } = router.query;

  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/admin/setup-password", {
        email,
        randomPassword,
        newPassword,
      });
      if (response.status === 200) {
        setSuccess(true);
        setError("");
      }
    } catch (err) {
      setError("Failed to set up password. Please check your details.");
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="p-6 max-w-md w-full bg-white shadow-md rounded-md">
        <div className="text-center mb-4">
          <Link href="/">
            <Image src="/images/logo/logo.svg" alt="Logo" width={150} height={50} />
          </Link>
          <h1 className="text-xl font-bold mt-2">Set Your Password</h1>
          <p className="text-gray-600">Enter a new password to access your account.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          {success && <p className="text-green-500 text-sm">Password set successfully!</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupPassword;
