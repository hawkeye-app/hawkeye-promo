import React from 'react';


const InputEmail:React.FC = () => {
    
    return (
    <>
        <div className='flex flex-col gap-[10px]'>
            <label htmlFor="email" className="block text-sm font-jakarta font-normal text-grey-2">Enter your email</label>
            <input required type="email" name='email' className='text-sm outline-none bg-blue-2 rounded-md border border-blue-4 p-[15px] flex w-full justify-between items-center transition-all duration-200 ease-in-out focus:border-brand-1'/>    
        </div>
    </>);
}
export default InputEmail;