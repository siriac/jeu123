import React, { Component } from 'react';

class Tuile extends Component {
  constructor(props) {
    super(props);
    this.state = {
        index:this.props.index,
        numberToInsert:null,
        bordered:"",
        style:"tuile2 bgDefault",
        bg:null,
        cliclable:true
      }
    };
   
     test=()=>{
         const {removeNumber,numero,insereIndice,index,insereNumberRead,setSelected}=this.props;
         //alert(this.state.index);
         this.setState({
            numberToInsert: insereNumberRead(),
            style:"tuile2 bgDefault",
            bg:this.props.setBg(),
            cliclable:false
         },()=>{
            removeNumber();
            insereIndice(index);
            setSelected()
         })

        

     }
    
    render()  {
        return  (
            <div className={this.state.style}
            style={{"background-color":this.state.bg}}
            onClick={this.props.selected?this.test:null}
            onPointerEnter={(e) => (this.props.selected&&this.state.numberToInsert==null)?this.setState({
                style:"tuile2 bgDefault selected"
            }):null}
            onPointerLeave={(e) => this.props.selected?this.setState({
                style:"tuile2 bgDefault"
            }):null}
            >
            {this.state.numberToInsert}
         </div>
      )
    }
  }
export default Tuile;