// // import React, { useEffect, useRef, useState } from 'react';

// // // --- Header Component ---
// // const Header = () => {
// //   return (
// //     <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm py-4 px-6 md:px-12">
// //       <nav className="container mx-auto flex justify-between items-center">
// //         <a href="#hero" className="text-xl font-bold text-gray-800 hover:text-blue-700 transition-colors">
// //           Abhinash
// //         </a>
// //         <ul className="hidden md:flex space-x-8">
// //           <li><a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">About</a></li>
// //           <li><a href="#skills" className="text-gray-600 hover:text-blue-700 transition-colors">Skills</a></li>
// //           <li><a href="#projects" className="text-gray-600 hover:text-blue-700 transition-colors">Projects</a></li>
// //           <li><a href="#project-launch" className="text-gray-600 hover:text-blue-700 transition-colors">Launch</a></li>
// //           <li><a href="#experience" className="text-gray-600 hover:text-blue-700 transition-colors">Experience</a></li>
// //           <li><a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">Contact</a></li>
// //         </ul>
// //         <button className="md:hidden text-gray-600 focus:outline-none">
// //           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
// //           </svg>
// //         </button>
// //       </nav>
// //     </header>
// //   );
// // };

// // // const Hero = () => {
// // //   const heroRef = useRef(null);
// // //   const titleRef = useRef(null);
// // //   const subtitleRef = useRef(null);
// // //   const buttonRef = useRef(null);
// // //   const animatedShape1 = useRef(null);
// // //   const animatedShape2 = useRef(null);
// // //   const animatedShape3 = useRef(null);
// // //   const profileImageRef = useRef(null);
// // //   const socialIconsRef = useRef(null);

// // //   useEffect(() => {
// // //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// // //       // Register ScrollTrigger
// // //       window.gsap.registerPlugin(window.ScrollTrigger);

// // //       // Title animation with pulse effect
// // //       window.gsap.fromTo(
// // //         titleRef.current,
// // //         { opacity: 0, y: 50, scale: 0.95 },
// // //         { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
// // //       );
// // //       window.gsap.to(titleRef.current, {
// // //         scale: 1.02,
// // //         duration: 2,
// // //         repeat: -1,
// // //         yoyo: true,
// // //         ease: 'sine.inOut',
// // //       });

// // //       // Subtitle animation
// // //       window.gsap.fromTo(
// // //         subtitleRef.current,
// // //         { opacity: 0, y: 50 },
// // //         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
// // //       );

// // //       // Button animation
// // //       window.gsap.fromTo(
// // //         buttonRef.current,
// // //         { opacity: 0, y: 50 },
// // //         { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
// // //       );

// // //       // Profile image animation
// // //       window.gsap.fromTo(
// // //         profileImageRef.current,
// // //         { opacity: 0, scale: 0.8, y: 20 },
// // //         { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
// // //       );

// // //       // Social icons animation (staggered bounce)
// // //       window.gsap.fromTo(
// // //         socialIconsRef.current.children,
// // //         { opacity: 0, y: 20 },
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.8,
// // //           stagger: 0.2,
// // //           ease: 'back.out(1.7)',
// // //           delay: 1,
// // //         }
// // //       );

// // //       // Background parallax
// // //       window.gsap.to(heroRef.current, {
// // //         backgroundPositionY: '20%',
// // //         ease: 'none',
// // //         scrollTrigger: {
// // //           trigger: heroRef.current,
// // //           start: 'top top',
// // //           end: 'bottom top',
// // //           scrub: true,
// // //         },
// // //       });

// // //       // Background gradient animation
// // //       window.gsap.to(heroRef.current, {
// // //         backgroundImage: 'linear-gradient(to bottom right, #CFE2F3, #E0F2F7)',
// // //         duration: 5,
// // //         repeat: -1,
// // //         yoyo: true,
// // //         ease: 'sine.inOut',
// // //       });

// // //       // Shape animations (always running)
// // //       window.gsap.to(animatedShape1.current, {
// // //         y: 30,
// // //         x: 15,
// // //         rotation: 360,
// // //         duration: 4,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //       });
// // //       window.gsap.to(animatedShape2.current, {
// // //         y: -20,
// // //         x: -15,
// // //         rotation: -360,
// // //         duration: 5,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //         delay: 0.5,
// // //       });
// // //       window.gsap.to(animatedShape3.current, {
// // //         y: 25,
// // //         x: 10,
// // //         scale: 1.2,
// // //         duration: 3,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //         delay: 1,
// // //       });
// // //     } else {
// // //       console.warn('GSAP or ScrollTrigger not loaded. Animations may not work.');
// // //     }
// // //   }, []);

// // //   return (
// // //     <section
// // //       id="hero"
// // //       ref={heroRef}
// // //       className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden"
// // //       style={{
// // //         backgroundImage: 'linear-gradient(to bottom right, #E0F2F7, #CFE2F3)',
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //       }}
// // //     >
// // //       <div className="absolute inset-0 bg-black opacity-0"></div>
// // //       {/* Animated Shapes */}
// // //       <div
// // //         ref={animatedShape1}
// // //         className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30"
// // //       ></div>
// // //       <div
// // //         ref={animatedShape2}
// // //         className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30"
// // //       ></div>
// // //       <div
// // //         ref={animatedShape3}
// // //         className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-30"
// // //       ></div>

// // //       <div className="relative z-10 p-6 max-w-4xl mx-auto">
// // //         {/* Profile Image */}
// // //         <div className="mb-8">
// // //           <img
// // //             ref={profileImageRef}
// // //             src="image/a.jpeg"
// // //             alt="Abhinash Profile"
// // //             className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
// // //           />
// // //         </div>

// // //         {/* Title */}
// // //         <h1
// // //           ref={titleRef}
// // //           className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-sans tracking-tight text-gray-800"
// // //         >
// // //           Hello, I'm Abhinash
// // //         </h1>

// // //         {/* Subtitle */}
// // //         <p
// // //           ref={subtitleRef}
// // //           className="text-lg md:text-2xl mb-8 font-light text-gray-600"
// // //         >
// // //           Mern Stack Developer<br></br>
// // //           MCA Graduate with Hands-on Experience in Full-Stack Development.
// // //         </p>

// // //         {/* Button */}
// // //         <a
// // //           href="#projects"
// // //           ref={buttonRef}
// // //           className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //           aria-label="View my projects"
// // //         >
// // //           View My Work
// // //         </a>

// // //         {/* Social Links */}
// // //         <div
// // //           ref={socialIconsRef}
// // //           className="mt-8 flex justify-center space-x-6"
// // //           role="navigation"
// // //           aria-label="Social media links"
// // //         >
// // //           <a
// // //             href="mailto:abhinash.wedev@gmail.com"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="Email"
// // //             aria-label="Email Abhinash"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 20 20"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// // //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// // //             </svg>
// // //           </a>
// // //           <a
// // //             href="https://github.com/Abhinash02"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="GitHub"
// // //             aria-label="Visit Abhinash's GitHub profile"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 24 24"
// // //               aria-hidden="true"
// // //             >
// // //               <path
// // //                 fillRule="evenodd"
// // //                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.084.636-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.087.389-1.979 1.029-2.674-.103-.253-.446-1.268.099-2.64 0 0 .84-.268 2.75 1.025A9.439 9.439 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.695 1.029 1.587 1.029 2.674 0 3.823-2.339 4.675-4.566 4.922.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .264.18.573.684.479C19.137 20.219 22 16.464 22 12.017 22 6.484 17.523 2 12 2Z"
// // //                 clipRule="evenodd"
// // //               />
// // //             </svg>
// // //           </a>
// // //           <a
// // //             href="https://www.linkedin.com/in/abhinash99/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="LinkedIn"
// // //             aria-label="Visit Abhinash's LinkedIn profile"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 24 24"
// // //               aria-hidden="true"
// // //             >
// // //               <path d="M0 0h24v24H0z" fill="none"></path>
// // //               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
// // //             </svg>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };



// // // const Hero = () => {
// // //   const heroRef = useRef(null);
// // //   const titleRef = useRef(null);
// // //   const subtitleRef = useRef(null);
// // //   const subtitleLine1Ref = useRef(null);
// // //   const subtitleLine2Ref = useRef(null);
// // //   const buttonRef = useRef(null);
// // //   const animatedShape1 = useRef(null);
// // //   const animatedShape2 = useRef(null);
// // //   const animatedShape3 = useRef(null);
// // //   const profileImageRef = useRef(null);
// // //   const socialIconsRef = useRef(null);

// // //   useEffect(() => {
// // //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// // //       window.gsap.registerPlugin(window.ScrollTrigger);

// // //       // Title animation with pulse effect
// // //       window.gsap.fromTo(
// // //         titleRef.current,
// // //         { opacity: 0, y: 50, scale: 0.95 },
// // //         { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
// // //       );
// // //       window.gsap.to(titleRef.current, {
// // //         scale: 1.02,
// // //         duration: 2,
// // //         repeat: -1,
// // //         yoyo: true,
// // //         ease: 'sine.inOut',
// // //       });

// // //       // Subtitle container animation (fade and slide up)
// // //       window.gsap.fromTo(
// // //         subtitleRef.current,
// // //         { opacity: 0, y: 50 },
// // //         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
// // //       );

// // //       // Typewriter effect for subtitle lines
// // //       if (typeof window.gsap.TextPlugin !== 'undefined') {
// // //         window.gsap.registerPlugin(window.gsap.TextPlugin);
// // //         window.gsap.to(subtitleLine1Ref.current, {
// // //           text: { value: 'Mern Stack Developer', delimiter: '' },
// // //           duration: 1.5,
// // //           delay: 0.5,
// // //           ease: 'none',
// // //         });
// // //         window.gsap.to(subtitleLine2Ref.current, {
// // //           text: { value: 'MCA Graduate with Hands-on Experience in Full-Stack Development', delimiter: '' },
// // //           duration: 2,
// // //           delay: 2,
// // //           ease: 'none',
// // //         });
// // //       } else {
// // //         console.warn('GSAP TextPlugin not loaded. Typewriter animation will be skipped.');
// // //         if (subtitleLine1Ref.current) subtitleLine1Ref.current.textContent = 'Mern Stack Developer';
// // //         if (subtitleLine2Ref.current)
// // //           subtitleLine2Ref.current.textContent = 'MCA Graduate with Hands-on Experience in Full-Stack Development';
// // //       }

// // //       // Button animation
// // //       window.gsap.fromTo(
// // //         buttonRef.current,
// // //         { opacity: 0, y: 50 },
// // //         { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
// // //       );

// // //       // Profile image animation
// // //       window.gsap.fromTo(
// // //         profileImageRef.current,
// // //         { opacity: 0, scale: 0.8, y: 20 },
// // //         { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
// // //       );

// // //       // Social icons animation (staggered bounce)
// // //       window.gsap.fromTo(
// // //         socialIconsRef.current.children,
// // //         { opacity: 0, y: 20 },
// // //         {
// // //           opacity: 1,
// // //           y: 0,
// // //           duration: 0.8,
// // //           stagger: 0.2,
// // //           ease: 'back.out(1.7)',
// // //           delay: 1,
// // //         }
// // //       );

