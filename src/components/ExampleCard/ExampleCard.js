import React, { useEffect, useState, useRef } from 'react'
import ProgressRing from '../ProgressRing/ProgressRing'

const ExampleCard = () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (progress === 100)
                return () => clearInterval(interval)
            return setProgress(progress + 1)
        }, 10);
        return () => clearInterval(interval)
    }, [progress])

    return <ProgressRing
        radius={80}
        strokeWidth={5}
        progress={progress}
    />
}

export default ExampleCard