import React from "react";

import PropTypes from "prop-types";

export const Password = ({ className, inputTextClassName, text = "Förnamn" }) => {
return (
<div className={`password ${className}`}>
<div className={`input-text ${inputTextClassName}`}>{text}</div>
</div>
);
};
Password.propTypes = {
text: PropTypes.string,
};

