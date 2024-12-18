import 'animate.css';

const Header = ({title, description}) => {
    return (
        <div className='space-y-3 mb-6 flex flex-col justify-center items-center text-center'>
            <h1 className='text-4xl font-semibold animate__animated animate__fadeInUp animate__slow'>{title}</h1>
            <p className='text-gray-500 font-medium text-xl animate__animated animate__fadeInUp animate__slower'>{description}</p>
        </div>
    );
};

export default Header;