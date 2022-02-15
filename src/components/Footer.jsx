function Footer() {
    return (

        <footer className="w-100 py-4 flex-shrink-0">
            <div className="container py-4">
                <div className="row gy-4 gx-5">
                    <div className="col-lg-4 col-md-6">
                        <img src="/img/logo1.png" width='150' className="footer-img"/>
                        <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                        <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#">Bootstrapious.com</a></p>
                    </div>
                    <div className="col-lg-2 col-md-6 col-6">
                        <h5 className="text-grey mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Get started</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div>
                    {/* <div className="col-lg-2 col-md-6 col-6">
                        <h5 className="text-grey mb-3">Quick links</h5>
                        <ul className="list-unstyled text-muted">
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Get started</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                    </div> */}
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