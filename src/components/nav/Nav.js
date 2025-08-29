import './Nav.css';

function Nav(props)
{
    return(
        <nav className="nav-container">
            <ul className="nav-list">
                {
                    Object.keys(props.navigation).map(
                        elem => 
                        {
                            return <li key={elem} className="nav-item">
                                    <a 
                                        href={props.navigation[elem]} 
                                        className="nav-link"
                                        onMouseEnter={(e) => e.target.classList.add('hovered')}
                                        onMouseLeave={(e) => e.target.classList.remove('hovered')}
                                    >
                                        {elem}
                                    </a>
                                </li>
                        }
                    )
                }
            </ul>
        </nav>
    );
}

export default Nav;