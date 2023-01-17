import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';

export const NavBar = () => {

    const {user, logout} = useContext(AuthContext)

    const navigate = useNavigate();

    const onLogout = () => {
        
        logout()

        navigate('/login', {
            replace: true,
        })
    }

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid px-5">
                <Link 
                    className="navbar-brand badaboom"   
                    to="/"
                >
                    <h1 className='m-0'>HeroesApp</h1>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="menu">
                    <ul className="navbar-nav me-auto align-items-center">
                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => `nav-item nav-link ${isActive ? 'active' : ''}`}
                            to="/search"
                        >
                            Buscar
                        </NavLink>
                    </ul>
                    <ul className="navbar-nav flex-row justify-content-center gap-3">
                    <span
                        className='nav-item nav-link text-primary d-flex justify-content-center align-items-center '
                    >
                        {user?.name}
                    </span>
                    <button 
                        className='nav-item nav-link btn'
                        onClick={onLogout}
                    >
                        LogOut
                    </button>
                </ul>
                </div>
            </div>  
        </nav>
    )
}
