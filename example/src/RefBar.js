import { useEffect, useRef, useState } from "react"
import ProgressBar from '@ramonak/react-progress-bar'

const RefBar = () => {
    const ref = useRef()
    const [size, setSize] = useState()

    useEffect(() => {
        console.log(ref.current)
        setSize({
            width: ref.current.offsetWidth,
            height: ref.current.offsetHeight
        })
    }, [ref, setSize])

    return (
        <>
            <ProgressBar completed={50} containerRef={ref} />
            Progress bar container width: {size?.width}
            <br />
            Progress bar container height: {size?.height}
        </>
    )
}

export default RefBar