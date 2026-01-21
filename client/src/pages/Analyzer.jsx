import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/ui/Button'
import DropZone from '../components/analyzer/DropZone'
import ScanningAnimation from '../components/analyzer/ScanningAnimation'
import ResultsView from '../components/analyzer/ResultsView'
import Footer from '../components/Footer'

export default function Analyzer() {
    const navigate = useNavigate()
    const [state, setState] = useState('upload') // 'upload', 'scanning', 'results'
    const [file, setFile] = useState(null)
    const [results, setResults] = useState(null)

    const handleFileUpload = (uploadedFile) => {
        setFile(uploadedFile)
        setState('scanning')

        // Simulate AI analysis
        setTimeout(() => {
            setResults({
                overallScore: 87,
                atsScore: 92,
                grammarScore: 84,
                keywordScore: 85,
                suggestions: [
                    'Add more action verbs to your experience section',
                    'Include quantifiable achievements with metrics',
                    'Optimize for ATS by using standard section headings',
                    'Add relevant technical skills for your target role',
                ],
                keywords: {
                    found: ['JavaScript', 'React', 'Node.js', 'MongoDB', 'API'],
                    missing: ['TypeScript', 'Docker', 'AWS', 'CI/CD'],
                },
            })
            setState('results')
        }, 3000)
    }

    const handleReset = () => {
        setState('upload')
        setFile(null)
        setResults(null)
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="px-6 py-6 md:px-12">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
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
                                <h1 className="text-3xl md:text-4xl font-bold">Resume Analyzer</h1>
                                <p className="text-text-secondary">Get AI-powered insights instantly</p>
                            </div>
                        </div>
                        {state === 'results' && (
                            <Button onClick={handleReset}>
                                Analyze Another
                            </Button>
                        )}
                    </div>

                    {/* Content */}
                    <AnimatePresence mode="wait">
                        {state === 'upload' && (
                            <motion.div
                                key="upload"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <DropZone onFileUpload={handleFileUpload} />
                            </motion.div>
                        )}

                        {state === 'scanning' && (
                            <motion.div
                                key="scanning"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ScanningAnimation fileName={file?.name} />
                            </motion.div>
                        )}

                        {state === 'results' && results && (
                            <motion.div
                                key="results"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ResultsView results={results} fileName={file?.name} />
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <Footer />
        </div>
    )
}
