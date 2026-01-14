import React from 'react'
import Input from '../../components/common/Input/Input';
import SimpleNavbar from '../../components/layout/SimpleNavbar';
import { Button } from '../../components/common/Button/Button';
import { useState } from 'react';

const Register = () => {

  const [form, setForm] = useState({
    fullName: "",
    userName: "",
    email: "",
    contactNo: "",
    designation: "",
    password: "",
    avatar: null
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm({ ...form, [name]: files ? files[0] : value })
  }


  const submit = (e) => {
    e.preventDefault();

    const fd = new FormData();
    Object.keys(form).forEach(key => {
      fd.append(key, form[key]);
    })
    console.log([...fd.entries()]);

  }


  return (
    <>
      <SimpleNavbar />

      <div className='max-w-xl mx-auto mt-10 p-6 shadow-2xl rounded'>
        <h2 className='text-xl font-bold mb-4 text-orange'>Agent Register</h2>

        <form onSubmit={submit} className='space-y-3'>

          {
            ["fullName", "userName", "email", "contactNo", "designation", "password"].map(f => (
              <Input

                key={f}
                name={f}
                type={f === 'password' ? 'password' : 'text'}
                placeholder={f}
                label={f}
                value={form[f]}
                onChange={handleChange}
                className='w-full'
                required
              />

            ))
          }

          <input type="file" name="avatar" onChange={handleChange} required />
          <Button type='submit' children="Register" className='w-full' />
        </form>

      </div>
    </>
  )
}

export default Register
