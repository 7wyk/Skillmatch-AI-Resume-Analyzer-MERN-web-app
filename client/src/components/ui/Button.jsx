import { motion } from 'framer-motion'

export default function Button({
    children,
    variant = 'primary',
    className = '',
    onClick,
    disabled = false,
    ...props
}) {
    const variants = {
        primary: 'btn-primary',
        secondary: 'btn-secondary',
        ghost: 'bg-transparent hover:bg-gray-100 text-text-primary px-6 py-3 rounded-2xl font-semibold transition-all duration-200'
    }

    return (
        <motion.button
            className={`${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            whileTap={{ scale: disabled ? 1 : 0.95 }}
            whileHover={{ scale: disabled ? 1 : 1.02 }}
            onClick={onClick}
            disabled={disabled}
            {...props}
        >
            {children}
        </motion.button>
    )
}
