<template>
  <div class="qw-pl-5 qw-pr-5">
    <el-row :gutter="10">
      <el-col
        :sm="12"
        :md="12"
        :lg="8"
        :xl="6"
        v-for="(item, index) in state.options"
        :key="index"
      >
        <div class="qw-page qw-mb-10">
          <div class="qw-card-head qw-mb-10">
            <qw-title :title="`图表${index + 1}`" />
          </div>
          <div style="height: calc(50vh - 115px)">
            <qw-echarts :option="item" />
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive } from 'vue'
import QwTitle from '@/components/QwTitle/index.vue'
import QwEcharts from '@/components/QwEcharts/index.vue'
defineOptions({
  name: 'Echarts'
})
const state = reactive({
  options: [
    {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'shadow'
        }
      },
      legend: {
        top: 'bottom'
      },
      grid: {
        top: '10px',
        left: '10px',
        right: '20px',
        bottom: '40px',
        containLabel: true
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisTick: {
            alignWithLabel: true
          }
        }
      ],
      yAxis: [
        {
          type: 'value'
        }
      ],
      series: [
        {
          name: 'Direct',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220]
        }
      ]
    },
    {
      tooltip: {
        trigger: 'axis'
      },
      legend: {
        data: ['绿标', '黄标', '红标'],
        top: 'bottom'
      },
      grid: {
        top: '10px',
        left: '10px',
        right: '20px',
        bottom: '40px',
        containLabel: true
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '1月',
          '2月',
          '3月',
          '4月',
          '5月',
          '6月',
          '7月',
          '8月',
          '9月',
          '10月',
          '11月',
          '12月'
        ]
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          name: '绿标',
          type: 'line',
          stack: 'Total',
          data: [120, 132, 101, 134, 90, 230, 210, 210, 210, 210, 210, 210]
        },
        {
          name: '黄标',
          type: 'line',
          stack: 'Total',
          data: [220, 182, 191, 234, 290, 330, 310, 310, 310, 310, 310, 310]
        },
        {
          name: '红标',
          type: 'line',
          stack: 'Total',
          data: [150, 232, 201, 154, 190, 330, 410, 410, 410, 410, 410, 410]
        }
      ]
    },
    {
      tooltip: {
        trigger: 'item'
      },
      grid: {
        top: '10px',
        left: '10px',
        right: '20px',
        bottom: '40px',
        containLabel: true
      },
      legend: {
        top: 'bottom'
      },
      series: [
        {
          name: 'Access From',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: 20,
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: 'Search Engine' },
            { value: 735, name: 'Direct' },
            { value: 580, name: 'Email' },
            { value: 484, name: 'Union Ads' },
            { value: 300, name: 'Video Ads' }
          ]
        }
      ]
    },
    {
      grid: {
        top: '10px',
        left: '10px',
        right: '20px',
        bottom: '40px',
        containLabel: true
      },
      series: [
        {
          type: 'gauge',
          startAngle: 200,
          endAngle: -20,
          min: 0,
          max: 240,
          radius: '90%',
          splitNumber: 12,
          itemStyle: {
            color: '#58D9F9',
            shadowColor: 'rgba(0,138,255,0.45)',
            shadowBlur: 10,
            shadowOffsetX: 2,
            shadowOffsetY: 2
          },
          progress: {
            show: true,
            roundCap: true,
            width: 18
          },
          pointer: {
            icon: 'path://M2090.36389,615.30999 L2090.36389,615.30999 C2091.48372,615.30999 2092.40383,616.194028 2092.44859,617.312956 L2096.90698,728.755929 C2097.05155,732.369577 2094.2393,735.416212 2090.62566,735.56078 C2090.53845,735.564269 2090.45117,735.566014 2090.36389,735.566014 L2090.36389,735.566014 C2086.74736,735.566014 2083.81557,732.63423 2083.81557,729.017692 C2083.81557,728.930412 2083.81732,728.84314 2083.82081,728.755929 L2088.2792,617.312956 C2088.32396,616.194028 2089.24407,615.30999 2090.36389,615.30999 Z',
            length: '75%',
            width: 16,
            offsetCenter: [0, '5%']
          },
          axisLine: {
            roundCap: true,
            lineStyle: {
              width: 18
            }
          },
          axisTick: {
            splitNumber: 2,
            lineStyle: {
              width: 2,
              color: '#999'
            }
          },
          splitLine: {
            length: 12,
            lineStyle: {
              width: 3,
              color: '#999'
            }
          },
          axisLabel: {
            distance: 30,
            color: '#999',
            fontSize: 20
          },
          title: {
            show: false
          },
          detail: {
            backgroundColor: '#fff',
            borderColor: '#999',
            borderWidth: 2,
            width: '60%',
            lineHeight: 40,
            height: 40,
            borderRadius: 8,
            offsetCenter: [0, '35%'],
            valueAnimation: true,
            formatter: function (value) {
              return '{value|' + value.toFixed(0) + '}{unit|km/h}'
            },
            rich: {
              value: {
                fontSize: 30,
                fontWeight: 'bolder',
                color: '#777'
              },
              unit: {
                fontSize: 20,
                color: '#999',
                padding: [0, 0, -20, 10]
              }
            }
          },
          data: [
            {
              value: 100
            }
          ]
        }
      ]
    },
    {
      legend: {
        top: 'bottom'
      },
      xAxis: {
        data: ['2022-10-24', '2022-10-25', '2022-10-26', '2022-10-27']
      },
      yAxis: {},
      series: [
        {
          type: 'candlestick',
          data: [
            [20, 34, 10, 38],
            [40, 35, 30, 50],
            [31, 38, 33, 44],
            [38, 15, 5, 42]
          ]
        }
      ]
    }
  ]
})
</script>

<style scoped></style>
