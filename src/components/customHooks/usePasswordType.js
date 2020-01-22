import React, {useState} from "react";

const usePasswordType = initialType => {
    const [passwordInputType, setPasswordInputType] = useState(initialType);

    const setTypePassword = () => {
        setPasswordInputType('password');
    };

    const setTypeText = () => {
        setPasswordInputType('text');
    };

    const getBtn = (fn, valueText) => (
        <input className="btn btn-outline-secondary password-type-btn"
               type="button"
               value={valueText}
               onClick={fn}/>
    );

    const inputTypeChangingBtn = passwordInputType === 'password' ? getBtn(setTypeText, 'Reveal password')
        : getBtn(setTypePassword, 'Hide password');

    return [passwordInputType, inputTypeChangingBtn];
};

export default usePasswordType;