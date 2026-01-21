import React from 'react'

export default function Footer() {
    return (
        <footer className="px-6 py-8 border-t border-gray-200 bg-background">
            <div className="max-w-7xl mx-auto text-center">
                <p className="text-text-secondary text-sm">
                    © {new Date().getFullYear()} SkillMatch AI. All rights reserved.
                </p>
                <p className="text-text-muted text-xs mt-2">
                    Developed by <span className="font-semibold text-primary">Sathwik</span>
                </p>
            </div>
        </footer>
    )
}