// // //       // Background parallax
// // //       window.gsap.to(heroRef.current, {
// // //         backgroundPositionY: '20%',
// // //         ease: 'none',
// // //         scrollTrigger: {
// // //           trigger: heroRef.current,
// // //           start: 'top top',
// // //           end: 'bottom top',
// // //           scrub: true,
// // //         },
// // //       });

// // //       // Background gradient animation
// // //       window.gsap.to(heroRef.current, {
// // //         backgroundImage: 'linear-gradient(to bottom right, #CFE2F3, #E0F2F7)',
// // //         duration: 5,
// // //         repeat: -1,
// // //         yoyo: true,
// // //         ease: 'sine.inOut',
// // //       });

// // //       // Shape animations
// // //       window.gsap.to(animatedShape1.current, {
// // //         y: 30,
// // //         x: 15,
// // //         rotation: 360,
// // //         duration: 4,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //       });
// // //       window.gsap.to(animatedShape2.current, {
// // //         y: -20,
// // //         x: -15,
// // //         rotation: -360,
// // //         duration: 5,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //         delay: 0.5,
// // //       });
// // //       window.gsap.to(animatedShape3.current, {
// // //         y: 25,
// // //         x: 10,
// // //         scale: 1.2,
// // //         duration: 3,
// // //         ease: 'power1.inOut',
// // //         repeat: -1,
// // //         yoyo: true,
// // //         delay: 1,
// // //       });
// // //     } else {
// // //       console.warn('GSAP or ScrollTrigger not loaded. Animations may not work.');
// // //     }
// // //   }, []);

// // //   return (
// // //     <section
// // //       id="hero"
// // //       ref={heroRef}
// // //       className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden"
// // //       style={{
// // //         backgroundImage: 'linear-gradient(to bottom right, #E0F2F7, #CFE2F3)',
// // //         backgroundSize: 'cover',
// // //         backgroundPosition: 'center',
// // //       }}
// // //     >
// // //       <div className="absolute inset-0 bg-black opacity-0"></div>
// // //       <div
// // //         ref={animatedShape1}
// // //         className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30"
// // //       ></div>
// // //       <div
// // //         ref={animatedShape2}
// // //         className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30"
// // //       ></div>
// // //       <div
// // //         ref={animatedShape3}
// // //         className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-30"
// // //       ></div>

// // //       <div className="relative z-10 p-6 max-w-4xl mx-auto">
// // //         <div className="mb-8">
// // //           <img
// // //             ref={profileImageRef}
// // //             src="image/a.jpeg"
// // //             alt="Abhinash Profile"
// // //             className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
// // //             onError={(e) => {
// // //               e.target.onerror = null;
// // //               e.target.src = 'https://placehold.co/160x160/FFFFFF/000000?text=Profile';
// // //             }}
// // //           />
// // //         </div>
// // //         <h1
// // //           ref={titleRef}
// // //           className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-sans tracking-tight text-gray-800"
// // //         >
// // //           Hello, I'm Abhinash
// // //         </h1>
// // //         <p
// // //           ref={subtitleRef}
// // //           className="text-lg md:text-2xl mb-8 font-light text-gray-600"
// // //         >
// // //           <span ref={subtitleLine1Ref} className="block"></span>
// // //           <span ref={subtitleLine2Ref} className="block"></span>
// // //         </p>
// // //         <a
// // //           href="#projects"
// // //           ref={buttonRef}
// // //           className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// // //           aria-label="View my projects"
// // //         >
// // //           View My Work
// // //         </a>
// // //         <div
// // //           ref={socialIconsRef}
// // //           className="mt-8 flex justify-center space-x-6"
// // //           role="navigation"
// // //           aria-label="Social media links"
// // //         >
// // //           <a
// // //             href="mailto:abhinash.wedev@gmail.com"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="Email"
// // //             aria-label="Email Abhinash"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 20 20"
// // //               xmlns="http://www.w3.org/2000/svg"
// // //             >
// // //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// // //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// // //             </svg>
// // //           </a>
// // //           <a
// // //             href="https://github.com/Abhinash02"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="GitHub"
// // //             aria-label="Visit Abhinash's GitHub profile"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 24 24"
// // //               aria-hidden="true"
// // //             >
// // //               <path
// // //                 fillRule="evenodd"
// // //                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.084.636-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.087.389-1.979 1.029-2.674-.103-.253-.446-1.268.099-2.64 0 0 .84-.268 2.75 1.025A9.439 9.439 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.695 1.029 1.587 1.029 2.674 0 3.823-2.339 4.675-4.566 4.922.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .264.18.573.684.479C19.137 20.219 22 16.464 22 12.017 22 6.484 17.523 2 12 2Z"
// // //                 clipRule="evenodd"
// // //               />
// // //             </svg>
// // //           </a>
// // //           <a
// // //             href="https://www.linkedin.com/in/abhinash99/"
// // //             target="_blank"
// // //             rel="noopener noreferrer"
// // //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// // //             title="LinkedIn"
// // //             aria-label="Visit Abhinash's LinkedIn profile"
// // //           >
// // //             <svg
// // //               className="w-8 h-8"
// // //               fill="currentColor"
// // //               viewBox="0 0 24 24"
// // //               aria-hidden="true"
// // //             >
// // //               <path d="M0 0h24v24H0z" fill="none"></path>
// // //               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
// // //             </svg>
// // //           </a>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // const Hero = () => {
// //   const heroRef = useRef(null);
// //   const titleRef = useRef(null);
// //   const subtitleRef = useRef(null);
// //   const subtitleLine1Ref = useRef(null);
// //   const subtitleLine2Ref = useRef(null);
// //   const buttonRef = useRef(null);
// //   const animatedShape1 = useRef(null);
// //   const animatedShape2 = useRef(null);
// //   const animatedShape3 = useRef(null);
// //   const profileImageRef = useRef(null);
// //   const socialIconsRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.registerPlugin(window.ScrollTrigger);

// //       // Title animation with pulse effect
// //       window.gsap.fromTo(
// //         titleRef.current,
// //         { opacity: 0, y: 50, scale: 0.95 },
// //         { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
// //       );
// //       window.gsap.to(titleRef.current, {
// //         scale: 1.02,
// //         duration: 2,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //       });

// //       // Subtitle container animation (fade and slide up)
// //       window.gsap.fromTo(
// //         subtitleRef.current,
// //         { opacity: 0, y: 50 },
// //         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
// //       );

// //       // Typewriter effect for subtitle lines
// //       if (typeof window.gsap.TextPlugin !== 'undefined') {
// //         window.gsap.registerPlugin(window.gsap.TextPlugin);
// //         window.gsap.to(subtitleLine1Ref.current, {
// //           text: { value: 'Mern Stack Developer', delimiter: '' },
// //           duration: 1.5,
// //           delay: 0.5,
// //           ease: 'none',
// //         });
// //         window.gsap.to(subtitleLine2Ref.current, {
// //           text: { value: 'MCA Graduate with Hands-on Experience in Full-Stack Development', delimiter: '' },
// //           duration: 2,
// //           delay: 2,
// //           ease: 'none',
// //         });
// //       } else {
// //         console.warn('GSAP TextPlugin not loaded. Typewriter animation will be skipped.');
// //         if (subtitleLine1Ref.current) subtitleLine1Ref.current.textContent = 'Mern Stack Developer';
// //         if (subtitleLine2Ref.current)
// //           subtitleLine2Ref.current.textContent = 'MCA Graduate with Hands-on Experience in Full-Stack Development';
// //       }

// //       // Button animation with pulsating glow
// //       window.gsap.fromTo(
// //         buttonRef.current,
// //         { opacity: 0, y: 50 },
// //         { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
// //       );
// //       window.gsap.to(buttonRef.current, {
// //         boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
// //         duration: 1.5,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //         delay: 1.6,
// //       });
// //       // Button hover effect
// //       const button = buttonRef.current;
// //       button.addEventListener('mouseenter', () =>
// //         window.gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
// //       );
// //       button.addEventListener('mouseleave', () =>
// //         window.gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' })
// //       );

// //       // Profile image animation with continuous subtle rotation
// //       window.gsap.fromTo(
// //         profileImageRef.current,
// //         { opacity: 0, scale: 0.8, y: 20 },
// //         { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
// //       );
// //       window.gsap.to(profileImageRef.current, {
// //         rotation: 5,
// //         duration: 2,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //         delay: 1.8,
// //       });

// //       // Social icons animation with continuous bounce and hover
// //       window.gsap.fromTo(
// //         socialIconsRef.current.children,
// //         { opacity: 0, y: 20 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: 'back.out(1.7)',
// //           delay: 1,
// //         }
// //       );
// //       window.gsap.to(socialIconsRef.current.children, {
// //         y: -5,
// //         duration: 1,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //         stagger: 0.2,
// //         delay: 1.8,
// //       });
// //       // Social icons hover effect
// //       const icons = socialIconsRef.current.children;
// //       Array.from(icons).forEach((icon) => {
// //         icon.addEventListener('mouseenter', () =>
// //           window.gsap.to(icon, {
// //             scale: 1.2,
// //             color: '#1E40AF',
// //             duration: 0.3,
// //             ease: 'power2.out',
// //           })
// //         );
// //         icon.addEventListener('mouseleave', () =>
// //           window.gsap.to(icon, {
// //             scale: 1,
// //             color: '#1F2937',
// //             duration: 0.3,
// //             ease: 'power2.out',
// //           })
// //         );
// //       });

// //       // Background parallax
// //       window.gsap.to(heroRef.current, {
// //         backgroundPositionY: '20%',
// //         ease: 'none',
// //         scrollTrigger: {
// //           trigger: heroRef.current,
// //           start: 'top top',
// //           end: 'bottom top',
// //           scrub: true,
// //         },
// //       });

// //       // Background gradient animation
// //       window.gsap.to(heroRef.current, {
// //         backgroundImage: 'linear-gradient(to bottom right, #CFE2F3, #E0F2F7)',
// //         duration: 5,
// //         repeat: -1,
// //         yoyo: true,
// //         ease: 'sine.inOut',
// //       });

// //       // Shape animations
// //       window.gsap.to(animatedShape1.current, {
// //         y: 30,
// //         x: 15,
// //         rotation: 360,
// //         duration: 4,
// //         ease: 'power1.inOut',
// //         repeat: -1,
// //         yoyo: true,
// //       });
// //       window.gsap.to(animatedShape2.current, {
// //         y: -20,
// //         x: -15,
// //         rotation: -360,
// //         duration: 5,
// //         ease: 'power1.inOut',
// //         repeat: -1,
// //         yoyo: true,
// //         delay: 0.5,
// //       });
// //       window.gsap.to(animatedShape3.current, {
// //         y: 25,
// //         x: 10,
// //         scale: 1.2,
// //         duration: 3,
// //         ease: 'power1.inOut',
// //         repeat: -1,
// //         yoyo: true,
// //         delay: 1,
// //       });

// //       // Cleanup event listeners
// //       return () => {
// //         if (button) {
// //           button.removeEventListener('mouseenter', () => {});
// //           button.removeEventListener('mouseleave', () => {});
// //         }
// //         Array.from(icons).forEach((icon) => {
// //           icon.removeEventListener('mouseenter', () => {});
// //           icon.removeEventListener('mouseleave', () => {});
// //         });
// //       };
// //     } else {
// //       console.warn('GSAP or ScrollTrigger not loaded. Animations may not work.');
// //     }
// //   }, []);

