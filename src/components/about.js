import AboutImg from '../images/about me (1).png'
export default function About(){

    return <section className='flex flex-col md:flex-row bg-secondary  px-5' id='about'>
        <div className=' py-5 md:w-1/2'>
            <img src={AboutImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
        <div className='flex flex-col justify-center pl-5 text-white' >
             <h1 className='text-4xl  border-b-4 border-primary mb-5 w-[170px] font-bold'>About Me</h1>
            <p className='pb-5'>   Hi, I’m Bharathi – a B.Tech Information Technology graduate from SRM Valliammai Engineering College. I’m passionate about web development and enjoy building clean, responsive websites using HTML, CSS, and JavaScript. I also have programming experience in Python and Java, and I’ve worked with databases like MySQL and MongoDB.



</p>
            <p className='pb-5'>    I have completed internships in Web Development and Python Flask with MongoDB, where I gained practical knowledge in building real-time web applications. I’ve also worked on projects like an AI-based Mock Interview System and a personal portfolio website..</p>
            <p className='pb-5'>I’m always eager to learn new technologies, improve my skills, and take on new challenges. My goal is to become a skilled web developer and contribute to meaningful tech projects.

</p>
        </div>
        </div>
    </section>
}