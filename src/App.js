// Sections //
import Banner from './sections/Banner';
import Tasks from './sections/Tasks';
import Contact from './sections/Contact';

// Components //
import Layout from './components/Layout';

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Banner />
                <Tasks />
                <Contact />
            </Layout>
        </div>
    );
};

export default App;
