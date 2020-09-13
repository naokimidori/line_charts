export default {
  success: true,
  resultCode: 'SUCCESS',
  resultDesc: '成功',
  sleepAnaData: {
    signDesc: '你已经坚持xx天',
    weekSleepAnaData: {
      sleepTitle: '平均入眠时间',
      sleepTime: '00:00',
      regionToRegionTime: 1000, //单位ms，正表示比上个周晚，负表示比上个周早
      sleepSigns: [
        {
          date: '20200101',
          signTime: '2020-01-01 00:00:00'
        }
      ]
    },
    monthSleepAnaData: {
      sleepTitle: '平均入眠时间',
      sleepTime: '00:01',
      regionToRegionTime: -1000, //单位ms，正表示比上个月晚，负表示比上个月早
      sleepSigns: [
        {
          date: '20200101',
          signTime: '2020-01-01 00:00:00'
        }
      ]
    }
  }
}
