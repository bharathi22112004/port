import ResumeImg from '../images/res.jpg'
export default function Resume(){
    const config={
        link:'/resume.pdf'
    }

    return <section className='flex flex-col md:flex-row bg-secondary  px-5' id='resume'>
        <div className=' py-5 md:w-1/2 flex justify-end'>
            <img className= 'w-[300px]'src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center pl-5 text-white' >
             <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[140px] font-bold'>Resume</h1>
            <p className='pb-5'> You can view my resume <a className="btn" href={config.link} target='_blank' rel="noopener noreferrer">Download </a></p>
            
        </div>
        </div>
    </section>
}