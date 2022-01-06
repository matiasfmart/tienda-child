function NavBar() {
    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
                <div className="nav-header">
                    <div className="nav-title">
                        Child
                    </div>
                </div>
                <div className="nav-btn">
                    <label>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>
                </div>

                <div className="nav-links">
                    <a href="//github.io/jo_geek" target="_blank">0 - 1 años</a>
                    <a href="http://stackoverflow.com/users/4084003/" target="_blank">2 - 4 años</a>
                    <a href="https://in.linkedin.com/in/jonesvinothjoseph" target="_blank">Accesorios</a>
                    <a href="https://codepen.io/jo_Geek/" target="_blank">Contacto</a>
                </div>
        </div>
    )
}

export default NavBar;