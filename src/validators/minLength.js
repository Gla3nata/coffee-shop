export const minLength = (min) => (value) => {
  if (!value) return false
  return value.length >= min
}