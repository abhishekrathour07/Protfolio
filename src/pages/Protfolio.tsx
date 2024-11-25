import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import HoverDevCards from '../components/SkillsCards'
import Projects from '../components/Projects'
import Connect from '../components/Connect'

const Protfolio: React.FC = () => {
    return (
        <div className="bg-cover bg-center bg-[url('/images/background.png')] bg-animate-bounce duration-700">
            <Navbar />
            <HeroSection/>
            <HoverDevCards/>
            <Projects/>
            <Connect/>
            <div className='h-24 px-4 py-6 text-center'>
                <h2 className='text-2xl md:text-4xl font-bold text-[#AF1740] '>Keep coding and exploring</h2>
            </div>

        </div>
    )
}

export default Protfolio
