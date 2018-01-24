import React from 'react';
import { Button } from "react-mdl";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ShowCompany } from "../actions/actionTypes";

 let RecvProps = null;
// export default class NotesListItem extends React.Component {
    class ListItem extends React.Component {
      constructor(props) {
        super(props);
        this.state = { isvisible: false };
      }

      componentWillReceiveProps(newProps) {
        debugger;
        RecvProps = newProps;
        console.log("nnnnnnooooooottttttteeeelistitem " + newProps);
      }

      render() {
        return <tr align="center" onClick={this.onHandleClick.bind(this)}>
            {this.renderAvtarSection()}
            {this.renderCompanySection()}
          </tr>;
      }

      onHandleClick = (event) => {
        event.preventDefault();
        debugger;
        // this.props.data.forEach(element => {
        //   if(element.isSelected){
        //     element.isSelected = false;
        //   }
          
        // });
        var data = this.props.list;
        // data.isSelected = true;
        this.props.RightUpdate(data);
      }

      renderAvtarSection = () => {
        // debugger;
        return <td>
            <img src={this.props.list.imageURL} className="avatar" />
          </td>;
      };

      renderCompanySection = () => {
        // debugger;
        return <td className="second-td">
            <h6>{this.props.list.companyName}</h6>
          </td>;
      };
    }

    

const mapStateToProps = state => {
  return { state: state };
};

const mapDispatchToProps = dispatch => {
  debugger;
  return { showCompany: bindActionCreators(ShowCompany, dispatch) };
};


export default connect(mapDispatchToProps, mapStateToProps)(ListItem);