import {useState} from "react";

export const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const resetValue = () => {
        setValue(initialValue);
    };

    const inputControl = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    };

    return [value, inputControl, resetValue];
};