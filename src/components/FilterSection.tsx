/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
import * as React from 'react';
import {Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGraduate, faCity, faList, faLanguage } from '@fortawesome/free-solid-svg-icons';

interface IFilterSectionProps{
    offers:any [];
    offerSpecific:any[];
    field:string;
    localty:string;
    requisite:string;
    language:string;
    // Métodos
    onApplyFilter:(field:string,localty:string,requisite:string,language:string) => any;
}

interface IFilterSectionState{
    studies:any[];
    localties:any[];
    requisites:any[];
    languages:any[];
}

class FilterSection extends React.Component<IFilterSectionProps, IFilterSectionState>{

    public constructor(props:IFilterSectionProps){
        super(props);
    }


    public render(){

        var studies:any[] = [];
        var localties:any[] = [];
        var requisites:any[] = [];
        var languages:any[] = [];

        this.props.offerSpecific.map(t=>t.studies).map((fields)=>{
            fields.map((field:any)=>{
                if(field!==" " && !studies.includes(field)){
                    studies.push(field);
                }
            });
        });
        this.props.offerSpecific.map((offer)=>{
            if(offer["requisites"]!==[]){
                offer["requisites"].map((req:any)=>{
                    //console.log("req: ",req);
                    if(!requisites.includes(req)){
                        requisites.push(req);
                    }
                });
                offer["languages"].map((lang:any)=>{
                    //console.log("LANG: ",lang);
                    if(!languages.includes(lang)){
                        languages.push(lang);
                    }
                });
            }
        });
        this.props.offers.map((offer)=>{
            if(!localties.includes(offer["localty"])){
                localties.push(offer["localty"]);
            }
        });

        return (
            <div className="box mx-auto col-10 has-background-link columns mb-4">
                <Form className="column">
                    {/*Filtro por especialidad*/}
                    <Form.Group as={Row} className="mx-3 text-white d-inline-block">
                        <Form.Label column sm="12">
                            <FontAwesomeIcon icon={faUserGraduate} className="mx-1"/> 
                               Campo de estudios
                        </Form.Label>
                        <Col sm="12">
                            <Form.Select size="sm" className="form-select input is-warning mw-100"
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) =>{this.props.onApplyFilter(event.target.value,this.props.localty,this.props.requisite,this.props.language)}}>
                            <option selected>-----</option>
                                {studies.map((st:string)=><option value={st}>{st}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    {/*Ciudad*/}
                    <Form.Group as={Row} className="mx-3 text-white d-inline-block">
                        <Form.Label column sm="12">
                            <FontAwesomeIcon icon={faCity} className="mx-1"/>
                            Localidad
                        </Form.Label>
                        <Col sm="12">
                            <Form.Select size="sm" className="form-select input is-warning mw-100"
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) =>{this.props.onApplyFilter(this.props.field,event.target.value,this.props.requisite,this.props.language)}}>
                                <option selected>-----</option>
                                {localties.map((lc:string)=><option value={lc}>{lc}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    {/*Requisitos*/}
                    <Form.Group as={Row} className="mx-3 text-white d-inline-block">
                        <Form.Label column sm="12">
                            <FontAwesomeIcon icon={faList} className="mx-1"/>
                            Requisito
                        </Form.Label>
                        <Col sm="12">
                            <Form.Select size="sm" className="form-select input is-warning mw-100" 
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) =>{this.props.onApplyFilter(this.props.field,this.props.localty,event.target.value,this.props.language)}}>
                                <option selected>-----</option>
                                {requisites.map((req:string)=><option value={req}>{req}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                    {/*Idiomas*/}
                    <Form.Group as={Row} className="mx-3 text-white d-inline-block">
                        <Form.Label column sm="12">
                            <FontAwesomeIcon icon={faLanguage} className="mx-1"/>
                            Idioma
                        </Form.Label>
                        <Col sm="12">
                            <Form.Select size="sm" className="form-select input is-warning mw-100"
                            onChange={(event:React.ChangeEvent<HTMLSelectElement>) =>{
                                this.props.onApplyFilter(this.props.field,this.props.localty,this.props.requisite,event.target.value)}}>
                                <option selected>-----</option>
                                {languages.map((lang:string)=><option value={lang}>{lang}</option>)}
                            </Form.Select>
                        </Col>
                    </Form.Group>
                </Form>
            </div>
            );
    }
}

export default FilterSection;