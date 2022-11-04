import React from 'react'

const Button = ({type,prefix, label, style}) => {
  return (
    <button
      type={type}
      className={`px-7 py-1 rounded active: scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm ${style}`}
    >
      {prefix ? <span className="mr-3">{prefix}</span> : null}
      <span>{label}</span>
    </button>
  );
}

export default Button