import React, { useState } from 'react'
import '../contact/contact.css'
import {FaMapMarkedAlt} from 'react-icons/fa'
import {MdEmail} from 'react-icons/md'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import { data } from 'autoprefixer'
import emailjs from 'emailjs-com';
import ReCAPTCHA from "react-google-recaptcha";
import axios from "axios";

function contact({ isDarkMode }) {
  const [userData, setUserData] = useState({
    Name: '', Email: '', Number: '', Message: '', isValidName: true, isValidEmail: true, isValidNumber: true
  }
  )
  const handleChange = (e) => {
    const { name, value } = e.target;
  
    let isValidName = userData.isValidName;
    let isValidEmail = userData.isValidEmail;
    let isValidNumber = userData.isValidNumber;
    let isValidMessage = userData.isValidMessage;
  
    if (name === 'Name') {
      isValidName = /^[A-Za-z\s]+$/.test(value);
    } else if (name === 'Email') {
      isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|za|africa|org|edu)$/.test(value);
    } else if (name === 'Number') {
      isValidNumber = /^\d{10}$/.test(value);
    } else if (name === 'Message') {
      isValidMessage = value.length <= 250;
    }
  
    setUserData({
      ...userData,
      [name]: value.toLowerCase(),
      isValidName,
      isValidEmail,
      isValidNumber, 
      isValidMessage
    });
  };


  // Declare the ref for reCAPTCHA
  const recaptchaRef = React.createRef();


  const send = async (e) => {
    const { Name, Email, Number, Message } = userData;
    e.preventDefault();
    // Verify reCAPTCHA
  const recaptchaResponse = await recaptchaRef.current.executeAsync();
  const recaptchaVerificationUrl = `https://www.google.com/recaptcha/api/siteverify?secret=6LdnFucnAAAAAD6yGwtikpSKU66xAFGOdTsOVsXv&response=${recaptchaResponse}`;
  const recaptchaVerification = await axios.post(recaptchaVerificationUrl);

  if (!recaptchaVerification.data.success) {
    alert("Please complete the reCAPTCHA.");
    return;
  }
  
    // Perform validation checks
    if (!Name || !Email || !Number || !Message) {
      alert('Please fill in all fields.');
      return;
    }
  
    const isValidName = /^[A-Za-z\s]+$/.test(Name);
    const isValidEmail = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.(com|net|za|africa|org|edu)$/.test(Email);
    const isValidNumber = /^\d{10}$/.test(Number);
    const isValidMessage = Message.length <= 250;
  
    setUserData({
      ...userData,
      isValidName,
      isValidEmail,
      isValidNumber,
      isValidMessage,
    });
  
    if (!isValidName || !isValidEmail || !isValidNumber || !isValidMessage) {
      return;
    }
  
    // Send data to Firebase Realtime Database
    const dbOption = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        Name,
        Email,
        Number,
        Message,
      }),
    };
    const dbRes = await fetch(
      'https://portfolio-nathan-default-rtdb.firebaseio.com/Messages.json',
      dbOption
    );
  
    // Call EmailJS to send email
  try {
    const emailRes = await emailjs.send(
      'service_oq9n6kd', // Replace with your EmailJS email service ID
      'template_31zjsol', // Replace with your EmailJS email template ID
      {
        to_email: Email,
        from_name: 'Nathan Davids', // Replace with your name
        name: Name,
        email: Email,
        number: Number,
        message: Message,
      },
      'yuaBB-jfSU7IiaGC2' // Replace with your EmailJS user ID
    );

    if (emailRes.status === 200) {
      // Reset the input fields after successful submission
      setUserData({
        Name: '',
        Email: '',
        Number: '',
        Message: '',
      });

      alert('Message Sent');
    } else {
      alert('Failed to send message');
    }
  } catch (error) {
    console.error('Error sending email:', error);
    alert('Failed to send message');
  }
  };

  return (
    <>
    <section id='contact' className={isDarkMode ? 'dark' : 'light'}>
    <div id='contactContainer' className={`flex w-full min-h-screen max-w-4xl p-8 rounded-xl shadow-lg ${isDarkMode ? 'dark' : 'light'}`}>
      <div id='form' className={`form flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 sm:p-12 w-full max-w-7xl p-8 rounded-xl shadow-lg text-white ${isDarkMode ? 'dark' : 'light'}`}>
        <div className={`flex flex-col space-y-8 justify-between ${isDarkMode ? 'dark' : 'light'}`}>
          <div>
            <h1 id='heading' className={`flex justify-center font-bold text-4xl tracking-wide ${isDarkMode ? 'dark' : 'light'}`}> Contact <span id='heading2'> Me </span> </h1>
            <br />
            <p id='subheading' className={`flex justify-center text-center pt-2 text-white-100 text-sm ${isDarkMode ? 'dark' : 'light'}`}> It would be amazing to chat, exchange ideas, and explore potential collaboration opportunities.
              Let's schedule a call or grab a coffee sometime soon. Looking forward to hearing from you and embarking on an exciting journey of creativity together. </p>
          </div>
          <div id='icon' className={`flex flex-col items-center space-y-4 ${isDarkMode ? 'dark' : 'light'}`}>
            <div className="inline-flex space-x-2 items-center">
              <FaMapMarkedAlt className="icon text-white-300 text-xl"/>
              <span>Cape Town, South Africa</span>
            </div>
            <div className={`inline-flex space-x-2 items-center ${isDarkMode ? 'dark' : 'light'}`}>
              <MdEmail className="icon text-white-300 text-xl"/>
              <span>nathandavids935@gmail.com</span>
            </div>
            <div className={`inline-flex space-x-2 items-center ${isDarkMode ? 'dark' : 'light'}`}>
              <BsFillTelephoneFill className="icon text-white-300 text-xl"/>
              <span>+27 61 679 2852</span>
            </div>
          </div>
          <div className="flex justify-center text-4xl tracking-wide">
            <h2 id='socialHeading' className={isDarkMode ? 'dark' : 'light'}>Socials</h2>
          </div>
          <div id='socialContainer' className={`flex justify-center justify-around space-x-4 text-4xl ${isDarkMode ? 'dark' : 'light'}`}>
            <a href="https://www.linkedin.com/in/nathan-davids-7a857b233" target="_blank" rel="noopener noreferrer"><BsLinkedin/></a>
            <a href="https://github.com/NathanDavids" target="_blank" rel="noopener noreferrer"><BsGithub/></a>
            <a href="https://wa.link/38j3gp" target="_blank" rel="noopener noreferrer"><BsWhatsapp/></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><BsInstagram/></a>
          </div>
          <div id='inputContainer' className={`bg-black rounded-xl shadow-lg p-8 ${isDarkMode ? 'dark' : 'light'}`}>
            <form method='POST' className="flex flex-col space-y-4">
              <div>
                <label htmlFor="" className="text-sm"> Name </label>
                <input type="text" placeholder="Name" name="Name" value={userData.Name} onChange={handleChange} autoComplete='off' className={`text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 ${userData.Name === '' ? 'bg-red-200' : (userData.isValidName ? 'bg-green-200' : 'bg-red-200')}`} />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Email </label>
                <input type="email" placeholder="Email" name="Email" value={userData.Email} onChange={handleChange} autoComplete='off' className={`text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 ${userData.Email === '' ? 'bg-red-200' : (userData.isValidEmail ? 'bg-green-200' : 'bg-red-200')}`} />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Phone Number </label>
                <input type="number" placeholder="Phone Number" name="Number" value={userData.Number} onChange={handleChange} autoComplete='off' className={`text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 ${userData.Number === '' ? 'bg-red-200' : (userData.isValidNumber ? 'bg-green-200' : 'bg-red-200')}`} />
              </div>
              <div>
                <label htmlFor="" className="text-sm"> Message </label>
                <textarea type="text" placeholder="Message" name="Message" value={userData.Message} onChange={handleChange} autoComplete='off' rows="4" className={`text-gray-600 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 ${userData.Message === '' ? 'bg-red-200' : (userData.isValidMessage ? 'bg-green-200' : 'bg-red-200')}`} />
              </div>
              <ReCAPTCHA id='recaptcha' sitekey="6LdnFucnAAAAAD6yGwtikpSKU66xAFGOdTsOVsXv" ref={recaptchaRef}/>
              <button
                id='sendBtn'
                onClick={send}
                className={`inline-block self-center text-white font-bold rounded-lg px-6 py-2 uppercase text-sm hover:bg-[#D9171F] ${isDarkMode ? 'dark' : 'light'}`}
              >
                Send Message
              </button>
            </form>
          </div>
          <div id='copyright' className={`flex justify-center justify-between items-center ${isDarkMode ? 'dark' : 'light'}`}>
            <h1 id='copyrightText'>COPYRIGHT © NATHAN DAVIDS | 2023 </h1>
            <a href="Home"><button id='backToTop' className={isDarkMode ? 'dark' : 'light'}> ↑ </button></a>    
          </div>
        </div>
      </div>
    </div>
    </section>
    </>
  )
}

export default contact