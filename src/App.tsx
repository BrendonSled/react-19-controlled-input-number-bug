import { useRef, useState } from "react";

export default function App() {
    const [value1, setValue1] = useState('')
    const [value2, setValue2] = useState('')

    const value1Input = useRef<HTMLInputElement>(null);
    const value2Input = useRef<HTMLInputElement>(null);

    return (
        <form action={() => {
            // do nothing
        }}>
            <input ref={value1Input} type="text" value={value1} onChange={e => setValue1(e.target.value)} />
            <input ref={value2Input} type="number" value={value2} onChange={e => setValue2(e.target.value)} />
            <p>Value 1: {value1}</p>
            <p>Value 2: {value2}</p>
            <button type="submit">Submit</button>
        </form>
    )
}