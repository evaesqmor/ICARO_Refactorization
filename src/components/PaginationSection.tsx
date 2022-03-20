/* eslint-disable array-callback-return */
/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from 'react';
import { Pagination } from 'react-bootstrap';


interface IPaginationSectionProps{
  // Variables
  colors:any[];
  offers:any [];
  activePage:number;
  elementsPage:number;
  offerSpecific:any[];
  field:string;
  localty:string;
  requisite:string;
  language:string;
  // Métodos
  onChangePage:(activePage:number)=>any;
}

interface IPaginationSectionState{
}

class PaginationSection extends React.Component<IPaginationSectionProps, IPaginationSectionState>{

    public constructor(props:IPaginationSectionProps){
        super(props);
    }

    public render(){
        var items = [];
        var code = "";
        var elmFilter:any[] = [];
        let studies:any[] = [];
        let localties:any[] = [];
        let requisites:any[] = [];
        let languages:any[] = [];
        let colorByField = new Map<any,any>();
        let studiesByCode= new Map<any,any>();

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
        console.log("1ST FILTER: ",elmFilter);

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
        console.log("2ND FILTER: ",auxiliar);

        var elmToDistribute:any[] = !(studies.includes(this.props.field))&&!(localties.includes(this.props.localty))&&!(requisites.includes(this.props.requisite))&&!(languages.includes(this.props.language))?this.props.offers:elmFilter;
 
        var nPages= Math.ceil(elmToDistribute.length/this.props.elementsPage);
        console.log("ac1", this.props.activePage);

        for (let number = 1; number <= nPages; number++) {
          var aux = this.props.activePage;
          if(elmToDistribute.length<=this.props.elementsPage){
            aux=1;
          }
          items.push(
            <Pagination.Item key={number} active={number === aux} onClick={() =>{
                this.props.onChangePage(number)
              }}>
              {number}
            </Pagination.Item>
          );
        }
        return (<div><Pagination size="lg" style={{justifyContent:'center'}} className="m-5">{items}</Pagination></div>
        );
    }
}

export default PaginationSection;