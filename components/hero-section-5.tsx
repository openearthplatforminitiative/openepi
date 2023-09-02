"use client"
import React from "react";
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
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Contact</NavItem>
            
          </ul>
          <div className="hidden gap-2 lg:flex">
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-twitter text-base" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-facebook text-base" />
            </IconButton>
            <IconButton variant="text" color="white" size="sm">
              <i className="fa-brands fa-instagram text-base" />
            </IconButton>
          </div>
          <IconButton
            variant="text"
            color="white"
            onClick={handleOpen}
            className="ml-auto inline-block lg:hidden"
          >
            {open ? (
              <XMarkIcon strokeWidth={2} className="h-6 w-6" />
            ) : (
              <Bars3Icon strokeWidth={2} className="h-6 w-6" />
            )}
          </IconButton>
        </div>
        <Collapse open={open}>
          <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
            <ul className="flex flex-col gap-4 text-blue-gray-900">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Contact</NavItem>
  
            </ul>
            <div className="mt-4 flex gap-2">
              <IconButton variant="text" color="blue-gray" size="sm">
                <i className="fa-brands fa-twitter text-base" />
              </IconButton>
              <IconButton variant="text" color="blue-gray" size="sm">
                <i className="fa-brands fa-facebook text-base" />
              </IconButton>
              <IconButton variant="text" color="blue-gray" size="sm">
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </div>
          </div>
        </Collapse>
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
              <Button variant="gradient" color="white">
                Read more
              </Button>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection5;
