import React from 'react';



const Input: 
      React.FC<{id: string, type: string, stateValue: (string | null), handleChange: (val: string) => void, className: string, placeholder: string}> 
      = ({id, type, stateValue, handleChange, className, placeholder}) => {

  return (
      <input id={id} type={type}
        value={stateValue || ""}
        onChange={(e) => {
          handleChange(e.target.value)}
        }
        className={className}
        placeholder={placeholder}
      />
  );
};

export default Input;
