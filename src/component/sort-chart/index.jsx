import { useEffect } from 'react';
import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { BarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GridComponent, BarChart, CanvasRenderer]);

const SortChart = () => {
  let arr = [120, 200, 150, 80, 70, 110, 130]

  const init = () => {
    var chartDom = document.getElementById('chart');
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      yAxis: {
        type: 'category',
        data: ['七', '六', '五', '四', '三', '二', '一']
      },
      xAxis: {
        type: 'value'
      },
      series: [
        {
          data: arr,
          type: 'bar',
          label: {
            show: true,
            position: 'right'
          },
        }
      ]
    };
    option && myChart.setOption(option);
  }

  const sort = (a) => {
    sort3(arr)
    init()
  }

  //插入
  const sort1 = (a) => {
    for (let i = 0; i < a.length; i++) {
      for (let j = i + 1; j > 0 && a[j] < a[j - 1]; j--) {
        let temp = a[j]
        a[j] = a[j - 1]
        a[j - 1] = temp
        return;
      }
    }
  }

  //冒泡
  // var i = 0
  const sort2 = (a) => {
    for (let i=0;i < a.length; i++) {
      for (let j = 0; j < a.length-1-i; j++) {
        if(a[j] > a[j + 1]){
          let temp = a[j]
          a[j] = a[j + 1]
          a[j + 1] = temp
        }
      }
    }
  }

  //选择
  const sort3 = (a) => {
    for (let i = 0; i < a.length; i++) {
      let min = i
      for (let j = i+1; j < a.length; j++) {
        if(a[j] < a[min]){
          min=j
        }
      }
      let temp = a[i]
      a[i] = a[min]
      a[min] = temp
    }
  }

  useEffect(() => {
    init()
  })

  return (
    <div>
      <div id='chart' className='chart'></div>
      <button onClick={sort}>排序</button>
    </div>
  )
}
export default SortChart