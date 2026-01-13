import React, { useState } from 'react'
import { loginAuth } from '../../api/auth';
import Input from '../../components/common/Input/Input';
import { Button } from '../../components/common/Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import Loader from '../../components/common/Loader/Loader.jsx';
import { showToast } from '../../utils/customToast.js';
import { FiEye, FiEyeOff } from "react-icons/fi";
import { PcCase } from 'lucide-react';



const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    identifier: "",
    password: ""
  });

  const [remember, setRemember] = useState(false);
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    if (!form.identifier) return "Identifier required";
    if (!form.password) return "password required";
    if (form.password.length < 6) return "Min 6 characters required";
  }



  const submit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      showToast("error", err);
      return;
    }

    try {
      setLoading(true);
      const payload = { password: form.password };

      if (form.identifier.includes("@gmail.com")) {
        payload.email = form.identifier;
      } else if (/^\d+$/.test(form.identifier)) {
        payload.contactNo = form.identifier;
      } else
        payload.userName = form.identifier;


      const res = await loginAuth(payload);
      const data = res.data.data;

      console.log(data);

      remember? localStorage.setItem("accessToken", data.accessToken):sessionStorage.setItem("accessToken",data.accessToken);

       localStorage.setItem("role",data.role);

      showToast("success", "Login successful")

      data.role==="ADMIN"
        ? navigate("/admin/dashboard")
        : navigate("/agent/dashboard");


    } catch (err) {
      console.log(err);
      showToast("error", err.response?.message || "Login failed");
    } finally {
      setLoading(false);
    }


  }


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  return (
    <div className='max-w-md mx-auto mt-20 p-6 shadow-2xl rounded '>
      <h2 className="text-xl font-bold mb-4 text-orange">Login</h2>

      <form onSubmit={submit} className='space-y-4'>
        <Input
          name="identifier"
          placeholder="Email / Username / Contact"
          onChange={handleChange}
          value={form.identifier}
          required
        />

        <div className='relative'>
          <Input
            name="password"
            type={show ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
            value={form.password}
            required
          />
          <span className='absolute right-3 top-3 cursor-pointer' onClick={() => setShow(!show)}>
            {show ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>

        <div className='flex items-center gap-2 text-orange'>
          <input type='checkbox' checked={remember} className='accent-orange' onChange={()=>setRemember(!remember)}/>
          <span>Remember me</span>
        </div>



        <Link to='/forgot-password'><p className='text-start text-blue-600 cursor-pointer hover:text-blue-800 py-2'>Forgot Password?</p></Link>

        <p>New Agent?{" "} <Link to="/register"><span className='text-blue-600 cursor-pointer hover:text-blue-800 font-semibold'>Register Here</span></Link></p>



        <Button type='submit' children={loading?"Logging in...":"Continue"} className='w-full' />


      </form>





    </div>
  )
}

export default Login
