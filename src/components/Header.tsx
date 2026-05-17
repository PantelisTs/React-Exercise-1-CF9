const Header = () => {
    return (
        <header className="bg-ex1-blue fixed w-full py-4">
            <div className="container mx-auto flex items-center justify-between">

                <a href="/" className="text-white text-xl font-bold whitespace-nowrap border py-1 px-2 rounded-md ">
                    FORM ID
                </a>

                <nav className="flex items-center gap-6">
                    <a href="/" className="text-white hover:text-gray-200 transition-colors">
                        FORM
                    </a>
                    <a href="/" className="text-white hover:text-gray-200 transition-colors">
                        See your final ID
                    </a>
                </nav>

            </div>
        </header>
    )
}

export default Header;