import { motion } from 'framer-motion'
import { Upload, ArrowRight } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import Card from '../ui/Card'
import Button from '../ui/Button'

export default function UploadCard() {
    const navigate = useNavigate()

    return (
        <Card hover={false} className="h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="flex flex-col h-full justify-between">
                <div>
                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4">
                        <Upload className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Upload New Resume</h3>
                    <p className="text-white/70 text-sm">
                        Get instant AI-powered analysis and improve your job prospects
                    </p>
                </div>

                <Button
                    onClick={() => navigate('/analyzer')}
                    className="w-full mt-6 bg-primary hover:bg-primary-dark flex items-center justify-center gap-2"
                >
                    Start Analysis
                    <ArrowRight className="w-5 h-5" />
                </Button>
            </div>
        </Card>
    )
}
