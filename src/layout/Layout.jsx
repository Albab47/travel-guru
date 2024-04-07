import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-6xl mx-auto px-5'>
            <Navbar />
            <Outlet />
        </div>
    );
};

export default Layout;