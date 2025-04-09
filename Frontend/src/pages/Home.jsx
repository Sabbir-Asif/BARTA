import Footer from "../components/General/Footer";
import Navbar from "../components/General/Navbar";
import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Projects from "../components/Projects/Projects";
import Publications from "../components/Publications/Publications";
import Teams from "../components/Teams/Teams";

const Home = () => {
    return (
        <div className="bg-cream-primary">
            <Navbar />
            <div className="pt-16"> {/* Add padding top to account for fixed navbar */}
                <section id="home">
                    <Header />
                </section>
                <div className="container mx-auto max-w-7xl">
                    <section className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-12">
                        <div className="mt-12 md:w-3/4">
                            <Banner />
                        </div>
                        <div
                            className="flex-grow md:w-1/4 overflow-auto"
                            style={{ height: "600px" }}
                        >
                            <LatestNews />
                        </div>
                    </section>
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