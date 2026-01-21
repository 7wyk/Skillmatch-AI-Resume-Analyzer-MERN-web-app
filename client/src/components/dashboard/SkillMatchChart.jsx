import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Cell } from 'recharts'
import { Calendar } from 'lucide-react'
import Card from '../ui/Card'

export default function SkillMatchChart() {
    const data = [
        { day: 'Mon', value: 78, max: 100 },
        { day: 'Tue', value: 82, max: 100 },
        { day: 'Wed', value: 75, max: 100 },
        { day: 'Thu', value: 89, max: 100 },
        { day: 'Fri', value: 85, max: 100 },
        { day: 'Sat', value: 79, max: 100 },
        { day: 'Sun', value: 72, max: 100 },
    ]

    return (
        <Card hover={false} className="h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h3 className="text-lg font-semibold text-text-secondary mb-1">Skill Match Trends</h3>
                    <p className="text-sm text-text-muted">Week 4-10 January</p>
                </div>
                <div className="w-10 h-10 bg-background rounded-xl flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-text-secondary" />
                </div>
            </div>

            <div className="flex items-baseline gap-2 mb-6">
                <span className="text-5xl font-bold">82.5</span>
                <span className="text-text-secondary">avg score</span>
            </div>

            <div className="flex-1 min-h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
                        <XAxis
                            dataKey="day"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                        />
                        <YAxis
                            axisLine={false}
                            tickLine={false}
                            tick={{ fill: '#9CA3AF', fontSize: 12 }}
                            domain={[0, 100]}
                            ticks={[0, 50, 100]}
                        />
                        <Bar dataKey="max" fill="#E5E7EB" radius={[8, 8, 8, 8]} />
                        <Bar dataKey="value" fill="#FF4B4B" radius={[8, 8, 8, 8]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Card>
    )
}
