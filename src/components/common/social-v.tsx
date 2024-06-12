import { color } from "framer-motion";
import { FaLinkedinIn, FaSpotify, FaInstagram } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";
import Link from "next/link";

export default function SocialIcon() {
  return (
    <div className="flex flex-col gap-8">
      <Link
        href="https://www.discogs.com/artist/4897861-J%C3%A9r%C3%B4me-Renard"
        target="_blank"
      >
        <SiDiscogs
          style={{ height: "32px", width: "32px", color: "#444444" }}
        />
      </Link>
      <Link
        href="https://open.spotify.com/playlist/4JTckBoo42kMfL08AqDjsF?si=4a88ac8d1c734927"
        target="_blank"
      >
        <FaSpotify
          style={{ height: "32px", width: "32px", color: "#444444" }}
        />
      </Link>
      <Link
        href="https://www.instagram.com/jeromerenard.mixing/"
        target="_blank"
      >
        <FaInstagram
          style={{ height: "32px", width: "32px", color: "#444444" }}
        />
      </Link>
      <Link href="https://www.linkedin.com/in/renardjerome/" target="_blank">
        <FaLinkedinIn
          style={{ height: "32px", width: "32px", color: "#444444" }}
        />
      </Link>
    </div>
  );
}
