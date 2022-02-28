import { useEffect, useState } from "react"

export function Scroll() {
    const [scroll, setScroll] = useState(true)
    const [width, setWidth] = useState(0)
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => {
            console.log("eieieieiei")
            setWidth(window.innerWidth);
        });
        window.addEventListener('scroll', () => {
            const end: boolean = (window.innerHeight + window.scrollY) >= document.documentElement.offsetHeight;
            setScroll(!end);
        });
    }, []);

    const scrollNext = () => {
        window.scrollBy(0, 200);
    }
    return (<>
        {width > 768 && scroll && false &&
        <div className="welcome_button hover-me scroll_next" onClick={scrollNext}><img src="/pages/arrow.svg" alt="Scroll"/></div>}
    </>)
}