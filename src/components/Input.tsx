import { useState } from 'react';
import './input.scss';

const Input = ({
    placeholder,
    type
}: {
    placeholder: string,
    type: string
}) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return (
        <div className='input'>
            <input 
                type={type === 'password' && showPassword ? 'text' : type} 
                placeholder={placeholder} 
            />
            {type === 'password' && (
                <span 
                    onClick={() => setShowPassword(!showPassword)}
                    className='toggle-password'
                >
                    {showPassword ? 'HIDE' : 'SHOW'}
                </span>
            )}            
        </div>
    );
}

export default Input;
