import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import LanguageIcon from '@material-ui/icons/Language';
const React = require('react');

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <div className="container">
          <div className='row footer__links'>
            <div className='col footer__col'>
              <div className='footer__title'>Kontakt</div>
              <ul className='footer__items'>
                <li className='footer__item'>
                  <span>Betasi Sp. z o.o.</span>
                </li>
                <li className='footer__item'>Topolowa 13, 33-300 Nowy Sącz</li>
              </ul>
            </div>
            <div className='col footer__col'>
              <div className='footer__title'>Wsparcie techniczne</div>
              <ul className='footer__items'>
                <li className='footer__item'>
                  <a href="mailto:serwis@betasi.pl" target="_blank" rel="noopener noreferrer" class="footer__link-item">Email: serwis@betasi.pl</a>
                </li>
                <li className='footer__item'>
                  <a href="tel:+182005000" target="_blank" rel="noopener noreferrer" class="footer__link-item">Tel: +48 18 200 5009</a>
                </li>
              </ul>
            </div>
          </div>
          <div className='fotter_bottom_social_2mvo'>
            <a href="https://www.facebook.com/betasisoftware"><FacebookIcon/></a>
            <a href="https://www.linkedin.com/company/betasi/"><LinkedInIcon/></a>
            <a href="https://betasi.pl/"><LanguageIcon/></a>
          </div>
        </div>
        <div className='footer__bottom text--center'>
            <div className="margin-bottom--sm">
              <div className="margin-bottom--sm">
                <a href='https://betasi.pl/' target="_blank" rel="noopener noreferrer">
                  {this.props.config.footerIcon && (
                    <img className='footer-logo'
                      src={this.props.config.baseUrl + this.props.config.footerIcon}
                      alt={this.props.config.title}
                    />
                  )}
                </a>
              </div>
            </div>
          </div>
        <section className="copyright" style={{color: 'black'}}>{this.props.config.copyright}</section>
      </footer>
    );
  }
}
module.exports = Footer;

