import { color } from "framer-motion";
import { FaLinkedinIn, FaSpotify, FaInstagram } from "react-icons/fa";
import { SiDiscogs } from "react-icons/si";

export default function SocialIcon (){
    return (
        <div className="flex flex-row gap-8">
            <SiDiscogs style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaSpotify style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaInstagram style={{height: '32px', width: '32px', color: 'white'}}/>
            <FaLinkedinIn style={{height: '32px', width: '32px', color: 'white'}}/>
        </div>
    )
}