import '../../styles/scss/Sidebar.scss';
import Nav from 'react-bootstrap/Nav';

function Sidebar() {
    return (
        <div className="sidebar_wrap">
            <Nav defaultActiveKey="/entvy_blog_admin/" className="flex-column">
                <div className="sidebar_logo container-fluid">
                    <img src="./public/images/logo.png" alt="logo" />
                    <a href="/entvy_blog_admin/">Entvy Admin</a>
                </div>
                <div className="vr" />
                <Nav.Link href="/entvy_blog_admin/"><i className="bi bi-list"></i>Blog Posts</Nav.Link>
                <Nav.Link href="/entvy_blog_admin/categories"><i className="bi bi-list"></i>Categories</Nav.Link>
            </Nav>
        </div>
    );
}

export default Sidebar;