// //   return (
// //     <section
// //       id="hero"
// //       ref={heroRef}
// //       className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden"
// //       style={{
// //         backgroundImage: 'linear-gradient(to bottom right, #E0F2F7, #CFE2F3)',
// //         backgroundSize: 'cover',
// //         backgroundPosition: 'center',
// //       }}
// //     >
// //       <div className="absolute inset-0 bg-black opacity-0"></div>
// //       <div
// //         ref={animatedShape1}
// //         className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30"
// //       ></div>
// //       <div
// //         ref={animatedShape2}
// //         className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30"
// //       ></div>
// //       <div
// //         ref={animatedShape3}
// //         className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-30"
// //       ></div>

// //       <div className="relative z-10 p-6 max-w-4xl mx-auto">
// //         <div className="mb-8">
// //           <img
// //             ref={profileImageRef}
// //             src="image/a.jpeg"
// //             alt="Abhinash Profile"
// //             className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
// //             onError={(e) => {
// //               e.target.onerror = null;
// //               e.target.src = 'https://placehold.co/160x160/FFFFFF/000000?text=Profile';
// //             }}
// //           />
// //         </div>
// //         <h1
// //           ref={titleRef}
// //           className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-sans tracking-tight text-gray-800"
// //         >
// //           Hello, I'm Abhinash
// //         </h1>
// //         <p
// //           ref={subtitleRef}
// //           className="text-lg md:text-2xl mb-8 font-light text-gray-600"
// //         >
// //           <span ref={subtitleLine1Ref} className="block"></span>
// //           <span ref={subtitleLine2Ref} className="block"></span>
// //         </p>
// //         <a
// //           href="#projects"
// //           ref={buttonRef}
// //           className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
// //           aria-label="View my projects"
// //         >
// //           View My Work
// //         </a>
// //         <div
// //           ref={socialIconsRef}
// //           className="mt-8 flex justify-center space-x-6"
// //           role="navigation"
// //           aria-label="Social media links"
// //         >
// //           <a
// //             href="mailto:abhinash.wedev@gmail.com"
// //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// //             title="Email"
// //             aria-label="Email Abhinash"
// //           >
// //             <svg
// //               className="w-8 h-8"
// //               fill="currentColor"
// //               viewBox="0 0 20 20"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
// //               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
// //             </svg>
// //           </a>
// //           <a
// //             href="https://github.com/Abhinash02"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// //             title="GitHub"
// //             aria-label="Visit Abhinash's GitHub profile"
// //           >
// //             <svg
// //               className="w-8 h-8"
// //               fill="currentColor"
// //               viewBox="0 0 24 24"
// //               aria-hidden="true"
// //             >
// //               <path
// //                 fillRule="evenodd"
// //                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.084.636-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.087.389-1.979 1.029-2.674-.103-.253-.446-1.268.099-2.64 0 0 .84-.268 2.75 1.025A9.439 9.439 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.695 1.029 1.587 1.029 2.674 0 3.823-2.339 4.675-4.566 4.922.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .264.18.573.684.479C19.137 20.219 22 16.464 22 12.017 22 6.484 17.523 2 12 2Z"
// //                 clipRule="evenodd"
// //               />
// //             </svg>
// //           </a>
// //           <a
// //             href="https://www.linkedin.com/in/abhinash99/"
// //             target="_blank"
// //             rel="noopener noreferrer"
// //             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
// //             title="LinkedIn"
// //             aria-label="Visit Abhinash's LinkedIn profile"
// //           >
// //             <svg
// //               className="w-8 h-8"
// //               fill="currentColor"
// //               viewBox="0 0 24 24"
// //               aria-hidden="true"
// //             >
// //               <path d="M0 0h24v24H0z" fill="none"></path>
// //               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
// //             </svg>
// //           </a>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- About Component ---
// // const About = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   return (
// //     <section id="about" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
// //       <div className="container mx-auto max-w-4xl">
// //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
// //           <div>
// //             <h3 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h3>
// //             <p className="text-gray-600 leading-relaxed">
// //               MCA graduate with hands-on experience in full-stack development, skilled in both front-end and back-end technologies.
// //               Seeking an entry-level role to build user-friendly web applications and contribute to innovative projects while continuing to learn and grow.
// //             </p>
// //           </div>
// //           <div>
// //             <h3 className="text-2xl font-semibold text-gray-700 mb-4">Education</h3>
// //             <div className="mb-6">
// //               <h4 className="text-xl font-medium text-gray-800">MASTER OF COMPUTER SCIENCE (MCA)</h4>
// //               <p className="text-gray-600">PUNJABI UNIVERSITY, PATIALA (On Campus)</p>
// //               <p className="text-gray-500 text-sm">CGPA 7.78</p>
// //             </div>
// //             <div>
// //               <h4 className="text-xl font-medium text-gray-800">BACHELOR OF COMPUTER SCIENCE (BCA)</h4>
// //               <p className="text-gray-600">PANJAB UNIVERSITY, CHANDHIGARH</p>
// //               <p className="text-gray-500 text-sm">Percentage 82%</p>
// //             </div>
// //           </div>
// //         </div>
// //         <div className="mt-12">
// //           <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Soft Skills</h3>
// //           <ul className="flex flex-wrap justify-center gap-4 text-gray-600">
// //             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Active learner</li>
// //             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Logical thinker</li>
// //             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Team collaboration</li>
// //             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Clear communication</li>
// //           </ul>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Skills Component ---
// // const Skills = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   const skillCategories = {
// //     Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
// //     Backend: ["Node.js", "Express.js", "REST APIs", "CORS", "WebSockets (Socket.IO)"],
// //     Database: ["MongoDB Atlas", "Mongoose"],
// //     Authentication: ["Auth.js", "JWT"],
// //     "Dev Tools": ["Git", "GitHub", "Postman", "Thunder Client"],
// //     "Other Tools & APIs": ["Stripe (Payments)", "Resend (Email)", "Cloudinary (Media Storage)"],
// //   };

// //   return (
// //     <section id="skills" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
// //       <div className="container mx-auto max-w-4xl">
// //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
// //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //           {Object.entries(skillCategories).map(([category, skills], index) => (
// //             <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
// //               <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
// //               <ul className="space-y-2">
// //                 {skills.map((skill, skillIndex) => (
// //                   <li key={skillIndex} className="flex items-center text-gray-600">
// //                     <svg className="w-4 h-4 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
// //                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
// //                     </svg>
// //                     {skill}
// //                   </li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Projects Component ---
// // const Projects = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   const projects = [
// //     {
// //       title: "DCS PUP Alumni Management Website",
// //       description: [
// //         "Developed and deployed alumni management website using React and Tailwind CSS.",
// //         "Led a 20-member team and designed a database for 50,000+ student records. Integrated alumni login system with MongoDB.",
// //         "Added new features: faculty page, notification page, and full admin panel.",
// //         "Currently expanding it into the main Department of Computer Science website.",
// //       ],
// //       link: "https://dcsalumni.vishalpup.in",
// //       tech: ["React", "Tailwind CSS", "MongoDB"],
// //       images: [
// //          '/image/main.png',
// //         '/image/alumni.png',
// //         '/image/event.png',
// //       ],
// //     },
// //     {
// //       title: "Real-time Chat Application",
// //       description: [
// //         "Built a real-time one-to-one chat app using React, Node.js, Socket.io, and MongoDB.",
// //         "Implemented JWT authentication, typing indicators, seen status, notifications, and chat history.",
// //         "Designed responsive UI with dark mode using Tailwind CSS.",
// //       ],
// //       tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
// //       images: [
// //         "https://placehold.co/600x400/D4EDDA/000000?text=Chat+App+Image+1",
// //         "https://placehold.co/600x400/C3E6CB/000000?text=Chat+App+Image+2",
// //         "https://placehold.co/600x400/B2D8C8/000000?text=Chat+App+Image+3",
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="projects" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
// //       <div className="container mx-auto max-w-4xl">
// //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Selective Projects</h2>
// //         <div className="space-y-12">
// //           {projects.map((project, index) => (
// //             <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
// //               <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
// //               {project.images && project.images.length > 0 && (
// //                 <ProjectImageCarousel images={project.images} />
// //               )}
// //               <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
// //                 {project.description.map((item, itemIndex) => (
// //                   <li key={itemIndex}>{item}</li>
// //                 ))}
// //               </ul>
// //               <div className="flex flex-wrap gap-2 mb-4">
// //                 {project.tech.map((tech, techIndex) => (
// //                   <span key={techIndex} className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
// //                     {tech}
// //                   </span>
// //                 ))}
// //               </div>
// //               {project.link && (
// //                 <a
// //                   href={project.link}
// //                   target="_blank"
// //                   rel="noopener noreferrer"
// //                   className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
// //                 >
// //                   View Project
// //                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
// //                   </svg>
// //                 </a>
// //               )}
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Project Image Carousel Component ---

// // const ProjectImageCarousel = ({ images }) => {
// //   const [currentImageIndex, setCurrentImageIndex] = useState(0);
// //   const imageRef = useRef(null);

// //   useEffect(() => {
// //     const interval = setInterval(() => {
// //       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// //     }, 3000);
// //     return () => clearInterval(interval);
// //   }, [images.length]);

// //   useEffect(() => {
// //     if (imageRef.current && typeof window.gsap !== 'undefined') {
// //       window.gsap.fromTo(
// //         imageRef.current,
// //         { opacity: 0, scale: 0.95 },
// //         { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
// //       );
// //     }
// //   }, [currentImageIndex]);

// //   return (
// //     <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg mb-6 shadow-md bg-gray-200 flex items-center justify-center">
// //       <img
// //         ref={imageRef}
// //         src={images[currentImageIndex]}
// //         alt={`Project screenshot ${currentImageIndex + 1}`}
// //         className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
// //         onError={(e) => {
// //           e.target.onerror = null;
// //           e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error';
// //         }}
// //       />
// //       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
// //         {images.map((_, idx) => (
// //           <span
// //             key={idx}
// //             className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
// //               idx === currentImageIndex ? 'bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'
// //             }`}
// //             onClick={() => setCurrentImageIndex(idx)}
// //           ></span>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };


// // // --- Project Launch Component ---
// // const ProjectLaunch = () => {
// //   const sectionRef = useRef(null);
// //   const abhinashTextRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //       window.gsap.fromTo(abhinashTextRef.current,
// //         { opacity: 0, scale: 0.5 },
// //         {
// //           opacity: 1,
// //           scale: 1,
// //           duration: 1.5,
// //           ease: "elastic.out(1, 0.5)",
// //           scrollTrigger: {
// //             trigger: abhinashTextRef.current,
// //             start: "top 80%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   return (
// //     <section id="project-launch" ref={sectionRef} className="py-20 px-6 md:px-12 bg-blue-800 text-white">
// //       <div className="container mx-auto max-w-4xl text-center">
// //         <h2 className="text-4xl font-bold mb-8">Ready to See My Work in Action?</h2>
// //         <p className="text-lg mb-8">
// //           Check out the live deployment of the DCS PUP Alumni Management Website:
// //         </p>
// //         <a
// //           href="https://dcsalumni.vishalpup.in/"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-block bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg"
// //         >
// //           Launch Project
// //           <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
// //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
// //           </svg>
// //         </a>
// //         <div className="mt-12">
// //           <p ref={abhinashTextRef} className="text-6xl md:text-8xl font-extrabold text-white opacity-0">
// //           </p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Experience Component ---
// // const Experience = () => {
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: "power3.out",
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: "top 75%",
// //             toggleActions: "play none none none",
// //           },
// //         }
// //       );
// //     }
// //   }, []);

