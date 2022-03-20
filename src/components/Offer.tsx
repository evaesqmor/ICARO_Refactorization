/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Badge, Button, Card, ListGroup, ListGroupItem} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faCalendarCheck, faBusinessTime, faUser } from '@fortawesome/free-solid-svg-icons';

interface IOfferProps{
  code:string;
  convDate:string;
  preselectionUntilDate:string;
  availableUntilDate:string;
  vacancies:number;
  duration:string;
  localty:string;
  profile:string;
  profileDescription:string;
  additionalInfo:string;
  studies:any;
  colors:any;
  // redux
  reference:string;
  collapsed:boolean;
  onClickCollapsed:(collapsed:boolean) => void;
  saveOfferReference:(reference:string)=> void;
}

interface IOfferState{
}

class Offer extends React.Component<IOfferProps, IOfferState>{

    public constructor(props:IOfferProps){
        super(props);
    }

    public render(){
      const handleOpen = () => this.props.onClickCollapsed(!!!this.props.collapsed);
      const setReference = () => {this.props.saveOfferReference(this.props.code)};
      const studiesInOffer = this.props.studies.get(this.props.code);

      return (
              <Card className="cn col col-4 d-inline-block mb-1 pb-0 position-relative" id="offer" style={{'paddingBottom':'5%'}}>
                <Card.Body className="inner row container  ">
                  {studiesInOffer===undefined||studiesInOffer.length===0?"":
                  <div className="row mx-1 justify-content-center" >{studiesInOffer.map((st:string,i:number)=>
                    <Badge className="d-inline-block m-1 col-5 is-size-6 text-truncate" bg={this.props.colors.get(st)}>{st}</Badge>)}
                  </div>}
                  <Badge bg="primary is-size-6 mb-2">#{this.props.code}</Badge><b>{this.props.profile} en {this.props.localty}</b>
                  <ListGroup className="list-group-flush">
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faCalendarDay} className="mr-1"/>
                    <strong>Fechas de Inicio de Convocatoria:</strong> {this.props.convDate}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faCalendarCheck} className="mr-1"/>
                    <strong>Fecha de Fin de la Convocatoria: </strong> {this.props.availableUntilDate}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faBusinessTime} className="mr-1"/>
                    <strong>Duración:</strong> {this.props.duration}
                  </ListGroupItem>
                  <ListGroupItem>
                    <FontAwesomeIcon icon={faUser} className="mr-1"/>
                    <strong>Número de puestos:</strong> {this.props.vacancies}
                  </ListGroupItem>
                  </ListGroup>
                  <Card.Body className="position-relative fixed-bottom d-inline-block ">
                    <Button className="button is-link mr-2 mb-2" href="window.location.href=&#39;/&#39;">Inscribirse</Button>
                    <Button className="btn btn-warning ml-2 mb-2" onMouseUp={(setReference)} onClick={(handleOpen)}>Más Información</Button>
                  </Card.Body>
                </Card.Body>
              </Card>
          );
    }
}

export default Offer;


