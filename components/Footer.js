function Footer() {
    return (
        <footer id="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">ExpressX is an initiative where you can find like minded people who can help you be the best version of yourself. You can meet new people, build a community, find the job roles that suit you and get mentorship from the
                            best people in your field. Our mission is to make you world- ready by getting guidance from the people who are already out there in the world. Help us build a community where everyone feels free to ask for guidance no matter the level of their skillset.
                        </p>
                    </div>

                    <div className="col-xs-6 col-md-3 features">
                        <h6>Features</h6>
                        <ul className="footer-links">
                            <li><a href="#">Skill Builder</a></li>
                            <li><a href="#">Alumni Talks</a></li>
                            <li><a href="#">Mentorship</a></li>
                            <li><a href="#">Resume Builder</a></li>
                            <li><a href="#">Profile</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Information</h6>
                        <ul className="footer-links">
                            <li><a href="#">Contact No: +91 12345 67890</a></li>
                            <li><a href="#">expressX@gmail.com</a></li>
                            <li><a href="http://scanfcode.com/privacy-policy/">Privacy Policy</a></li>
                            <li><a href="http://scanfcode.com/sitemap/">Sitemap</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <p className="copyright-text">Copyright &copy; 2023 All Rights Reserved by
                            <a href="#">ExpressX</a>.
                        </p>
                    </div>

                    <div className="col-md-4 col-sm-6 col-xs-12">
                        <ul className="social-icons">
                            <li><a className="facebook" href="#"><i className="fa-brands fa-facebook-f"></i></a></li>
                            <li><a className="twitter" href="#"><i className="fa-brands fa-twitter"></i></a></li>
                            <li><a className="instagram" href="#"><i className="fa-brands fa-instagram"></i></a></li>
                            <li><a className="linkedin" href="#"><i className="fa-brands fa-linkedin-in"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer