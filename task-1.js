const data = [
  {
    session_name: 'first test',
    classes: [
      {
        class_name: undefined,
        students: [
          {
            student_name: 'John',
          },
        ],
      },
    ],
  },
  {
    session_name: null,
    classes: [
      {
        class_name: 'second class',
        students: [
          {
            student_name: 'Doe',
          },
        ],
      },
    ],
  },
]

function arrayObjectOptimization(data) {
  const isArrayData = Array.isArray(data)
  if (!isArrayData) throw new Error('Only accepting array data')

  const result = []

  for (const item of data) {
    let optimizedItem = {}

    for (const prop in item) {
      const isNull = item[prop] === null
      const isUndefined = typeof item[prop] === 'undefined'
      const isArray = Array.isArray(item[prop])

      if (isArray) {
        arrayObjectOptimization(item[prop])
      }

      if (isNull || isUndefined) delete item[prop]
      optimizedItem = { ...optimizedItem, ...item }
    }
    result.push(optimizedItem)
  }

  return result
}

const newData = arrayObjectOptimization(data)
console.log(newData)