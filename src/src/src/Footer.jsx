import React from "react";

const Footer = () => {
    return (
    <footer className="bg-zinc-900 text-zinc-400 py-8 mt-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Section 1: Disclaimer */}
        <div>
          <h4 className="text-white font-bold text-lg mb-3 uppercase tracking-wider">
            Marvel Disclaimer
          </h4>
          <p className="text-sm leading-relaxed">
            All character images, logos, and names are property of Marvel Entertainment. 
            This is a non-commercial fan website created for educational purposes.
          </p>
        </div>
    
        {/* Section 2: Quick Links */}
        <div>
          <h4 className="text-white font-bold text-lg mb-3 uppercase tracking-wider">
            Explore
          </h4>
          <ul className="space-y-2">
            <li>
              <a href="/movies" className="hover:text-red-500 transition-colors">Movies</a>
            </li>
            <li>
              <a href="/characters" className="hover:text-red-500 transition-colors">Characters</a>
            </li>
            <li>
              <a href="/timeline" className="hover:text-red-500 transition-colors">Timeline</a>
            </li>
          </ul>
        </div>

        {/* Section 3: Social & Copyright */}
        <div className="flex flex-col justify-between">
          <div>
            <h4 className="text-white font-bold text-lg mb-3 uppercase tracking-wider">
              Follow Us
            </h4>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://marvel.com" target="_blank" rel="noreferrer" className="hover:text-red-500">
                Marvel.com
              </a>
            </div>
          </div>
          <p className="text-sm mt-6 md:mt-0">
            &copy; {new Date().getFullYear()} Marvel Movie Universe. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;