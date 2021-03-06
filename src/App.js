// Sections //
import Banner from './sections/Banner';
import Tasks from './sections/Tasks';
import Contact from './sections/Contact';
import Map from './sections/Map';
import Chat from './sections/Chat';

// Components //
import Layout from './components/Layout';

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Banner />
                <Tasks />
                <Contact />
                <Map />
                <Chat />
            </Layout>
        </div>
    );
};

export default App;
