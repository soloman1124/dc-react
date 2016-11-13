import React, { Component, PropTypes } from 'react';
import dc from 'dc';
import { Base } from './Base';


class LineChart extends Component {
  static propTypes = {
    renderArea: PropTypes.bool,
    xAxis: PropTypes.func,
    x: PropTypes.func,
    round: PropTypes.func,
    xUnits: PropTypes.func,
    elasticY: PropTypes.bool,
    renderHorizontalGridLines: PropTypes.bool,
    brushOn: PropTypes.bool,
    valueAccessor: PropTypes.func,
    stack: PropTypes.func,
  };

  loadChart = (container) => {
    const chart = dc.lineChart(container);
    const helper = this.props.chartHelper(this, chart);
    helper.setProperties('renderArea', 'xAxis', 'x', 'round', 'xUnits',
                         'elasticY', 'renderHorizontalGridLines', 'brushOn',
                         'valueAccessor')
          .setContextProperties('stack');

    chart.render();
  };

  render() {
    return <div className={this.props.className} ref={ this.loadChart }/>;
  }
}

export default Base(LineChart);
