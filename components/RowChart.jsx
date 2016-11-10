import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base.jsx!';


class RowChart extends Component {
  static propTypes = {
    elasticX: PropTypes.bool,
    label: PropTypes.func
  };

  loadChart = (container) => {
    const chart = dc.rowChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('elasticX', 'label');

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={ this.loadChart }/>;
  }
}

export default Base(RowChart);
