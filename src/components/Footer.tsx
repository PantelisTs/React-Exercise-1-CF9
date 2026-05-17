const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-ex1-dark-gray text-white">
            <div className="container mx-auto py-6 text-center">
                &copy; {currentYear} Pantelis Tsiamopoulos - CodingFactory9 - All Rights Reserved.
            </div>
        </footer>
    )
}

export default Footer;