import { useRef } from 'react';
import './portfolio.scss'
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'
const items = [

    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, porro! "
    },
    {
        id: 2,
        title: "NextJs Blog",
        img: "https://images.pexels.com/photos/5052851/pexels-photo-5052851.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, porro! "
    },
    {
        id: 3,
        title: "Vanilla Javascript App",
        img: "https://images.pexels.com/photos/4584830/pexels-photo-4584830.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, porro! "
    },
    {
        id: 4,
        title: "Music App",
        img: "https://images.pexels.com/photos/1762578/pexels-photo-1762578.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore, porro! "
    },
];

const Single = ({ item }) => {
    const ref = useRef()

    const { scrollYProgress } = useScroll({
        target: ref,
    });

    const y = useTransform(scrollYProgress, [0, 1], [-200, 200])

    return (
        <>
            <section >
                <div className="container">
                    <div className="wrapper">
                        <div className="imageContainer" ref={ref}>
                            <img src={item.img} alt="" />
                        </div>
                        <motion.div
                            style={{ y: y }}
                            className="textContainer">
                            <h2

                            >{item.title}</h2>
                            <p>{item.desc}</p>
                            <button>See Demo</button>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    )
}


const Portfolio = () => {

    const ref = useRef()

    const { scrollYProgress } = useScroll({ target: ref, offset: ["end end ", "start start"] })

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
    })
    return (
        <div ref={ref} className='portfolio'>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div
                    style={{ scaleX: scaleX }}
                    className="progressBar">
                </motion.div>
            </div>
            {items.map((item, i) => (
                <Single item={item} key={i} />
            ))}

        </div>
    )
}

export default Portfolio