import React from 'react'
import ReverseTile from './ReverseTile'
import Tiles from './Tiles'



const Projects = () => {

    const ProjectsArray = [
        {
            Heading:"Deal N Buy",
            Subheading:"E-Commerce",
            discription:"Deal n Buy is an online shopping platform that offers a wide variety of products across multiple categories, including electronics, home appliances, fashion, and more. The website aims to provide customers with high-quality products at competitive prices, ensuring a seamless shopping experience through user-friendly navigation, secure payment options, and reliable delivery services. Whether you're looking for the latest gadgets or trendy apparel, Deal n Buy is your one-stop destination for all your shopping needs.",
            tech:"Node Js ,Mongo DB, React, SocketIO",
            link:"https://www.dealnbuy.in/",
        },
        {
            Heading:"Capital Forex",
            Subheading:"Student Management",
            discription:"Capital Forex is a trusted platform specializing in forex trading education and services. The website provides comprehensive training programs, market insights, and resources to help individuals and businesses succeed in the dynamic forex market. With expert guidance and a focus on empowering traders, Capital Forex is dedicated to fostering financial growth and confidence through strategic trading approaches and cutting-edge tools. Whether you're a beginner or an experienced trader, Capital Forex is your partner in mastering the world of forex.",
            tech:"NextJS ,Mongo DB ,Node Js ,GSAP ",
            link:"https://www.capitalforex.in",
        },
        {
            Heading:"SIGI",
            Subheading:"E-commerce / Social Media",
            discription:"SIGI is an innovative web application that seamlessly combines the functionalities of e-commerce and social media, creating a unique platform tailored for e-commerce users. Built using the powerful MERN stack (MongoDB, Express.js, React, and Node.js), SIGI provides an all-in-one solution for shopping, networking, and collaboration within a community of buyers and sellers.",
            tech:"Node Js ,Mongo DB, NEXTjs, SocketIO , etc",
            link:"",
        },
        {
            Heading:"Club Orly Rungis",
            Subheading:"Management",
            discription:"The Club Orly Rungis website is a membership-based organization or community,focused on fostering connections and providing services or benefits to its members. COR cater to individuals or businesses associated with the Orly and Rungis regions in France, potentially serving as a networking hub, a business directory, or a resource platform.",
            tech:"NextJS ,Mongo DB ,Node Js ",
            link:"https://www.cluborlyrungis.com",
        },
    ]
    return (
        <section className='py-10 flex  flex-col group/wrap  gap-24 items-center bg-white text-secondary'>
            <div>
                <p className='text-4xl  font-bold cursor-none'>Projects <span className='text-primaryOrange transition-opacity duration-500 opacity-0 group-hover/wrap:opacity-100 '>I</span> DID!</p>
            </div>

            {
                ProjectsArray.map((items,index)=>{
                    if(index++ % 2 == 0){
                        return (
                                <ReverseTile Heading={items.Heading} Subheading={items.Subheading} discription={items.discription} tech={items.tech} index={index++} link={items.link}/>    
                        )
                    }else{

                        return (
                            <Tiles Heading={items.Heading} Subheading={items.Subheading} discription={items.discription} tech={items.tech} index={index++} link={items.link}/>
                        )
                    }
                })
            }

           

        </section>
    )
}

export default Projects