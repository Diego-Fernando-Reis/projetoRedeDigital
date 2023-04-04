import React,{ Component } from 'react';

export default class Blog extends Component {
    constructor(){
        super()
        this.state = {
          scrollBtn: false
        }
        this.handleScroll = this.handleScroll.bind(this)
        this.scrollTop = this.scrollTop.bind(this)
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {

      if (window.scrollY > 70) {
        this.setState({
            scrollBtn: true
        });
      } else if (window.scrollY < 70) {
        this.setState({
            scrollBtn: false
        });
      }

    }

    scrollTop = () => {
        window.scrollTo(0, 0);
    }

    render(){
        return (
            <div>
            <footer className="site-footer">
                <div className="site-footer__upper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3">
                                <div className="footer-widget footer-widget__about">
                                    <img src="/assets/images/resources/logo-dark.png" width="119" alt=""
                                         className="footer-widget__logo" />
                                        <p className="footer-widget__contact"><a href="tel:888-666-0000">888 666
                                            0000</a></p>

                                        <p className="footer-widget__contact"><a
                                            href="mailto:needhelp@example.com">contato@rededigital.com</a></p>
                                            <p className="footer-widget__contact">R. Dona Isabel, 700 - Bonsucesso <br/> Rio de Janeiro
                                            21032-060</p>
                                </div>
                            </div>
                            <div className="col-lg-6 d-flex justify-content-between footer-widget__links-wrap">
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Explore</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">Sobre</a></li>
                                        <li><a href="#">Nosso time</a></li>
                                        <li><a href="#">Funcionalidades</a></li>

                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Serviços</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">Cadastro de projeto</a></li>
                                        <li><a href="#">Cadastro social </a></li>
                                        <li><a href="#">Trabalhe conosco </a></li>
                                        <li><a href="#">Denunciar</a></li>
                                    </ul>
                                </div>
                                <div className="footer-widget">
                                    <h3 className="footer-widget__title">Links</h3>
                                    <ul className="footer-widget__links list-unstyled">
                                        <li><a href="#">Ajuda </a></li>
                                        <li><a href="#">Suporte </a></li>
                                        <li><a href="#">Clientes </a></li>
                                        <li><a href="#">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3">
                                <div className="footer-widget">
                                    <div className="site-footer__social">
                                        <a href="#" className="fa fa-facebook-square"></a>
                                        <a href="#" className="fa fa-twitter"></a>
                                        <a href="#" className="fa fa-instagram"></a>
                                        <a href="#" className="fa fa-pinterest-p"></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="site-footer__bottom">
                    <div className="container">
                        <div className="inner-container text-center">
                            <p className="site-footer__copy">&copy; copyright 2023 by <a href="#">Diego Fernando</a></p>
                        </div>
                    </div>
                </div>
            </footer>

                <div onClick={this.scrollTop} className="scroll-to-target scroll-to-top" style={{display: this.state.scrollBtn ? 'block' : 'none'}}><i className="fa fa-angle-up"></i></div>

            </div>
            
        )
    }
}