// write a function, which return uniq CSS selector to DOM node

export function getPath(element?:HTMLElement):string | null {
  if (typeof window !== "undefined" && element instanceof HTMLElement) {
    if (!element.parentElement) {
      return null
    }

    let { tagName } = element
    const { parentElement } = element

    tagName = tagName.toLowerCase()

    if (element.tagName.toLowerCase() === "body" ) {
      return "body"
    }

    let siblingsElementsNodeList = Array.from(parentElement.querySelectorAll(`:scope > ${tagName}`))

    if (siblingsElementsNodeList.length === 0) {
      throw new Error("unexpected Element")
    }

    let selector = ""

    if (siblingsElementsNodeList.length === 1) {
      selector = ` > ${tagName}`
    }

    siblingsElementsNodeList = Array.from(parentElement.children)

    const elementIndex = siblingsElementsNodeList.findIndex(el => el === element)

    if (elementIndex === 0) {
      selector = ` > ${tagName}:first-child`
    } else if (elementIndex + 1 === siblingsElementsNodeList.length) {
      selector = ` > ${tagName}:last-child`
    } else {
      selector = ` > ${tagName}:nth-child(${elementIndex + 1})`
    }

    return getPath(parentElement) + selector

  }

  return null
}
