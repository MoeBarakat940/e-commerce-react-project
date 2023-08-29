import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
    return(
        <div className="head">
            <h1>MoeTech Shop</h1>
            <nav className="nav">
                <Link className="a" to="/">Home</Link>
                <Link className="a" to="/explore">Explore <FontAwesomeIcon icon={faMagnifyingGlass} /></Link>
                <Link className="a" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
            </nav>
        </div>
    )
}
