import Banner from "./Banner";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <div className="bg-gradient-to-b from-[#F2F6FD] to-[#8d97ff7e] pb-10 md:py-16">
                <Banner></Banner>
            </div>
            <Category></Category>
        </div>
    );
};

export default Home;