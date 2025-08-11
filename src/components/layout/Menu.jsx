import '../../styles/scss/Menu.scss';
import Nav from 'react-bootstrap/Nav';

function Menu() {
    return (
        <div className="menu_wrap">
            <Nav defaultActiveKey="/" className="flex-column">
                <div className="menu_logo container-fluid">
                    {/* <img src="./public/images/logo.png" alt="logo" /> */}
                    <a href="/">Entvy Admin</a>
                </div>
                <div className="vr" />
                <Nav.Link href="/blogPosts"><i className="bi bi-list"></i>Blog Posts</Nav.Link>
                <Nav.Link href="/categories"><i className="bi bi-list"></i>Categories</Nav.Link>
            </Nav>
        </div>
    );
}

export default Menu;