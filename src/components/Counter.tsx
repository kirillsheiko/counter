import {useState} from "react";


export function Counter() {
    const [value, setValue] = useState<number>(0);
    return (
        <div>
            <div style={{color:value< 5 ? "green" : "red"}}>{value}</div>
            <button onClick={() => setValue((value) => value < 5 ? value + 1 : 5)} >inc</button>
            <button onClick={() => setValue(0)}>reset</button>
        </div>
    )
}