// //   const experiences = [
// //     {
// //       title: "MERN Stack Developer Trainee",
// //       company: "Auspicious Soft Pvt. Ltd.",
// //       duration: "Jan 2025 - July 2025",
// //       description: [
// //         "Built full stack web apps using MVC architecture and reusable components, improving dev speed by 40%.",
// //         "Developed secure REST APIs with CRUD operations, Auth.js, JWT, session handling, and validation.",
// //         "Created responsive UIs with Tailwind CSS and real-time chat using WebSockets (Socket.IO).",
// //         "Used Git, Postman, and Thunder Client for version control and API testing.",
// //       ],
// //     },
// //     {
// //       title: "AI Education Trainer",
// //       company: "CSRBOX At Punjab Govt School's",
// //       duration: "15th Jan 2025 - 15th Feb 2025",
// //       description: [
// //         "Conducted training sessions on AI education for students in Punjab Government Schools.",
// //         "Contributed to promoting AI literacy at the grassroots level.",
// //       ],
// //     },
// //   ];

// //   return (
// //     <section id="experience" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
// //       <div className="container mx-auto max-w-4xl">
// //         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
// //         <div className="space-y-12">
// //           {experiences.map((exp, index) => (
// //             <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
// //               <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
// //               <p className="text-blue-700 font-medium mb-1">{exp.company}</p>
// //               <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
// //               <ul className="list-disc list-inside text-gray-600 space-y-1">
// //                 {exp.description.map((item, itemIndex) => (
// //                   <li key={itemIndex}>{item}</li>
// //                 ))}
// //               </ul>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Contact Component ---
// // const Contact = () => {
// //   const sectionRef = useRef(null);
// //   const form = useRef();
// //   const [statusMessage, setStatusMessage] = useState('');
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const shape1Ref = useRef(null);
// //   const shape2Ref = useRef(null);

// //   useEffect(() => {
// //     console.log('Environment Variables:', {
// //       serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
// //       templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
// //       userId: process.env.REACT_APP_EMAILJS_USER_ID,
// //     });

// //     if (typeof window.emailjs !== 'undefined' && process.env.REACT_APP_EMAILJS_USER_ID) {
// //       window.emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
// //       console.log('EmailJS initialized successfully');
// //     } else {
// //       console.error('EmailJS or User ID not available for initialization.');
// //     }

// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.fromTo(
// //         sectionRef.current.children,
// //         { opacity: 0, y: 50 },
// //         {
// //           opacity: 1,
// //           y: 0,
// //           duration: 0.8,
// //           stagger: 0.2,
// //           ease: 'power3.out',
// //           scrollTrigger: {
// //             trigger: sectionRef.current,
// //             start: 'top 75%',
// //             toggleActions: 'play none none none',
// //           },
// //         }
// //       );
// //     }

// //     if (isModalOpen && typeof window.gsap !== 'undefined') {
// //       window.gsap.fromTo(
// //         '.modal-content',
// //         { opacity: 0, scale: 0.8 },
// //         { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
// //       );
// //       if (shape1Ref.current && shape2Ref.current) {
// //         window.gsap.to(shape1Ref.current, {
// //           y: 20,
// //           x: 10,
// //           rotation: 360,
// //           duration: 4,
// //           ease: 'power1.inOut',
// //           repeat: -1,
// //           yoyo: true,
// //         });
// //         window.gsap.to(shape2Ref.current, {
// //           y: -15,
// //           x: -10,
// //           rotation: -360,
// //           duration: 5,
// //           ease: 'power1.inOut',
// //           repeat: -1,
// //           yoyo: true,
// //           delay: 0.5,
// //         });
// //       }
// //     }
// //   }, [isModalOpen]);

// //   const sendEmail = (e) => {
// //     e.preventDefault();
// //     setStatusMessage('Sending...');

// //     const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
// //     const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
// //     const userId = process.env.REACT_APP_EMAILJS_USER_ID;

// //     console.log('Environment Variables in sendEmail:', { serviceId, templateId, userId });

// //     if (typeof window.emailjs !== 'undefined' && serviceId && templateId && userId) {
// //       window.emailjs.sendForm(serviceId, templateId, form.current, userId).then(
// //         (result) => {
// //           console.log('EmailJS Success:', result.text);
// //           setStatusMessage('');
// //           setIsModalOpen(true);
// //           form.current.reset();
// //         },
// //         (error) => {
// //           console.error('EmailJS Error:', error.text);
// //           setStatusMessage('Failed to send message. Please try again later.');
// //           setIsModalOpen(false);
// //         }
// //       );
// //     } else {
// //       setStatusMessage('EmailJS not loaded or environment variables missing. Please check your setup.');
// //       console.error('EmailJS environment variables:', { serviceId, templateId, userId });
// //       setIsModalOpen(false);
// //     }
// //   };

// //   const closeModal = () => {
// //     setIsModalOpen(false);
// //   };

// //   return (
// //     <section id="contact" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
// //       <div className="container mx-auto max-w-2xl text-center">
// //         <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
// //         <p className="text-gray-600 text-lg mb-8">
// //           I'm actively seeking an entry-level role to build user-friendly web applications and contribute to innovative projects.
// //           Feel free to reach out!
// //         </p>
       
// //         <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Me a Message</h3>
// //         <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-md text-left">
// //           <div className="mb-6">
// //             <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">
// //               Name
// //             </label>
// //             <input
// //               type="text"
// //               id="user_name"
// //               name="user_name"
// //               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
// //               placeholder="Your Name"
// //               required
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">
// //               Email
// //             </label>
// //             <input
// //               type="email"
// //               id="user_email"
// //               name="user_email"
// //               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
// //               placeholder="your@example.com"
// //               required
// //             />
// //           </div>
// //           <div className="mb-6">
// //             <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
// //               Message
// //             </label>
// //             <textarea
// //               id="message"
// //               name="message"
// //               rows="5"
// //               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-y"
// //               placeholder="Your message here..."
// //               required
// //             ></textarea>
// //           </div>
// //           <div className="flex items-center justify-center space-x-4">
// //             <button
// //               type="submit"
// //               className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
// //             >
// //               Send Message
// //             </button>
// //             {statusMessage && (
// //               <p className="text-sm text-gray-600">{statusMessage}</p>
// //             )}
// //           </div>
// //         </form>
// //         {isModalOpen && (
// //           <div
// //             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
// //             onClick={closeModal}
// //           >
// //             <div
// //               className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-xl relative modal-content"
// //               onClick={(e) => e.stopPropagation()}
// //             >
// //               <div
// //                 ref={shape1Ref}
// //                 className="absolute top-4 left-4 w-12 h-12 bg-blue-300 rounded-full opacity-30"
// //               ></div>
// //               <div
// //                 ref={shape2Ref}
// //                 className="absolute bottom-4 right-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"
// //               ></div>
// //               <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
// //               <p className="text-gray-600 mb-6">
// //                Thank you for contacting us. Abhinash will contact you shortly!

// //               </p>
// //               <button
// //                 onClick={closeModal}
// //                 className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
// //               >
// //                 Close
// //               </button>
// //             </div>
// //           </div>
// //         )}
// //       </div>
// //     </section>
// //   );
// // };

// // // --- Footer Component ---
// // const Footer = () => {
// //   return (
// //     <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center">
// //       <div className="container mx-auto">
// //         <p>© {new Date().getFullYear()} Abhinash. All rights reserved.</p>
// //         <p className="text-sm mt-2">Built with React, Tailwind CSS, and GSAP.</p>
// //       </div>
// //     </footer>
// //   );
// // };

// // // --- Main App Component ---
// // const App = () => {
// //   useEffect(() => {
// //     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
// //       window.gsap.registerPlugin(window.ScrollTrigger);
// //     }
// //   }, []);

// //   return (
// //     <div className="font-sans antialiased text-gray-900">
// //       <Header />
// //       <main>
// //         <Hero />
// //         <About />
// //         <Skills />
// //         <Projects />
// //         <ProjectLaunch />
// //         <Experience />
// //         <Contact />
// //       </main>
// //       <Footer />
// //     </div>
// //   );
// // };

// // export default App;



// import React, { useEffect, useRef, useState } from 'react';

// // --- Header Component ---
// const Header = () => {
//   const navRef = useRef(null);
//   const logoRef = useRef(null);
//   const navLinksRef = useRef(null);
//   const hamburgerRef = useRef(null);
//   const mobileMenuRef = useRef(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     console.log('isMenuOpen:', isMenuOpen); // Debug state changes

//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.registerPlugin(window.ScrollTrigger);

//       // Logo animation
//       window.gsap.fromTo(
//         logoRef.current,
//         { opacity: 0, x: -50 },
//         { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
//       );

//       // Nav links animation (desktop)
//       if (navLinksRef.current) {
//         window.gsap.fromTo(
//           navLinksRef.current.children,
//           { opacity: 0, y: 20 },
//           {
//             opacity: 1,
//             y: 0,
//             duration: 0.8,
//             stagger: 0.2,
//             ease: 'power3.out',
//             delay: 0.3,
//           }
//         );
//       }

//       // Hamburger icon animation
//       window.gsap.fromTo(
//         hamburgerRef.current,
//         { scale: 0.8, rotation: -90 },
//         { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
//       );
//     } else {
//       console.warn('GSAP or ScrollTrigger not loaded. Using CSS fallback.');
//     }

//     // Cleanup
//     return () => {
//       console.log('Cleaning up Header useEffect');
//     };
//   }, [isMenuOpen]);

//   const toggleMenu = (e) => {
//     e.stopPropagation();
//     console.log('toggleMenu called, current isMenuOpen:', isMenuOpen);
//     setIsMenuOpen((prev) => !prev);
//   };

//   const closeMenu = (e) => {
//     e.stopPropagation();
//     console.log('closeMenu called');
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 shadow-sm py-4 px-6 md:px-12">
//       <nav className="container mx-auto flex justify-between items-center">
//         <a
//           href="#hero"
//           ref={logoRef}
//           className="text-xl font-bold text-white hover:text-blue-200 transition-colors"
//         >
//           Abhinash
//         </a>
//         <ul ref={navLinksRef} className="hidden md:flex space-x-8">
//           {['About', 'Skills', 'Projects', 'Launch', 'Experience', 'Contact'].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-200 hover:text-white transition-colors"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//         <button
//           ref={hamburgerRef}
//           className="md:hidden text-white hover:text-blue-200 focus:outline-none z-50"
//           onClick={toggleMenu}
//           aria-label="Toggle mobile menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
//           </svg>
//         </button>
//       </nav>
//       {/* Mobile Menu */}
//       <div
//         ref={mobileMenuRef}
//         className={`fixed top-0 right-0 h-full w-64 bg-blue-800/95 backdrop-blur-md z-50 transition-all duration-300 ease-in-out md:hidden pointer-events-auto ${
//           isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4 text-white hover:text-blue-200 focus:outline-none z-50"
//           onClick={closeMenu}
//           aria-label="Close mobile menu"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//           </svg>
//         </button>
//         <ul className="flex flex-col items-center justify-center h-full space-y-6 text-gray-200">
//           {['About', 'Skills', 'Projects', 'Launch', 'Experience', 'Contact'].map((item) => (
//             <li key={item}>
//               <a
//                 href={`#${item.toLowerCase()}`}
//                 className="text-lg hover:text-white transition-colors"
//                 onClick={closeMenu}
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </header>
//   );
// };

