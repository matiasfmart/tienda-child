import { Link } from "react-router-dom";

function Footer() {
    return (

        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <img src="/img/logo1.png" width='150' className="footer-img"/>
                        <p className="small text-muted">Vestirlos bien, es vestirlos Child.</p>
                        <p className="small text-muted mb-0">&copy; Todos los Copyrights reservados a la marca Child</p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <h5 className="text-grey mb-3">Links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><Link to={'/'} className="text-decoration-none text-secondary" >Home</Link></li>
                            <li><Link to={'/category/01'} className="text-decoration-none text-secondary" >0 - 1 años</Link></li>
                            <li><Link to={'/category/24'} className="text-decoration-none text-secondary" >2 - 4 años</Link></li>
                            <li><Link to={'/category/ac'} className="text-decoration-none text-secondary" >Accesorios</Link></li>
                            <li><Link to={'/contacto'} className="text-decoration-none text-secondary" >Contacto</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 col-6">
                        <h5 className="text-grey mb-3">Seguinos</h5>
                        <p className="small text-muted">Seguinos en nuestras redes para ser el primero en ver los nuevos modelos y descuentos!</p>
                        <div className="footer-containerSocial">
                            <a href='https://www.instagram.com/abii.37/' className="footer-iconSocial"><img src="/img/instagram.png" alt="" /></a>
                            <a href="https://www.facebook.com/ChildProveedor" className="footer-iconSocial"><img src="/img/facebook.png" alt="" /></a>
                            <a href="https://wa.me/+5491169792323" className="footer-iconSocial"><img src="/img/whatsapp.png" alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;