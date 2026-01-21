import { motion } from 'framer-motion'
import Card from '../ui/Card'

export default function ScanningAnimation({ fileName }) {
    return (
        <Card hover={false} className="p-12">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Analyzing Resume</h2>
                <p className="text-text-secondary mb-12">
                    Our AI is reviewing {fileName}...
                </p>

                {/* Radar Scan Effect */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                    {/* Outer circles */}
                    <div className="absolute inset-0 border-4 border-gray-200 rounded-full" />
                    <div className="absolute inset-8 border-4 border-gray-200 rounded-full" />
                    <div className="absolute inset-16 border-4 border-gray-200 rounded-full" />

                    {/* Scanning line */}
                    <motion.div
                        className="absolute inset-0"
                        animate={{ rotate: 360 }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: 'linear',
                        }}
                    >
                        <div className="absolute top-1/2 left-1/2 w-1/2 h-1 origin-left -translate-y-1/2">
                            <div className="h-full bg-gradient-to-r from-primary to-transparent rounded-full" />
                        </div>
                    </motion.div>

                    {/* Center dot */}
                    <div className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 bg-primary rounded-full" />

                    {/* Pulsing dots */}
                    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
                        <motion.div
                            key={angle}
                            className="absolute top-1/2 left-1/2 w-3 h-3 bg-primary rounded-full"
                            style={{
                                transform: `rotate(${angle}deg) translateX(80px) translateY(-50%)`,
                            }}
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: index * 0.25,
                            }}
                        />
                    ))}
                </div>

                {/* Progress indicators */}
                <div className="space-y-3 max-w-md mx-auto">
                    {[
                        { label: 'Parsing document structure', delay: 0 },
                        { label: 'Analyzing keywords', delay: 0.5 },
                        { label: 'Checking ATS compatibility', delay: 1 },
                        { label: 'Generating insights', delay: 1.5 },
                    ].map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: step.delay }}
                            className="flex items-center gap-3 text-left"
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: step.delay + 0.2 }}
                                className="w-2 h-2 bg-primary rounded-full"
                            />
                            <span className="text-text-secondary">{step.label}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </Card>
    )
}
