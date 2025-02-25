import React from "react";
import "./css/contact.css"
import Contactimg from "./img/contact.webp";

const Contact = () => {
  return (
    <div>
      <div className="bg-gray-100 py-12">
        <div className="relative" >
           <img className="w-full h-[700px]" src={Contactimg} alt="" />
                    <div className="absolute inset-0 bg-[#2430d4] opacity-30" >
          
                  </div>
                 <div className="absolute inset-0 flex  justify-between items-center text-center mb-12">

                 <div >
                   <h2 className="text-6xl font-bold text-gray-100 px-20">
                   Get in touch
              </h2>
               <p className="mt-4 text-4xl font-bold text-gray-100 px-20">
               If you would like to find out more about how we can help you, please give us a call or drop us an email. We welcome your comments and suggestions about this website and/or any other issues that you wish to raise.
               </p>
                </div>
          <div>

          </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
              Contact Us
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              We’d love to hear from you! Reach out with any questions.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div className="">
          
            <form className="form">
  <div className="flex-column">
    <label>Name</label>
  </div>
  <div className="inputForm">
    <svg
      height="60"
      viewBox="0 -9 32 32"
      width="40"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_3" data-name="Layer 3">
        <path
          d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1z"
        ></path>
      </g>
    </svg>
    <input type="text" className="input" placeholder="Enter your Name" />
  </div>
  <div className="flex-column">
    <label>Email</label>
  </div>
  <div className="inputForm">
    <svg
      height="20"
      viewBox="0 0 32 32"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Layer_3" data-name="Layer 3">
        <path
          d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z"
        ></path>
      </g>
    </svg>
    <input type="text" className="input" placeholder="Enter your Email" />
  </div>

  <div className="flex-column">
    <label>Message</label>
  </div>
  <div className="inputForm">
  
    <textarea type="text" className="input" placeholder="Enter your Message" />
  </div>

  <button className="button-submit">Sign Up</button>
  <p className="p">
    Already have an account? <span className="span">login</span>
  </p>
  <div className="flex-row">
    <button className="btn google">
      <svg
        version="1.1"
        width="20"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        style={{ enableBackground: 'new 0 0 512 512' }}
        xmlSpace="preserve"
      >
        <path
          style={{ fill: '#FBBB00' }}
          d="M113.47,309.408L95.648,375.94l-65.139,1.378C11.042,341.211,0,299.9,0,256 c0-42.451,10.324-82.483,28.624-117.732h0.014l57.992,10.632l25.404,57.644c-5.317,15.501-8.215,32.141-8.215,49.456 C103.821,274.792,107.225,292.797,113.47,309.408z"
        ></path>
        <path
          style={{ fill: '#518EF8' }}
          d="M507.527,208.176C510.467,223.662,512,239.655,512,256c0,18.328-1.927,36.206-5.598,53.451 c-12.462,58.683-45.025,109.925-90.134,146.187l-0.014-0.014l-73.044-3.727l-10.338-64.535 c29.932-17.554,53.324-45.025,65.646-77.911h-136.89V208.176h138.887L507.527,208.176L507.527,208.176z"
        ></path>
        <path
          style={{ fill: '#28B446' }}
          d="M416.253,455.624l0.014,0.014C372.396,490.901,316.666,512,256,512 c-97.491,0-182.252-54.491-225.491-134.681l82.961-67.91c21.619,57.698,77.278,98.771,142.53,98.771 c28.047,0,54.323-7.582,76.87-20.818L416.253,455.624z"
        ></path>
        <path
          style={{ fill: '#F14336' }}
          d="M419.404,58.936l-82.933,67.896c-23.335-14.586-50.919-23.012-80.471-23.012 c-66.729,0-123.429,42.957-143.965,102.724l-83.397-68.276h-0.014C71.23,56.123,157.06,0,256,0 C318.115,0,375.068,22.126,419.404,58.936z"
        ></path>
      </svg>
      Google
    </button>
  </div>
</form>



            </div>

            {/* Contact Info */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800">
                Our Contact Details
              </h3>
              <p className="mt-4 text-gray-600">
                Feel free to get in touch with us through the following
                channels:
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📍</span>
                  <p className="text-gray-700">
                    123 Main Street, City, Country
                  </p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📧</span>
                  <p className="text-gray-700">contact@yourcompany.com</p>
                </div>

                <div className="flex items-center space-x-4">
                  <span className="text-blue-500">📞</span>
                  <p className="text-gray-700">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
