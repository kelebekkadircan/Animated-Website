import './hero.scss'
import { motion } from 'framer-motion'


const Hero = () => {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.4
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }
    const sliderVariants = {
        initial: {
            x: 0,

        },
        animate: {
            x: "-220%",
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: "mirror"
            }
        }
    }




    return (
        <div className='hero'>
            <div className="wrapper">

                <motion.div className="textContainer"
                    initial="initial"
                    animate='animate'
                    variants={textVariants}>
                    <motion.h2
                        variants={textVariants}
                    >
                        KADİRCAN KELEBEK
                    </motion.h2>
                    <motion.h1

                        variants={textVariants}>
                        Web Developer
                    </motion.h1>
                    <motion.div
                        variants={textVariants}
                        className="buttons">
                        <motion.button variants={textVariants} >See the Latest Works</motion.button>
                        <motion.button variants={textVariants} >Contact Me</motion.button>
                    </motion.div>
                    <motion.img
                        animate='scrollButton'
                        variants={textVariants} src="/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div
                variants={sliderVariants}
                initial='initial'
                animate='animate'
                className="slidingTextContainer">
                ReactJs  MongoDb NodeJs ExpressJs GoLang HTML/CSS
            </motion.div>
            <div className="imageContainer">
                <img src="/hero.png" alt="" />
            </div>
        </div>
    )
}

export default Hero