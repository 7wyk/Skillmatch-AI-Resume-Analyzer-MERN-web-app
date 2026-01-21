import { motion } from 'framer-motion'
import { Upload, CheckCircle } from 'lucide-react'
import { useState } from 'react'
import Card from './ui/Card'
import Button from './ui/Button'

export default function QuickScanDemo() {
    const [fileName, setFileName] = useState('')
    const [isScanning, setIsScanning] = useState(false)
    const [score, setScore] = useState(null)

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setFileName(file.name)
            setIsScanning(true)

            // Simulate scanning
            setTimeout(() => {
                setIsScanning(false)
                setScore(Math.floor(Math.random() * 20) + 75) // Random score 75-95
            }, 2000)
        }
    }

    return (
        <div className="max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
            >
                <Card className="p-8">
                    <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2">Quick Resume Check</h3>
                        <p className="text-text-secondary">
                            Upload your resume for an instant AI-powered score
                        </p>
                    </div>

                    <div className="space-y-4">
                        {/* File Input */}
                        <div className="relative">
                            <input
                                type="file"
                                accept=".pdf,.doc,.docx"
                                onChange={handleFileSelect}
                                className="hidden"
                                id="quick-upload"
                            />
                            <label
                                htmlFor="quick-upload"
                                className="flex items-center justify-between p-4 bg-background rounded-2xl border-2 border-dashed border-gray-300 hover:border-primary cursor-pointer transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                                        <Upload className="w-6 h-6 text-primary" />
                                    </div>
                                    <div className="text-left">
                                        <p className="font-semibold">
                                            {fileName || 'Choose file'}
                                        </p>
                                        <p className="text-sm text-text-secondary">
                                            PDF, DOC, or DOCX
                                        </p>
                                    </div>
                                </div>
                                {!isScanning && !score && (
                                    <Button variant="primary" className="pointer-events-none">
                                        Upload
                                    </Button>
                                )}
                            </label>
                        </div>

                        {/* Scanning State */}
                        {isScanning && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="p-6 bg-background rounded-2xl"
                            >
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-6 h-6 border-4 border-primary border-t-transparent rounded-full animate-spin" />
                                    <span className="text-text-secondary">Analyzing resume...</span>
                                </div>
                            </motion.div>
                        )}

                        {/* Result */}
                        {score && !isScanning && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-6 premium-gradient rounded-2xl text-white"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <CheckCircle className="w-8 h-8 text-green-400" />
                                        <div>
                                            <p className="text-sm opacity-80">Your Resume Score</p>
                                            <p className="text-4xl font-bold">{score}/100</p>
                                        </div>
                                    </div>
                                    <Button
                                        variant="secondary"
                                        onClick={() => {
                                            setFileName('')
                                            setScore(null)
                                        }}
                                    >
                                        Try Another
                                    </Button>
                                </div>
                                <p className="mt-4 text-sm opacity-90">
                                    Great start! Upload to the full analyzer for detailed insights.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </Card>
            </motion.div>
        </div>
    )
}
