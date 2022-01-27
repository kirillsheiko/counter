import {useState} from "react";
import "./Counter.css"


export function Counter() {
    const [value, setValue] = useState<number>(0);
    return (
        <div className={'wrapper'}>
            <div style={{color:value< 5 ? "green" : "red"}}>{value}</div>
            <button className={'inc'}
                    onClick={() => setValue((value) => value < 5 ? value + 1 : 5)}
                    disabled={value === 5 ? true : false}>inc</button>
            <button className={'reset'}
                    onClick={() => setValue(0)} disabled={value === 0 ? true : false}>reset</button>
        </div>
    )
}