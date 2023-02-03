export function useDeepCopy(oldObj) {
  const newObject = JSON.parse(JSON.stringify(oldObj))
  return newObject
}
