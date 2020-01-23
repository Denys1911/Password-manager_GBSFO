import {useCallback, useState} from "react";

const useInput = initialValue => {
    const [value, setValue] = useState(initialValue);

    const resetValue = useCallback(() => {
        setValue(initialValue);
    }, [initialValue]);

    const inputControl = {
        value,
        onChange: e => {
            setValue(e.target.value)
        }
    };

    return [value, inputControl, resetValue];
};

export default useInput;