import { motion } from 'framer-motion'
import { Award, CheckCircle, AlertCircle, TrendingUp, FileText } from 'lucide-react'
import Card from '../ui/Card'
import AnimatedNumber from '../ui/AnimatedNumber'

export default function ResultsView({ results, fileName }) {
    const { overallScore, atsScore, grammarScore, keywordScore, suggestions, keywords } = results

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
        <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-6"
        >
            {/* Overall Score Card */}
            <motion.div variants={itemVariants}>
                <Card hover={false} className="bg-gradient-to-br from-primary/5 to-primary/10 border-2 border-primary/20">
                    <div className="flex items-center justify-between mb-4">
                        <div>
                            <p className="text-text-secondary mb-1">Analysis Complete</p>
                            <p className="text-sm text-text-muted">{fileName}</p>
                        </div>
                        <Award className="w-8 h-8 text-primary" />
                    </div>

                    <div className="flex items-baseline gap-3 mb-4">
                        <span className="text-7xl font-bold">
                            <AnimatedNumber value={overallScore} duration={1.5} />
                        </span>
                        <span className="text-3xl text-text-secondary font-semibold">/100</span>
                    </div>

                    <div className="flex items-center gap-2 text-green-600">
                        <TrendingUp className="w-5 h-5" />
                        <span className="font-semibold">Above average performance</span>
                    </div>
                </Card>
            </motion.div>

            {/* Score Breakdown */}
            <motion.div variants={itemVariants} className="grid md:grid-cols-3 gap-4">
                <Card hover={false} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-text-secondary text-sm mb-2">ATS Score</p>
                    <p className="text-4xl font-bold text-primary">{atsScore}%</p>
                </Card>

                <Card hover={false} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <FileText className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-text-secondary text-sm mb-2">Grammar</p>
                    <p className="text-4xl font-bold text-primary">{grammarScore}%</p>
                </Card>

                <Card hover={false} className="text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <TrendingUp className="w-6 h-6 text-primary" />
                    </div>
                    <p className="text-text-secondary text-sm mb-2">Keywords</p>
                    <p className="text-4xl font-bold text-primary">{keywordScore}%</p>
                </Card>
            </motion.div>

            {/* Keywords Analysis */}
            <motion.div variants={itemVariants}>
                <Card hover={false}>
                    <h3 className="text-xl font-bold mb-4">Keyword Analysis</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                <p className="font-semibold">Found Keywords</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {keywords.found.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center gap-2 mb-3">
                                <AlertCircle className="w-5 h-5 text-orange-600" />
                                <p className="font-semibold">Missing Keywords</p>
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {keywords.missing.map((keyword, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 bg-orange-100 text-orange-700 rounded-lg text-sm font-medium"
                                    >
                                        {keyword}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </Card>
            </motion.div>

            {/* Suggestions */}
            <motion.div variants={itemVariants}>
                <Card hover={false}>
                    <h3 className="text-xl font-bold mb-4">Improvement Suggestions</h3>
                    <div className="space-y-3">
                        {suggestions.map((suggestion, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start gap-3 p-4 bg-background rounded-xl"
                            >
                                <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                    <span className="text-primary text-sm font-bold">{index + 1}</span>
                                </div>
                                <p className="text-text-secondary">{suggestion}</p>
                            </motion.div>
                        ))}
                    </div>
                </Card>
            </motion.div>
        </motion.div>
    )
}
