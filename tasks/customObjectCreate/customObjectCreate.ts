export function customObjectCreate(value: Record<string, unknown>):Record<string, unknown> {
  const as = { ...value }

  // eslint-disable-next-line no-proto
  as.__proto__ = value

  return as
}
