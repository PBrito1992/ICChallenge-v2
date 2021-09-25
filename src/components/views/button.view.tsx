import { MouseEventHandler } from "react";

interface ButtonPropsType{
    text: string,
    btnClass?: string,
    icon?: string,
    onClick: MouseEventHandler<HTMLButtonElement>
}

export const Button = ({ text, btnClass, icon, onClick}: ButtonPropsType) => {
    return (
        <button className={ btnClass + ' btn-size' } 
                onClick={ onClick } >
            
            { icon ? <i className={ icon }></i> : <></> } 
            <span className={ icon ? 'ml-2': undefined }>{ text }</span>
        
        </button>
    );
}