function wrap(str, length) {
  let newString = ""
  while (str.length > 20) {
    newString += str.slice(0, str.lastIndexOf(' ', length)) + '\n'
    str = str.slice(str.lastIndexOf(' ', length) + 1)
  }
  newString += str

  return newString
}

module.exports = wrap;
