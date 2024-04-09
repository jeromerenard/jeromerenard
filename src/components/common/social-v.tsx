import { color } from "framer-motion";
import { FaLinkedinIn, FaSpotify, FaInstagram } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";

export default function SocialIcon (){
    return (
        <div className="flex flex-col gap-8">
            <SiDiscogs style={{height: '32px', width: '32px', color: '#444444'}}/>
            <FaSpotify style={{height: '32px', width: '32px', color: '#444444'}}/>
            <FaInstagram style={{height: '32px', width: '32px', color: '#444444'}}/>
            <FaLinkedinIn style={{height: '32px', width: '32px', color: '#444444'}}/>
        </div>
    )
}