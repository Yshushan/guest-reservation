const genderDict = [
  {
    name: '女',
    value: 'female'
  },
  {
    name: '男',
    value: 'male'
  }
]

const certificateTypeDict = [
  {
    name: '身份证',
    value: 'IDcard'
  },
  {
    name: '护照',
    value: 'passport'
  },
  {
    name: '港澳台居住证',
    value: 'HMTCard'
  }
]

const visitTypeDict = [
  {
    name: '供应商',
    value: 'vendor'
  },
  {
    name: '采购商',
    value: 'buyer'
  }
]

const historyData = [{
  userId: 1,
  userName: '张三',
  userPhone: '13106593117',
  gender: '男'
},
{
  userId: 2,
  userName: '李四',
  userPhone: '15922753198',
  gender: '男'
},
{
  userId: 3,
  userName: '王五',
  userPhone: '13587998899',
  gender: '女'
}
]

const genderSlots = [{
  flex: 1,
  values: [{
    label: '男',
    value: 'male'
  }, {
    label: '女',
    value: 'female'
  }],
  className: 'slot1',
  textAlign: 'center',
  defaultIndex: -100
}]

const certificateTypeSlots = [{
  flex: 1,
  values: [{
    label: '身份证',
    value: 'IDcard'
  }, {
    label: '护照',
    value: 'passport'
  }, {
    label: '港澳台居住证',
    value: 'HMTCard'
  }],
  className: 'slot1',
  textAlign: 'center',
  defaultIndex: -100
}]

const mainAreas = [
  {
    realId: 1,
    nodeName: '美的总部大楼A区'
  },
  {
    realId: 2,
    nodeName: '美的总部大楼B区'
  },
  {
    realId: 3,
    nodeName: '美的总部大楼C区'
  },
  {
    realId: 4,
    nodeName: '美的总部大楼D区2341234123'
  },
  {
    realId: 5,
    nodeName: '美的总部大楼E区1234123412341'
  },
  {
    realId: 6,
    nodeName: '美的总部大楼A区'
  },
  {
    realId: 7,
    nodeName: '美的总部大楼A区TQWER'
  },
  {
    realId: 8,
    nodeName: '美的总部大楼A区'
  },
  {
    realId: 9,
    nodeName: '美的总部大楼A区ERSA'
  },
  {
    realId: 10,
    nodeName: '美的总部大楼A区FASDF'
  },
  {
    realId: 11,
    nodeName: '美的总部大楼A区QWERQ'
  },
  {
    realId: 12,
    nodeName: '美的总部大楼A区'
  },
  {
    realId: 13,
    nodeName: '美的总部大楼A区RQWER'
  }
]

const subAreas = [
  {
    organizationId: 1,
    organizationName: '美云智数'
  },
  {
    organizationId: 2,
    organizationName: '智造云'
  }
]

const visitTypeSlots = [{
  flex: 1,
  values: [
    {
      label: '供应商',
      value: 'vendor'
    },
    {
      label: '采购商',
      value: 'buyer'
    }
  ],
  className: 'slot1',
  textAlign: 'center',
  defaultIndex: -100
}]

const visitRecords = [
  {
    id: 1,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 2,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  },
  {
    id: 3,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 4,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  },
  {
    id: 6,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  },
  {
    id: 7,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 8,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 9,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  }, {
    id: 10,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  },
  {
    id: 12,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 13,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'success'
  },
  {
    id: 14,
    time: '2018-09-26 10:17:42',
    employee: '张三',
    area: '美云之数',
    reason: '供应商',
    status: 'fail'
  }
]

export {
  historyData,
  genderSlots,
  certificateTypeSlots,
  mainAreas,
  subAreas,
  visitTypeSlots,
  visitRecords,
  genderDict,
  certificateTypeDict,
  visitTypeDict
}
