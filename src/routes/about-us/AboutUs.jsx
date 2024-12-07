import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-indigo-900 via-gray-900 to-gray-900 text-white py-16">
      <div className="absolute inset-0 bg-black opacity-40"></div>
      <div className="relative container mx-auto px-6">
        <h2
          className="text-5xl font-extrabold text-center mb-8"
          data-aos="fade-up"
        >
          Welcome to <span className="text-emerald-400">EZstay</span>
        </h2>

        <p
          className="text-lg text-center max-w-4xl mx-auto mb-12 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          At <span className="text-emerald-400">EZstay</span>, we believe that
          travel should be stress-free and luxurious. From business trips to
          family vacations, our mission is to provide exceptional stays that
          blend comfort, convenience, and sophistication.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            data-aos="zoom-in"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">
              Personalized Comfort
            </h3>
            <p>
              Your stay, your way. Choose from a variety of accommodations
              tailored to your unique needs.
            </p>
          </div>

          {/* Feature 2 */}
          <div
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">
              Seamless Experience
            </h3>
            <p>
              Our intuitive platform makes it easy to book your ideal stay with
              just a few clicks.
            </p>
          </div>

          {/* Feature 3 */}
          <div
            className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 transition-transform"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <h3 className="text-2xl font-bold mb-4 text-emerald-400">
              Unmatched Support
            </h3>
            <p>
              Our 24/7 support team ensures that every aspect of your stay is
              smooth and memorable.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
