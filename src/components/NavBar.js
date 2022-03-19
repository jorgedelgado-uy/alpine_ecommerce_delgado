import CartWidget from './CartWidget/CartWidget'

function NavBar(){

    return(
        <header>
        <button id="menu-button">
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
        </button>
        <nav id="navbar-container">
            <div id="brand-container">
                <a id="'brand-logo">A|L|P|I|N|E</a>
            </div>
            <div id="links-container">
                <ul id="link-list">
                    <li className="link-item">Weakly Deals</li>
                    <li className="link-item">Categories</li>
                    <li className="link-item" id="sign-up-link">Register</li>
                    <li className="link-item" id="sign-in-link">Login</li>
                </ul>
            </div>
            <input type="text" placeholder="Search.." className="search-bar"/>
        </nav> 
        <CartWidget count={0}/>
    </header>
    )    
}

export default NavBar;