// // --- Hero Component ---
// const Hero = () => {
//   const heroRef = useRef(null);
//   const titleRef = useRef(null);
//   const subtitleRef = useRef(null);
//   const subtitleLine1Ref = useRef(null);
//   const subtitleLine2Ref = useRef(null);
//   const buttonRef = useRef(null);
//   const animatedShape1 = useRef(null);
//   const animatedShape2 = useRef(null);
//   const animatedShape3 = useRef(null);
//   const profileImageRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.registerPlugin(window.ScrollTrigger);

//       // Title animation with pulse effect
//       window.gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 50, scale: 0.95 },
//         { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
//       );
//       window.gsap.to(titleRef.current, {
//         scale: 1.02,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//       });

//       // Subtitle container animation
//       window.gsap.fromTo(
//         subtitleRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
//       );

//       // Typewriter effect for subtitle
//       if (typeof window.gsap.TextPlugin !== 'undefined') {
//         window.gsap.registerPlugin(window.gsap.TextPlugin);
//         window.gsap.to(subtitleLine1Ref.current, {
//           text: { value: 'Mern Stack Developer', delimiter: '' },
//           duration: 1.5,
//           delay: 0.5,
//           ease: 'none',
//         });
//         window.gsap.to(subtitleLine2Ref.current, {
//           text: { value: 'MCA Graduate with Hands-on Experience in Full-Stack Development', delimiter: '' },
//           duration: 2,
//           delay: 2,
//           ease: 'none',
//         });
//       } else {
//         console.warn('GSAP TextPlugin not loaded.');
//         if (subtitleLine1Ref.current) subtitleLine1Ref.current.textContent = 'Mern Stack Developer';
//         if (subtitleLine2Ref.current)
//           subtitleLine2Ref.current.textContent = 'MCA Graduate with Hands-on Experience in Full-Stack Development';
//       }

//       // Button animation
//       window.gsap.fromTo(
//         buttonRef.current,
//         { opacity: 0, y: 50 },
//         { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
//       );
//       window.gsap.to(buttonRef.current, {
//         boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
//         duration: 1.5,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: 1.6,
//       });
//       const button = buttonRef.current;
//       button.addEventListener('mouseenter', () =>
//         window.gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
//       );
//       button.addEventListener('mouseleave', () =>
//         window.gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' })
//       );

//       // Profile image animation
//       window.gsap.fromTo(
//         profileImageRef.current,
//         { opacity: 0, scale: 0.8, y: 20 },
//         { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
//       );
//       window.gsap.to(profileImageRef.current, {
//         rotation: 5,
//         duration: 2,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         delay: 1.8,
//       });

//       // Social icons animation
//       window.gsap.fromTo(
//         socialIconsRef.current.children,
//         { opacity: 0, y: 20 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: 'back.out(1.7)',
//           delay: 1,
//         }
//       );
//       window.gsap.to(socialIconsRef.current.children, {
//         y: -5,
//         duration: 1,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//         stagger: 0.2,
//         delay: 1.8,
//       });
//       const icons = socialIconsRef.current.children;
//       Array.from(icons).forEach((icon) => {
//         icon.addEventListener('mouseenter', () =>
//           window.gsap.to(icon, {
//             scale: 1.2,
//             color: '#1E40AF',
//             duration: 0.3,
//             ease: 'power2.out',
//           })
//         );
//         icon.addEventListener('mouseleave', () =>
//           window.gsap.to(icon, {
//             scale: 1,
//             color: '#1F2937',
//             duration: 0.3,
//             ease: 'power2.out',
//           })
//         );
//       });

//       // Background parallax
//       window.gsap.to(heroRef.current, {
//         backgroundPositionY: '20%',
//         ease: 'none',
//         scrollTrigger: {
//           trigger: heroRef.current,
//           start: 'top top',
//           end: 'bottom top',
//           scrub: true,
//         },
//       });

//       // Background gradient animation
//       window.gsap.to(heroRef.current, {
//         backgroundImage: 'linear-gradient(to bottom right, #CFE2F3, #E0F2F7)',
//         duration: 5,
//         repeat: -1,
//         yoyo: true,
//         ease: 'sine.inOut',
//       });

//       // Shape animations
//       window.gsap.to(animatedShape1.current, {
//         y: 30,
//         x: 15,
//         rotation: 360,
//         duration: 4,
//         ease: 'power1.inOut',
//         repeat: -1,
//         yoyo: true,
//       });
//       window.gsap.to(animatedShape2.current, {
//         y: -20,
//         x: -15,
//         rotation: -360,
//         duration: 5,
//         ease: 'power1.inOut',
//         repeat: -1,
//         yoyo: true,
//         delay: 0.5,
//       });
//       window.gsap.to(animatedShape3.current, {
//         y: 25,
//         x: 10,
//         scale: 1.2,
//         duration: 3,
//         ease: 'power1.inOut',
//         repeat: -1,
//         yoyo: true,
//         delay: 1,
//       });

//       // Cleanup
//       return () => {
//         button.removeEventListener('mouseenter', () => {});
//         button.removeEventListener('mouseleave', () => {});
//         Array.from(icons).forEach((icon) => {
//           icon.removeEventListener('mouseenter', () => {});
//           icon.removeEventListener('mouseleave', () => {});
//         });
//       };
//     } else {
//       console.warn('GSAP or ScrollTrigger not loaded.');
//     }
//   }, []);

//   return (
//     <section
//       id="hero"
//       ref={heroRef}
//       className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden"
//       style={{
//         backgroundImage: 'linear-gradient(to bottom right, #E0F2F7, #CFE2F3)',
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//       }}
//     >
//       <div className="absolute inset-0 bg-black opacity-0"></div>
//       <div
//         ref={animatedShape1}
//         className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30"
//       ></div>
//       <div
//         ref={animatedShape2}
//         className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30"
//       ></div>
//       <div
//         ref={animatedShape3}
//         className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-30"
//       ></div>

//       <div className="relative z-10 p-6 max-w-4xl mx-auto">
//         <div className="mb-8">
//           <img
//             ref={profileImageRef}
//             src="image/a.jpeg"
//             alt="Abhinash Profile"
//             className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
//             onError={(e) => {
//               e.target.onerror = null;
//               e.target.src = 'https://placehold.co/160x160/FFFFFF/000000?text=Profile';
//             }}
//           />
//         </div>
//         <h1
//           ref={titleRef}
//           className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-sans tracking-tight text-gray-800"
//         >
//           Hello, I'm Abhinash
//         </h1>
//         <p
//           ref={subtitleRef}
//           className="text-lg md:text-2xl mb-8 font-light text-gray-600"
//         >
//           <span ref={subtitleLine1Ref} className="block"></span>
//           <span ref={subtitleLine2Ref} className="block"></span>
//         </p>
//         <a
//           href="#projects"
//           ref={buttonRef}
//           className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
//           aria-label="View my projects"
//         >
//           View My Work
//         </a>
//         <div
//           ref={socialIconsRef}
//           className="mt-8 flex justify-center space-x-6"
//           role="navigation"
//           aria-label="Social media links"
//         >
//           <a
//             href="mailto:abhinash.wedev@gmail.com"
//             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
//             title="Email"
//             aria-label="Email Abhinash"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="currentColor"
//               viewBox="0 0 20 20"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
//               <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
//             </svg>
//           </a>
//           <a
//             href="https://github.com/Abhinash02"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
//             title="GitHub"
//             aria-label="Visit Abhinash's GitHub profile"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path
//                 fillRule="evenodd"
//                 d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.084.636-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.087.389-1.979 1.029-2.674-.103-.253-.446-1.268.099-2.64 0 0 .84-.268 2.75 1.025A9.439 9.439 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.695 1.029 1.587 1.029 2.674 0 3.823-2.339 4.675-4.566 4.922.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .264.18.573.684.479C19.137 20.219 22 16.464 22 12.017 22 6.484 17.523 2 12 2Z"
//                 clipRule="evenodd"
//               />
//             </svg>
//           </a>
//           <a
//             href="https://www.linkedin.com/in/abhinash99/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
//             title="LinkedIn"
//             aria-label="Visit Abhinash's LinkedIn profile"
//           >
//             <svg
//               className="w-8 h-8"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path d="M0 0h24v24H0z" fill="none"></path>
//               <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
//             </svg>
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- About Component ---
// const About = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="about" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h3>
//             <p className="text-gray-600 leading-relaxed">
//               MCA graduate with hands-on experience in full-stack development, skilled in both front-end and back-end technologies.
//               Seeking an entry-level role to build user-friendly web applications and contribute to innovative projects while continuing to learn and grow.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-2xl font-semibold text-gray-700 mb-4">Education</h3>
//             <div className="mb-6">
//               <h4 className="text-xl font-medium text-gray-800">MASTER OF COMPUTER SCIENCE (MCA)</h4>
//               <p className="text-gray-600">PUNJABI UNIVERSITY, PATIALA (On Campus)</p>
//               <p className="text-gray-500 text-sm">CGPA 7.78</p>
//             </div>
//             <div>
//               <h4 className="text-xl font-medium text-gray-800">BACHELOR OF COMPUTER SCIENCE (BCA)</h4>
//               <p className="text-gray-600">PANJAB UNIVERSITY, CHANDHIGARH</p>
//               <p className="text-gray-500 text-sm">Percentage 82%</p>
//             </div>
//           </div>
//         </div>
//         <div className="mt-12">
//           <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Soft Skills</h3>
//           <ul className="flex flex-wrap justify-center gap-4 text-gray-600">
//             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Active learner</li>
//             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Logical thinker</li>
//             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Team collaboration</li>
//             <li className="bg-white px-4 py-2 rounded-full shadow-sm">Clear communication</li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Skills Component ---
// const Skills = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, []);

//   const skillCategories = {
//     Frontend: ["React.js", "Next.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
//     Backend: ["Node.js", "Express.js", "REST APIs", "CORS", "WebSockets (Socket.IO)"],
//     Database: ["MongoDB Atlas", "Mongoose"],
//     Authentication: ["Auth.js", "JWT"],
//     "Dev Tools": ["Git", "GitHub", "Postman", "Thunder Client"],
//     "Other Tools & APIs": ["Stripe (Payments)", "Resend (Email)", "Cloudinary (Media Storage)"],
//   };

//   return (
//     <section id="skills" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {Object.entries(skillCategories).map(([category, skills], index) => (
//             <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
//               <ul className="space-y-2">
//                 {skills.map((skill, skillIndex) => (
//                   <li key={skillIndex} className="flex items-center text-gray-600">
//                     <svg className="w-4 h-4 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
//                     </svg>
//                     {skill}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Projects Component ---
// const Projects = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, []);

