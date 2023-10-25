import { Link, useLoaderData } from "react-router-dom";
import MyCartSingle from "../../components/MyCartSingle/MyCartSingle";


const MyCart = () => {
    const allcartData = useLoaderData();
    const [mycartData, setmycartData] = ([allcartData])
    return (
        <div className="w-full md:h-full mx-auto px-10">
            <h2 className="text-4xl text-green-400 text-center pt-10">ALL Added Products</h2>
            <div className="grid mx-auto lg:grid-cols-3 grid-cols-1 pt-10 ">
            {
                mycartData.map(cartData => <MyCartSingle
                    key={cartData._id}  
                    mycartproduct={cartData}
                    mycartData={mycartData}
                    setmycartData={setmycartData}
                    ></MyCartSingle>)
            }
            </div>
            <div className="flex justify-center py-8 ">
            <Link to={"/"} className=" flex justify-center py-2 bg-pink-500 text-white lg:w-24 md:w-24 md:h-10 rounded-lg lg:px-0 px-2 hover:bg-slate-200 hover:text-black">Go Home </Link>
            </div>
        </div>
    );
};

export default MyCart;