import { promiseReduce } from "./promiseReduce"

// Написать функцию promiseReduce
// Создать функцию promiseReduce для асинхронных функций. Она принимает массив promise-ов в качестве аргументов и возвращает promise. Функция дожидается исполнения всех переданных promise-ов поочередно, ожидая их завершения. В результате выполняется reduce-функция для каждого итогового значения.

const promise0 = Promise.resolve(0)
const promise1 = Promise.resolve(1)
const promise2 = Promise.resolve(2)

describe("when called", () => {
  it("should return new promise with resolve value", () => {
    const promiseArr = [promise0, promise1, promise2]

    expect(promiseReduce(promiseArr, (a, b) => a + b, 0)).resolves.toBe(3)

  })
})
