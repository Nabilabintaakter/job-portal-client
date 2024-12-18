import React from 'react';
import Header from '../shared/Header';
import Categories from './Categories';

const Category = () => {
    return (
        <div className='w-[80%] md:w-[90%] max-w-7xl mx-auto pt-5 md:pt-10 pb-10 md:pb-16 space-y-10 md:space-y-14'>
            <Header title='Browse by category' description="Find the job that's perfect for you. about 800+ new jobs everyday"></Header>
            <Categories></Categories>
        </div>
    );
};

export default Category;