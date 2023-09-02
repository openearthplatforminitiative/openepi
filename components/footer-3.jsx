"use client"
import { Typography, Button, IconButton } from "@material-tailwind/react";

const links = ["KnowIT", "Captus", "Creative Commons", "Open Future"];
const currentYear = new Date().getFullYear();

export function Footer3() {
  return (
    <footer className="mt-10 bg-gradient-to-tr from-gray-900 to-gray-800 px-8 pt-12">
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:justify-between">
          <div className="text-center md:text-left">
            <Typography variant="h5" color="white" className="mb-4">
              The OpenEPI Project Partners
            </Typography>
            <ul className="flex flex-col items-left justify-center md:justify-start">
                <li>
                  <Typography
                    as="a"
                    href="https://knowit.no"
                    color="white"
                    className="py-1 font-medium transition-colors ${
                      idx === 0 ? pr-2 px-3">
                    KnowIT
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="https://creativecommons.org"
                    color="white"
                    className="py-1 font-medium transition-colors ${
                      idx === 0 ? pr-2 px-3">
                    Creative Commons
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="https://openfuture.eu/"
                    color="white"
                    className="py-1 font-medium transition-colors ${
                      idx === 0 ? pr-2 px-3">
                    Open Future
                  </Typography>
                </li>
                <li>
                  <Typography
                    as="a"
                    href="https://capto.no"
                    color="white"
                    className="py-1 font-medium transition-colors ${
                      idx === 0 ? pr-2 px-3">
                    Capto
                  </Typography>
                </li>
            </ul>
            
          </div>
          
        </div>
        <div>
          <Typography
            href="https://norad.no"
            color="white"
            className="pt-3 font-large transition-colors ${
              idx === 0 ? pr-2 px-3">
            The project is funded by the Norwegian Agency For Development Cooperation. 
          </Typography> 
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-700 py-7 md:justify-between">
          <Typography
            color="white"
            className="text-center font-normal opacity-75"
          >
           {currentYear} - Except where otherwise noted, content on this site is licensed under a Creative Commons Attribution 4.0 International license.
          </Typography>

          <div className="flex gap-2">
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-twitter text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-linkedin text-2xl not-italic opacity-75"></i>
            </IconButton>
            <IconButton variant="text" color="white">
              <i className="fa-brands fa-github text-2xl not-italic opacity-75">G</i>
            </IconButton>
            
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer3;
