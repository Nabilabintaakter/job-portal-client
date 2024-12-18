import React from 'react';

const Header = ({title, description}) => {
    return (
        <div className='space-y-3 mb-6 flex flex-col justify-center items-center'>
            <h1 className='text-4xl font-semibold '>{title}</h1>
            <p className='text-gray-500 font-medium text-xl'>{description}</p>
        </div>
    );
};

export default Header;