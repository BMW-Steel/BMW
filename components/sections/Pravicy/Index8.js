import React from "react";
export default function Index8(){
    return (
        <>
{/* <script>
  document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("carouselExampleIndicators");
    const indicatorsContainer = document.querySelector(
      ".carousel-indicators"
    );

    const scrollActiveIndicatorIntoView = () => {
      const activeIndicator = document.querySelector(
        ".carousel-indicators .active"
      );

      if (activeIndicator) {
        // Get the bounding rectangle of the active indicator
        const indicatorRect = activeIndicator.getBoundingClientRect();
        const containerRect = indicatorsContainer.getBoundingClientRect();

        // Calculate the scroll offset
        const indicatorLeft = indicatorRect.left - containerRect.left;
        const indicatorRight = indicatorRect.right - containerRect.left;

        // Check if the active indicator is outside the visible area of the container
        if (
          indicatorLeft < 0 ||
          indicatorRight > indicatorsContainer.offsetWidth
        ) {
          indicatorsContainer.scrollTo({
            left:
              indicatorLeft -
              indicatorsContainer.offsetWidth / 2 +
              activeIndicator.offsetWidth / 2, // Center the active indicator
            behavior: "smooth",
          });
        }
      }
    };

    // Listen for slide events to update the active indicator scroll position
    carousel.addEventListener("slid.bs.carousel", () => {
      // Use setTimeout to ensure the DOM update happens before scrolling
      setTimeout(() => {
        scrollActiveIndicatorIntoView();
      }, 100); // Delay to ensure that the active indicator has been updated
    });

    // Initial scroll on page load (in case the page is loaded with an active slide)
    setTimeout(() => {
      scrollActiveIndicatorIntoView();
    }, 100); // Initial delay to ensure everything has loaded
  });
</script> */}

{/* <script>
  $('#myModal').on('shown.bs.modal', function () {
    $('#video1')[0].play();
  })
  $('#myModal').on('hidden.bs.modal', function () {
    $('#video1')[0].pause();
  })
</script> */}



{/* BANNER */}
<div className="">
  <div className="text-center px-md-5 px-2">
    <h2
      className="pt-5 mobile-fonts-heading2"
      style={{ fontSize: '50px' }}
    >
      Privacy Policy
    </h2>

   
  </div>

  {/* Carousal  */}

 

  {/* Carousal END */}
</div>

{/* BANNER END */}

{/* Section 1 */}

<div className="p-md-5 mt-2">



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
          Information We Collect
      </h2>
      <ul className="case fs-4">
        <span className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Personal Information</span>  </span> <br/>
        <span className="py-2">We may collect personal information that you voluntarily provide when you contact us or submit inquiries through the website, including:</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Full Name</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Email Address</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Phone Number</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Company or organization name</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Inquiry or project-related details</span></li>
        <span className="py-2">This information is typically collected through website contact forms, email communication, or direct business inquiries.
</span>
       
        
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
          Business & Project Information
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">When discussing industrial solutions or technical products, we may receive additional information such as:

</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Plant or facility information
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Industrial process requirements</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Equipment specifications or operational challenges</span></li>

        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Project scope, technical parameters, and timelines
</span></li>
       
        <span className="py-2">This information is voluntarily shared for consultation, quotation, or technical evaluation purposes.
</span>
       
        
        
      </ul>
    </div>
   
  </div>



   <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
          Technical & Usage Data
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">When you access our website, certain information may be collected automatically, including:
</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>IP address</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Browser type and version</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Device information</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Pages visited and browsing behavior</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Date and time of website access</span></li>
        <span className="py-2">This data helps us improve website performance and user experience.</span>
       
        
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
          How We Use Your Information
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">We use the collected information for the following purposes:

</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Responding to product inquiries and technical consultations
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Providing information about industrial solutions and services
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Preparing quotations, proposals, or project discussions
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Improving website functionality and performance</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Analyzing website usage trends</span></li>
         <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Sending relevant company updates or technical insights (only if you opt to receive them)
</span></li>
       
        
        
      </ul>
    </div>
   
  </div>


  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
         Cookies and Tracking Technologies
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">Our website may use cookies or similar technologies to enhance user experience and collect analytical information.

</span>
<span className="py-2">Cookies help us:</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Understand visitor behavior and website usage

</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Improve performance and usability</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Remember user preferences</span></li>
        
         <span className="py-2">You can disable cookies through your browser settings. However, some features of the website may not function properly if cookies are disabled.</span>
        
      </ul>
    </div>
   
  </div>



    <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Sharing of Information
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">We do not sell, rent, or trade personal information with third parties.</span>
        <br/>
<span className="py-2">Information may be shared only under the following circumstances:</span>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>With internal engineers, consultants, or technical teams involved in your project

</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>With trusted service providers assisting with website hosting, analytics, or communication tools

</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>With legal or regulatory authorities when required by applicable laws
</span></li>
        
         <span className="py-2">All such parties are required to maintain strict confidentiality of the information provided.</span>
        
      </ul>
    </div>
   
  </div>




   <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Data Security
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">We implement reasonable technical and organizational measures to protect information against unauthorized access, misuse, alteration, or disclosure.

</span>
        <br/>
<span className="py-2">While we take appropriate steps to protect your data, no method of internet transmission or electronic storage is completely secure.

</span>
      </ul>
    </div>
   
  </div>



 <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Data Retention
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">We retain personal and project-related information only for as long as necessary to:
</span>
        <br/>

        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Provide requested services or technical support

</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Maintain professional and project records
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Comply with legal or regulatory obligations
</span></li>
        
         <span className="py-2">Once the data is no longer required, it is securely deleted or anonymized.
</span>
        
      </ul>
    </div>
   
  </div>




  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Your Rights
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">You have the right to:
</span>
        <br/>

        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Request access to the personal information we hold about you

</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Request correction of inaccurate or incomplete information
</span></li>
        <li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Request deletion of your personal data, subject to legal obligations
</span></li>

<li className="py-2"><span style={{color:'#db2929',fontWeight:'500'}}>Opt out of receiving non-essential communications at any time
</span></li>
        
         <span className="py-2">Requests may be submitted using the contact information provided below.
</span>
        
      </ul>
    </div>
   
  </div>
 


  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Third-Party Links
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">Our website may contain links to external websites or third-party resources.
We are not responsible for the privacy practices or content of those websites. Users are encouraged to review their respective privacy policies.


</span>

 
        
      </ul>
    </div>
   
  </div>



  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
        Changes to This Privacy Policy
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">BMW Steels Ltd. may update this Privacy Policy from time to time to reflect changes in legal requirements, business operations, or website functionality.


</span>

 <span className="py-2">
  The updated policy will be posted on this page with a revised Effective Date.
</span>
        
      </ul>
    </div>
   
  </div>





  <div className="d-lg-flex px-md-5 justifyContentCenter alignItemsCenter">
    <div className="w-100 p-3">
      <h2
        className="pt-md-4 mobile-fonts-heading"
        style={{ fontSize: '35px' }}
      >
       Contact Us
      </h2>
      <ul className="case fs-4">
        
        <span className="py-2">If you have any questions regarding this Privacy Policy or how your information is handled, please contact us:
</span>
<br/>
 <span className="py-2 fw-bold">
  BMW Steels Ltd.
</span>
<br/>

<span className="py-2 ">
  02 Balbir Road, Dalanwala
</span>
<br/>
<span className="py-2">
  Dehradun, Uttarakhand – 248001, India
</span>
<br/>
<br/>
<span className="py-2">
Email:<span className="fw-bold" style={{ fontSize: '20px' }}><br/>sales@bmwsteels.com</span>
</span>
<br/>

<span className="py-2">
 Phone: <span className="fw-bold"> +91-9639017070</span> 
</span>
<br/>

        
      </ul>
    </div>
   
  </div>
 

























  
</div>

{/* Section 1 END */}

{/* Section 2 */}



{/* Section 2 END */}

{/* Section 3 */}





  
        </>
    )
}