/* eslint-disable jsx-a11y/alt-text */
import HeroImg from '../assests/hero.png'
import { AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub  } from "react-icons/ai";

export default function Hero() {
    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='w-1/2 flex flex-col'> 
                <h1 className=' text-white text-6xl font-hero-font'>Hi, <br /> I'm <span className='text-black'>SE</span> Jayavandhana
                    <p className='text-2xl'>Front-end Developer</p>
                </h1>
                <div className='flex py-10'>
                    <a href='https://github.com/Jayavandhana21' className='pr-5 hover:text-white'><AiOutlineGithub size={40} /></a>
                    <a href='https://www.instagram.com/kothai_elango_/' className='pr-5 hover:text-white'><AiOutlineInstagram size={40} /></a>
                    <a href='https://www.linkedin.com/in/jayavandhana-s-e-240a09274' className='pr-5 hover:text-white'><AiOutlineLinkedin size={40} /></a>
                </div>
            </div>
            <img className='md:w-1/3' src={HeroImg} />
        </section>
    )
}