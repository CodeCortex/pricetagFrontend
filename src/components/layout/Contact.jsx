import React, { useState } from 'react'
import ContactBg from "../../assets/images/Contact.png";
import Input from '../common/Input/Input';


const Contact = () => {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submitForm = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Message sent Successfully!");
  }




  return (
    <section id="#contact" className='px-6 py-10 md:px-20 my-10 md:my-16 max-w-7xl mx-auto rounded-2xl shadow-2xl relative  w-full  bg-center bg-cover overflow-hidden' style={{ background: `url(${ContactBg})` }} >
      <div className='absolute inset-0 bg-black/60 '></div>
      <div className='relative max-w-6xl mx-auto px-10 text-white'>

        <div>
          <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>

          <div className="space-y-6 text-gray-200 pb-4">

            <div>
              <p className="font-semibold">OFFICE</p>
              <p>Amphitheater Parkway, Mountain View, California, 94043</p>
            </div>

          </div>
        </div>
      </div>
      {/* RIGHT FORM */}
      <form
        onSubmit={submitForm}
        className="bg-white/10 backdrop-blur-md p-10 rounded-xl space-y-6"
      >

        <Input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
          className="bg-transparent text-white placeholder:text-gray-300 border-white"
        />

        <Input
          name="email"
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="bg-transparent text-white placeholder:text-gray-300 border-white"
        />

        <Input
          name="phone"
          placeholder="Mobile Number"
          value={form.phone}
          onChange={handleChange}
          required
          className="bg-transparent text-white placeholder:text-gray-300 border-white"
        />

        {/* Message */}
        <textarea
          name="message"
          rows="4"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full bg-transparent border border-white px-4 py-3 rounded-md outline-none focus:border-orange text-white placeholder:text-gray-300"
        ></textarea>

        {/* Button */}
        <button
          type="submit"
          className="w-full py-3 font-semibold bg-gradient-to-r from-white to-orange text-black hover:text-white transition"
        >
          Send Message
        </button>

      </form>

    </section>
  )
}

export default Contact
