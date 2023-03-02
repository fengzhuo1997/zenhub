// 排除0的情况，判断值非unfefined, null
export const isFalse = (value) => value === 0 ? false : !value

export const cleanObject = (object) => {
  const result = { ...object}
  Object.keys(result).forEach(key => {
    const value = result[key]
    if(isFalse(value)){
      delete result[key]
    }
  })
  return result
}

export default cleanObject;