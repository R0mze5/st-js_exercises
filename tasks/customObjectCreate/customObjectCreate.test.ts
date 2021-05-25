import { customObjectCreate } from "./customObjectCreate"

describe("when called", () => {
  const initialObject = { b: 1 }

  it("should return a new object", () => {

    const a = customObjectCreate(initialObject)

    expect(a).not.toBe(initialObject)
  })

  it("should return an object equals initial object", () => {

    const a = customObjectCreate(initialObject)

    expect(a).toStrictEqual(initialObject)
  })

  it("should create a object with correct __proto__", () => {

    const a = customObjectCreate(initialObject)

    expect(a.__proto__).toStrictEqual(Object.create(initialObject).__proto__)
  })
})
