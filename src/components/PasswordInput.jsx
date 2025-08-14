import { FiEye } from "react-icons/fi";
import { FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function PasswordInput() {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [createdPassword, setCreatedPassword] = useState("");

  const requirements = [
    { label: "At least 8 characters", check: password.length >= 8 },
    {
      label: "Contains uppercase character",
      check: [...password].some((c) => c >= "A" && c <= "Z"),
    },
    {
      label: "Contains lowercase character",
      check: [...password].some((c) => c >= "a" && c <= "z"),
    },
    {
      label: "Contains a digit",
      check: [...password].some((c) => c >= "0" && c <= "9"),
    },
    {
      label: "Contains a special character",
      check: [...password].some((c) => !/[a-zA-Z0-9]/.test(c)),
    },
  ];

  const handleSubmit = () => {
    setCreatedPassword(password);
    setPassword("");
  };
  return (
    <>
      <div>
        <h1 className="text-justify">Create Password</h1>
        <h3>Enter a secure password</h3>

        <div className="pt-8 flex items-center justify-between">
          <input
            className="w-72 border-green-200"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEye /> : <FaEyeSlash />}
          </button>
        </div>

        <h2>Password requirements</h2>

        <ul className="pt-5">
          <li>At least 8 characters</li>
          <li>Contains uppercase character</li>
          <li>Contains lowercase character</li>
          <li>Contains a digit</li>
          <li>Contains a special character</li>
        </ul>
      </div>

      <div className="bg-blue-400">
        <button className="text-white">Submit</button>
      </div>
    </>
  );
}
