import { About } from "../components/about/About";
import { Carousel } from "../components/carousel/Carousel";
import { Products } from "../components/products/Products";

export const HomePage = () => {
    return (
        <>
            <Carousel />
            <About />
            <Products />
        </>
    );
};