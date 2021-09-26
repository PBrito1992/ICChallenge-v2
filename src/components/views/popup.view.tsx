import { MouseEventHandler } from "react";
import { PopupData } from "../../models/popup.model";

interface PopupPropsType extends Partial<PopupData>{
    onClose: MouseEventHandler<HTMLButtonElement>
}

export const Popup = ({ message, isSuccess, onClose }: PopupPropsType) => {

    const popupTypeClass = isSuccess ? ' alert-success' : ' alert-danger';

    return (
        <div className={ 'alert alert-dismissible fade show position-top w-100' + popupTypeClass }
             style={{ zIndex: 3 }}>
            <button type="button" className="close" onClick={ onClose }>&times;</button>
            { message }
        </div>
    );
}