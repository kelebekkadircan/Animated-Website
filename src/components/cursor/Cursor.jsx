import React, { useEffect, useState } from 'react'
import './cursor.scss'
import { motion } from 'framer-motion'

const Cursor = () => {

    const [position, setPosition] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({ x: e.clientX, y: e.clientY })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener('mousemove', mouseMove)
        }
    }, [position]);

    console.log(position);


    return (
        <motion.div
            animate={{ x: position.x, y: position.y }}
            className='cursor'>

        </motion.div>
    )
}

export default Cursor