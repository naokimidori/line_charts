import F2 from '@antv/f2'
import { data } from './data'

const def = {
  // date: {
  //   type: 'cat',
  //   values: [ '一', '二', '三', '四', '五', '六', '日' ]
  // },
  // value: {
  //   type: 'cat',
  //   values: [ '20点', '21点', '22点', '23点', '24点', '1点', '2点' ]
  // }
  // date: {
  //   range: [ 0, 1 ],
  //   ticks: [ '2011-01-01', '2011-01-10', '2011-01-20' ]
  // }
  value: {
    // tickCount: 11,
    min: 1900,
    ticks: [ 1900, 2000, 2100, 2200, 2300, 2400, 2500, 2600, 2700, 2800, 2900 ],
  }
}

const weekText = [ '一', '二', '三', '四', '五', '六', '日' ]

const formatY = value => {
  let hourNum = Math.floor(value / 100)
  
  if (hourNum < 20) {
    return ''
  }

  return hourNum > 24 ? `${hourNum - 24}点` : `${hourNum}点`
}

export function renderWeekCharts(id) {
  const chart = new F2.Chart({
    id,
    pixelRatio: window.devicePixelRatio,
    width: 375,
    height: 300,
    appendPadding: 30
  });

  chart.source(data, def);

  chart.tooltip({
    showCrosshairs: true,
    showItemMarker: false,
    // layout: 'vertical',
    onShow: function onShow(ev) {
      console.log(ev)
      const items = ev.items;
      items[0].name = null;
      items[0].value = 'ss';
    },
  });

  chart.axis("date", {
    grid: {
      // lineDash: null,
      stroke: '#e8e8e8',
      lineWidth: 1,
    },
    label: function label(text, index, total) {
      const dayNum = new Date(text).getDay() - 1
      if(dayNum === -1) {
        return {
          text: weekText[6]
        }
      }

      return {
        text: weekText[dayNum],
        textAlign: 'center'
      }
    },
  });
  
  chart.axis("value", {
    grid: null,
    label: function label(text, index, total) {
      const clock = formatY(text)
      return {
        text: clock
      }
    },
  });

  chart.line().position("date*value").style({
    lineWidth: 2,
    stroke: 'pink'
  });

  chart.point().position("date*value").style({
    stroke: "#ccc",
    lineWidth: 1,
  });

  chart.point().position("date*value" ).color('value', (value) => {
    if (value === 1900) {
      return 'red'
    }
  
    return 'yellow';
  })


  chart.render();
}
