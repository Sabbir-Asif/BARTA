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
            <div className="pt-4 lg:pt-16">
                <section id="home">
                    <Header />
                </section>
                <div className="container pt-6 mx-auto max-w-5xl lg:max-w-6xl">
                    <section className="flex flex-col md:flex-row gap-4 md:gap-6 p-8 xl:p-12 border-2 border-[#679b9b] rounded-md">
                        <div className=" md:w-3/5">
                            <Banner />
                        </div>
                        <div
                            className="flex-grow md:w-2/5 overflow-auto"
                            style={{ height: "400px" }}
                        >
                            <LatestNews />
                        </div>
                    </section>
                </div>
                <div id="goal">
                    <section className="mt-16">
                        <OurResearch />
                    </section>
                </div>
                <div className="container mx-auto max-w-6xl lg:max-w-7xl">
                    <section id="publications" className="mt-16 lg:mt-24">
                        <Publications />
                    </section>
                    <section id="projects" className="mt-16 lg:mt-24">
                        <Projects />
                    </section>
                    <section id="teams" className="mt-16 lg:mt-24">
                        <Teams />
                    </section>
                </div>
                <section className="mt-16 lg:mt-24">
                    <Footer />
                </section>
            </div>
        </div>
    );
};

export default Home;