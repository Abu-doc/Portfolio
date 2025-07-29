import React from 'react';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden" id='home'>

      {/* Multi-layered gradient background */}
      <div className="absolute inset-0 z-0">
        {/* Deep purple-black angular gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-indigo-900 opacity-90" />
        
        {/* Radial purple glow at center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent" />
      </div>

      {/* 3D Spline Canvas */}
      <Spline
        className="absolute top-0 left-0 w-full h-full z-10"
        scene="https://prod.spline.design/SLUA5RNXPgX7mZNF/scene.splinecode"
      />

      {/* Text Overlay */}
      <div className="relative z-20 h-full flex items-center justify-center">
        <div className="text-center px-4 text-white">
          <h1 className="text-4xl md:text-6xl font-russo mb-4 drop-shadow-2xl animate-fadeUp glow-text">
            Abu Bakar
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 drop-shadow-md">
            Crafting clean code & beautiful interfaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
