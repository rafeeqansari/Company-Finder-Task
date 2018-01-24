import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {UpdateSearchResult} from "../actions/actionTypes";


var getJson;
class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: []
    };
  }

  render() {
    return (
      <div>
        <form method="post">
          <input
            type="text"
            className="textbox"
            placeholder="Search"
            onChange={e => this.handleSearchboxKeyUp(e.target.value)}
          />
          {/* <input title="Search"  type="submit" className="button" /> */}
        </form>
      </div>
    );
  }


  handleSearchboxKeyUp = (key) => {
    debugger;
    // var gotItemsreFetch;
    // var url = ("/sample.json");

    // await fetch(url)

    //      .then(response => {
    //     if (!response.ok) {
    //       throw Error(response.statusText);
    //     }
    //     return response;
    //   })
    //   .then(response => response.json())
    //   .then(items => { debugger; gotItemsreFetch = items;})


    //   var updatedList = gotItemsreFetch;

    // //  var updatedList = this.props.list;
    //  updatedList = updatedList.filter(function(item) {
    //    return item.companyName.toString()
    //        .toLowerCase()
    //        .search(key.toLowerCase()) !== -1;
    //  });

    //   this.props.updateSearchResults(updatedList);
      // var state = { searchTerm: updatedList };
      
      //  this.setState(state);

      this.props.updateSearch(key);

     

  }
}

const mapStateToProps = state => {
  debugger;
  return {
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return { updateSearchResults: bindActionCreators(UpdateSearchResult, dispatch) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
