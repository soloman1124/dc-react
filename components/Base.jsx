import React, { Component, PropTypes } from 'react';
import { ChartPropertyHelper } from './helpers';

export let Base = DCComponent => class extends Component {
  static propTypes = {
    dimension: PropTypes.func.isRequired,
    group: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
    title: PropTypes.func,
    label: PropTypes.func,
    transitionDuration: PropTypes.number,
    margins: PropTypes.object,
    mouseZoomable: PropTypes.bool,
    legend: PropTypes.object,
    setChart: PropTypes.func
  };

  static contextTypes = {
    crossfilterContext: PropTypes.object.isRequired
  };

  dcHelper = (dcComponent, dcChart, loadDefault = true) => {
    let helper = new ChartPropertyHelper(dcComponent, dcChart);
    if (loadDefault) {
      helper.setProperties('width', 'height', 'title', 'label',
                           'transitionDuration', 'margins', 'mouseZoomable',
                           'legend')
            .setContextProperties('dimension', 'group');
    }
    if (dcComponent.props.setChart) {
      dcComponent.props.setChart(dcChart);
    }

    return helper;
  };

  render() {
    return <DCComponent {...this.props}
                        crossfilterContext={this.context.crossfilterContext}
                        chartHelper={this.dcHelper} />;
  }
};
