import React from "react";

function Button ({buttonText, buttonType = "button", buttonVariant, buttonDisabled}) {
    return (
        <button
            type={buttonType}
            className={`${buttonVariant}-primary`}
            onClick={() => console.log(`${buttonText}`)}
            disabled={buttonDisabled}

        >
            {buttonText}
        </button>
    )
}

export default Button;