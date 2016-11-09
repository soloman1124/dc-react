import React, { Component, PropTypes } from 'react';


export default class ChartContainer extends Component {
  static propTypes = {
    children: PropTypes.node,
    crossfilterContext: PropTypes.func.isRequired
  };

  static childContextTypes = {
    crossfilterContext: PropTypes.object
  };

  state = {
    crossfilterContext: null
  };

  componentDidMount() {
    this.props.crossfilterContext(crossfilterContext => this.setState({ crossfilterContext }));
  }

  getChildContext() {
    return { crossfilterContext: this.state.crossfilterContext };
  }

  render() {
    if (this.state.crossfilterContext === null) {
      return <div>Loading...</div>;
    }

    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
