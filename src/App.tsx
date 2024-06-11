import { useState } from "react"

export default function App() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState(0)
    return (
        <>
            <input type="text" value={value1} onChange={e => setValue1(e.target.value)} />
            <input type="number" value={value2} onChange={e => setValue2(Number(e.target.value))} />
            <p>Value 1: {value1}</p>
            <p>Value 2: {value2}</p>
        </>
    )
}