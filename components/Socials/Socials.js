import Link from "next/link"
import Image from "next/image"


const Socials = () => {
  return (
    <div className="socialsContainer">
      <Link href={"https://www.instagram.com/martinezrubiano.construcciones"}><div className="mediaIcon"><Image layout="fill"  src='/images/instaIcon.svg' alt="instaIcon"/></div></Link>
      <Link href={"https://www.facebook.com/people/Martinez-Rubiano-Construcciones-SAS/100063763683411/"}><div className="mediaIcon"><Image layout="fill"  src='/images/faceIcon.svg' alt="faceIcon"/></div></Link>
      <Link href={"https://wa.me/+5493535085782"}><div className="mediaIcon"><Image layout="fill"  src='/images/waIcon.svg' alt="waIcon"/></div></Link>
    </div>
  )
}

export default Socials