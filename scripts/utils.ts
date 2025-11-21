/**
 * 扁平化嵌套对象，使用connect（点）连接键名
 * @param {Object} obj - 需要扁平化的嵌套对象
 * @param {String} [prefix=''] - 递归时的键名前缀
 * @param {Object} [result={}] - 存储结果的对象
 * @param {String} [connect='.'] - 连接键名的字符串
 * @returns {Object} 扁平化后的对象
 */
export const flattenObject = (obj: Record<string, any>, prefix = '', result = {}, connect = '.'): Record<string, any> => {
  // 遍历对象的每个键值对
  for (const [key, value] of Object.entries(obj)) {
    // 拼接当前层级的键名（前缀 + 连接键名的字符串 + 当前键）
    const currentKey = prefix ? `${prefix}${connect}${key}` : key

    // 如果值是对象且不是 null/数组，递归处理
    if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
      flattenObject(value, currentKey, result, connect)
    } 
    // 如果值是数组，处理数组索引
    else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        const arrayKey = `${currentKey}${connect}${index}`
        if (typeof item === 'object' && item !== null) {
          flattenObject(item, arrayKey, result, connect)
        } else {
          (result as Record<string, any>)[arrayKey] = item
        }
      })
    } 
    // 基础类型值，直接赋值
    else {
      (result as Record<string, any>)[currentKey] = value
    }
  }
  return result
}

/**
 * 将扁平化对象转换为嵌套对象
 * @param {Object} flatObj - 扁平化的对象，键名使用点连接
 * @param {String} [connect='.'] - 连接键名的字符串
 * @returns {Object} 嵌套对象
 */
export const transformFlatObject = (flatObj: Record<string, any>, connect: string = '.'): Record<string, any> => {
  const result: Record<string, any> = {}
  
  // 遍历扁平对象的每个键值对
  for (const [keyPath, value] of Object.entries(flatObj)) {
    // 将键按点分割成路径数组
    const keys = keyPath.split(connect)
    let current: Record<string, any> = result
    
    // 逐层构建嵌套对象
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      // 如果是最后一层，直接赋值
      if (i === keys.length - 1) {
        current[key] = value
      } else {
        // 如果当前层级不存在，创建空对象
        if (!current[key]) {
          current[key] = {}
        }
        // 进入下一层级
        current = current[key] as Record<string, any>
      }
    }
  }
  
  return result
}
