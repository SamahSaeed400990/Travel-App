// import React, { useEffect } from 'react'
// import './footer.css'
// import video2 from '../../Assets/video(2).mp4'
// import { IoIosSend } from "react-icons/io";
// import { MdOutlineTravelExplore } from "react-icons/md";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
// import { FaTripadvisor } from "react-icons/fa";
// import { FiChevronRight } from "react-icons/fi";
// import Aos from 'aos';
// import 'aos/dist/aos.css'
// const Footer = () => {
//   useEffect(()=>{

//     Aos.init({duration:2000})
//   },[])
//   return (
//      <section className="footer">
//       <div className="videoDiv">
//         <video src={video2} muted loop autoPlay type='video/mp4'></video>
//       </div>
//       <div className="secContent container">
//         <div className="contactDiv flex">
//           <div data-aos='fade-up' className="text">
//             <small>KEEP IN TOUCH</small>
//             <h2>Travel With Us</h2>
//           </div>
//           <div className="inputDiv flex">
//             <input data-aos='fade-up' type="text" placeholder='Enter Your Email' />
//             <button data-aos='fade-up' className='flex btn' type='submit'>
//              SEND <IoIosSend className='icon'/>
//             </button>
//           </div>
//         </div>
//         <div className="footerCard flex">
//           <div className="footerIntro flex">
//             <div className="logoDiv">
//               <a href="#" className="logo flex">
//               <MdOutlineTravelExplore className='icon'/>  Travel.
//                 </a>
//             </div>
//             <div data-aos='fade-up' className="footerParagraph">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis 
//               totam suscipit nobis eligendi maiores atque doloremque natus quod, velit illo,
//                inventore recusandae excepturi necessitatibus similique quisquam ea. Porro, cum aspernatur.
//             </div>
//             <div data-aos='fade-up' className="footerSocials flex">
//             <FaTwitter className='icon'/>
//             <FaYoutube className='icon'/>
//             <FaInstagram className='icon'/>
//             <FaTripadvisor className='icon'/>
//             </div>
//           </div>
//           <div className="footerLinks grid">
//             <div data-aos='fade-up' data-aos-duration='3000' className="linkGroup">
//               <span className='groupTitle'>
//                 OUR AGANCY
//               </span>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Services
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Insurance
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Agency
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Tourism
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Payment
//               </li>
//             </div>
//             <div data-aos='fade-up' data-aos-duration='4000'  className="linkGroup">
//               <span className='groupTitle'>
//                  PARTNERS
//               </span>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Bookings
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Rentcars
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 HostelWorld
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Tirvago
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 TripAdvisor
//               </li>
//             </div>
//             <div data-aos='fade-up' data-aos-duration='5000' className="linkGroup">
//               <span className='groupTitle'>
//                 LAST MINUTES
//               </span>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 London
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Europe
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Indonesia
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Calirfonia
//               </li>
//               <li className="flex footerList">
//                 <FiChevronRight className='icon' />
//                 Oceania
//               </li>
//             </div>
            

            
//           </div>
//           <div className="footerDiv">
//             <small>BEST TRAVEL WEBSITE TEAM</small>
//             <small>COPYRIGHT RESERVED</small>
//           </div>
//         </div>
//       </div>
//      </section>
//   )
// }

// export default Footer