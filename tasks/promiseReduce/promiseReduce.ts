export function promiseReduce<T = number>(promises: Array<Promise<T>>, callback: Function, initialValue: T):Promise<T> {

  return new Promise((resolve) => resolve(null))
}
