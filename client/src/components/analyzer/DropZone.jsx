import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Upload, FileText, X } from 'lucide-react'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function DropZone({ onFileUpload }) {
    const [isDragging, setIsDragging] = useState(false)
    const [selectedFile, setSelectedFile] = useState(null)

    const handleDragOver = useCallback((e) => {
        e.preventDefault()
        setIsDragging(true)
    }, [])

    const handleDragLeave = useCallback((e) => {
        e.preventDefault()
        setIsDragging(false)
    }, [])

    const handleDrop = useCallback((e) => {
        e.preventDefault()
        setIsDragging(false)

        const file = e.dataTransfer.files[0]
        if (file && (file.type === 'application/pdf' || file.name.endsWith('.doc') || file.name.endsWith('.docx'))) {
            setSelectedFile(file)
        }
    }, [])

    const handleFileSelect = (e) => {
        const file = e.target.files?.[0]
        if (file) {
            setSelectedFile(file)
        }
    }

    const handleAnalyze = () => {
        if (selectedFile) {
            onFileUpload(selectedFile)
        }
    }

    return (
        <Card hover={false} className="p-8 md:p-12">
            <div className="text-center mb-8">
                <h2 className="text-2xl font-bold mb-2">Upload Your Resume</h2>
                <p className="text-text-secondary">
                    Drag and drop your resume or click to browse
                </p>
            </div>

            <motion.div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                animate={{
                    borderColor: isDragging ? '#FF4B4B' : '#D1D5DB',
                    backgroundColor: isDragging ? '#FFF5F5' : '#F9FAFB',
                }}
                className="border-3 border-dashed rounded-3xl p-12 transition-colors"
            >
                {!selectedFile ? (
                    <div className="text-center">
                        <motion.div
                            animate={{ y: isDragging ? -10 : 0 }}
                            className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-6"
                        >
                            <Upload className="w-10 h-10 text-primary" />
                        </motion.div>

                        <p className="text-lg font-semibold mb-2">
                            Drop your resume here
                        </p>
                        <p className="text-text-secondary mb-6">
                            Supports PDF, DOC, and DOCX files
                        </p>

                        <input
                            type="file"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileSelect}
                            className="hidden"
                            id="file-upload"
                        />
                        <label htmlFor="file-upload">
                            <Button as="span" variant="secondary" className="cursor-pointer">
                                Browse Files
                            </Button>
                        </label>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center justify-between p-6 bg-white rounded-2xl"
                    >
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center">
                                <FileText className="w-7 h-7 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-lg">{selectedFile.name}</p>
                                <p className="text-text-secondary text-sm">
                                    {(selectedFile.size / 1024).toFixed(2)} KB
                                </p>
                            </div>
                        </div>
                        <button
                            onClick={() => setSelectedFile(null)}
                            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </motion.div>
                )}
            </motion.div>

            {selectedFile && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 flex justify-center"
                >
                    <Button onClick={handleAnalyze} className="px-12 py-4 text-lg">
                        Analyze Resume
                    </Button>
                </motion.div>
            )}
        </Card>
    )
}
