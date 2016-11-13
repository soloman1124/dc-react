import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';

class PieChart extends Component {
  static PropTypes = {
    radius: PropTypes.number.isRequired,
    innerRadius: PropTypes.number,
  };

  loadChart = (container) => {
    const chart = dc.pieChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('radius', 'innerRadius');

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={this.loadChart} />;
  }
}

export default Base(PieChart);
