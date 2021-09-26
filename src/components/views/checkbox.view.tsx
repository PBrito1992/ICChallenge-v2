import { ChangeEventHandler } from "react";

interface CheckboxPropsType{
    name: string,
    value: boolean,
    label: string,
    onClick: ChangeEventHandler<HTMLInputElement>
}

export const Checkbox = ({name, label, onClick, value}: CheckboxPropsType) => {
    return (
        <div className="custom-control custom-checkbox btn-size">
            <input  type="checkbox" 
                    checked={value} 
                    className="custom-control-input" 
                    id="validatedCheck" 
                    name={name} 
                    onChange={onClick} />
            <label  className="custom-control-label" 
                    htmlFor="validatedCheck">{label}</label>
        </div>
    );
}

