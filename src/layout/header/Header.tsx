import './Header.scss'

import profile from './download.jpg'

const Header = () => {
    return <header className="Header">
        <div className="Header-Profile-Pic">
            <img src={profile} alt="profile" />
        </div>
        <h1 className="Header-Title">Francesc Manarel Bueno</h1>
        <ul className="Header-Contact-Links">
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
            <li><i className="fa-brands fa-linkedin"></i></li>
        </ul>
    </header>
}

export default Header;