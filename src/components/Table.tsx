/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';

interface ITableProps{
}

interface ITableState{
}


class Table extends React.Component<ITableProps, ITableState>{

    public constructor(props:ITableProps){
        super(props);
    }

    public render(){
        return (
        <div className="container mt-6 ">
            <div className="mb-4">
              <div className="text-light">
                <h2 className="display-1 m-4">Ofertas Disponibles</h2>
                <h3 className="display-5 m-4">Agencia de Colocación</h3>
                <hr className="divider"></hr>
                <p className="lead">
                  <b>En esta opción puede ver todas las ofertas que coinciden con su titulación y que están disponibles para el programa Agencia de Colocación.</b>
                </p>
              </div>
              <div className="text-dark m-4 cn" id="infoSection">
                <div className=" column text-center card bg-secondary text-white mt-4" id="information">
                  <div className="mx-4">
                    <dt>Oferta gestionada por:</dt>
                    <dd>Universidad de Sevilla</dd>
                  </div>
                  <div className="mx-4">
                    <dt>Modo de Participación: </dt>
                    <dd>Esta universidad permite que sea usted mismo el que indique su deseo de participar en algunas ofertas. Pulse el INSCRIBIRSE (antes de que la oferta deje de estar disponible) en la parte inferior de cada oferta para solicitar la participación. Si su curriculum cumple con los restos de condiciones que requieren la oferta, la universidad validará su participación y pasará a estar preseleccionado.</dd>
                  </div>
                </div>
                <div className="column text-center card bg-warning mt-4" id="information">
                  <div className="mx-4">
                    <dt>Ofertas para:</dt>
                    <dd>Agencia de Colocación - 0100000003</dd>
                  </div>
                  <div className="mx-4">
                    <dt>Nota Importante:</dt>
                    <dd>Las ofertas aquí mostradas atienden únicamente a su titulación, el hecho de que usted sea preseleccionado para una entrevista dependerá del resto de condiciones de la oferta y del perfil demandado por la empresa.</dd>
                  </div>
                </div>
              </div>
            </div>
        </div>);
    }

}

export default Table;