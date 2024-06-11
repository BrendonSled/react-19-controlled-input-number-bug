import { useEffect, useRef, useState } from "react"

export default function App() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState(0)

    const value1Input = useRef<HTMLInputElement>(null);
    const value2Input = useRef<HTMLInputElement>(null);

    useEffect(() => {
        document.getElementById('actual-value-1')!.textContent = value1Input.current!.defaultValue
        document.getElementById('actual-value-2')!.textContent = value2Input.current!.defaultValue
    }, [value1, value2])

    return (
        <>
            <input ref={value1Input} type="text" value={value1} onChange={e => setValue1(e.target.value)} />
            <input ref={value2Input} type="number" value={value2} onChange={e => setValue2(Number(e.target.value))} />
            <p>Value 1: {value1}</p>
            <p>Value 2: {value2}</p>
            <p>Default value 1: <span id="actual-value-1">{value1}</span></p>
            <p>Default value 2: <span id="actual-value-2">{value2}</span></p>
        </>
    )
}