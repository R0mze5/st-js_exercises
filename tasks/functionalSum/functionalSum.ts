
type TFunctionalSum = (value?: number) => null | number | TFunctionalSum

export function functionalSum(initialValue: number): TFunctionalSum;
export function functionalSum(initialValue?: any): null;

export function functionalSum (initialValue?:number):TFunctionalSum | null {
  if (typeof initialValue !== "number") {
    return null
  }
  let counter = initialValue

  function count(value: number): TFunctionalSum;
  function count(): number;
  function count(value: any): null;

  function count(value?:number ):TFunctionalSum | null | number {
    if (!value) {
      return counter
    }

    if (typeof value !== "number") {
      return null
    }

    counter = value + counter

    return count
  }

  return count
}
