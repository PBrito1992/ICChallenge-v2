import { ChangeEventHandler } from "react";

interface FilterOptionPropsType{
    onClick: ChangeEventHandler<HTMLInputElement>, 
    value: boolean
}

export const FilterOption = ({onClick, value}: FilterOptionPropsType) => {
    return (
        <div className="custom-control custom-checkbox btn-size">
            <input  type="checkbox" 
                    checked={value} 
                    className="custom-control-input" 
                    id="validatedCheck" 
                    name="isValidated" 
                    onChange={onClick} />
            <label  className="custom-control-label" 
                    htmlFor="validatedCheck">Display Validated Posts</label>
        </div>
    );
}