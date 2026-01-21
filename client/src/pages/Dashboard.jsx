import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import ResumeScoreCard from '../components/dashboard/ResumeScoreCard'
import SkillMatchChart from '../components/dashboard/SkillMatchChart'
import UploadCard from '../components/dashboard/UploadCard'
import RecentActivity from '../components/dashboard/RecentActivity'
import Footer from '../components/Footer'

export default function Dashboard() {
    const navigate = useNavigate()

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 },
        },
    }

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <div className="px-6 py-6 md:px-12">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-4">
                            <Button
                                variant="ghost"
                                onClick={() => navigate('/')}
                                className="flex items-center gap-2"
                            >
                                <ArrowLeft className="w-5 h-5" />
                                Back
                            </Button>
                            <div>
                                <h1 className="text-3xl md:text-4xl font-bold">Dashboard</h1>
                                <p className="text-text-secondary">Track your resume performance</p>
                            </div>
                        </div>
                        <Button onClick={() => navigate('/analyzer')}>
                            New Analysis
                        </Button>
                    </div>

                    {/* Bento Grid */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {/* Resume Score - Large Card (spans 2 columns on lg) */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2">
                            <ResumeScoreCard />
                        </motion.div>

                        {/* Skill Match Chart - Large Card (spans 2 columns on lg) */}
                        <motion.div variants={itemVariants} className="lg:col-span-2 lg:row-span-2">
                            <SkillMatchChart />
                        </motion.div>

                        {/* Upload Card */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <UploadCard />
                        </motion.div>

                        {/* Recent Activity */}
                        <motion.div variants={itemVariants} className="lg:col-span-2">
                            <RecentActivity />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
