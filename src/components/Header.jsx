import Navbar from "./Navbar";
import Carousel from "./Carousel";
const Header = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mb-1 background-primary py-4 px-0 mb-0">
                    <Navbar />
                    <Carousel />
                </div>
            </div>
        </div>
    );
};

export default Header