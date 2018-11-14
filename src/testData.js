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

// const visitTypeDict = [
//   {
//     name: '供应商',
//     value: 'vendor'
//   },
//   {
//     name: '采购商',
//     value: 'buyer'
//   }
// ]

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
      label: '合作商谈',
      value: 'cooperateNegotiation'
    },
    {
      label: '应聘面试',
      value: 'applicationInterview'
    },{
      label: '客户参观',
      value: 'customerVisit'
    },{
      label: '其它',
      value: 'others'
    }
  ],
  className: 'slot1',
  textAlign: 'center',
  defaultIndex: -100
}]

const visitRecords = [
  {
    id: 1,
    visitDate: new Date(),
    userName: '张三',
    visitArea: '美云智数',
    visitType: 'customerVisit',
    status: 'pending'
  },
  {
    id: 2,
    visitDate: new Date(),
    userName: '张三',
    visitArea: '美云智数',
    visitType: 'customerVisit',
    status: 'reject'
  },
  {
    id: 3,
    visitDate: new Date(),
    userName: '张三',
    visitArea: '美云智数',
    visitType: 'cooperateNegotiation',
    status: 'success'
  },
  {
    id: 4,
    visitDate: new Date(),
    userName: '张三',
    visitArea: '美云智数',
    visitType: 'applicationInterview',
    status: 'success'
  },
]

const recordDetail = {
  id: 1,
  status: 'success',
  createDate: new Date(),
  visitType: 'applicationInterview',
  visitArea: '美的集团-美云智数',
  carNumber: '浙A-34233,粤B-83729',
  employee: {
    userId: 32,
    userName: '小杨',
    userPhone: '15922753198'
  },
  guests: [{
    guestName: '马云',
    guestAddress: '杭州阿里巴巴集团股份有限公司',
    guestGender: 'male',
    guestTelphone: '13105693117',
    certificateType: '身份证',
    certificateNumber: '453627829872652673'
  },{
    guestName: '马化腾',
    guestAddress: '深圳腾讯股份有限公司',
    guestGender: 'female',
    guestTelphone: '13545693117',
    certificateType: '身份证',
    certificateNumber: '453627829872652673'
  }],
  guestBelongs: [{
    name: '笔记本电脑',
    count: 1,
    type: '电脑',
    remark: '酒虎诗龙啊是的佛阿斯蒂芬阿斯蒂'
  },{
    name: '公文包',
    count: 2,
    type: '',
    remark: ''
  }]
}

const visitTypeDict = [{
  name: '合作商谈',
  value: 'cooperateNegotiation'
},{
  name: '应聘面试',
  value: 'applicationInterview'
},{
  name: '客户参观',
  value: 'customerVisit'
},{
  name: '其它',
  value: 'others'
}]

const statusDict = [{
  name: '审核中',
  value: 'pending',
},{
  name: '已通过',
  value: 'success',
},{
  name: '已拒绝',
  value: 'reject',
}]

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
  visitTypeDict,
  recordDetail,
  statusDict
}
