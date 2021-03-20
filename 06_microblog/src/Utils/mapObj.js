
const mapObj = (obj, fn) =>
Object.fromEntries(
  Object.entries(obj).map(
   ([k, v], i) => [k, fn(v, k, i)]
)
)

export default mapObj;
