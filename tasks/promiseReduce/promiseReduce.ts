export function promiseReduce(promises: Array<Promise<number>>, callback: Function, initialValue: number):Promise<number> {

  const value = initialValue

  // while(currentPromiseIndex < promises.length) {
  //   promises[currentPromiseIndex].then(promiseValue => {
  //     value = callback(value, promiseValue)
  //     console.log(value)
  //     currentPromiseIndex+=1
  //   })
  // }

  // return Promise.all().then(value => new Promise((resolve, reject) => {resolve(value)}) )

  //   for (let index = 0; index < promises.length; index++) {
  //     promises[index].then(promiseValue => {
  //       value = callback(value, promiseValue)
  //       console.log(value)
  //     })

  //   }

  return new Promise((resolve) => {

    // promises.reduce((acc, promise) => {
    //   console.log({ acc })

    //   return acc.then(value => promise.then(promiseValue => {
    //     return new Promise(resolve => {
    //       resolve(callback(value, promiseValue))
    //     })
    //   }))

    // }, Promise.resolve(initialValue))

    // console.log({ value })

    resolve(value)
  })
}
