/* eslint-disable array-callback-return */

import * as React from 'react';
import { Badge } from 'react-bootstrap';
import Offer from '../containers/Offer';

interface IMainSectionProps{
  offers:any [];
  offerSpecific:any[];
  activePage:number;
  elementsPage:number;
  colors:any[];
  field:string;
  localty:string;
  requisite:string;
  language:string;
}

interface IMainSectionState{
}

class MainSection extends React.Component<IMainSectionProps, IMainSectionState>{

    public constructor(props:IMainSectionProps){
        super(props);
    }

    public render(){
        let studies:any[] = [];
        let localties:any[] = [];
        let requisites:any[] = [];
        let languages:any[] = [];
        let studiesByCode= new Map<any,any>();
        let colorByField = new Map<any,any>();

        /**Obteniendo estudios, requisitos e idiomas */
        this.props.offerSpecific.map((offer:any)=>{
          studiesByCode.set(offer["code"],offer["studies"]);
          offer["studies"].map((field:any)=>{
            if(!studies.includes(field)){
              studies.push(field);
            }
          });
          offer["requisites"].map((req:any)=>{
            if(!requisites.includes(req)){
              requisites.push(req);
            }
          });
          offer["languages"].map((lan:any)=>{
            if(!languages.includes(lan)){
              languages.push(lan);
            }
          })
        });
        /**Obteniendo localidades**/
        this.props.offers.map((offer:any)=>{
          if(!localties.includes(offer["localty"])){
            localties.push(offer["localty"]);
          }
        });


        /*Map de campos de estuio por color*/
        studies.map((st,i)=>{
          colorByField.set(st,this.props.colors[i]);
        });

        /*Repartiendo elementos por pagina*/
        var elmFilter:any[] = [];
        var code = "";
        var flb = (!(this.props.field.includes("----")||this.props.field===""))?true:false;
        var reqb = (!(this.props.requisite.includes("----")||this.props.requisite===""))?true:false;
        var lanb = (!(this.props.language.includes("----")||this.props.language===""))?true:false;

        /*Primer filtro*/
        this.props.offerSpecific.map((offer)=>{
            if((this.props.field.includes("----")||this.props.field==="")&&
            (this.props.requisite.includes("----")||this.props.requisite==="")&&
            (this.props.language.includes("----")||this.props.language==="")){
              code = offer["code"];
              this.props.offers.map((offer)=>{
                if(offer["code"]===code){
                  elmFilter.push(offer);
                }
              });
            }else{
              code = offer["code"];
              if(flb&&reqb&&lanb){
                console.log("flb-reqb-lanb");
                if(offer["studies"].includes(this.props.field)&&offer["requisites"].includes(this.props.requisite)&&offer["languages"].includes(this.props.language)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(reqb&&lanb){
                console.log("reqb-lanb");
                if(offer["requisites"].includes(this.props.requisite)&&offer["languages"].includes(this.props.language)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(flb&&lanb){
                console.log("flb-lanb");
                if(offer["studies"].includes(this.props.field)&&offer["languages"].includes(this.props.language)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(flb&&reqb){
                console.log("flb-reqb");
                if(offer["studies"].includes(this.props.field)&&offer["requisites"].includes(this.props.requisite)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(flb){
                console.log("flb");
                if(offer["studies"].includes(this.props.field)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(reqb){
                console.log("reqb");
                if(offer["requisites"].includes(this.props.requisite)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }else if(lanb){
                console.log("lanb");
                if(offer["languages"].includes(this.props.language)){
                  if(!elmFilter.includes(offer)){
                    this.props.offers.map((offer)=>{
                      if(offer["code"]===code){
                        elmFilter.push(offer);
                      }
                    });
                  }
                }
              }
            }

        });
        //console.log("1ST FILTER: ",elmFilter);

        /*Segundo Filtro*/
        var auxiliar:any[] = [];
        elmFilter.map((offer)=>{
          if((localties.includes(this.props.localty))){
            if(this.props.localty===offer["localty"]){
              auxiliar.push(offer);
            }
          }else{
            code = offer["code"];
            this.props.offers.map((offer)=>{
              if(offer["code"]===code){
                auxiliar.push(offer);
              }
            });
          }
        });
        elmFilter = auxiliar;
        //console.log("2ND FILTER: ",auxiliar);

        /**Distribuyendo elementos por página**/
        var elmToDistribute:any[] = this.props.field===""&&this.props.localty===""&&this.props.requisite===""&&this.props.language===""?this.props.offers:elmFilter;
        var nPages= Math.ceil(elmToDistribute.length/this.props.elementsPage);
        var r1 = 0;
        var r2 = 0;
        var rest = 0;
        console.log("PAGES:",nPages);
        console.log("ACTIVE PAGE: " + this.props.activePage);

        /*Condiciones para repartir los elementos por página */
        if(elmToDistribute.length<=this.props.elementsPage){
          console.log("case 1");
          r1= 0;
          r2= elmToDistribute.length;
        }else{
          console.log("case 2: ",this.props.offers.length);
          r1 = this.props.elementsPage*(this.props.activePage-1);
          rest = this.props.offers.length-(this.props.elementsPage*(nPages-1));
          r2 = this.props.activePage===nPages?r1+rest:this.props.elementsPage*this.props.activePage;
          if(this.props.activePage===nPages){
            console.log("case 3");
            r2= elmToDistribute.length;
          }
        }

        let elmSortedByDate = elmToDistribute.sort((a, b) => parseInt(b["code"]) - parseInt(a["code"]));
        elmToDistribute = elmSortedByDate;
        console.log("offs: ",elmToDistribute);
        var sliceOffers = elmToDistribute.slice(r1,r2);
        console.log("Desde: ",r1+1,", hasta: ",r2, "rest: ",rest);
        console.log("---------")

       
        return (
        <div className="">
          <div className="row m-6 mt-5" >
            <Badge bg="" className="is-size-5 has-background-link-dark mb-1">
              <p className="mb-2">{elmToDistribute.length===0?"":`Mostrando Ofertas ${r1+1}-${r2}`}</p>
              <p>Número total de Ofertas: {elmToDistribute.length}</p>
            </Badge>
            {sliceOffers.length===0?
            <div className="box bg-warning text-dark bg-opacity-75">
              <h5 className="display-6 mb-4"><b>No hay resultados con este filtro</b></h5>
              <p><b>Prueba con otras opciones distintas a:</b></p>
              <p><b>{this.props.field!==""&&!this.props.field.includes("----")?"Campo de estudios: "+this.props.field:""}</b></p>
              <p><b>{this.props.localty!==""&&!this.props.localty.includes("----")?"Localidad: "+this.props.localty:""}</b></p>
              <p><b>{this.props.requisite!==""&&!this.props.requisite.includes("----")?"Requisito: "+this.props.requisite:""}</b></p>
              <p><b>{this.props.language!==""&&!this.props.language.includes("----")?"Idioma: "+this.props.language:""}</b></p>
            </div>
            :""}
            {sliceOffers.map((offer) => (
                <Offer code={offer.code}
                convDate={offer.convDate}
                preselectionUntilDate={offer.preselectionUntilDate}
                availableUntilDate={offer.availableUntilDate}
                vacancies={offer.vacancies}
                duration={offer.duration}
                localty={offer.localty}
                profile={offer.profile}
                profileDescription={offer.profileDescription}
                additionalInfo={offer.additionalInfo}
                studies={studiesByCode}
                colors={colorByField}/>
            ))}
          </div>
        </div>);
    }
}

export default MainSection;