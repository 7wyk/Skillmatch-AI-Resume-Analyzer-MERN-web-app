import { motion } from 'framer-motion'
import { Briefcase, Clock } from 'lucide-react'
import Card from '../ui/Card'

export default function RecentActivity() {
    const activities = [
        {
            company: 'Google',
            position: 'Senior Software Engineer',
            match: 95,
            time: '2 hours ago',
        },
        {
            company: 'Microsoft',
            position: 'Product Manager',
            match: 88,
            time: '5 hours ago',
        },
        {
            company: 'Amazon',
            position: 'UX Designer',
            match: 82,
            time: '1 day ago',
        },
    ]

    return (
        <Card hover={false} className="h-full">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold">Recent Matches</h3>
                <Clock className="w-5 h-5 text-text-secondary" />
            </div>

            <div className="space-y-4">
                {activities.map((activity, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center justify-between p-3 bg-background rounded-xl hover:bg-gray-100 transition-colors cursor-pointer"
                    >
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <Briefcase className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                                <p className="font-semibold text-sm">{activity.company}</p>
                                <p className="text-xs text-text-secondary">{activity.position}</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-bold text-primary">{activity.match}%</p>
                            <p className="text-xs text-text-muted">{activity.time}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </Card>
    )
}
