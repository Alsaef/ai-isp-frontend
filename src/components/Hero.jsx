import React from 'react';

const Hero = () => {
    return (
        <div>
            <div
  className="hero h-[800px]"
  style={{
    backgroundImage:
      "url(./banner.jpg)",
  }}
>
  <div className="hero-overlay"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">There is Now Way to Become a Internet User</h1>
     <h2>
        Now a Days Internet Is a Useful Thing, Not Passion
     </h2>
      <button className="btn btn-success text-white my-3">Get Services</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hero;