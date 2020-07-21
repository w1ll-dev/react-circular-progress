import React from 'react'
import './ProgressRing.css'

const ProgressRing = ({ radius, strokeWidth, progress }) => {
    const normalizedRadius = radius - strokeWidth * 2
    const circumference = normalizedRadius * 2 * Math.PI
    
    const strokeDashoffset = circumference - progress / 100 * circumference;

    return <div>
        <svg
            height={radius * 2}
            width={radius * 2}
        >
            <circle
                stroke="white"
                fill="transparent"
                strokeWidth={strokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                style={{ strokeDashoffset }}
                strokeWidth={strokeWidth}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
            />
        </svg>
    </div>
}

export default ProgressRing