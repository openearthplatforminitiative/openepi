import { Typography, Button } from "@mui/material";
import Link from "next/link";

export const HackathonBanner = () => (
  <div className="sticky top-0 left-0 w-full bg-secondary-90 py-4 z-50">
    <div className="max-w-6xl mx-auto flex gap-6 justify-center items-center">
      <Typography className="text-xl font-bold">Join our Open Data Hackathon 2025</Typography>
      <Link
        href="https://developer.openepi.io/hackathon-2025"
        target="_blank"
        className="text-primary-main font-semibold ml-2"
      >
        <Button
          variant="contained"
          className="bg-primary-main rounded-full border-neutralVariant-50 normal-case shadow-none px-8 py-2"
        >
          Register now
        </Button>
      </Link>
    </div>
  </div>
)