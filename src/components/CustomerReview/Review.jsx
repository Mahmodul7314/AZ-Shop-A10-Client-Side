/* eslint-disable react/no-unknown-property */
import Marquee from "react-fast-marquee";
import Review_i from "./Review_i";
import Review_ii from "./Review_ii";
import Review_iii from "./Review_iii";
import Review_iv from "./Review_iv";

const Review = () => {
    return (
        <div className="gap-x-10 w-full space-x-10 ">
            <Marquee pauseOnHover={true}>
                <Review_i />
                <Review_ii />
                <Review_iii />
                <Review_iv />
            </Marquee>  
    </div>
    );
};

export default Review;