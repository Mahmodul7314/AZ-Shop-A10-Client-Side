import { useLoaderData } from "react-router-dom";
import AboutUs from "../../components/About Us/AboutUs";
import Banner from "../../components/Banner/Banner";
import Review from "../../components/CustomerReview/Review";
import BrandCard from "../../components/BrandCard/BrandCard";


const Home = () => {
    const brandNames = useLoaderData();
    return (
        <div>
            <Banner></Banner>

            <h2 className="font-bold text-center text-blue-400 text-4xl mt-14 mb-4">Products of Brand</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 lg:gap-6 px-2 lg:px-14">
           {
            brandNames.map(brandData=><BrandCard key={brandData.id}  brandData={brandData}></BrandCard>)
          
           }
            </div>
            <div className="h-[40vh]  mt-20"> <Review></Review></div>
            <AboutUs></AboutUs>
           
        </div>
    );
};

export default Home;