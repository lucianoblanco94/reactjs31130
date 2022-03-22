import React from 'react';

export const CustomButton = ({title, color, size}) => {
    
    const buttonColor =  color === "primary" 
        ? ("blue") 
        :(color === "secondary" 
            ? ("green") 
            : (color === "danger" 
                ? ("red")
                : ("yellow")
            )
        )
    
    const defaultSize = size || 16;

    const buttonStyles = {
        backgroundColor: buttonColor,
        padding: 5,
        height: 40,
        width:100,
        color: '#000',
        borderRadius: 5,
        border: 'solid 5px #B38B59',
        fontSize: defaultSize,
        margin: '0 8px',


    }; 
    return (
        <button style={buttonStyles}>{title}</button>
    )
}