//   const projects = [
//     {
//       title: "DCS PUP Alumni Management Website",
//       description: [
//         "Developed and deployed alumni management website using React and Tailwind CSS.",
//         "Led a 20-member team and designed a database for 50,000+ student records. Integrated alumni login system with MongoDB.",
//         "Added new features: faculty page, notification page, and full admin panel.",
//         "Currently expanding it into the main Department of Computer Science website.",
//       ],
//       link: "https://dcsalumni.vishalpup.in",
//       tech: ["React", "Tailwind CSS", "MongoDB"],
//       images: [
//         '/image/main.png',
//         '/image/alumni.png',
//         '/image/event.png',
//       ],
//     },
//     {
//       title: "Real-time Chat Application",
//       description: [
//         "Built a real-time one-to-one chat app using React, Node.js, Socket.io, and MongoDB.",
//         "Implemented JWT authentication, typing indicators, seen status, notifications, and chat history.",
//         "Designed responsive UI with dark mode using Tailwind CSS.",
//       ],
//       tech: ["React", "Node.js", "Socket.io", "MongoDB", "JWT", "Tailwind CSS"],
//       images: [
//         "https://placehold.co/600x400/D4EDDA/000000?text=Chat+App+Image+1",
//         "https://placehold.co/600x400/C3E6CB/000000?text=Chat+App+Image+2",
//         "https://placehold.co/600x400/B2D8C8/000000?text=Chat+App+Image+3",
//       ],
//     },
//   ];

//   return (
//     <section id="projects" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Selective Projects</h2>
//         <div className="space-y-12">
//           {projects.map((project, index) => (
//             <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
//               {project.images && project.images.length > 0 && (
//                 <ProjectImageCarousel images={project.images} />
//               )}
//               <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
//                 {project.description.map((item, itemIndex) => (
//                   <li key={itemIndex}>{item}</li>
//                 ))}
//               </ul>
//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.tech.map((tech, techIndex) => (
//                   <span key={techIndex} className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
//                     {tech}
//                   </span>
//                 ))}
//               </div>
//               {project.link && (
//                 <a
//                   href={project.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
//                 >
//                   View Project
//                   <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
//                   </svg>
//                 </a>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Project Image Carousel Component ---
// const ProjectImageCarousel = ({ images }) => {
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   const imageRef = useRef(null);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [images.length]);

//   useEffect(() => {
//     if (imageRef.current && typeof window.gsap !== 'undefined') {
//       window.gsap.fromTo(
//         imageRef.current,
//         { opacity: 0, scale: 0.95 },
//         { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
//       );
//     }
//   }, [currentImageIndex]);

//   return (
//     <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg mb-6 shadow-md bg-gray-200 flex items-center justify-center">
//       <img
//         ref={imageRef}
//         src={images[currentImageIndex]}
//         alt={`Project screenshot ${currentImageIndex + 1}`}
//         className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
//         onError={(e) => {
//           e.target.onerror = null;
//           e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error';
//         }}
//       />
//       <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
//         {images.map((_, idx) => (
//           <span
//             key={idx}
//             className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
//               idx === currentImageIndex ? 'bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'
//             }`}
//             onClick={() => setCurrentImageIndex(idx)}
//           ></span>
//         ))}
//       </div>
//     </div>
//   );
// };

// // --- Project Launch Component ---
// const ProjectLaunch = () => {
//   const sectionRef = useRef(null);
//   const abhinashTextRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//       window.gsap.fromTo(abhinashTextRef.current,
//         { opacity: 0, scale: 0.5 },
//         {
//           opacity: 1,
//           scale: 1,
//           duration: 1.5,
//           ease: "elastic.out(1, 0.5)",
//           scrollTrigger: {
//             trigger: abhinashTextRef.current,
//             start: "top 80%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, []);

//   return (
//     <section id="project-launch" ref={sectionRef} className="py-20 px-6 md:px-12 bg-blue-800 text-white">
//       <div className="container mx-auto max-w-4xl text-center">
//         <h2 className="text-4xl font-bold mb-8">Ready to See My Work in Action?</h2>
//         <p className="text-lg mb-8">
//           Check out the live deployment of the DCS PUP Alumni Management Website:
//         </p>
//         <a
//           href="https://dcsalumni.vishalpup.in/"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="inline-block bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg"
//         >
//           Launch Project
//           <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
//           </svg>
//         </a>
//         <div className="mt-12">
//           <p ref={abhinashTextRef} className="text-6xl md:text-8xl font-extrabold text-white opacity-0">
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Experience Component ---
// const Experience = () => {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 75%",
//             toggleActions: "play none none none",
//           },
//         }
//       );
//     }
//   }, []);

//   const experiences = [
//     {
//       title: "MERN Stack Developer Trainee",
//       company: "Auspicious Soft Pvt. Ltd.",
//       duration: "Jan 2025 - July 2025",
//       description: [
//         "Built full stack web apps using MVC architecture and reusable components, improving dev speed by 40%.",
//         "Developed secure REST APIs with CRUD operations, Auth.js, JWT, session handling, and validation.",
//         "Created responsive UIs with Tailwind CSS and real-time chat using WebSockets (Socket.IO).",
//         "Used Git, Postman, and Thunder Client for version control and API testing.",
//       ],
//     },
//     {
//       title: "AI Education Trainer",
//       company: "CSRBOX At Punjab Govt School's",
//       duration: "15th Jan 2025 - 15th Feb 2025",
//       description: [
//         "Conducted training sessions on AI education for students in Punjab Government Schools.",
//         "Contributed to promoting AI literacy at the grassroots level.",
//       ],
//     },
//   ];

//   return (
//     <section id="experience" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
//       <div className="container mx-auto max-w-4xl">
//         <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
//         <div className="space-y-12">
//           {experiences.map((exp, index) => (
//             <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//               <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
//               <p className="text-blue-700 font-medium mb-1">{exp.company}</p>
//               <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
//               <ul className="list-disc list-inside text-gray-600 space-y-1">
//                 {exp.description.map((item, itemIndex) => (
//                   <li key={itemIndex}>{item}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// // --- Contact Component ---
// const Contact = () => {
//   const sectionRef = useRef(null);
//   const form = useRef();
//   const [statusMessage, setStatusMessage] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const shape1Ref = useRef(null);
//   const shape2Ref = useRef(null);

//   useEffect(() => {
//     console.log('Environment Variables:', {
//       serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
//       templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
//       userId: process.env.REACT_APP_EMAILJS_USER_ID,
//     });

//     if (typeof window.emailjs !== 'undefined' && process.env.REACT_APP_EMAILJS_USER_ID) {
//       window.emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
//       console.log('EmailJS initialized successfully');
//     } else {
//       console.error('EmailJS or User ID not available.');
//     }

//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.fromTo(
//         sectionRef.current.children,
//         { opacity: 0, y: 50 },
//         {
//           opacity: 1,
//           y: 0,
//           duration: 0.8,
//           stagger: 0.2,
//           ease: 'power3.out',
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: 'top 75%',
//             toggleActions: 'play none none none',
//           },
//         }
//       );
//     }

//     if (isModalOpen && typeof window.gsap !== 'undefined') {
//       window.gsap.fromTo(
//         '.modal-content',
//         { opacity: 0, scale: 0.8 },
//         { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
//       );
//       if (shape1Ref.current && shape2Ref.current) {
//         window.gsap.to(shape1Ref.current, {
//           y: 20,
//           x: 10,
//           rotation: 360,
//           duration: 4,
//           ease: 'power1.inOut',
//           repeat: -1,
//           yoyo: true,
//         });
//         window.gsap.to(shape2Ref.current, {
//           y: -15,
//           x: -10,
//           rotation: -360,
//           duration: 5,
//           ease: 'power1.inOut',
//           repeat: -1,
//           yoyo: true,
//           delay: 0.5,
//         });
//       }
//     }
//   }, [isModalOpen]);

//   const sendEmail = (e) => {
//     e.preventDefault();
//     setStatusMessage('Sending...');

//     const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
//     const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
//     const userId = process.env.REACT_APP_EMAILJS_USER_ID;

//     console.log('Environment Variables in sendEmail:', { serviceId, templateId, userId });

//     if (typeof window.emailjs !== 'undefined' && serviceId && templateId && userId) {
//       window.emailjs.sendForm(serviceId, templateId, form.current, userId).then(
//         (result) => {
//           console.log('EmailJS Success:', result.text);
//           setStatusMessage('');
//           setIsModalOpen(true);
//           form.current.reset();
//         },
//         (error) => {
//           console.error('EmailJS Error:', error.text);
//           setStatusMessage('Failed to send message. Please try again later.');
//           setIsModalOpen(false);
//         }
//       );
//     } else {
//       setStatusMessage('EmailJS not loaded or environment variables missing.');
//       console.error('EmailJS environment variables:', { serviceId, templateId, userId });
//       setIsModalOpen(false);
//     }
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//   };

//   return (
//     <section id="contact" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
//       <div className="container mx-auto max-w-2xl text-center">
//         <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
//         <p className="text-gray-600 text-lg mb-8">
//           I'm actively seeking an entry-level role to build user-friendly web applications and contribute to innovative projects.
//           Feel free to reach out!
//         </p>
//         <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Me a Message</h3>
//         <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-md text-left">
//           <div className="mb-6">
//             <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">
//               Name
//             </label>
//             <input
//               type="text"
//               id="user_name"
//               name="user_name"
//               className="shadow appearance-none gamma rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
//               placeholder="Your Name"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">
//               Email
//             </label>
//             <input
//               type="email"
//               id="user_email"
//               name="user_email"
//               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
//               placeholder="your@example.com"
//               required
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
//               Message
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="5"
//               className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-y"
//               placeholder="Your message here..."
//               required
//             ></textarea>
//           </div>
//           <div className="flex items-center justify-center space-x-4">
//             <button
//               type="submit"
//               className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
//             >
//               Send Message
//             </button>
//             {statusMessage && (
//               <p className="text-sm text-gray-600">{statusMessage}</p>
//             )}
//           </div>
//         </form>
//         {isModalOpen && (
//           <div
//             className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
//             onClick={closeModal}
//           >
//             <div
//               className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-xl relative modal-content"
//               onClick={(e) => e.stopPropagation()}
//             >
//               <div
//                 ref={shape1Ref}
//                 className="absolute top-4 left-4 w-12 h-12 bg-blue-300 rounded-full opacity-30"
//               ></div>
//               <div
//                 ref={shape2Ref}
//                 className="absolute bottom-4 right-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"
//               ></div>
//               <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
//               <p className="text-gray-600 mb-6">
//                 Thank you for contacting us. Abhinash will contact you shortly!
//               </p>
//               <button
//                 onClick={closeModal}
//                 className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
//               >
//                 Close
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// // --- Footer Component ---
// const Footer = () => {
//   return (
//     <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center">
//       <div className="container mx-auto">
//         <p>© {new Date().getFullYear()} Abhinash. All rights reserved.</p>
//         <p className="text-sm mt-2">Built with React, Tailwind CSS, and GSAP.</p>
//       </div>
//     </footer>
//   );
// };

