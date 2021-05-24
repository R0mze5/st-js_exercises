import { promiseReduce } from "./promiseReduce"

describe("when called", () => {
  it("should return new promise with resolve value", () => {

    const arrayOfValues = []

    for (let index = 0; index < 3; index++) {

      arrayOfValues.push(Math.floor(Math.random() *100))

    }

    const promiseArr = arrayOfValues.map(value => Promise.resolve(value))

    expect(promiseReduce(promiseArr, (a, b) => a + b, 0)).resolves.toBe(arrayOfValues.reduce((acc, value) => acc + value, 0))

  })
})
