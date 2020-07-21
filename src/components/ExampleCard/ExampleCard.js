import React, { useEffect, useState } from 'react'
import ProgressRing from '../ProgressRing/ProgressRing'

const ExampleCard = () => {
    const [progress, setProgress] = useState(10)


    useEffect(() => {
        if (progress === 100) {
            return () => clearInterval()       
        }
        const interval = setInterval(() => {
            setProgress(progress + 10);
            console.log(progress)
        }, 1000);
    }, [progress])

    return <ProgressRing
        radius={80}
        strokeWidth={5}
        progress={progress}
    />
}

export default ExampleCard