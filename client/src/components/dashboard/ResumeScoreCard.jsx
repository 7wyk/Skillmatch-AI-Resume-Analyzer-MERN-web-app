import { motion } from 'framer-motion'
import { TrendingUp, Award } from 'lucide-react'
import Card from '../ui/Card'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function ResumeScoreCard() {
    const score = 87

    return (
        <Card hover={false} className="h-full flex flex-col justify-between bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
            <div>
                <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-text-secondary">Resume Score</h3>
                    <div className="w-10 h-10 bg-primary/20 rounded-xl flex items-center justify-center">
                        <Award className="w-6 h-6 text-primary" />
                    </div>
                </div>

                <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                            className="text-7xl md:text-8xl font-bold text-text-primary"
                        >
                            <AnimatedNumber value={score} duration={1.5} />
                        </motion.div>
                        <span className="text-4xl text-text-secondary font-semibold">/100</span>
                    </div>
                </div>

                <div className="flex items-center gap-2 text-green-600 mb-4">
                    <TrendingUp className="w-5 h-5" />
                    <span className="font-semibold">+12 from last week</span>
                </div>
            </div>

            <div className="space-y-3">
                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">ATS Compatibility</span>
                        <span className="font-semibold">92%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '92%' }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">Keyword Match</span>
                        <span className="font-semibold">85%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '85%' }}
                            transition={{ delay: 0.7, duration: 1 }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>
                </div>

                <div>
                    <div className="flex justify-between text-sm mb-1">
                        <span className="text-text-secondary">Grammar & Style</span>
                        <span className="font-semibold">84%</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '84%' }}
                            transition={{ delay: 0.9, duration: 1 }}
                            className="h-full bg-primary rounded-full"
                        />
                    </div>
                </div>
            </div>
        </Card>
    )
}
