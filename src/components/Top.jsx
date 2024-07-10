import React, { useEffect, useState } from 'react'
import headerVideo from '../assets/header-video.mp4'
import headerVideo2 from '../assets/horizontal.mp4'
import navbarLogo from '../assets/logo-bg-black.png'
import navbarLogo2 from '../assets/logo-red.png'
import videoPoster from '../assets/video-poster.png'

const Top = () => {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true);

    const subtitles = ['Subtitulo', 'Subtitulo 2', 'Subtitulo 3']

    useEffect(() => {
        // const interval = setInterval(() => {
        //     setFade(false);
        //     setTimeout(() => {
        //         setIndex((prevIndex) => (prevIndex + 1) % subtitles.length);
        //         setFade(true);
        //     }, 500); 
        // }, 2800);

        // return () => clearInterval(interval);
    }, [])
    
    return (
        <header className='relative h-[78vh] w-full'>
            {/*Overlay */}
            <div className='absolute top-0 left-0 w-full h-full bg-videoOverlay'></div>

            <video src={headerVideo2} autoPlay loop muted poster={videoPoster} className='hidden md:block h-full w-full object-fill' id="video_ID"/>

            <video src={headerVideo} autoPlay playsInline loop muted className='md:hidden h-full w-full object-fill' id="videoID"/>
            
            {/*Navbar for desktop */}
            <nav className='hidden md:block absolute top-0 left-0 p-4 w-full'>
                <div className='container flex items-center justify-between mx-auto text-white h-20'>
                    {/*Logo */}
                    <img src={navbarLogo2} alt="Logo" className='h-full w-40'/>

                    <div className='flex items-center space-x-6 text-lg font-semibold'>
                        <div>Servicios</div>
                        <div>Trabajos</div>
                        <div className='border border-white py-2 px-4 rounded-lg'>Contacto</div>
                    </div>
                </div>
            </nav>

            {/*Navbar for mobile */}
            <nav className='md:hidden absolute top-0 left-0 p-4 w-full'>
                <div className='container flex items-center justify-center mx-auto text-white h-20'>
                    
                    {/*Logo */}
                    <img src={navbarLogo2} alt="Logo" className='h-full w-40'/>

                </div>
            </nav>

            {/*Hero */}
            <div className='absolute inset-0 flex items-center justify-center'>
                <div className='text-center text-white'>
                    <div className='text-7xl font-semibold'>Titulo</div>
                    <div className={`text-center text-white`}>
                        <div className='text-3xl font-semibold'>{subtitles[index]}</div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Top