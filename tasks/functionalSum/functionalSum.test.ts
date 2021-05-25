import { functionalSum } from "./functionalSum"

describe("when called with values", () => {
  const arrayOfValues = []

  for (let index = 0; index < 5; index++) {
    arrayOfValues.push(Math.floor(Math.random() *100))
  }

  const updatedSumFn = arrayOfValues.reduce((fn, value) => fn(value), functionalSum(0))

  it("should return function if called without last undefined argument", () => {

    expect(typeof updatedSumFn).toBe("function")
  })

  it("should return a sum of arguments if called with last undefined argument", () => {

    expect(updatedSumFn()).toBe(arrayOfValues.reduce((acc, value) => acc + value, 0))

  })
})

describe("when called without values", () => {
  it("should return null", () => {
    expect(functionalSum()).toBe(null)
  })
})

describe("when called with not number values", () => {
  it("should return null", () => {
    expect(functionalSum(1)("a")).toBe(null)
  })
})
