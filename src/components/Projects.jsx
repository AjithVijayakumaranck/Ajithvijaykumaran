import React from 'react'
import hero from '../assets/hero.jpg'

const Projects = () => {
    return (
        <section className='py-10 flex  flex-col group/wrap  gap-24 items-center bg-white text-secondary'>
            <div>
                <p className='text-4xl  font-bold cursor-none'>Projects <span className='text-primaryOrange transition-opacity duration-500 opacity-0 group-hover/wrap:opacity-100 '>I</span> DID!</p>
            </div>

            {/* //projects */}
            <div className='flex flex-col w-full items-start justify-center px-2 md:ps-32'>
              <div className='flex w-full gap-10'>
              <div className='flex w-full md:w-3/5 px-1 md:px-10'>
                    <div className='flex flex-col w-full'>
                        <p className='text-4xl md:text-8xl  font-bold text-primaryOrange leading-none '>Deal N Buy</p>
                        <div className='ps-1 flex flex-col gap-5'>
                            <p className='text-black font-medium leading-none mt-2'>E-Commerce</p>
                            <div className='flex flex-col gap-5'>
                                <p>Deal n Buy is an online shopping platform that offers a wide variety of products across multiple categories, including electronics, home appliances, fashion, and more. The website aims to provide customers with high-quality products at competitive prices, ensuring a seamless shopping experience through user-friendly navigation, secure payment options, and reliable delivery services. Whether you're looking for the latest gadgets or trendy apparel, Deal n Buy is your one-stop destination for all your shopping needs.</p>
                                <p className='text-black font-medium leading-none'>Node Js ,Mongo DB, React, SocketIO</p>
                            </div>
                            <div>

                                <button className='group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>Give it a try

                                    <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z" /><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z" /></svg>

                                </button>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
              </div>
              <div className='flex w-2/5 min-h-full max-md:hidden justify-center items-center'>

                <div className='h-2 min-w-full bg-secondary relative'>    
                    <div className='aspect-square w-[50px] rounded-full absolute  flex justify-center items-center bg-primaryOrange -top-[60px] right-10'>
                        <p className='text-white text-xl'>1</p></div> 
                </div>
              </div>
              </div>
              
            </div>


             {/* //projects */}
            <div className='flex flex-col w-full items-start   justify-center px-2 md:ps-32'>
              <div className='flex w-full gap-10'>
              <div className='flex w-2/5 min-h-full max-md:hidden  justify-center items-center'>
              <div className='h-2 min-w-full bg-secondary relative'>    
                    <div className='aspect-square w-[50px] rounded-full absolute  flex justify-center items-center bg-primaryOrange -top-[60px] left-10'>
                        <p className='text-white text-xl'>2</p></div> 
                </div>
              </div>
              <div className='flex w-full md:w-3/5 px-1 md:px-10'>
                    <div className='flex flex-col w-full'>
                        <p className='text-4xl md:text-8xl  font-bold text-primaryOrange leading-none '>Capital Forex</p>
                        <div className='ps-1 flex flex-col gap-5'>
                            <p className='text-black font-medium leading-none mt-2'>Student Management</p>
                            <div className='flex flex-col gap-5'>
                                <p>Capital Forex is a trusted platform specializing in forex trading education and services. The website provides comprehensive training programs, market insights, and resources to help individuals and businesses succeed in the dynamic forex market. With expert guidance and a focus on empowering traders, Capital Forex is dedicated to fostering financial growth and confidence through strategic trading approaches and cutting-edge tools. Whether you're a beginner or an experienced trader, Capital Forex is your partner in mastering the world of forex.</p>
                                <p className='text-black font-medium leading-none'>NextJS ,Mongo DB ,Node Js ,GSAP </p>
                            </div>
                            <div>

                                <button className='group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>       <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z" /><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z" /></svg> Give it a try

                              

                                </button>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
              </div>
         
              </div>
              
            </div>


                  {/* //projects */}
                  <div className='flex flex-col w-full items-start justify-center px-2 md:ps-32'>
              <div className='flex w-full gap-10'>
              <div className='flex w-full md:w-3/5 px-1 md:px-10'>
                    <div className='flex flex-col w-full'>
                        <p className='text-4xl md:text-8xl  font-bold text-primaryOrange leading-none '>SIGI</p>
                        <div className='ps-1 flex flex-col gap-5'>
                            <p className='text-black font-medium leading-none mt-2'>E-commerce / Social Media</p>
                            <div className='flex flex-col gap-5'>
                                <p>SIGI is an innovative web application that seamlessly combines the functionalities of e-commerce and social media, creating a unique platform tailored for e-commerce users. Built using the powerful MERN stack (MongoDB, Express.js, React, and Node.js), SIGI provides an all-in-one solution for shopping, networking, and collaboration within a community of buyers and sellers.</p>
                                <p className='text-black font-medium leading-none'>Node Js ,Mongo DB, NEXTjs, SocketIO , etc</p>
                            </div>
                            <div>

                                <button className='group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>Give it a try

                                    <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z" /><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z" /></svg>

                                </button>
                            </div>
                        </div>

                    </div>
                    <div>

                    </div>
              </div>
              <div className='flex w-2/5 min-h-full max-md:hidden justify-center items-center'>
              <div className='h-2 min-w-full bg-secondary relative'>    
                    <div className='aspect-square w-[50px] rounded-full absolute  flex justify-center items-center bg-primaryOrange -top-[60px] right-10'>
                        <p className='text-white text-xl'>3</p></div> 
                </div>
              </div>
              </div>
              
            </div>

                  {/* //projects */}
                  <div className='flex flex-col w-full items-start   justify-center px-2 md:ps-32'>
              <div className='flex w-full gap-10'>
              <div className='flex w-2/5 min-h-full max-md:hidden  justify-center items-center'>
              <div className='h-2 min-w-full bg-secondary relative'>    
                    <div className='aspect-square w-[50px] rounded-full absolute  flex justify-center items-center bg-primaryOrange -top-[60px] left-10'>
                        <p className='text-white text-xl'>4</p></div> 
                </div>
              </div>
              <div className='flex w-full md:w-3/5 px-1 md:px-10'>
                    <div className='flex flex-col w-full'>
                        <p className='text-4xl md:text-8xl  font-bold text-primaryOrange leading-none '>Club Orly Rungis</p>
                        <div className='ps-1 flex flex-col gap-5'>
                            <p className='text-black font-medium leading-none mt-2'>Management</p>
                            <div className='flex flex-col gap-5'>
                                <p>The Club Orly Rungis website is a membership-based organization or community,focused on fostering connections and providing services or benefits to its members. COR cater to individuals or businesses associated with the Orly and Rungis regions in France, potentially serving as a networking hub, a business directory, or a resource platform.</p>
                                <p className='text-black font-medium leading-none'>NextJS ,Mongo DB ,Node Js </p>
                            </div>
                            <div>

<button className='group bg-primaryOrange text-white px-10 rounded-full py-4 flex justify-center gap-5'>       <svg className='fill-white rotate-180 w-6 h-6 group-hover:rotate-45 transition-all' xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width="512" height="512"><path d="M12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Z" /><path d="M14.475,7.39c-.198-.198-.5-.475-.818-.756-.944-.837-2.368-.835-3.312,0-.318,.282-.621,.559-.815,.753l-2.879,2.828c-.197,.193-.2,.51-.006,.707,.193,.197,.51,.199,.708,.006l2.882-2.831c.187-.187,.473-.448,.774-.715,.148-.131,.316-.224,.493-.286v10.404c0,.276,.224,.5,.5,.5s.5-.224,.5-.5V7.096c.177,.063,.345,.155,.493,.286,.301,.266,.587,.527,.777,.717l2.879,2.828c.098,.096,.224,.144,.351,.144,.129,0,.259-.05,.357-.149,.193-.197,.19-.514-.006-.707l-2.876-2.825Z" /></svg> Give it a try



</button>
</div>
                        </div>

                    </div>
                    <div>

                    </div>
              </div>
         
              </div>
              
            </div>

        </section>
    )
}

export default Projects