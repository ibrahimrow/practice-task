import PropTypes from 'prop-types';
import { FaBeer } from 'react-icons/fa';
const Navbar = () => {



    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Services', path: '/services' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'Dashboard', path: '/dashboard' },
    ];


    return (
        <nav>
            <ul className="md:flex">
            {
                routes.map(route => <li className="mr-4" key={route.id}><a href={route.path}></a>
                {route.name}</li>)
            }
            </ul>
        </nav>
    );
};

Navbar.propTypes ={
    route: PropTypes.object
}


export default Navbar;