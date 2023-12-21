import React, { useState } from "react";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import Logoimg from '../Assests/logo-diraly-01-01 (1).png'

const CommingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // API FOR THE MAIL SENDING
    const serviceId = "service_jxcs1rs";
    const templateId = "template_cva25qx";
    const publicKey = "Lnk6Rg3UdS8PK-h3z";

    // api params
    const TemplateParams = {
      from_email: email,
      to_name: "office@diraly.com",
    };

    // send e-mail
    emailjs
      .send(serviceId, templateId, TemplateParams, publicKey)
      .then((Response) => {
        console.log("E-mail sent bro ", Response);

        setEmail("");
      })
      .catch((error) => {
        console.error("Error in mail sending ", error);
      });
  };

  return (
    <div className="commingsoon-main">
      <div className="logo-container">
        <img src={Logoimg} alt="" className="logo"/>
      </div>
      {/* <div className="subhead-2">home, anywhere</div> */}
      <div className="subhead-3">Comming Soon</div>
      <div className="subhead-4">Be the first to know when we go live</div>
      <div className="subhead-input">
        <form onSubmit={handleSubmit} className="input-form">
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="inp-email"
          />
          <button className="submit">Submit</button>
        </form>
      </div>
      <div className="social-media">  
        <div className="instagram">
          <a href="https://www.instagram.com/diralyofficial?igsh=YzVkODRmOTdmMw==" className="social-link"><FaInstagram /></a>
        </div>
      </div>
    </div>
  );
};

export default CommingSoon;
