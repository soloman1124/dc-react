# dc-react
React Components for DC.js

## Usage

```!javascript
class App extends Component {
  constructor(props) {
    super(props);
    this._crossfilterContext = null;
  }

  crossfilterContext = (callback) => {
    if (!callback) {
      return this._crossfilterContext;
    }
    d3.csv('../ndx.csv', (data) => {
      for (let d of data) {
        d.dd = dateFormat.parse(d.date);
        d.month = d3.time.month(d.dd);
        d.close = +d.close;
        d.open = +d.open;
      }
      this._crossfilterContext = new CrossfilterContext(data);
      callback(this._crossfilterContext);
    });
  };

  render() {
    return (
      <ChartContainer className="container" crossfilterContext={this.crossfilterContext}>
        <BubbleChart className="row"
          dimension={ctx => ctx.yearlyDimension}
          group={ctx => ctx.yearlyPerformanceGroup}
          width={990} height={250}
          colorAccessor={d => d.value.absGain}
          keyAccessor={p => p.value.absGain}
          valueAccessor={p => p.value.percentageGain}
          radiusValueAccessor={p => p.value.fluctuationPercentage}
          x={d3.scale.linear().domain([-2500, 2500])}
          y={d3.scale.linear().domain([-100, 100])}
          r={d3.scale.linear().domain([0, 4000])}
          colorDomain={[-500, 500]}
        />
        <div className="row">
          <PieChart
            dimension={ctx => ctx.gainOrLossDimension}
            group={ctx => ctx.gainOrLossGroup}
            width={280} height={180}
            radius={80}
            label={(d) => {
              let percent = numberFormat(d.value / this.crossfilterContext().groupAll.value() * 100);

              return `${d.key} (${percent}%)`;
            }}
          />
          <PieChart
            dimension={ctx => ctx.quarterDimension}
            group={ctx => ctx.quarterGroup}
            width={280} height={180}
            radius={80} innerRadius={30}
          />
          <RowChart
            dimension={ctx => ctx.dayOfWeekDimension}
            group={ctx => ctx.dayOfWeekGroup}
            width={280} height={180}
            elasticX={true}
            label={d => d.key.split('.')[1]}
          />
        </div>
        <DataCount
          dimension={ctx => ctx.crossfilter}
          group={ctx => ctx.groupAll}
        />
        <DataTable
          dimension={ctx => ctx.dateDimension}
          group={d => `${d.dd.getFullYear()}/${d.dd.getMonth()+1}`}
          columns={[
            'date', 'open', 'close', 'volume'
          ]}
        />
        <div className="clearfix" />
      </ChartContainer>
    );
  }
}

```

For the concrete example, please check: https://github.com/soloman1124/dc-react-example
