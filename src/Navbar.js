const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>TESTING</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Projects</a>
                <a href="/">Resume</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: '#f1256d'
                }}>New Blog - Testing</a>
            </div>
        </nav>
    );
}

export default Navbar;