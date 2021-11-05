import React, { useEffect } from 'react'
import styles from './Navigation.module.css'
import {useRouter} from 'next/router'
import Link from 'next/link'
import {useState, useRef} from 'react'
import {gsap} from 'gsap'

const Navigation = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const [background, setBackground] = useState("circle(100px at 90% -10%)")  
    const headerRef = useRef(null)

    console.log(menuOpen)
    function toggleMenu(){
        if(menuOpen){
            setBackground("circle(100px at 90% -10%)")
            setMenuOpen(false)
        }
        if(!menuOpen){
            setMenuOpen(true)
            const path = "circle(200vh at 90% -10%)"
            setBackground(path)
        }
        
    }

    function closeMenu(){
        setMenuOpen(false)
    }
    
    useEffect(()=>{
        gsap.to(headerRef.current, {duration:1, clipPath: background, ease: ''})
    }, [background])

    return (
        <div>
           <nav className={styles.nav} >
               <div className={styles.logo}></div>
               <div className={styles.navLinks}>
                    <ul  className={menuOpen ? "navLinksUl2" : "navLinksUl"} ref={headerRef}>
                        <li onClick={closeMenu}><Link href="/#about">About Me</Link></li>
                        <li onClick={closeMenu}><Link href="#experience">Experience</Link></li>
                        <li onClick={closeMenu}><Link href="">Skills</Link></li>
                        <li onClick={closeMenu}><Link href="">Interests</Link></li>
                        <li onClick={closeMenu}><Link href="">Get In Touch</Link></li>
                    </ul>
               </div>
               <div className={styles.hamburger} onClick={toggleMenu} >
                   {menuOpen ? <h5 style={{color:"white"}}>Close</h5> : <h5 style={{color:"black"}}>Menu</h5>}
                   <div className={styles.line} style={menuOpen ? {backgroundColor:"white"} : {backgroundColor:"black"} }></div>
                   <div className={styles.line2} style={menuOpen ? {backgroundColor:"white"} : {backgroundColor:"black"} }></div>
                   <div className={styles.line} style={menuOpen ? {backgroundColor:"white"} : {backgroundColor:"black"} }></div>
               </div>
           </nav>
        </div>
    )
}

export default Navigation
