const Footer = () => {
    return (<footer>
        <section className="footer_left">
            <p className="bold">The Design Shop</p>
            <p>Carefully curated online design store, <br />founded and designed by <span>Ruby Bavanovic</span>.</p>
        </section>
        <section>
            <p className="bold underline">Contact</p>
            <p><a href="mailto:webmaster@example.com" className="bold">Email us</a><br /><a href="#workwithus"
                className="bold">Work with us</a></p>
        </section>
        <section>
            <p className="bold underline">Newsletter</p>
            <p className="bold">Click here to <a href="#subscribe" className="xbold">subscribe</a>. <br /><span
                className="italic">Don't worry. We hate spam too.</span></p>
        </section>
        <section className="footer_findUs">
            <p className="bold underline">Find Us Here</p>
            <ul>
                <li><a href="#Facebook" className="bold">Facebook</a></li>
                <li><a href="#Instagram" className="bold">Instagram</a></li>
                <li><a href="#Twitter" className="bold">Twitter</a></li>
            </ul>
        </section>
        <section className="copyright">
            <p className="light">© 2022 The Design Shop <span className="big">•</span> The Design Blog</p>
        </section>
    </footer>);
}

export default Footer;