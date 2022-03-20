/* eslint-disable @typescript-eslint/no-redeclare */
import * as React from 'react';
import { Breadcrumb } from 'react-bootstrap';

interface IBreadcrumbSectionProps{
}

interface IBreadcrumbSectionState{
}


class BreadcrumbSection extends React.Component<IBreadcrumbSectionProps, IBreadcrumbSectionState>{

    public constructor(props:IBreadcrumbSectionProps){
        super(props);
    }

    public render(){
        return (
            <div className="card bg-warning">
              <Breadcrumb className="justify-content-center display-1 mt-3">
                <Breadcrumb.Item className="separador ml-4" href="https://icaro.ual.es/"><b>INICIO</b></Breadcrumb.Item>
                <Breadcrumb.Item className="separador" href=""><b>Servicios</b></Breadcrumb.Item>
                <Breadcrumb.Item className="separador" href=""><b>Ofertas Disponibles</b></Breadcrumb.Item>
                <Breadcrumb.Item className="separador" active><b>Ofertas Disponibles Generales</b></Breadcrumb.Item>
              </Breadcrumb>
            </div>
        );
    }

}

export default BreadcrumbSection;