import React from 'react';
import { ResumeIcon } from '../../assets/icons/icons';

const Button = ({ children, color, icon, onClick, width,custom }) => {

    return (
        <button
            onClick={onClick}
            className={`button px-2 py-2 sm:px-5 sm:py-2 md:px-7 md:py-3 ${color} ${width} ${custom} text-slate-700 font-semibold border-2 border-slate-700 rounded-md`}>
            <span className='me-2'>
                { icon }
            </span>
            { children }
        </button>
    )
}

export default Button
