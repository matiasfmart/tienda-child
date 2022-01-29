import { Link } from "react-router-dom";

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-links">
                <div>
                    <a href='https://www.instagram.com/abii.37/' className="link" to={'/category/01'}>instagram</a>
                </div>
                <div>
                    <a href="https://www.facebook.com/ChildProveedor" className="link" to={'/category/24'}>facebook</a>
                </div>
                <div>
                    <a href="https://wa.me/+5491169792323" className="link" to={'/category/ac'}>whatsapp</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;