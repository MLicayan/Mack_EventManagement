import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const MaybeShowNavBar = ({children}) => {

    const location = useLocation();
    const [showNavbar, setShowNavbar] = useState(false)

    useEffect(() => {
        console.log("This is location: ", location)
        if(location.pathname === '/') {
            setShowNavbar(false)
        } else {
            setShowNavbar(true)
        }
    }, [location])  

  return (
    <div>
        {showNavbar && children}
    </div>
  )
}

export default MaybeShowNavBar
