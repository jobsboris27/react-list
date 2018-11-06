import React, { Component } from 'react';

class ListContainer extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
      loading: true,
      status: "Pending..."
    };
  }

  async componentDidMount() {
    try {
      const response = await fetch(this.props.api);
      const list = await response.json();
      this.setState({
        loading: false,
        list
      })
    } catch (err) {
      this.setState({
        status: "Something went wrong"
      });
      console.warn("Something went wrong - ", err);
    }
  }

  onRemoveItem(element) {
    const filteredList = this.state.list.filter(item => item.id !== element.id);
    this.setState({
      list: filteredList
    });
  }

  render() {
    const { list, status, loading } = this.state;
    const { title } = this.props;
    const loader = loading && (<div>{status}</div>);
    const childrenWithProps = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        list,
        title,
        onRemoveHandler: this.onRemoveItem.bind(this)
      });
    });
    return (
      <div className="list-container">
        {loader}
        {childrenWithProps}
      </div>
    );
  }
}

export default ListContainer;
