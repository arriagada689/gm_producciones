import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaCamera } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";

const Services = () => {
    const [index, setIndex] = useState(0)
    const [mobileIndex, setMobileIndex] = useState(0)

    const services = ['Servicio 1', 'Servicio 2', 'Servicio 3', 'Servicio 4', 'Servicio 5']

    const handleLeftClick = () => {
        if(index === 0){
            setIndex(services.length - 3)
        } else {
            setIndex(prev => prev - 1)
        }
    }

    const handleLeftClick2 = () => {
        if(mobileIndex === 0){
            setMobileIndex(services.length - 1)
        } else {
            setMobileIndex(prev => prev - 1)
        }
    }

    const handleRightClick = () => {
        if(index === services.length - 3){
            setIndex(0)
        } else {
            setIndex(prev => prev + 1)
        }
    }

    const handleRightClick2 = () => {
        if(mobileIndex + 1 === services.length){
            setMobileIndex(0)
        } else {
            setMobileIndex(prev => prev + 1)
        }
    }

    return (
        <div className='flex flex-col md:flex-row items-center justify-center space-y-8 md:space-x-5 mt-10 pb-20'>
            <div className='font-semibold text-4xl md:text-6xl w-64 text-wrap text-center'>Nuestros servicios</div>

            {/*Services for desktop */}
            <div className='hidden md:flex flex-col items-center space-y-3'>
                <div className='flex items-center space-x-4'>
                    <FaChevronLeft onClick={handleLeftClick} size={25} className=''/>
                    <div className='flex space-x-5'>
                        {services.slice(index, index + 3).map((service, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center'>
                                    <FaCamera size={100} className='text-blue-400'/>
                                    <div>{service}</div>
                                </div>   
                            )
                        })}
                    </div>
                    <FaChevronRight onClick={handleRightClick} size={25} className=''/>
                </div>
                
                {/*Dot section */}
                <div className='flex items-center'>
                    {services.slice(index, index + 3).map((service, i) => {
                        return (
                            <GoDotFill key={i} className={`${index === i ? 'text-black' : 'text-gray-400'}`} onClick={() => setIndex(i)}/>
                        )
                    })}
                </div>
            </div>

            {/*Services for mobile */}
            <div className='flex md:hidden flex-col items-center space-y-3'>
                <div className='flex items-center space-x-6'>
                    <FaChevronLeft onClick={handleLeftClick2} size={25} className=''/>
                    <div className='flex space-x-3'>
                        {services.slice(mobileIndex, mobileIndex + 1).map((service, i) => {
                            return (
                                <div key={i} className='flex flex-col items-center'>
                                    <FaCamera size={100} className='text-blue-400'/>
                                    <div className='text-lg font-semibold'>{service}</div>
                                </div>   
                            )
                        })}
                    </div>
                    <FaChevronRight onClick={handleRightClick2} size={25} className=''/>
                </div>
                
                {/*Dot section */}
                <div className='flex items-center'>
                    {services.map((service, i) => {
                        return (
                            <GoDotFill key={i} size={23} className={`${mobileIndex === i ? 'text-black' : 'text-gray-400'}`} onClick={() => setIndex(i)}/>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}

export default Services