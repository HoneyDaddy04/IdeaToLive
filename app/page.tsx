"use client";

import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>IdeaToLive - Ignite AI Innovation</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <header className="bg-white bg-opacity-95 backdrop-blur-md fixed top-0 left-0 right-0">
        <nav className="container flex justify-between items-center">
          <div className="logo text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          <nav>
          <a href="/" class="logo">IdeaToLive</a>.</nav>
          </div>
          <div className="nav-links">
            <a href="#about" className="text-text-dark ml-5 font-semibold hover:text-primary">
              About
            </a>
            <a href="#how-it-works" className="text-text-dark ml-5 font-semibold hover:text-primary">
              How It Works
            </a>
            <a href="#" className="btn btn-primary ml-5">
              Sign Up
            </a>
          </div>
        </nav>
      </header>

      <main>
        <section className="hero h-screen flex items-center relative bg-cover bg-center">
          <div className="container relative z-10 text-center text-white max-w-3xl mx-auto">
            <h1 className="text-6xl font-bold mb-5 leading-tight">Ignite AI Innovation</h1>
            <p className="text-lg mb-8">  
              Join IdeaToLive to turn bold AI ideas into reality. Share your vision, build together, and amplify innovative
              solutions.
            </p>
            <a href="#" className="btn btn-primary">
              Join Now
            </a>
          </div>
        </section>
        
        <section id="about" className="scroll-mt-20 container py-20">
         <h2 className="section-title text-4xl font-bold mb-10 text-center">Empowering Dreamers, Builders, and Sellers</h2>
          <p className="about-text text-center max-w-3xl mx-auto text-lg text-text-light mb-10">
            "I'm not saying I'm going to change the world, but I guarantee that I will spark the brain that will change the world." - Tupac Shakur
          </p>
          <div className="roles flex flex-wrap justify-between">
            {/* Dreamers Card */}
            <div className="role-card bg-white rounded-2xl shadow-lg w-full md:w-[32%] mb-6 overflow-hidden">
          <div className="role-header text-white p-6 font-semibold text-xl text-center bg-gradient-to-r from-yellow-300 to-orange-400 rounded-t-2xl">               
             Dreamers
              </div>
              <div className="role-content p-6 flex-grow">
                <p className="text-gray-600 text-lg">Have a groundbreaking AI idea? Share and watch it take shape.</p>
              </div>
            </div>

            {/* Builders Card */}
            <div className="role-card bg-white rounded-2xl shadow-lg w-full md:w-[32%] mb-6 overflow-hidden">
            <div className="role-header text-white p-6 font-semibold text-xl text-center bg-gradient-to-r from-green-400 to-teal-500 rounded-t-2xl"> 
                Builders
              </div>
              <div className="role-content p-6 flex-grow">
                <p className="text-gray-600 text-lg">Choose ideas that inspire you and bring them to life.</p>
              </div>
            </div>

            {/* Sellers Card */}
            <div className="role-card bg-white rounded-2xl shadow-lg w-full md:w-1/3 mb-6 overflow-hidden">
            <div className="role-header text-white p-6 font-semibold text-xl text-center bg-gradient-to-r from-purple-400 to-pink-500 rounded-t-2xl">
             Sellers
            </div>
              <div className="role-content p-6 flex-grow">
                <p className="text-gray-600 text-lg">Take the groundbreaking solutions to the world and drive adoption.</p>
              </div>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="how-it-works bg-white py-20">
          <div className="container">
            <h2 className="section-title text-4xl font-bold mb-10 text-center">How IdeaToLive Works</h2>
            <div className="step flex mb-10">
              <div className="step-number text-4xl font-bold text-primary mr-6">01</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-2">Share AI Ideas</h3>
                <p>As a Dreamer, post your AI ideas you'd love to see built to the wishlist.</p>
              </div>
            </div>
            <div className="step flex mb-10">
              <div className="step-number text-4xl font-bold text-primary mr-6">02</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-2">Builders Take the Challenge</h3>
                <p>Builders select ideas from the wishlist to build, and share their progress with the community.</p>
              </div>
            </div>
            <div className="step flex mb-10">
              <div className="step-number text-4xl font-bold text-primary mr-6">03</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-2">Sellers Amplify the Solutions</h3>
                <p>Sellers promote and amplify the final products, making sure they reach the right audience.</p>
              </div>
            </div>
            <div className="step flex">
              <div className="step-number text-4xl font-bold text-primary mr-6">04</div>
              <div className="step-content">
                <h3 className="text-xl font-semibold mb-2">Grow and Innovate</h3>
                <p>Continue to collaborate to refine, scale, and market your AI products, or reinvest in new ideas.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta bg-primary text-white py-20 text-center">
          <h2 className="text-4xl font-bold mb-5">The future is shaped by those bold enough to take action today!</h2>
          <p className="text-lg mb-8">YOUR vision, OUR action, THE future.</p>
          <a href="#" className="btn btn-primary">Get Started Now</a>
        </section>
      </main>

      <footer className="bg-text-dark text-white text-center py-5">
        <div className="container">
          <p>&copy; 2024 IdeaToLive. Empowering AI innovation worldwide.</p>
          <a href="#" className="ml-4">Support</a>
          <a href="#" className="ml-4">Privacy Policy</a>
          <a href="#" className="ml-4">FAQs</a>
        </div>
      </footer>
    </>
  );
}
