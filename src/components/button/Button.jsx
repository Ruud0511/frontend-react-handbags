import React from "react";

function Button ({buttonText, buttonType = "button", buttonVariant}) {
    return (
        <button
            type={buttonType}
            className={`${buttonVariant}-primary`}
            onClick={() => alert(`${buttonText}`)}
            // disabled={buttonDisabled}

        >
            {buttonText}
        </button>
    )
}

export default Button;