// // --- Main App Component ---
// const App = () => {
//   useEffect(() => {
//     if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
//       window.gsap.registerPlugin(window.ScrollTrigger);
//     }
//   }, []);

//   return (
//     <div className="font-sans antialiased text-gray-900">
//       <Header />
//       <main>
//         <Hero />
//         <About />
//         <Skills />
//         <Projects />
//         <ProjectLaunch />
//         <Experience />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default App;



import React, { useEffect, useRef, useState } from 'react';

// --- Header Component ---
const Header = ({ handleNavClick }) => {
  const navRef = useRef(null);
  const logoRef = useRef(null);
  const navLinksRef = useRef(null);
  const hamburgerRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    console.log('isMenuOpen:', isMenuOpen); // Debug state changes

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Logo animation (continuous pulse)
      window.gsap.fromTo(
        logoRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 1, ease: 'power3.out' }
      );
      window.gsap.to(logoRef.current, {
        scale: 1.05,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Desktop nav links animation (initial + continuous stagger)
      if (navLinksRef.current) {
        window.gsap.fromTo(
          navLinksRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out',
            delay: 0.3,
          }
        );
        window.gsap.to(navLinksRef.current.children, {
          scale: 1.05,
          duration: 2,
          stagger: 0.3,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
        });
      }

      // Hamburger icon animation (initial + continuous bounce)
      window.gsap.fromTo(
        hamburgerRef.current,
        { scale: 0.8, rotation: -90 },
        { scale: 1, rotation: 0, duration: 0.5, ease: 'back.out(1.7)' }
      );
      window.gsap.to(hamburgerRef.current, {
        y: -3,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    } else {
      console.warn('GSAP or ScrollTrigger not loaded. Using CSS fallback.');
    }

    // Cleanup
    return () => {
      console.log('Cleaning up Header useEffect');
    };
  }, [isMenuOpen]);

  const toggleMenu = (e) => {
    e.stopPropagation();
    console.log('toggleMenu called, current isMenuOpen:', isMenuOpen);
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-blue-700 to-blue-500 shadow-sm py-4 px-6 md:px-12">
      <nav className="container mx-auto flex justify-between items-center">
        <a
          href="#hero"
          ref={logoRef}
          className="text-xl font-bold text-white hover:text-blue-200 transition-colors"
          onClick={(e) => handleNavClick(e, 'hero')}
        >
          Abhinash
        </a>
        <ul ref={navLinksRef} className="hidden md:flex space-x-8">
          {['About', 'Skills', 'Projects', 'Launch', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-200 hover:text-white transition-colors"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
        <button
          ref={hamburgerRef}
          className="md:hidden text-white hover:text-blue-200 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </nav>
      {/* Mobile Menu */}
      <div
        ref={mobileMenuRef}
        className={`fixed top-0 right-0 h-full w-64 bg-blue-800/95 backdrop-blur-md z-50 transition-all duration-300 ease-in-out md:hidden pointer-events-auto ${
          isMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-blue-200 focus:outline-none z-50"
          onClick={toggleMenu}
          aria-label="Close mobile menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
        <ul className="flex flex-col items-center justify-center h-full space-y-6 text-gray-200">
          {['About', 'Skills', 'Projects', 'Launch', 'Experience', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-lg hover:text-white transition-colors"
                onClick={(e) => handleNavClick(e, item.toLowerCase())}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

// --- Hero Component ---
const Hero = ({ handleNavClick }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const subtitleLine1Ref = useRef(null);
  const subtitleLine2Ref = useRef(null);
  const buttonRef = useRef(null);
  const animatedShape1 = useRef(null);
  const animatedShape2 = useRef(null);
  const animatedShape3 = useRef(null);
  const profileImageRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);

      // Title animation with pulse effect
      window.gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50, scale: 0.95 },
        { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'power3.out' }
      );
      window.gsap.to(titleRef.current, {
        scale: 1.02,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Subtitle container animation
      window.gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: 'power3.out' }
      );

      // Typewriter effect for subtitle
      if (typeof window.gsap.TextPlugin !== 'undefined') {
        window.gsap.registerPlugin(window.gsap.TextPlugin);
        window.gsap.to(subtitleLine1Ref.current, {
          text: { value: 'Mern Stack Developer', delimiter: '' },
          duration: 1.5,
          delay: 0.5,
          ease: 'none',
        });
        window.gsap.to(subtitleLine2Ref.current, {
          text: { value: 'MCA Graduate with Hands-on Experience in Full-Stack Development', delimiter: '' },
          duration: 2,
          delay: 2,
          ease: 'none',
        });
      } else {
        console.warn('GSAP TextPlugin not loaded.');
        if (subtitleLine1Ref.current) subtitleLine1Ref.current.textContent = 'Mern Stack Developer';
        if (subtitleLine2Ref.current)
          subtitleLine2Ref.current.textContent = 'MCA Graduate with Hands-on Experience in Full-Stack Development';
      }

      // Button animation
      window.gsap.fromTo(
        buttonRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      );
      window.gsap.to(buttonRef.current, {
        boxShadow: '0 0 10px rgba(59, 130, 246, 0.5), 0 0 20px rgba(59, 130, 246, 0.3)',
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.6,
      });
      const button = buttonRef.current;
      button.addEventListener('mouseenter', () =>
        window.gsap.to(button, { scale: 1.05, duration: 0.3, ease: 'power2.out' })
      );
      button.addEventListener('mouseleave', () =>
        window.gsap.to(button, { scale: 1, duration: 0.3, ease: 'power2.out' })
      );

      // Profile image animation
      window.gsap.fromTo(
        profileImageRef.current,
        { opacity: 0, scale: 0.8, y: 20 },
        { opacity: 1, scale: 1, y: 0, duration: 1, delay: 0.8, ease: 'power3.out' }
      );
      window.gsap.to(profileImageRef.current, {
        rotation: 5,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.8,
      });

      // Social icons animation
      window.gsap.fromTo(
        socialIconsRef.current.children,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          delay: 1,
        }
      );
      window.gsap.to(socialIconsRef.current.children, {
        y: -5,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.2,
        delay: 1.8,
      });
      const icons = socialIconsRef.current.children;
      Array.from(icons).forEach((icon) => {
        icon.addEventListener('mouseenter', () =>
          window.gsap.to(icon, {
            scale: 1.2,
            color: '#1E40AF',
            duration: 0.3,
            ease: 'power2.out',
          })
        );
        icon.addEventListener('mouseleave', () =>
          window.gsap.to(icon, {
            scale: 1,
            color: '#1F2937',
            duration: 0.3,
            ease: 'power2.out',
          })
        );
      });

      // Background parallax
      window.gsap.to(heroRef.current, {
        backgroundPositionY: '20%',
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Background gradient animation
      window.gsap.to(heroRef.current, {
        backgroundImage: 'linear-gradient(to bottom right, #CFE2F3, #E0F2F7)',
        duration: 5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });

      // Shape animations
      window.gsap.to(animatedShape1.current, {
        y: 30,
        x: 15,
        rotation: 360,
        duration: 4,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
      window.gsap.to(animatedShape2.current, {
        y: -20,
        x: -15,
        rotation: -360,
        duration: 5,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
  });
      window.gsap.to(animatedShape3.current, {
        y: 25,
        x: 10,
        scale: 1.2,
        duration: 3,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      });

      // Cleanup
      return () => {
        button.removeEventListener('mouseenter', () => {});
        button.removeEventListener('mouseleave', () => {});
        Array.from(icons).forEach((icon) => {
          icon.removeEventListener('mouseenter', () => {});
          icon.removeEventListener('mouseleave', () => {});
        });
      };
    } else {
      console.warn('GSAP or ScrollTrigger not loaded.');
    }
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-screen flex items-center justify-center text-center text-gray-800 overflow-hidden"
      style={{
        backgroundImage: 'linear-gradient(to bottom right, #E0F2F7, #CFE2F3)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-0"></div>
      <div
        ref={animatedShape1}
        className="absolute top-1/4 left-1/4 w-24 h-24 bg-blue-300 rounded-full opacity-30"
      ></div>
      <div
        ref={animatedShape2}
        className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-purple-300 rounded-full opacity-30"
      ></div>
      <div
        ref={animatedShape3}
        className="absolute top-1/2 left-1/2 w-16 h-16 bg-blue-200 rounded-full opacity-30"
      ></div>

      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        <div className="mb-8">
          <img
            ref={profileImageRef}
            src="image/a.jpeg"
            alt="Abhinash Profile"
            className="w-40 h-40 rounded-full mx-auto object-cover shadow-lg border-4 border-gradient-to-r from-blue-300 to-purple-300 transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://placehold.co/160x160/FFFFFF/000000?text=Profile';
            }}
          />
        </div>
        <h1
          ref={titleRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 font-sans tracking-tight text-gray-800"
        >
          Hello, I'm Abhinash
        </h1>
        <p
          ref={subtitleRef}
          className="text-lg md:text-2xl mb-8 font-light text-gray-600"
        >
          <span ref={subtitleLine1Ref} className="block"></span>
          <span ref={subtitleLine2Ref} className="block"></span>
        </p>
        <a
          href="#projects"
          ref={buttonRef}
          className="inline-block bg-gradient-to-r from-blue-700 to-blue-500 text-white hover:from-blue-800 hover:to-blue-600 px-8 py-3 rounded-full text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          onClick={(e) => handleNavClick(e, 'projects')}
        >
          View My Work
        </a>
        <div
          ref={socialIconsRef}
          className="mt-8 flex justify-center space-x-6"
          role="navigation"
          aria-label="Social media links"
        >
          <a
            href="mailto:abhinash.wedev@gmail.com"
            className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
            title="Email"
            aria-label="Email Abhinash"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
          </a>
          <a
            href="https://github.com/Abhinash02"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
            title="GitHub"
            aria-label="Visit Abhinash's GitHub profile"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.499.09.679-.217.679-.481 0-.237-.008-.865-.013-1.7-2.782.602-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.46-1.11-1.46-.908-.619.069-.605.069-.605 1.004.07 1.531 1.032 1.531 1.032.892 1.529 2.341 1.084 2.91.828.092-.643.35-1.084.636-1.334-2.22-.253-4.555-1.113-4.555-4.93 0-1.087.389-1.979 1.029-2.674-.103-.253-.446-1.268.099-2.64 0 0 .84-.268 2.75 1.025A9.439 9.439 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.293 2.747-1.025 2.747-1.025.546 1.372.202 2.387.099 2.64.64.695 1.029 1.587 1.029 2.674 0 3.823-2.339 4.675-4.566 4.922.359.307.678.915.678 1.846 0 1.334-.012 2.41-.012 2.727 0 .264.18.573.684.479C19.137 20.219 22 16.464 22 12.017 22 6.484 17.523 2 12 2Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/abhinash99/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-700 transition-colors text-3xl"
            title="LinkedIn"
            aria-label="Visit Abhinash's LinkedIn profile"
          >
            <svg
              className="w-8 h-8"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// --- About Component ---
const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Summary</h3>
            <p className="text-gray-600 leading-relaxed">
              MCA graduate with hands-on experience in full-stack development, skilled in both front-end and back-end technologies.
              Seeking an entry-level role to build user-friendly web applications and contribute to innovative projects while continuing to learn and grow.
            </p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Education</h3>
            <div className="mb-6">
              <h4 className="text-xl font-medium text-gray-800">MASTER OF COMPUTER SCIENCE (MCA)</h4>
              <p className="text-gray-600">PUNJABI UNIVERSITY, PATIALA (On Campus)</p>
              <p className="text-gray-500 text-sm">CGPA 7.78</p>
            </div>
            <div>
              <h4 className="text-xl font-medium text-gray-800">BACHELOR OF COMPUTER SCIENCE (BCA)</h4>
              <p className="text-gray-600">PANJAB UNIVERSITY, CHANDHIGARH</p>
              <p className="text-gray-500 text-sm">Percentage 82%</p>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4 text-center">Soft Skills</h3>
          <ul className="flex flex-wrap justify-center gap-4 text-gray-600">
            <li className="bg-white px-4 py-2 rounded-full shadow-sm">Active learner</li>
            <li className="bg-white px-4 py-2 rounded-full shadow-sm">Logical thinker</li>
            <li className="bg-white px-4 py-2 rounded-full shadow-sm">Team collaboration</li>
            <li className="bg-white px-4 py-2 rounded-full shadow-sm">Clear communication</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// --- Skills Component ---
const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const skillCategories = {
    Frontend: ['React.js', 'Next.js', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS'],
    Backend: ['Node.js', 'Express.js', 'REST APIs', 'CORS', 'WebSockets (Socket.IO)'],
    Database: ['MongoDB Atlas', 'Mongoose'],
    Authentication: ['Auth.js', 'JWT'],
    'Dev Tools': ['Git', 'GitHub', 'Postman', 'Thunder Client'],
    'Other Tools & APIs': ['Stripe (Payments)', 'Resend (Email)', 'Cloudinary (Media Storage)'],
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillCategories).map(([category, skills], index) => (
            <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">{category}</h3>
              <ul className="space-y-2">
                {skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center text-gray-600">
                    <svg className="w-4 h-4 text-blue-700 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Projects Component ---
const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const projects = [
    {
      title: 'DCS PUP Alumni Management Website',
      description: [
        'Developed and deployed alumni management website using React and Tailwind CSS.',
        'Led a 20-member team and designed a database for 50,000+ student records. Integrated alumni login system with MongoDB.',
        'Added new features: faculty page, notification page, and full admin panel.',
        'Currently expanding it into the main Department of Computer Science website.',
      ],
      link: 'https://dcsalumni.vishalpup.in',
      tech: ['React', 'Tailwind CSS', 'MongoDB'],
      images: ['/image/main.png', '/image/alumni.png', '/image/event.png'],
    },
    {
      title: 'Real-time Chat Application',
      description: [
        'Built a real-time one-to-one chat app using React, Node.js, Socket.io, and MongoDB.',
        'Implemented JWT authentication, typing indicators, seen status, notifications, and chat history.',
        'Designed responsive UI with dark mode using Tailwind CSS.',
      ],
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'JWT', 'Tailwind CSS'],
      images: [
        'https://placehold.co/600x400/D4EDDA/000000?text=Chat+App+Image+1',
        'https://placehold.co/600x400/C3E6CB/000000?text=Chat+App+Image+2',
        'https://placehold.co/600x400/B2D8C8/000000?text=Chat+App+Image+3',
      ],
    },
  ];

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Selective Projects</h2>
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">{project.title}</h3>
              {project.images && project.images.length > 0 && (
                <ProjectImageCarousel images={project.images} />
              )}
              <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-200 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-700 hover:text-blue-800 font-medium transition-colors"
                >
                  View Project
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Project Image Carousel Component ---
const ProjectImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    if (imageRef.current && typeof window.gsap !== 'undefined') {
      window.gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, [currentImageIndex]);

  return (
    <div className="relative w-full h-60 md:h-80 overflow-hidden rounded-lg mb-6 shadow-md bg-gray-200 flex items-center justify-center">
      <img
        ref={imageRef}
        src={images[currentImageIndex]}
        alt={`Project screenshot ${currentImageIndex + 1}`}
        className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'https://placehold.co/600x400/CCCCCC/000000?text=Image+Error';
        }}
      />
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, idx) => (
          <span
            key={idx}
            className={`block w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${
              idx === currentImageIndex ? 'bg-blue-700' : 'bg-gray-400 hover:bg-gray-500'
            }`}
            onClick={() => setCurrentImageIndex(idx)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// --- Project Launch Component ---
const ProjectLaunch = () => {
  const sectionRef = useRef(null);
  const abhinashTextRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
      window.gsap.fromTo(
        abhinashTextRef.current,
        { opacity: 0, scale: 0.5 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.5,
          ease: 'elastic.out(1, 0.5)',
          scrollTrigger: {
            trigger: abhinashTextRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);
//test
  return (
    <section id="launch" ref={sectionRef} className="py-20 px-6 md:px-12 bg-blue-800 text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-8">Ready to See My Work in Action?</h2>
        <p className="text-lg mb-8">
          Check out the live deployment of the DCS PUP Alumni Management Website:
        </p>
        <a
          href="https://dcsalumni.vishalpup.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-800 hover:bg-blue-50 px-8 py-4 rounded-full text-xl font-semibold transition-all duration-300 shadow-lg"
        >
          Launch Project
          <svg className="w-5 h-5 ml-2 inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0l-6 6"></path>
          </svg>
        </a>
        <div className="mt-12">
          <p ref={abhinashTextRef} className="text-6xl md:text-8xl font-extrabold text-white opacity-0"></p>
        </div>
      </div>
    </section>
  );
};

// --- Experience Component ---
const Experience = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  const experiences = [
    {
      title: 'MERN Stack Developer Trainee',
      company: 'Auspicious Soft Pvt. Ltd.',
      duration: 'Jan 2025 - July 2025',
      description: [
        'Built full stack web apps using MVC architecture and reusable components, improving dev speed by 40%.',
        'Developed secure REST APIs with CRUD operations, Auth.js, JWT, session handling, and validation.',
        'Created responsive UIs with Tailwind CSS and real-time chat using WebSockets (Socket.IO).',
        'Used Git, Postman, and Thunder Client for version control and API testing.',
      ],
    },
    {
      title: 'AI Education Trainer',
      company: "CSRBOX At Punjab Govt School's",
      duration: '15th Jan 2025 - 15th Feb 2025',
      description: [
        'Conducted training sessions on AI education for students in Punjab Government Schools.',
        'Contributed to promoting AI literacy at the grassroots level.',
      ],
    },
  ];

  return (
    <section id="experience" ref={sectionRef} className="py-20 px-6 md:px-12 bg-white">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-100 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
              <p className="text-blue-700 font-medium mb-1">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- Contact Component ---
const Contact = () => {
  const sectionRef = useRef(null);
  const form = useRef();
  const [statusMessage, setStatusMessage] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const shape1Ref = useRef(null);
  const shape2Ref = useRef(null);

  useEffect(() => {
    console.log('Environment Variables:', {
      serviceId: process.env.REACT_APP_EMAILJS_SERVICE_ID,
      templateId: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      userId: process.env.REACT_APP_EMAILJS_USER_ID,
    });

    if (typeof window.emailjs !== 'undefined' && process.env.REACT_APP_EMAILJS_USER_ID) {
      window.emailjs.init(process.env.REACT_APP_EMAILJS_USER_ID);
      console.log('EmailJS initialized successfully');
    } else {
      console.error('EmailJS or User ID not available.');
    }

    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
      window.gsap.fromTo(
        sectionRef.current.children,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    if (isModalOpen && typeof window.gsap !== 'undefined') {
      window.gsap.fromTo(
        '.modal-content',
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 0.5, ease: 'power3.out' }
      );
      if (shape1Ref.current && shape2Ref.current) {
        window.gsap.to(shape1Ref.current, {
          y: 20,
          x: 10,
          rotation: 360,
          duration: 4,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
        });
        window.gsap.to(shape2Ref.current, {
          y: -15,
          x: -10,
          rotation: -360,
          duration: 5,
          ease: 'power1.inOut',
          repeat: -1,
          yoyo: true,
          delay: 0.5,
        });
      }
    }
  }, [isModalOpen]);

  const sendEmail = (e) => {
    e.preventDefault();
    setStatusMessage('Sending...');

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    console.log('Environment Variables in sendEmail:', { serviceId, templateId, userId });

    if (typeof window.emailjs !== 'undefined' && serviceId && templateId && userId) {
      window.emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result) => {
          console.log('EmailJS Success:', result.text);
          setStatusMessage('');
          setIsModalOpen(true);
          form.current.reset();
        },
        (error) => {
          console.error('EmailJS Error:', error.text);
          setStatusMessage('Failed to send message. Please try again later.');
          setIsModalOpen(false);
        }
      );
    } else {
      setStatusMessage('EmailJS not loaded or environment variables missing.');
      console.error('EmailJS environment variables:', { serviceId, templateId, userId });
      setIsModalOpen(false);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 px-6 md:px-12 bg-gray-50">
      <div className="container mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">Get in Touch</h2>
        <p className="text-gray-600 text-lg mb-8">
          I'm actively seeking an entry-level role to build user-friendly web applications and contribute to innovative projects.
          Feel free to reach out!
        </p>
        <h3 className="text-3xl font-bold text-gray-800 mb-8">Send Me a Message</h3>
        <form ref={form} onSubmit={sendEmail} className="bg-white p-8 rounded-lg shadow-md text-left">
          <div className="mb-6">
            <label htmlFor="user_name" className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="user_email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent"
              placeholder="your@example.com"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="5"
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-700 focus:border-transparent resize-y"
              placeholder="Your message here..."
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-colors duration-300"
            >
              Send Message
            </button>
            {statusMessage && <p className="text-sm text-gray-600">{statusMessage}</p>}
          </div>
        </form>
        {isModalOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-lg p-8 max-w-md w-full text-center shadow-xl relative modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <div
                ref={shape1Ref}
                className="absolute top-4 left-4 w-12 h-12 bg-blue-300 rounded-full opacity-30"
              ></div>
              <div
                ref={shape2Ref}
                className="absolute bottom-4 right-4 w-16 h-16 bg-purple-300 rounded-full opacity-30"
              ></div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Message Sent!</h3>
              <p className="text-gray-600 mb-6">
                Thank you for contacting us. Abhinash will contact you shortly!
              </p>
              <button
                onClick={closeModal}
                className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded-full transition-colors duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

// --- Footer Component ---
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-6 md:px-12 text-center">
      <div className="container mx-auto">
        <p>© {new Date().getFullYear()} Abhinash. All rights reserved.</p>
        <p className="text-sm mt-2">Built with React, Tailwind CSS, and GSAP.</p>
      </div>
    </footer>
  );
};

// --- Main App Component ---
const App = () => {
  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    console.log('Navigating to:', sectionId);
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.error(`Section with ID ${sectionId} not found`);
    }
  };

  useEffect(() => {
    if (typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined') {
      window.gsap.registerPlugin(window.ScrollTrigger);
    }
  }, []);

  return (
    <div className="font-sans antialiased text-gray-900">
      <Header handleNavClick={handleNavClick} />
      <main>
        <Hero handleNavClick={handleNavClick} />
        <About />
        <Skills />
        <Projects />
        <ProjectLaunch />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
