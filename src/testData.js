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
    value: 'IDCard'
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


const employeesData = [{
  id: 1,
  name: '张三',
  phone: '123456',
  gender: '男'
},
{
  id: 2,
  name: '李四',
  phone: '123456',
  gender: '男'
},
{
  id: 3,
  name: '王五',
  phone: '123456',
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
    value: 'IDCard'
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
    id: 1,
    value: '美的总部大楼A区'
  },
  {
    id: 2,
    value: '美的总部大楼B区'
  },
  {
    id: 3,
    value: '美的总部大楼C区'
  },
  {
    id: 4,
    value: '美的总部大楼D区2341234123'
  },
  {
    id: 5,
    value: '美的总部大楼E区1234123412341'
  },
  {
    id: 6,
    value: '美的总部大楼A区'
  },
  {
    id: 7,
    value: '美的总部大楼A区TQWER'
  },
  {
    id: 8,
    value: '美的总部大楼A区'
  },
  {
    id: 9,
    value: '美的总部大楼A区ERSA'
  },
  {
    id: 10,
    value: '美的总部大楼A区FASDF'
  },
  {
    id: 11,
    value: '美的总部大楼A区QWERQ'
  },
  {
    id: 12,
    value: '美的总部大楼A区'
  },
  {
    id: 13,
    value: '美的总部大楼A区RQWER'
  },
  {
    id: 14,
    value: '美的总部大楼A区'
  },
  {
    id: 15,
    value: '美的总部大楼A区RQWER'
  },
  {
    id: 16,
    value: '美的总部大楼A区RQWER'
  },
  {
    id: 17,
    value: '美的总部大楼A区'
  },
  {
    id: 18,
    value: '美的总部大楼A区'
  },
  {
    id: 19,
    value: '美的总部大楼A区'
  },
  {
    id: 20,
    value: '美的总部大楼A区'
  }
]

const subAreas = [
  {
    id: 1,
    value: '美云智数'
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
  },{
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
  },
	// {
  //   id: 15,
  //   time: '2018-09-26 10:17:42',
  //   employee: '张三',
  //   area: '美云之数',
  //   reason: '供应商',
  //   status: '申请成功'
  // },
	// {
  //   id: 16,
  //   time: '2018-09-26 10:17:42',
  //   employee: '张三',
  //   area: '美云之数',
  //   reason: '供应商',
  //   status: '申请成功'
  // },
]

export {
  employeesData,
  genderSlots,
  certificateTypeSlots,
  mainAreas,
  subAreas,
  visitTypeSlots,
  visitRecords,
  genderDict,
  certificateTypeDict,
  visitTypeDict,
}
