import { useRef } from "react";
import "./Services.scss"
import {color, motion, useInView} from "framer-motion"

const variants ={
    initial:{
        x: -500,
        y: 100,
        opacity: 0,
    },
    animate :{
        x: 0,
        opacity: 1,
        y:0,
        Transition:{
            duration: 1,
            staggerChildren: 0.1,
        },
    },
};

const Services = () => {

    const ref = useRef();

    const isInView=(ref,{margin:"-100px"});
  return (
    <motion.div 
    className="services"
    variants={variants} 
    initial="initial" 
    //animate="animate"
    //whileInView="animate"
    ref={ref}
    animate={isInView && "animate"}
    >


      <motion.div className="textContainer" variants={variants}>
        <p>We Focus On Helping Your Brand Grow <br /> 
        and Move Forward</p>
        <hr/>
      </motion.div>


      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
            <img src="people.webp" alt="" />
            <h1>
                <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
            </h1>
        </div>
        <div className="title">
            <h1>
                <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
            </h1>
            <button>What We Do ??</button>
        </div>
      </motion.div>


      <motion.div className="listContainer" variants={variants}>
        <motion.div 
         className="box" 
         whileHover={
            {
            backgroundColor:"lightgray", 
            color:"black"
            }
                    }
            >
            <h2>Game Developement</h2>
            <p>
            Radhe Studios, a premier game development company,
             is here to make your gaming dreams come true. 
            </p>
            <button>Hire</button>
        </motion.div>

        <motion.div 
        className="box" 
        whileHover={
            {
                backgroundColor:"lightgray", 
                color:"black"
            }
            }
            >
            <h2>WebSite Developement</h2>
            <p>
            Elevate Your Online Presence with Professional Website Development Services with Radhe Studios Company 
            </p>
            <button>Hire</button>
        </motion.div>

        <motion.div 
        className="box" 
        whileHover={
            {
                backgroundColor:"lightgray", 
                color:"black"
            }
            }
            >
            <h2>App Development </h2>
            <p>
            App development services the entire of creating mobile applications for various platforms, including iOS and Android
            </p>
            <button>Hire</button>
        </motion.div>

        <motion.div 
        className="box" 
        whileHover={
            {
                backgroundColor:"lightgray", 
                color:"black"
            }
            }
            >
            <h2>Digital Marketing </h2>
            <p>
            Elevate Your Online Presence: Digital Marketing Services. Digital marketing services include a diverse set of strategies to promote your business online
 
            </p>
            <button>Hire</button>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Services
