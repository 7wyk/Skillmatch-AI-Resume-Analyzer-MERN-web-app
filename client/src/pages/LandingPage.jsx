import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Target, TrendingUp } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import QuickScanDemo from '../components/QuickScanDemo'

export default function LandingPage() {
    const navigate = useNavigate()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    }

    const floatingVariants = {
        animate: {
            y: [-10, 10, -10],
            rotate: [0, 5, 0, -5, 0],
            transition: {
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
            },
        },
    }

    return (
        <div className="min-h-screen bg-background overflow-hidden">
            {/* Floating Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"
                />
                <motion.div
                    variants={floatingVariants}
                    animate="animate"
                    style={{ animationDelay: '2s' }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
                />
            </div>

            {/* Navigation */}
            <nav className="relative z-10 px-6 py-6 md:px-12">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Sparkles className="w-8 h-8 text-primary" />
                        <span className="text-2xl font-bold">SkillMatch AI</span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex gap-4"
                    >
                        <Button variant="ghost" onClick={() => navigate('/dashboard')}>
                            Dashboard
                        </Button>
                        <Button onClick={() => navigate('/analyzer')}>
                            Get Started
                        </Button>
                    </motion.div>
                </div>
            </nav>

            {/* Hero Section */}
            <motion.section
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="relative z-10 px-6 py-20 md:py-32 md:px-12"
            >
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        <motion.div variants={itemVariants} className="mb-6">
                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                                AI-Powered Career Optimization
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        >
                            Optimize Your Career{' '}
                            <span className="text-gradient">with AI</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-xl md:text-2xl text-text-secondary mb-12 max-w-2xl mx-auto"
                        >
                            Get instant AI-powered feedback on your resume. Boost your ATS score,
                            match keywords, and land your dream job.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
                            <Button
                                onClick={() => navigate('/analyzer')}
                                className="text-lg px-8 py-4 flex items-center gap-2 justify-center"
                            >
                                Analyze Resume Now
                                <ArrowRight className="w-5 h-5" />
                            </Button>
                            <Button
                                variant="secondary"
                                onClick={() => navigate('/dashboard')}
                                className="text-lg px-8 py-4"
                            >
                                View Demo Dashboard
                            </Button>
                        </motion.div>
                    </div>

                    {/* Quick Scan Demo */}
                    <motion.div variants={itemVariants}>
                        <QuickScanDemo />
                    </motion.div>

                    {/* Features Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-3 gap-6 mt-20"
                    >
                        {[
                            {
                                icon: Target,
                                title: 'ATS Optimization',
                                description: 'Ensure your resume passes Applicant Tracking Systems with our AI analysis',
                            },
                            {
                                icon: TrendingUp,
                                title: 'Skill Matching',
                                description: 'Match your skills with industry requirements and trending keywords',
                            },
                            {
                                icon: Sparkles,
                                title: 'Instant Feedback',
                                description: 'Get detailed suggestions and improvements in seconds',
                            },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                                className="card-base text-center"
                            >
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                                    <feature.icon className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                <p className="text-text-secondary">{feature.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </motion.section>

            {/* Footer */}
            <footer className="relative z-10 px-6 py-8 border-t border-gray-200">
                <div className="max-w-7xl mx-auto text-center">
                    <p className="text-text-secondary text-sm">
                        © {new Date().getFullYear()} SkillMatch AI. All rights reserved.
                    </p>
                    <p className="text-text-muted text-xs mt-2">
                        Developed by <span className="font-semibold text-primary">Sathwik</span>
                    </p>
                </div>
            </footer>
        </div>
    )
}
