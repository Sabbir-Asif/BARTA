import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar";
import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Projects from "../components/Projects/Projects";
import OurResearch from "../components/Publications/OurResearch";
import Publications from "../components/Publications/Publications";
import Teams from "../components/Teams/Teams";

const Home = () => {
    return (
        <div className="bg-cream-primary">
            <Navbar />
            <div className="pt-2 lg:pt-12">
                <section id="home">
                    <Header />
                </section>
                <div className="container mx-auto max-w-6xl lg:max-w-7xl">
                    <section className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 lg:p-12 border-2 border-[#679b9b] rounded-md">
                        <div className=" md:w-3/5">
                            <Banner />
                        </div>
                        <div
                            className="flex-grow md:w-2/5 overflow-auto"
                            style={{ height: "500px" }}
                        >
                            <LatestNews />
                        </div>
                    </section>
                </div>
                <div>
                    <section className="mt-10 lg:mt-16">
                        <OurResearch />
                    </section>
                </div>
                <div className="container mx-auto max-w-6xl lg:max-w-7xl">
                    <section id="publications">
                        <Publications />
                    </section>
                    <section id="projects">
                        <Projects />
                    </section>
                    <section id="teams">
                        <Teams />
                    </section>
                </div>
                <section>
                    <Footer />
                </section>
            </div>
        </div>
    );
};

export default Home;