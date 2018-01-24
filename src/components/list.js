import React from "react";
import _ from "lodash";
import TableHeader from './tableHeader';
import ListItem from './listItems';

var newProp_notes = null;
var fullprops = null;

export default class List extends React.Component {
  componentDidMount(){
    this.newProp_list = this.props.list;
  }
  componentWillReceiveProps(newProps) {
    this.newProp_list = newProps.list;
    this.fullprops = newProps;
  }
  renderItems() {
      debugger;
    // const props = _.omit(this.props.notes, 'notes');
   
    // return _.map(this.newProp_notes, (note, index) => <NotesListItem key={index}  {...note} {...props} />);
  return _.map(this.newProp_list, (list, index) => (
      <ListItem list={list} index={index}  data={this.newProp_list} RightUpdate={this.RightUpdate.bind(this)}/>
    ));
  }

  RightUpdate(obj){
    this.props.updateRightPane(obj);
  }

  render() {
      //  debugger;
    return <table align="center" cellpadding="0" cellspacing="0">
        <TableHeader />
        <tbody>{this.renderItems()}</tbody>
      </table>;
    
    
    
    {/* <div>
        <table align="center">
          <thead>
            <tr>
              <th>Avtar</th>
              <th>Company Name</th>
            </tr>
          </thead>
          <tbody>{this.renderItems()}
              <tr>{this.props.list}</tr>
          </tbody>
        </table>
      </div>; */}
  }
}

 
