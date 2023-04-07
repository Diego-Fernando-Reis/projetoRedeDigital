import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Features from "../components/Features";
import Video from "../components/Video";
import CallToAction from "../components/CallToAction";
import CallToActionTwo from "../components/CallToActionTwo";
import Pricing from "../components/Pricing";
import Testimonial from "../components/Testimonial";
import Brands from "../components/Brands";
import Counter from "../components/Counter";
import Screenshots from "../components/Screenshots";
import Faq from "../components/Faq";
import NewsHome from "../components/NewsHome";
import Subscribe from "../components/Subscribe";
import VLibras from "@djpfs/react-vlibras"



const HomePage = () => (
    
    <Layout pageTitle="Projeto Rede Digital">
        <NavOne />
        <Banner />
        <Features />
        <Video />
        <CallToAction />
        <CallToActionTwo />
        <Pricing />
        <Testimonial />
        <Brands />
        <Counter />
        <Screenshots />
        <Faq />
        <NewsHome />
        <Subscribe />
        <Footer />
        <VLibras />
                
    </Layout>

    

)

export default HomePage;