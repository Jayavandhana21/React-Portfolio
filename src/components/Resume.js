/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import ResumeImg from '../assests/resume.jpg'

export default function Resume() {
    return (
        <section id="resume" className='flex md:flex-row flex-col bg-primary px-5'>
            <div className='md:w-1/2 md:py-16 py-5 flex justify-end'>
                <img  className='w-[400px]'  src={ResumeImg} />
            </div>
            <div className='md:w-1/2 flex justify-center'>
                <div className='flex flex-col justify-center text-white'>
                    <h1 className='text-4xl border-b-4 border-secondary font-bold mb-5 w-[140px]'>Resume</h1>
                    <p className='pb-8'>You an view my Resume <a className='btn' href='#'>Download</a></p>
                </div>
            </div>
        </section>
    )
}