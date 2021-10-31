// Sections //
import Banner from './sections/Banner';
import Tasks from './sections/Tasks';

// Components //
import Layout from './components/Layout';

// Firebase //
import './config/firebase.settings';

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Banner />
                <Tasks />
            </Layout>
        </div>
    );
};

export default App;
