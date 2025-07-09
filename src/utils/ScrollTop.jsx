import { useEffect } from "react";
import { useBeforeUnload, useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation ()

    useEffect(() => {
        window.scrollTo (0 ,0)
    }, [pathname])

    return null
}

export default ScrollToTop