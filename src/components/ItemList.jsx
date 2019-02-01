import React, { Component } from "react";
import { connect } from "react-redux";
import { itemsFetchData } from "../actions/items";

class ItemList extends Component {
  componentDidMount() {
    console.log(this);
    this.props.fetchData("https://jsonplaceholder.typicode.com/todos");
    // axios("https://jsonplaceholder.typicode.com/todos").then(res => {
    //   this.setState({
    //     items: res.data
    //   });
    // });
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the items</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return (
      <ul>
        {this.props.items.map(item => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
    hasErrored: state.itemsHasErrored,
    isLoading: state.itemsIsLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchData: url => dispatch(itemsFetchData(url))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList);
