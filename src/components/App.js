import React, { Component } from "react";
import {JsonFetchData} from "../actions/actionTypes";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import SearchBox from './search';
import "../dist/styles/Output/App.css";
import List from "./list";
import RightPane from "./rightContent";


var RightpaneSelectedItem;
class App extends Component {

  constructor(props){
    super(props);
    this.state = { initialItems: [{ id: 0, imageURL: "/avtar4.png", companyName: "AutomateIO", isSelected: true }, { id: 1, imageURL: "/avtar2.png", companyName: "Google", isSelected: false }, { id: 2, imageURL: "/avtar1.png", companyName: "Microsoft", isSelected: false }, { id: 3, imageURL: "/avtar2.png", companyName: "Host Analytics", isSelected: false }, { id: 4, imageURL: "/avtar1.png", companyName: "Apple", isSelected: false }, { id: 5, imageURL: "/avtar2.png", companyName: "Eitacis", isSelected: false }], searchResult: [], updateRightPanestate: {} };
  }

  componentDidMount() {
    // debugger;
    this.props.fetchdataFromConnect("/sample.json");
    this.setState({searchResult:this.state.initialItems})
  }

  render() {
    return <div className="main-div">
        <header>
          <h1> Hello Company Finder </h1>
        </header>
        <div className="content-div">
          <SearchBox data={this.props.list} updateSearch={this.updateSearch.bind(this)} />
          {/* <SearchBox data={this.props.list} /> */}
          <List list={this.state.searchResult || this.props.list} searchResult={this.state.searchresult} updateRightPane={this.updateRightPane.bind(this)} />
          {/* <List list={this.props.list} searchResult={this.state.searchresult} /> */}
        </div>
        <RightPane updateRightPane={this.state.updateRightPanestate} />
        {/* <div className="sub-main-div content">
          <SearchBox />
          <List list={this.props.Names} />
          <Avatar />
        </div>
        <div>
          <RightPane />
        </div> */}
      </div>;
  }

  updateSearch(key) {
    var updatedList = this.props.list
    updatedList = updatedList.filter(function(item) {
      return item.companyName
          .toString()
          .toLowerCase()
          .search(key.toLowerCase()) !== -1;
    });
  //self.setState({ updatedList: self.state.searchResult });
  this.setState({searchResult: updatedList });
    
  }

  updateRightPane(obj){

    // this.RightpaneSelectedItem = obj;
    this.setState({ updateRightPanestate : obj});
  }


}



const mapStateToProps = state => {
  //  debugger;
  return {
   
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {

  return { fetchdataFromConnect: bindActionCreators(JsonFetchData, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

