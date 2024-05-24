import Hero from "./hero";
import Footer from './footer';
import Highlights from './highlights';
import Testimonials from './testimonial';
import Pricing from './features';


const Home = () => {
    return(
        <div>
            <Hero />
            <Pricing />
            <Testimonials />
            <Highlights />
            <Footer />
        </div>
    )
}

export default Home;