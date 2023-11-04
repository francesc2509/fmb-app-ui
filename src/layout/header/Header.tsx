import './Header.scss'

import profile from './download.jpg'
import useGetLinks from './useGetLinks'

const Header = () => {
    const { error, data} = useGetLinks(1)

    return <header className="Header">
        <div className="Header-Profile-Pic">
            <img src={profile} alt="profile" />
        </div>
        <h1 className="Header-Title">Francesc Manarel Bueno</h1>
        {data && <ul className="Header-Contact-Links">
            { data.map(({name, url}) => {
                return <li key={name}><a target="_blank" href={url}>
                        <i className={`fa-brands fa-${name}`}></i>
                    </a>
                </li>
            })}
        </ul>}
    </header>
}

export default Header;