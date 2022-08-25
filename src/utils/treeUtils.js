export default {
  // 查询 arg1属性等于arg2的对象
  // 比如 找到树状结构中id='4523'的那个对象（id唯一） obj = queryCurrentObj(tree,'id','4523')
  queryCurrentObj(data, arg1, arg2) {
    let res = null
    if (!data) {
      return
    }
    for (const i in data) {
      if (res !== null) {
        break
      }
      const item = data[i]
      if (item[arg1] === arg2) {
        res = item
        break
      } else if (item.children && item.children.length > 0) {
        res = this.queryCurrentObj(item.children, arg1, arg2)
      }
    }
    return res
  },
  // 删除 arg1属性等于arg2的对象
  // 比如 删除树状结构中id='4523'的那个对象 （id唯一，不唯一的话只删一个）  deleteCurrentObj(tree,'id','4523')
  deleteCurrentObj(data, arg1, arg2) {
    if (!data || !data.length) {
      return
    }
    for (let i = 0; i < data.length; i++) {
      if (data[i][arg1] === arg2) {
        data.splice(i, 1)
        break
      }
      this.deleteCurrentObj(data[i].children, arg1, arg2)
    }
  }
}
