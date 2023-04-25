import Link from "next/link"
import Image from "next/image"


const Socials = () => {
  return (
    <div className="socialsContainer">
      <a href={"https://www.instagram.com/martinezrubiano.construcciones"} rel="noreferrer"  target="_blank"><div className="mediaIcon"><Image layout="fill"  src='/images/instaIcon.svg' alt="instaIcon"/></div></a>
      <a href={"https://www.facebook.com/people/Martinez-Rubiano-Construcciones-SAS/100063763683411/"}><div className="mediaIcon"><Image layout="fill"  src='/images/faceIcon.svg' alt="faceIcon"/></div></a>
      <a href={"https://wa.me/+5493534203441"}><div className="mediaIcon"><Image layout="fill"  src='/images/waIcon.svg' alt="waIcon"/></div></a>
    </div>
  )
}

export default Socials