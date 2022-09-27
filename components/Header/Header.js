import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from "react"


const Header = () => {
  //const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [windowSize, setWindowSize] = useState()
  const [navbarOpen, setNavbarOpen] = useState(false)
  const [position, setposition] = useState("-100vw")

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {      
        setWindowSize(window.innerWidth)  
        setNavbarOpen(false) 
      }
      window.addEventListener("resize", handleResize);
      handleResize();  
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  const openMenu = () => {
    setNavbarOpen (true)
    setposition ("-110vw")
    setTimeout ( () => {
      setposition ("-0.5rem")
    }, 1)
  }

  const closeMenu = () => {    
    setposition ("-110vw")
    setTimeout ( () => {
      setNavbarOpen (false)
    }, 1000)
  }


  return (
    <div className="container-fluid row">
      <div className="col-12 header justify-content-between align-items-center">
        <Link href={"/"}  className="navItem"><><Image src='/images/icon2.svg' alt="icon" height={75} width={110} className="icon"/></></Link>
        {windowSize < 576 
          ?
            <div className="menuIcon"><Image className="menuIcon" width={25} height={25} src='/images/menu.svg' alt="menu" onClick={openMenu}/></div>      
          :
            <>
              <Link href={"/"}  className="navItem">INICIO</Link>
              <Link href={"/obras"}  className="navItem">OBRAS</Link>
              <Link href={"/nosotros"}  className="navItem">NOSOTROS</Link>
              <Link href={"/contacto"}  className="navItem">CONTACTO</Link>
            </>   
        } 
        
        {(windowSize < 576) & (navbarOpen)
          ?
            <div className="headerLateral" style={{left: position, transition:"all 1s ease-in-out"}}>
              <div className="navBarLateral row">
                <div className="col-2 iconLateral d-flex justify-content-center">
                  <Link href={"/"}  className="navItem"><><Image src='/images/icon2.svg' alt="icon" height={80} width={160} className="icon"/></></Link>
                </div>
                <div className="col-6 navBarLateralContainer">
                  <div className="text-end closeMenu" onClick={closeMenu}>X</div>
                  <Link href={"/"}  className="navItem" onClick={closeMenu}>INICIO</Link>
                  <Link href={"/obras"}  className="navItem" onClick={closeMenu}>OBRAS</Link>
                  <Link href={"/nosotros"}  className="navItem" onClick={closeMenu}>NOSOTROS</Link>
                  <Link href={"/contacto"}  className="navItem" onClick={closeMenu}>CONTACTO</Link>
                </div>
              </div>
            </div>  
          : <></>
        }
      </div>
    </div>
  )
}

export default Header
