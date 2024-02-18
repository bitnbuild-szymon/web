import Navbar from '../../layouts/Navbar';
import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <div className="posts-container">

            </div>
            <div className="side-container">
                <div className="my-profile section">
                    <img className="profile-image" src="/assets/images/user.png"/>
                    <span className="username">Locz3k</span>
                </div>
                <div className="friends section">

                </div>
            </div>
        </div>
    )
}

export default Home;

