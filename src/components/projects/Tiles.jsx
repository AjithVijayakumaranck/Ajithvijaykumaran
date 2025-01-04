import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';


const Tiles = ({ Heading, Subheading, discription, tech, index, link }) => {
    const rampRef = useRef(null);
    const ballRef = useRef(null);
    const scopeRef = useRef(null);
    
    useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scopeRef.current, // Trigger when ramp comes into view
        start: "top 70%", // Adjust start point
        end: "top 10%", // Adjust end point
        scrub: true, // Smooth animation during scroll
      },
    });
    
    // Animate ramp to slant
    tl.to(rampRef.current, {
      rotate: 10, // Rotate ramp by 10 degrees
      duration: 2,
      transformOrigin: "left center", // Rotate around left-center
    });
    
    // Animate ball to roll down the ramp
    tl.to(ballRef.current, {
      x: 550, // Move ball along the ramp (adjust value based on design)
      y: 0, // Move ball downward (adjust value based on design)
      rotate: 360, // Add rolling effect
      duration: 2,
      ease: "sine.inOut",
    });
    }, []);
    
    
    
    return (
    <div ref={scopeRef} className="flex flex-col w-full items-start justify-center px-2 md:ps-32">
      <div className="flex w-full gap-10">
        {/* Ramp and Ball Section */}
        <div className="flex w-2/5 min-h-full max-md:hidden justify-center items-center">
          <div
            ref={rampRef}
            className="h-2 min-w-full bg-secondary relative"
            id="ramp"
          >
            <div
              ref={ballRef}
              id="ball"
              className="aspect-square w-[50px] rounded-full absolute flex justify-center items-center bg-primaryOrange -top-[60px] left-10"
            >
              <p className="text-white text-xl">{index}</p>
            </div>
          </div>
        </div>
    
        {/* Content Section */}
        <div className="flex w-full md:w-3/5 px-1 md:px-10">
          <div className="flex flex-col w-full">
            <p className="text-4xl md:text-8xl font-bold text-primaryOrange leading-none">
             {Heading}
            </p>
            <div className="ps-1 flex flex-col gap-5">
              <p className="text-black font-medium leading-none mt-2">
                {Subheading}
              </p>
              <div className="flex flex-col gap-5">
                <p>
                  {discription}
                </p>
                <p className="text-black font-medium leading-none">
                  {tech}
                </p>
              </div>
              <div>
          
              {
                link != "" ?        <Link to = {link} target='_blank'>
                <button className='group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>Give it a try
    
    <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z" /><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z" /></svg>   </button></Link> : ""
    
         
               }
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
    );  
}

export default Tiles