import React from 'react';
import ChatIcon from '@mui/icons-material/Chat';
import DesktopMacOutlinedIcon from '@mui/icons-material/DesktopMacOutlined';
import TipsAndUpdatesOutlinedIcon from '@mui/icons-material/TipsAndUpdatesOutlined';
import SmartphoneOutlinedIcon from '@mui/icons-material/SmartphoneOutlined';
import MarkEmailReadOutlinedIcon from '@mui/icons-material/MarkEmailReadOutlined';
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined';
import handImg from './hand-phone.jpg'
import './Main.css';

export default function Landing() {
  return (
    <div>
    <section className="section hero">
      <div className="container">

        <div className="hero-content">
          <p className="hero-subtitle">DIGI Marketing Agency</p>
          <h1 className="h1 hero-title" style={{color:"ButtonFace"}}>We are available for marketing</h1>
          <a href="#" className="btn btn-primary" style={{ textDecoration: "none" }}>Get Started</a>
        </div>
        <figure className="hero-banner">
          <img src ={handImg}  width="780" height="500" alt="hero banner" className="w-100" />
        </figure>
      </div>
    </section>

    <section className="section service" id="service" aria-label="service">
        <div className="container">

          <h2 className="h2 section-title" style={{color:"ButtonFace"}}>Services We Provide</h2>

          <ul className="grid-list">

          <li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor: "#13c4a1" }}>
      <ChatIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">SEO Optimization</a>
    </h3>
    <p className="card-text">
      Search Engine Optimization (SEO) is the process of optimizing your website to increase organic traffic from search engines.
    </p>
  </div>
</li>

<li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor: "#6610f2" }}>
      <DesktopMacOutlinedIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">Digital Marketing</a>
    </h3>
    <p className="card-text">
      Digital marketing encompasses all marketing efforts that use electronic devices or the internet prospective customers.
    </p>
  </div>
</li>

<li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor: "#ffb700" }}>
      <TipsAndUpdatesOutlinedIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">Market Research</a>
    </h3>
    <p className="card-text">
      Market research is the process of determining the viability of a new service or product through research conducted directly.
    </p>
  </div>
</li>

<li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor: "#fc3549" }}>
      <SmartphoneOutlinedIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">Keyword Targeting</a>
    </h3>
    <p className="card-text">
      Keyword targeting involves analyzing keywords and key phrases that are frequently searched for by your target audience and strategically placing them in your content to drive traffic to your website.
    </p>
  </div>
</li>

<li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor: "#00d280" }}>
      <MarkEmailReadOutlinedIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">Email Marketing</a>
    </h3>
    <p className="card-text">
      Email marketing is the act of sending a commercial message to a group of people using email. It is an essential tool for building relationships with prospects, leads, current customers, and even past customers.
    </p>
  </div>
</li>

<li>
  <div className="service-card">
    <div className="card-icon" style={{ backgroundColor:"blue" }}>
      <BuildOutlinedIcon/>
    </div>
    <h3 className="card-title">
      <a href="#" className="card-title">Marketing</a>
    </h3>
    <p className="card-text">
      Marketing and reporting involve analyzing marketing strategies and their performance current customers to make data-driven decisions and improve building future marketing efforts  with potential customers.
    </p>
  </div>
</li>


          </ul>

        </div>
      </section>
    </div>
  );
}

