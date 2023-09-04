"use client"
import React from "react";
import Link from 'next/link';
import {
  Navbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavItemPropsType {
  children: React.ReactNode;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography as="a" href="#" variant="small" className="font-medium">
        {children}
      </Typography>
    </li>
  );
}

export function HeroSection5() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <>
      <Navbar
        fullWidth
        shadow={false}
        color="transparent"
        className="absolute z-50 border-0"
      >
        <div className="container mx-auto flex items-center justify-between">
          <Typography variant="h6">OpenEPI.io</Typography>
         
          <ul className="ml-10 hidden items-center gap-6 ">  // lg:flex
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            
          </ul>
        </div> 
        
      </Navbar>
      <div className="relative min-h-screen w-full bg-[url('/img/bg-hero-4.jpg')] bg-cover bg-no-repeat">
        <div className="absolute inset-0 h-full w-full bg-black/50" />
        <div className="grid min-h-screen px-8">
          <div className="container relative z-10 my-auto mx-auto md:pl-10">
            <Typography variant="h1" color="white">
              Open Earth Platform Initiative
            </Typography>
            <Typography
              variant="lead"
              className="mt-6 mb-10 w-full text-white/80 md:max-w-full md:pr-16  lg:max-w-2xl xl:pr-28"
            >
              An open, global digital innovation platform for climate and nature.
            </Typography>
            
            <div className="mt-8 mb-4 flex gap-2">
            <Link href="/post/about-project">
              <Button  color="white" aria-label="Read more button" variant="gradient" >
                Read more
              </Button>  
            </Link>       
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection5;
