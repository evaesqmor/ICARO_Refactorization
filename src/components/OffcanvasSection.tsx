/* eslint-disable array-callback-return */
/* eslint-disable react/require-render-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Badge, Card, Offcanvas,ListGroup, Alert} from 'react-bootstrap';

interface IOffcanvasSectionProps{
    colors:string[]
    offers:any[];
    offerSpecific:any[];
    collapsed: boolean;
    reference:string;
    onClickCollapsed:(collapsed:boolean) => void;
}

interface IOffcanvasSectionState{

}

class OffcanvasSection extends React.Component<IOffcanvasSectionProps, IOffcanvasSectionState>{
    public constructor(props:IOffcanvasSectionProps){
        super(props);
    }

    public render(){
        // Cerrar la sección del Offcanvas
        const handleClose = () => this.props.onClickCollapsed(!!!this.props.collapsed);

        var offer:any = {};
        var offerSpecificInfo:any = {};
        var studies:string[]= [];
        var process:string[]= [];
        var competences:string[]= [];
        var requisites:string[]= [];
        var languages:string[]= [];
        let colorByField = new Map<any,any>();


        /*Oferta por código*/
        this.props.offers.map((offerInfo)=>{
            if(this.props.reference===offerInfo["code"]){
                offer = offerInfo;
                return true;
            }
        });

        /*Función para filtrar por código de la oferta y obtener su información específica*/
        this.props.offerSpecific.map((specificInfo)=>{
            if(this.props.reference===specificInfo["code"]){
                offerSpecificInfo = specificInfo;
                specificInfo["studies"].map((st:string)=>studies.push(st));
                specificInfo["process"].map((pr:string)=>process.push(pr));
                specificInfo["competences"].map((cm:string)=>competences.push(cm));
                specificInfo["requisites"].map((rq:string)=>requisites.push(rq));
                specificInfo["languages"].map((lg:string)=>languages.push(lg));
                return true;
            }
        });

        studies.map((st,i)=>{
            colorByField.set(st,this.props.colors[i]);
        });

        console.log("Colfil: ",colorByField);
        
        return(<div>
              <Offcanvas show={this.props.collapsed} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Card.Body className="row">
                        <div>
                            <p className="display-7 font-weight-bold">
                                <Badge bg="primary is-size-6">{offerSpecificInfo["code"]}</Badge> <b>{offer["profile"]} en {offer["localty"]} ({offerSpecificInfo["country"]})</b>
                            </p>
                        </div>
                        <p>
                        </p>
                    </Card.Body>
                </Offcanvas.Header>
                <Offcanvas.Body className="ml-3">
                    <p className="">{studies.map((st:string,i)=><Badge className="mr-2 mb-2 is-size-6" bg={colorByField.get(st)}>{st}</Badge>)}</p><br/>                 
                    <p className="mb-2"><b>{offerSpecificInfo["university"]!==undefined?"Oferta ofrecida por la "+offerSpecificInfo["university"]:""}</b></p>
                    {offerSpecificInfo["modality"]===undefined||offerSpecificInfo["modality"]===""?"":<p><b>Modalidad: </b>{offerSpecificInfo["modality"]}</p>}
                    {offerSpecificInfo["salary"]===undefined||offerSpecificInfo["salary"]===""?"":<p><b>Salario/Retribución: </b>{offerSpecificInfo["salary"]}</p>}
                    {offerSpecificInfo["shift"]===undefined||offerSpecificInfo["shift"]===""?"":<p><b>Turno: </b>{offerSpecificInfo["shift"]}</p>}<br/>
                    {offerSpecificInfo["observations"]===undefined||offerSpecificInfo["observations"]===""?"":<Alert variant="info">{offerSpecificInfo["observations"]}</Alert>}
                    {process===undefined||process.length===0?"":<div><label><strong>Fases de la selección:</strong></label><br/><ListGroup as="ol" numbered>{process.map((pr:string,i)=><ListGroup.Item as="li">{pr}</ListGroup.Item>)}</ListGroup><br/></div>}
                    {competences===undefined||competences.length===0?"":<div><label><strong>Competencias:</strong></label><br/><ListGroup as="ol">{competences.map((cmp:string,i)=><ListGroup.Item as="li">{cmp}</ListGroup.Item>)}</ListGroup><br/></div>}
                    {requisites===undefined||requisites.length===0?"":<div><label><strong>Requisitos:</strong></label><br/><ListGroup as="ol">{requisites.map((rq:string,i)=><ListGroup.Item as="li">{rq}</ListGroup.Item>)}</ListGroup><br/></div>}
                    {languages===undefined||languages.length===0?"":<div><label><strong>Idiomas:</strong></label><br/><ListGroup as="ol">{languages.map((lg:string,i)=><ListGroup.Item as="li">{lg}</ListGroup.Item>)}</ListGroup><br/></div>}
                    <label><strong>Funciones:</strong></label>
                    <p>{offerSpecificInfo["functions"]}</p><br/>
                    {offerSpecificInfo["jobObservations"]===undefined||offerSpecificInfo["jobObservations"]===""?"":<div><p><strong>Observaciones del puesto</strong></p>{offerSpecificInfo["jobObservations"]}</div>}
                </Offcanvas.Body>
              </Offcanvas>
        </div>);
    }

}

export default OffcanvasSection;


