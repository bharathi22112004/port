import { BsTwitter } from 'react-icons/bs';
import HeroImg from '../images/bharathi.png'
import { AiOutlineGithub,AiOutlineTwitter,AiOutlineLinkedin } from "react-icons/ai";

export default function Hero(){
    const config={
        subtitle: 'Im a FullStackDeveloper',
        social:{
            github:'https://github.com/bharathi22112004', 
            twitter:'https://x.com/itharahb22',
            linkedin:'https://www.linkedin.com/in/bharathi-p-826622264/'

        }
    }
    return <section className='flex flex-col md:flex-row px-5 py-20 bg bg-primary justify-center' >
        <div className='md:w-1/2 flex flex-col'>
            <h1 className=' text-white text-6xl font-hero-font '>Hi, <br/> Im <span className='text-black'> Bharathi </span>
        <p className=' text-2xl'>{config.subtitle}</p></h1>
         
         <div className='flex py-10'>
            <a href={config.social.github} className='pr-5 hover:text-white'><AiOutlineGithub size={40}/></a>
            <a href={config.social.twitter}className='pr-5 hover:text-white'><AiOutlineTwitter size={40}/></a>
            <a href={config.social.linkedin} className='hover:text-white'><AiOutlineLinkedin size={40}/></a>
        </div>
        </div>
        
        <img className=' md:w-1/4 px-5'src={HeroImg} />
    </section>

}