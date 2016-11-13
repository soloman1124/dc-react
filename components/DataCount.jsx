import React, { PropTypes, Component } from 'react';
import dc from 'dc';
import { Base } from './Base';

class DataCount extends Component {
  loadChart = (container) => {
    const chart = dc.dataCount(container);
    this.props.chartHelper(this, chart);

    chart.render();
  };

  render() {
    return (
      <div className={this.props.className} ref={this.loadChart}>
        <span className='filter-count' /> / <span className='total-count' />
      </div>
    );
  }
}

export default Base(DataCount);
