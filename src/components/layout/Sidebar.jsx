function Sidebar() {
    return (
        <div className="fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out">
            <div className="flex items-center justify-center h-16 bg-blue-600">
                <h1 className="text-white text-xl font-bold">Entvy blog Admin</h1>
            </div>
            
            <nav className="mt-8">
                <div className="px-4 space-y-2">
                    <a href="/entvy_blog_admin/#/posts" className="flex items-center px-4 py-3 text-gray-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-200" data-category="all">
                        <i data-feather="grid" className="w-5 h-5 mr-3"></i>
                        Post All
                    </a>
                    <a href="/categories/html" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" data-category="html">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <span className="text-orange-600 font-bold text-sm">&lt;/&gt;</span>
                        </div>
                        HTML
                    </a>
                    <a href="/entvy_blog_admin/#/categories/css" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" data-category="css">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <span className="text-blue-600 font-bold text-sm">{}</span>
                        </div>
                        CSS
                    </a>
                    <a href="/entvy_blog_admin/#/categories/js" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" data-category="javascript">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <span className="text-yellow-600 font-bold text-sm">JS</span>
                        </div>
                        JavaScript
                    </a>
                    <a href="/entvy_blog_admin/#/categories/react" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" data-category="react">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <span className="text-cyan-600 font-bold text-sm">⚛</span>
                        </div>
                        React
                    </a>
                    <a href="/entvy_blog_admin/#/categories/figma" className="flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors duration-200" data-category="figma">
                        <div className="w-5 h-5 mr-3 flex items-center justify-center">
                            <span className="text-purple-600 font-bold text-sm">F</span>
                        </div>
                        Figma
                    </a>
                </div>
            </nav>
        </div>
    );
}

export default Sidebar;