import * as React from 'react';

interface IFooterProps{

}

interface IFooterState{

}

class Footer extends React.Component<IFooterProps, IFooterState>{

    public constructor(props:IFooterProps){
        super(props);
    }

    public render(){
        return (<div>
          <footer className="page-footer bg-dark text-white ">
            <div className="container-fluid text-center text-md-left ">
              <div className="row">
                <div className="col-md-10 mt-md-2 container">
                  <h3 className="text-uppercase">ICARO</h3>
                  <p>El Portal de Gestión de Prácticas en Empresa y Empleo utilizado por las Universidades Públicas Andaluzas, la Universidad Autónoma de Madrid, la Universidad de León, la Universidad Complutense de Madrid y la Universidad de Alicante.</p>
                </div>
                <div className="col-md-10 mb-md-0 mb-3 container mt-5">
                  {/*<h5 className="text-uppercase">Links</h5>*/}
                  <ul className="list-unstyled">
                    <li>
                      <a href="https://icaro.ual.es/Portal/PoliticaPrivacidad.aspx">Política de Privacidad</a>
                    </li>
                    <li>
                      <a href="https://icaro.ual.es/Portal/InformacionContacto.aspx">Información de Contacto</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer-copyright text-center py-3 container">© 2021 Copyright:
              <a href="https://icaro.ual.es"> ICARO</a>
            </div>
          </footer>
        </div>);
    }
}

export default Footer;