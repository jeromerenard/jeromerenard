import { color } from "framer-motion";
import { FaLinkedinIn, FaSpotify, FaInstagram } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";

export default function SocialIconH (){
    return (
        <div className="flex flex-row gap-8">
            <SiDiscogs href="https://www.discogs.com/artist/4897861-J%C3%A9r%C3%B4me-Renard" style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaSpotify style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaInstagram style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaLinkedinIn href="https://www.linkedin.com/in/renardjerome/" style={{height: '32px', width: '32px', color: 'white'}}/>
        </div>
    )
}