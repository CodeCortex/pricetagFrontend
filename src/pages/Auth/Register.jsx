import React from 'react'
import Input from '../../components/common/Input/Input';
import SimpleNavbar from '../../components/layout/SimpleNavbar';
import { Button } from '../../components/common/Button/Button';
import { useState, useRef } from 'react';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerAgent } from '../../api/auth';
import { showToast } from '../../utils/customToast';
import { Link, useNavigate } from 'react-router-dom';



const Register = () => {

  const formRef = useRef();
  const navigate = useNavigate();


  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    contactNo: "",
    designation: "",
    password: "",
    confirmPassword: "",
    avatar: null
  });

  const [show, setShow] = useState(false);
  const [preview, setPreview] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);



  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      const file = files[0];

      // size validation (2MB)
      if (file.size > 2 * 1024 * 1024) {
        setError("Image must be less than 2MB");
        return;
      }
      setPreview(URL.createObjectURL(file));
      setForm({ ...form, [name]: file });
    } else {
      setForm({ ...form, [name]: value })
    }
  }



  // password strength
  const getStrength = () => {
    const p = form.password;
    if (p.length < 6) return "Weak";
    if (/[A-Z]/.test(p) && /\d/.test(p) && /[@$!%*#?&]/.test(p))
      return "Strong";
    return "Medium";
  }

  const validate = () => {
    if (!form.fullName) return "Full name required";
    if (!form.userName) return "Username required";

    if (!/^\S+@\S+\.\S+$/.test(form.email))
      return "Invalid email";

    if (!/^\d{10}$/.test(form.contactNo))
      return "Contact must be 10 digits";

    if (form.password.length < 6)
      return "Password must be 6+ characters";

    if (form.password !== form.confirmPassword)
      return "Passwords do not match";

    if (!form.avatar)
      return "Image required";
  }


  const submit = async (e) => {
    e.preventDefault();
    setError("");

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const fd = new FormData();
    Object.keys(form).forEach(key => {
      fd.append(key, form[key]);
    })
    console.log([...fd.entries()]);


    try {
      setLoading(true);
      const res = await registerAgent(fd);
      showToast("success", res.data.message || "Registered successfully!");
      navigate("/login");

      formRef.current.reset();
      setForm({
        fullName: "",
        userName: "",
        email: "",
        contactNo: "",
        designation: "",
        password: "",
        confirmPassword: "",
        avatar: null
      });

    } catch (err) {
      console.error(err.response?.data?.message || "Registration failed");
      showToast("error", err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }

  }


  return (
    <>
      <SimpleNavbar />

      <div className='max-w-xl mx-auto mt-10 p-6 shadow-2xl rounded'>
        <h2 className='text-xl font-bold mb-4 text-orange'>Agent Register</h2>
        {error && <p className="text-red-600 mb-2">{error}</p>}

        <form ref={formRef} onSubmit={submit} className='space-y-3'>

          {
            ["fullName", "userName", "email", "contactNo", "designation"].map(f => (
              <Input
                key={f}
                name={f}
                placeholder={f}
                // label={f}
                value={form[f]}
                onChange={handleChange}
                className='w-full'
              />
            ))
          }
          {/* PASSWORD */}
          <div className="relative">
            <Input
              name="password"
              // label="password"
              type={show ? "text" : "password"}
              placeholder="Password"
              onChange={handleChange}
              className="w-full border p-2"
            />
            <span
              className="absolute right-3 top-3 cursor-pointer"
              onClick={() => setShow(!show)}
            >
              {show ? <FiEyeOff /> : <FiEye />}
            </span>
          </div>

          {/* strength */}
          {form.password && (
            <p className={
              getStrength() === "Strong"
                ? "text-green-600"
                : getStrength() === "Medium"
                  ? "text-yellow-600"
                  : "text-red-600"
            }>
              Strength: {getStrength()}
            </p>
          )}

          {/* CONFIRM */}
          <Input
            name="confirmPassword"
            // label="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            onChange={handleChange}
            className="w-full"
          />

          {/* FILE UPLOAD */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-orange">
              Profile Image
            </label>

            <div className="flex items-center gap-4">
              <label className="cursor-pointer bg-orange text-white px-4 py-2 rounded-md shadow hover:bg-orange-600 transition">
                Choose Image
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  onChange={handleChange}
                  className="hidden"

                />
              </label>

              <span className="text-sm text-gray-500">
                {form.avatar ? form.avatar.name : "No file chosen"}
              </span>
            </div>
          </div>

          {/* PREVIEW */}
          {preview && (
            <div className="flex justify-center mt-4">
              <img
                src={preview}
                alt="preview"
                className="h-24 w-24 rounded-full object-cover border-2 border-orange shadow"
              />
            </div>
          )}

          <Button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange text-white py-2 rounded-md font-semibold hover:bg-orange-600 transition ${loading?"opacity-60 cursor-not-allowed" : "hover:bg-orange-600"}`}
          >
            {loading ? "Registering...." : "Register"}
          </Button>

        </form>

      </div>
    </>
  )
}

export default Register
