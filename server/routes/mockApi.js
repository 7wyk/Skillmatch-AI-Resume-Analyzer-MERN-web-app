import express from 'express'

const router = express.Router()

// Mock dashboard stats
router.get('/dashboard/stats', (req, res) => {
    res.json({
        resumeScore: 87,
        atsScore: 92,
        grammarScore: 84,
        keywordScore: 85,
        trend: '+12',
        skillMatchData: [
            { day: 'Mon', value: 78 },
            { day: 'Tue', value: 82 },
            { day: 'Wed', value: 75 },
            { day: 'Thu', value: 89 },
            { day: 'Fri', value: 85 },
            { day: 'Sat', value: 79 },
            { day: 'Sun', value: 72 },
        ],
    })
})

// Mock recent activity
router.get('/activity', (req, res) => {
    res.json([
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
    ])
})

// Mock resume analysis
router.post('/analyze', (req, res) => {
    // Simulate processing delay
    setTimeout(() => {
        res.json({
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
    }, 2000)
})

export default router
