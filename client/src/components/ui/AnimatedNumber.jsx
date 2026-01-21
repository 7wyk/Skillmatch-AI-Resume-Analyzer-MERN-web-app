import { motion, useSpring, useTransform } from 'framer-motion'
import { useEffect } from 'react'

export default function AnimatedNumber({ value, duration = 1, className = '' }) {
    const spring = useSpring(0, { duration: duration * 1000 })
    const display = useTransform(spring, (current) => Math.round(current))

    useEffect(() => {
        spring.set(value)
    }, [spring, value])

    return <motion.span className={className}>{display}</motion.span>
}
