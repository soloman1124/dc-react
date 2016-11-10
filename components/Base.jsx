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
    transitionDuration: PropTypes.func
  };

  static contextTypes = {
    crossfilterContext: PropTypes.object.isRequired
  };

  dcHelper = (dcComponent, dcChart, loadDefault = true) => {
    let helper = new ChartPropertyHelper(dcComponent, dcChart);
    if (loadDefault) {
      helper.setProperties('width', 'height', 'title', 'label', 'transitionDuration')
            .setContextProperties('dimension', 'group');
    }

    return helper;
  };

  render() {
    return <DCComponent {...this.props}
                        crossfilterContext={this.context.crossfilterContext}
                        chartHelper={this.dcHelper} />;
  }
};
