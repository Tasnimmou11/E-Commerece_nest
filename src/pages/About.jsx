import React from 'react'
import BreadCrumb from '../components/utilities/BreadCrumb'
import AboutProvide from '../components/utilities/AboutProvide'

const About = () => {
  return (
    <section className=' border-t  border-[#cecece]'>
        <div className="container  py-8  ">
        <div className='-mt-1'>
            <BreadCrumb/>
        </div>
        <div className="-mx-[calc(50vw-50%)] w-screen border-b border-[#cecece] my-4" />
</div>
  <div className='container'>
    <div className='flex gap-12'>
        <img src="/aboutbanner.png" alt="aboutbanner" />
        <div>
          <h1 className='text-4xl font-bold text-primary pt-14 '>Welcome to Nest</h1>
          <p className='w-[662px]  py-8 font-normal text-base text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate id est laborum.</p>
<p className='w-[662px]  font-normal text-base text-secondary'>Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos
interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet
orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare
lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in
reprehenderit in voluptate id est laborum.</p>
      <div className='flex gap-6 my-14'>
        <img src="/aboutbanner1.png" alt="aboutbanner1" />
        <img src="/aboutbanner1.png" alt="aboutbanner1" />
        <img src="/aboutbanner1.png" alt="aboutbanner1" />
      </div>
        </div>
      </div>
    <div>
      <h2 className='text-4xl font-bold text-primary pt-14 pb-10 text-center'>What We Provide?</h2>
          <div className='grid grid-cols-3 gap-6'>
            <AboutProvide/>
            <AboutProvide/>
            <AboutProvide/>
            <AboutProvide/>
            <AboutProvide/>
            <AboutProvide/>
          </div>
        </div>    
         <div className='flex gap-8 py-12'>
        <img src="/aboutbody.png" alt="aboutbody" />
        <div>
          <p className='  text-base font-normal text-secondary pt-14 '>Our performance</p>
          <h1 className=' w-96 text-4xl font-bold text-primary pt-5 '>Your Partner for e-commerce grocery solution</h1>
          <p className='w-[510px]  py-8 font-normal text-base text-secondary'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
inventore veritatis et quasi architecto</p>
<p className='w-[510px]  font-normal text-base text-secondary'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim
ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
      
        </div>
         </div>

      <div className='flex gap-2'> 
        <div className=''>
          <h3 className='font-bold text-3xl text-primary'>Who we are</h3>
          <p className='w-96 font-normal text-secondary text-base py-6'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
          <h3 className='font-bold text-3xl text-primary'>Our history</h3>
          <p className='w-96 font-normal text-secondary text-base py-6'>Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.</p>
        </div>
        <div>
          <h3 className='font-bold text-3xl text-primary'>Our mission</h3>
          <p className='w-96 font-normal text-secondary text-base py-6' > Volutpat diam ut venenatis tellus in metus. Nec dui nunc
mattis enim ut tellus eros donec ac odio orci ultrices in.
ellus eros donec ac odio orci ultrices in.</p>
        </div>
        </div>

         <div>
                  
                    <div className="bg-[url(/bgurl.png)] bg-no-repeat bg-center rounded-3xl justify-center  p-20 flex py-10 md:py-16 px-4 md:px-12 my-4 ">
                    <p className="font-bold text-white text-xl md:text-2xl pr-2 lg:pr-4 ">2010 <br/>
                   Glorious years</p>
                    <p className="font-bold text-white  text-xl md:text-2xl  px-2 lg:px-4"> 5000+ <br/>
                        Happy clients</p>
                        <p className="font-bold text-white  text-xl md:text-2xl pl-4 lg:pl-4">4500+ <br/>
                        Projects complete</p>
                         <p className="font-bold text-white  text-xl md:text-2xl pl-4 lg:pl-4">4500+ <br/>
                        Team advisor</p>
                        <p className="font-bold  text-white text-xl md:text-2xl pl-4 lg:pl-4">4500+ <br/>
                        Products Sale</p>

                        </div>
                        
                </div>
           
           
       
       
       
       
       
       
       
      
    </div>
    </section>
  )
}

export default About