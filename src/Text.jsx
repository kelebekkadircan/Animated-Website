import { motion } from 'framer-motion'
import { useState } from 'react'

const Text = () => {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: {
            opacity: 1,
            x: 100,
            transition: { staggerChildren: 0.4 }

        },
        hidden: { opacity: 0 }
    }

    const items = [
        "item1", "item2", "item3", "item4"
    ]

    return (
        <div className="course">
            {/* <motion.div
                className='box'
                // initial={{ opacity: .7, scale: 1 }}
                // animate={{ opacity: 1, scale: 1 }}
                // transition={{ duration: 2, delay: .1 }}
                // whileInView={{ opacity: 1, scale: 1.8, }}
                variants={variants}
                // initial='hidden'
                // animate='visible'
                transition={{ duration: .8 }}
                animate={open ? "visible" : 'hidden'}

            >


            </motion.div> */}
            <motion.ul
                initial="hidden"
                animate='visible'
                variants={variants}

            >
                {items.map(item => (
                    <motion.li variants={variants} key={item}>
                        {item}
                    </motion.li>

                ))}
            </motion.ul>


            {/* <button style={{ padding: '25px', marginLeft: '50px' }} onClick={() => setOpen(prev => !prev)}>Click</button> */}
        </div>

    )
}

export default Text