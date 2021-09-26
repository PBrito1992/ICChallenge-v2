import { ChangeEventHandler } from "react";

interface SelectPropsType{
    defaultText: string,
    name: string,
    value: string,
    options?: JSX.Element[],
    handlePageChange: ChangeEventHandler<HTMLSelectElement>
}

export const Select = ({ 
    name,
    defaultText, 
    value, 
    options, 
    handlePageChange }: SelectPropsType) => {

    return (
        <select name={name} 
                className="custom-select ml-3 btn-size"
                value={value}
                onChange={handlePageChange}>
            <option disabled>{defaultText}</option>
            { options }
        </select>
    );
}