import React from 'react'

const Button = ({type, label, style}) => {
  return (
    <button type={type} className={`px-7 py-1 rounded active: scale-90 transition-all duration-100 ease-in-out shadow-md sm:text-sm ${style}`}>
      {label}
    </button>
  );
}

export default Button