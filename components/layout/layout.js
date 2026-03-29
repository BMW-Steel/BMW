"use client";
import React, { children } from "react";
import Header from "./header";
import Footer from "./footer";
export default function Layout({children}) {
    return(
   <>
   <div className=" button-container ">
   <button type="button" className="btn btn-primary rotated-button" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Enquire Now
</button>
    </div>
    <div className=" button-container2 ">
   <button type="button" className="btn  rotated-button2" data-bs-toggle="modal" data-bs-target="#exampleModal0">
   <img src="images/suppor.png" width={50}  alt="" />
</button>

    </div>


<div className="modal fade" id="exampleModal" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content custom-modal">

      {/* HEADER */}
      <div className="modal-header border-0">
        <h5 className="modal-title">Get in Touch</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* BODY */}
      <div className="modal-body">
        <form className="form-ui">

          <div className="form-group">
            <input type="text" placeholder="Your Name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="Your Email" />
          </div>

          <div className="form-group">
            <input type="tel" placeholder="Phone Number" />
          </div>

          <div className="form-group">
            <textarea rows="3" placeholder="Describe your requirement..." />
          </div>

          <button type="submit" className="submit-btn">
            Submit Enquiry →
          </button>

        </form>
      </div>

    </div>
  </div>
</div>


<div className="modal fade" id="exampleModal0" tabIndex="-1">
  <div className="modal-dialog modal-dialog-centered">
    <div className="modal-content custom-modal">

      {/* HEADER */}
      <div className="modal-header border-0">
        <h5 className="modal-title">Reach Out To Us</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
      </div>

      {/* BODY */}
      <div className="modal-body">

        <div className="contact-list">

          <div className="contact-item">
            <span>📍</span>
            <p>02 Balbir Road Dalanwala, Dehradun (U.K.)-248001</p>
          </div>

          <div className="contact-item">
            <span>📧</span>
            <p>sales@bmwsteels.com</p>
          </div>

          <div className="contact-item">
            <span>📞</span>
            <p>+91-96390 17070</p>
          </div>

          <div className="contact-item">
            <span>💬</span>
            <p>+91-96390 17070</p>
          </div>

        </div>

      </div>

    </div>
  </div>
</div>   <Header/>
   {children}
   
   <Footer/>
   <style jsx>{`

/* 🔥 MODAL */
.custom-modal {
  border-radius: 16px;
  padding: 10px;
  border: none;
  box-shadow: 0 20px 60px rgba(0,0,0,0.2);
}

/* HEADER */
.modal-title {
  font-weight: 600;
  font-size: 25px;
}

/* FORM */
.form-ui {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 12px 14px;
  border-radius: 10px;
  border: 1px solid #ddd;
  font-size: 14px;
  transition: 0.3s ease;
}

.form-group input:focus,
.form-group textarea:focus {
  border-color: red;
  outline: none;
  box-shadow: 0 0 0 2px rgba(255,0,0,0.1);
}

/* BUTTON */
.submit-btn {
  background:black;
  color: white;
  padding: 12px;
  border-radius: 10px;
  border: none;
  font-weight: 500;
  transition: 0.3s ease;
}

.submit-btn:hover {
  background: red;
}

/* CONTACT LIST */
.contact-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-item {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.contact-item span {
  font-size: 20px;
}

.contact-item p {
  margin: 0;
  color: #444;
  line-height: 1.5;
  font-size: 16px;
}

/* BUTTONS (FLOATING) */
.rotated-button {
  background-color: red;
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-weight: 500;
  transition: all 0.3s ease;
}

/* 🔥 HOVER EFFECT */
.rotated-button:hover {
  background-color: black;
  color: white;
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 10px 25px rgba(0,0,0,0.3);
}

/* CLICK EFFECT */
.rotated-button:active {
  transform: scale(0.95);
}

.rotated-button2 {
  background: transparent;
  border: none;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.3s ease;
}

/* IMAGE STYLE */
.rotated-button2 img {
  transition: all 0.3s ease;
  border-radius: 50%;
}

/* 🔥 HOVER EFFECT */
.rotated-button2:hover {
  transform: translateY(-4px) scale(1.08);
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
}

/* IMAGE GLOW */
.rotated-button2:hover img {
  filter: brightness(1.1);
}

/* CLICK EFFECT */
.rotated-button2:active {
  transform: scale(0.95);
}

/* OPTIONAL SMOOTH OPEN */
.modal.fade .modal-dialog {
  transform: scale(0.9);
  transition: 0.3s ease;
}

.modal.show .modal-dialog {
  transform: scale(1);
}
  @media (max-width: 768px) {
  .button-container {
    right: 8px;
    top: 60%;
  }

  .button-container2 {
    right: 8px;
    top: 72%;
  }
}

`}</style>
   </>
)
}