import { motion } from 'framer-motion'

export default function Card({ children, className = '', hover = true, ...props }) {
    const Component = hover ? motion.div : 'div'

    return (
        <Component
            className={`card-base ${hover ? 'card-hover' : ''} ${className}`}
            whileHover={hover ? { y: -4 } : {}}
            transition={{ duration: 0.2 }}
            {...props}
        >
            {children}
        </Component>
    )
}
