import Navbar from "../components/General/Navbar";
import Banner from "../components/Home/Banner";
import Header from "../components/Home/Header";
import LatestNews from "../components/LatestNews/LatestNews";
import Projects from "../components/Projects/Projects";
import Publications from "../components/Publications/Publications";

const Home = () => {
    return (
        <div className="bg-cream-primary">
            <section>
                <Navbar />
                <Header />
            </section>
            <div className="container mx-auto max-w-7xl">
                <section className="flex flex-col md:flex-row gap-4 md:gap-6 px-4 md:px-12 ">
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
                <section>
                    <Publications />
                </section>
                <section>
                    <Projects />
                </section>
            </div>
        </div>
    );
};

export default Home;