import { useRef } from 'react'
import './services.scss'
import { motion, useInView } from 'framer-motion'

const variant = {
    initial: {
        x: -500,
        opacity: 0,
        y: 100,
    },
    animate: {
        x: 0,
        opacity: 1,
        y: 0,

        transition: {
            duration: 1,
            staggerChildren: 0.3
        }
    }
}



const Services = () => {

    const ref = useRef()

    const isInView = useInView(ref, { margin: "-100px" })

    return (


        <motion.div
            ref={ref}
            variants={variant}
            initial='initial'
            animate='animate'
            // animate={isInView && 'animate'}
            // whileInView='animate'
            className='services'>
            <motion.div
                variants={variant}
                className="textContainer">
                <p>I focus on helping your brand grow
                    <br />
                    and move forward</p>
                <hr />
            </motion.div>
            <motion.div
                variants={variant}
                className="titleContainer">
                <div className="title">
                    <img src="/people.webp" alt="" />
                    <h1>
                        <motion.b
                            whileHover={{ color: "orange" }}
                        >Unique</motion.b>
                        Ideas
                    </h1>
                </div>
                <div className="title">
                    <h1>
                        <motion.b
                            whileHover={{ color: "orange" }}
                        >For Your </motion.b> Business.
                    </h1>
                    <button>WHAT WE DO?</button>
                </div>
            </motion.div>
            <motion.div
                variants={variant}
                className="listContainer">
                <motion.div
                    whileHover={{ background: "lightgray", color: "black" }}
                    className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sint tempore libero! Incidunt totam eligendi ullam. Deleniti commodi veritatis quaerat! Laboriosam mollitia, eos fuga pariatur alias porro eum fugit provident animi, magni adipisci molestias quisquam! Error praesentium illo odit sint dolorem. Autem dolore nesciunt molestiae atque illo nobis repellat quibusdam!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: "lightgray", color: "black" }}

                    className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sint tempore libero! Incidunt totam eligendi ullam. Deleniti commodi veritatis quaerat! Laboriosam mollitia, eos fuga pariatur alias porro eum fugit provident animi, magni adipisci molestias quisquam! Error praesentium illo odit sint dolorem. Autem dolore nesciunt molestiae atque illo nobis repellat quibusdam!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: "lightgray", color: "black" }}

                    className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sint tempore libero! Incidunt totam eligendi ullam. Deleniti commodi veritatis quaerat! Laboriosam mollitia, eos fuga pariatur alias porro eum fugit provident animi, magni adipisci molestias quisquam! Error praesentium illo odit sint dolorem. Autem dolore nesciunt molestiae atque illo nobis repellat quibusdam!</p>
                    <button>Go</button>
                </motion.div>
                <motion.div
                    whileHover={{ background: "lightgray", color: "black" }}

                    className="box">
                    <h2>Branding</h2>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero sint tempore libero! Incidunt totam eligendi ullam. Deleniti commodi veritatis quaerat! Laboriosam mollitia, eos fuga pariatur alias porro eum fugit provident animi, magni adipisci molestias quisquam! Error praesentium illo odit sint dolorem. Autem dolore nesciunt molestiae atque illo nobis repellat quibusdam!</p>
                    <button>Go</button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default Services