/* eslint-disable jsx-a11y/alt-text */
import AboutImg from '../assests/about.png'

export default function About() {
    return (
        <section id='about' className='flex md:flex-row flex-col bg-secondary px-5'>
            <div className='md:w-1/2 py-5'>
                <img src={AboutImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-primary font-bold mb-5 w-[170px]'>About Me</h1>
                    <p className='pb-5 text-justify'>
                        As a highly skilled web developer with deep expertise in React and Redux, I bring a comprehensive understanding of building and maintaining dynamic, efficient, and user-friendly applications. With a proven track record of resolving intricate technical challenges, I am recognized for my methodical and thorough approach to debugging and optimizing state management systems.
                        </p>
                </div>
            </div>
        </section>
    )
}