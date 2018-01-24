import React, { Component } from "react";
import "../App.css";
import {DataTable,TableHeader} from 'react-mdl';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { UpdaterightPane } from "../actions/actionTypes";

let Recvprop = null;
 class RightPane extends Component {
   constructor(props) {
     super(props);
     this.state = { initialItems: [{ id: 0, imageURL: "/avtar1.png", companyName: "Apple", isSelected: true }, { id: 1, imageURL: "/avtar2.png", companyName: "Google", isSelected: false }, { id: 2, imageURL: "/avtar1.png", companyName: "Microsoft", isSelected: false }, { id: 3, imageURL: "/avtar2.png", companyName: "Host Analytics", isSelected: false }, { id: 4, imageURL: "/avtar1.png", companyName: "AutomateIO", isSelected: false }, { id: 5, imageURL: "/avtar2.png", companyName: "Eitacis", isSelected: false }], rightpaneResult: [] };
   }

   componentWillReceiveProps(newProps){
     debugger;
    //  if (newProps.updateRightPane.length != 0) {
      if(newProps.updateRightPane){
       this.Recvprop = newProps.updateRightPane;
     }
   }

   updateRightPane = () => {
     var gotvalue;
     debugger;
     if (this.Recvprop && Object.keys(this.Recvprop).length > 0) {
       //  var isvisiblevalue = this.Recvprop.list.forEach(element => {
       //    if (element.isSelected) {
       //      gotvalue = element;
       //      return element;
       //    }
       //  });

       return <div>
           <img src={this.Recvprop.imageURL} className="bigger-rightpaneimg" />
           {/* <h5 className="rightpaneText">{this.Recvporp.companyName}</h5> */}
           <h5 className="rightpaneText">
             {" "}
             {this.props.updateRightPane.companyName}{" "}
           </h5>
         </div>;
     } else {
       // if (this.Recvprop && this.Recvprop.list.isVisible) {
       //  if (gotvalue && gotvalue.isSelected) {
       //    return <div>
       //        <img src={gotvalue.imageURL} className="bigger-rightpaneimg" />
       //        <h5 className="rightpaneText">{gotvalue.companyName}</h5>
       //      </div>;
       //  }
       return <h3>Please select a company to view </h3>;
     }
   };


   render() {
     return <div className="right">
         {this.updateRightPane()}

         {/* <DataTable shadow={0} rows={[{ material: "Acrylic (Transparent)", quantity: 25, price: 2.9 }, { material: "Plywood (Birch)", quantity: 50, price: 1.25 }, { material: "Laminate (Gold on Blue)", quantity: 10, price: 2.35 }]}>
          <TableHeader name="material" tooltip="The amazing material name">
            Avatar
          </TableHeader>
          <TableHeader numeric name="quantity" tooltip="Number of materials">
            Company Name
          </TableHeader>
          <TableHeader numeric name="price" cellFormatter={price => `\$${price.toFixed(2)}`} tooltip="Price pet unit">
            Price
          </TableHeader>
        </DataTable> */}
       </div>;
   }
 }

const mapStateToProps = state => {
   debugger;
  return {
   
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {

  return { updatePane: bindActionCreators(UpdaterightPane, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(RightPane);
