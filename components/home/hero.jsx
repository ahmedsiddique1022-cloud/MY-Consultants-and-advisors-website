"use client"

import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat animate-zoom"
        style={{
          backgroundImage: "url('/assets/home/hero.jpg')",
        }}
      >
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/35 to-black/30" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full h-full flex flex-col justify-center items-center text-center">
        <div className="space-y-4 animate-fadeInUp">
          <p className="text-3xl text-white font-light">MY Consultants and Advisors</p>
          <p className="inline-block px-4 py-2 bg-primary border border-accent/30 rounded-full text-white text-sm uppercase tracking-widest font-semibold">WHERE</p>
          <h1 className="text-6xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Businesses Meet Clarity,
            <br />
            Confidence & Success
          </h1>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes zoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes wordSlide {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .animate-zoom {
          animation: zoom 15s ease-in-out infinite alternate;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.2s backwards;
        }

        .animate-wordSlide {
          animation: wordSlide 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </section>
  )
}
