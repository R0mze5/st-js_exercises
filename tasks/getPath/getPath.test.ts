import { screen } from "@testing-library/dom"
import "@testing-library/jest-dom"

import { getPath } from "./getPath"

const testHTML = `
<span data-testid="not-empty"><span></span><span data-testid="empty"></span><div></div><span ></span></span>
<div data-testid="visible">Visible Example</div>
`

const testId = "empty"

describe("when pass the DOM node", () => {
  it("should return string of CSS selector", () => {
    document.body.innerHTML = testHTML

    expect(typeof getPath(screen.queryByTestId(testId))).toBe("string")
  })

  it("should return null if Element doesn't exists", () => {
    document.body.innerHTML = testHTML

    const testElement = document.createElement("div")

    expect(getPath(testElement)).toBe(null)
  })

  describe("and get CSS selector, CSS selector", () => {
    document.body.innerHTML = testHTML
    const selector = getPath(screen.queryByTestId(testId))

    const container = document.createElement("html")
    const containerBody = document.createElement("body")

    containerBody.innerHTML = testHTML
    container.appendChild(containerBody)

    it.only("should return required element", () => {
      expect(container.querySelector(selector)?.getAttribute("data-testid")).toBe(testId)

    })
    it("should be unique for every Element", () => {
      expect(container.querySelectorAll(selector).length).toBe(1)
    })
  })

})

describe("when pass not the DOM node", () => {
  it("should return null", () => {
    document.body.innerHTML = testHTML
    expect(getPath(null)).toBe(null)
  })
})
