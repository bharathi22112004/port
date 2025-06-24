import WebsiteImg1 from '../images/todo.png'
import WebsiteImg2 from '../images/gpa.png'
import WebsiteImg3 from '../images/movie.png'
export default function Projects(){

  const config={
    projects:[
      {
        image:WebsiteImg1,
        description:'TODO list Web Application ',
        link:'https://bharathi22112004.github.io/To-Do-List/'
      },
      {
        image:WebsiteImg2,
        description:'GPA Calculator Web Application ',
        link:'https://bharathi22112004.github.io/GPA/'
      },
      {
        image:WebsiteImg3,
        description:'A Movie Infromation Find App',
        link:'https://bharathi22112004.github.io/Movie_Info/'
      }
    ]
  }
    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='projects'> 
        <div className="w-full">
        <div className="flex flex-col px-10 py-5">
          <h1 className='text-4xl  border-b-4 border-secondary mb-5 w-[150px] font-bold'>Projects</h1>
          <p>These are my projects. I have built these  Web Projects Using HTML, CSS, and JavaScript</p>
        </div>
        
        </div>
        <div className="w-full">
        <div className='flex flex-col md:flex-row px-10 gap-5'>
          {config.projects.map((project)=>(
            
             <div className='relative '>
                 <img  className='h-[200px] w-[300px]'src={project.image}/>
                 <div className='project-desc'> 
                      <p className='text-center px-5 py-10'>{project.description} </p>
                      <div className='flex justify-center'>
                          <a className='btn' target='_blank'href={project.link}>View Project</a>
                        </div>
                        </div>
                        
            </div>
            

          ))}
           
 
          
           
          
        </div>
        
        </div>
    </section>
}