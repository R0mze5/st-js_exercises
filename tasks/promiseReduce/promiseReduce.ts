
// Написать функцию promiseReduce для асинхронных функций. Она принимает массив promise-ов в качестве аргументов и возвращает promise. Функция дожидается исполнения всех переданных promise-ов поочередно, ожидая их завершения. В результате выполняется reduce-функция для каждого итогового значения.

export function promiseReduce(promises: Array<Promise<number>>, callback: <T extends number>(value1:T, value2:T) => number, initialValue: number):Promise<number> {

  return promises.reduce((acc, promise) => {
    return acc.then(value => promise.then(promiseValue => {
      return new Promise(resolve => {
        resolve(callback(value, promiseValue))
      })
    }))

  }, Promise.resolve(initialValue))
}
