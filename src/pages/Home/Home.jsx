import Banner from "./Banner";
import Category from "./Category";


const Home = () => {
    return (
        <div>
            <div className="bg-[#F2F6FD] pb-10 md:pb-16">
                <Banner></Banner>
            </div>
            <Category></Category>
        </div>
    );
};

export default Home;