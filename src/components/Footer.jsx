// File path: components/Footer.jsx

import React from "react";
import Section from "./Section";
import { socials } from "../constants"; // Importing social media links

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div
        className="container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
      >
        {/* Footer copyright text */}
        <p className="caption text-n-4 lg:block">
          {new Date().getFullYear()} All rights reserved.
        </p>

        {/* Social media icons list */}
        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <li key={item.id}>
              <a
                href={item.url} // Correct URL access
                target="_blank"
                rel="noopener noreferrer" // Security measure for external links
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl} // Correct icon URL access
                  alt={item.title} // Correct alt text
                  width={16}
                  height={16}
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
