"use client";
import React from "react";
export default function Index8(){
    return (
        <>

    <div>
      {/* BANNER */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        dataBsRide="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="images/contact-us/banner-Contact.png"
              className="d-block w-100"
              alt=""
            />
            <div className="carousel-caption carousel-caption-top d-none  d-md-block text-start">
              <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '95px' }}>
                Contact us
              </h2>

              <h2 className="pt-md-4  text-white d-md-none text-center pt-3" style={{ fontSize: '25px' }}>
                Contact us
              </h2>
              <h4 className="pt-4 text-white d-none d-md-block" style={{ color: 'rgb(66, 66, 66)', fontWeight: '400', textAlign: 'justify' }}>
                Your inquiries are important to us! If you&apos;re looking for assistance with our products or want to discuss potential collaborations, we&apos;re just a message away.
              </h4>
              
            </div>

            <div className="carousel-caption  d-md-none   text-start">
              <h2 className="pt-md-4 mobile-fonts-heading text-white d-none d-md-block " style={{ fontSize: '95px' }}>
                Contact us
              </h2>

              <h2 className="pt-md-4  text-white d-md-none text-center " style={{ fontSize: '35px' }}>
                Contact us
              </h2>
              <h4 className="pt-4 text-white d-none d-md-block" style={{ color: 'rgb(66, 66, 66)', fontWeight: '400', textAlign: 'justify' }}>
                Your inquiries are important to us! If you&apos;re looking for assistance with our products or want to discuss potential collaborations, we&apos;re just a message away.
              </h4>
              
            </div>
            
          </div>
        </div>
      </div>
      
      {/* BANNER END */}

      {/* Section-1 */}
      <div className="contact-cards">

  <div className="contact-card">
    <img src="images/contact-us/span.w-32.png" alt="" />
    <h3>sales@bmwsteels.com</h3>
    <p>We aim to respond within 24 hours.</p>
  </div>

  <div className="contact-card">
    <img src="images/contact-us/span.w-32 (1).png" alt="" />
    <h3>BMW Steels Ltd</h3>
    <p>55, Pritam Road, Dalanwala, Dehradun-248001</p>
  </div>

  <div className="contact-card">
    <img src="images/contact-us/span.w-32 (2).png" alt="" />
    <h3>+91-96390 17070</h3>
    <p>Mon–Sat, 9am–6:30pm</p>
  </div>

</div>
      {/* Section-1 End */}

      {/* Section-2 */}
      <div className="contact-section">

  <div className="contact-container">

    {/* LEFT SIDE */}
    <div className="contact-info">

      <h2>Connect with Us</h2>

      <p className="contact-desc">
        We value your interest and are here to help! Whether you have questions about our services, need support, or want to explore partnership opportunities, please don&apos;t hesitate to reach out.
      </p>

      <div className="office-grid">

        <div>
          <h4>Corporate Office</h4>
          <p>
            BMW Steels Ltd<br />
            55, Pritam Road, Dehradun<br />
            +91-96390 17070<br />
            sales@bmwsteels.com
          </p>
        </div>

        <div>
          <h4>Head Office</h4>
          <p>
            BMW Steels Ltd<br />
            Bhagwanpur, Haridwar<br />
            +91 98377 55569
          </p>
        </div>

        <div>
          <h4>Marketing Office</h4>
          <p>
            705, RG Trade Tower, NSP, New Delhi
          </p>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE FORM */}
    <div className="contact-form">
      <form>

        <h3>Get in Touch</h3>

        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <input type="tel" placeholder="Phone Number" />
        <textarea rows="3" placeholder="Description"></textarea>

        <button type="submit">Submit</button>

      </form>
    </div>

  </div>

</div>
      {/* Section-2 End */}

      {/* Map */}
      <div className="p-3 p-md-5">
        <div className="px-md-5">
          <div className="ratio" style={{ height: '500px' }}>
            <iframe
              style={{ borderRadius: '10px', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.228725896471!2d77.77047827621259!3d29.972856021957885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ec972fdb61c17%3A0x9e5c360e9dd89286!2sBMW%20STEELS%20LTD.!5e0!3m2!1sen!2sin!4v1740722343313!5m2!1sen!2sin"
              width="600"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
      {/* Map End */}
 </div>
 <style jsx>{`
 .contact-cards {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  padding: 80px 20px;
}

.contact-card {
  background: #ffd3d3;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: 0.3s ease;
}

.contact-card img {
  width: 60px;
  margin-bottom: 16px;
}

.contact-card h3 {
  font-size: 18px;
  margin-bottom: 8px;
}

.contact-card p {
  color: #444;
  font-size: 14px;
}

.contact-card:hover {
  transform: translateY(-5px);
}
  .contact-section {
  padding: 80px 20px;
}

.contact-container {
  max-width: 1200px;
  margin: auto;
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: 48px;
  align-items: start;
}
  .contact-info {
     /* 🔥 pushes it right */
  padding-left: 24px;  /* optional spacing */
}

/* LEFT */
.contact-info h2 {
  font-size: 36px;
  margin-bottom: 16px;
}

.contact-desc {
  color: #555;
  margin-bottom: 24px;
  font-size: 16px;
}

.office-grid {
  display: grid;
  gap: 24px;
}

.office-grid h4 {
  color: red;
  font-size: 16px;
}

.office-grid p {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
}

/* RIGHT FORM */
.contact-form {
  background: #eee;
  padding: 32px;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  transform: translateX(-20px);
}

.contact-form h3 {
  text-align: center;
  margin-bottom: 24px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  margin-bottom: 16px;
  padding: 12px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

.contact-form button {
  width: 100%;
  background: red;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 8px;
}

/* MOBILE */
@media (max-width: 768px) {
  .contact-cards {
    grid-template-columns: 1fr;
    padding: 40px 20px;
  }

  .contact-section {
    padding: 40px 20px;
  }

  .contact-container {
    grid-template-columns: 1fr;
  }
    .contact-form {
  background: #eee;
  padding: 32px;
  border-radius: 12px;
  margin-left:30px;
  
}
  .contact-card {
  background: #ffd3d3;
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  transition: 0.3s ease;
}
}



`}</style>
        </>

    )}