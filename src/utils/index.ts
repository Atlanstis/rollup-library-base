interface Text {
  word: string
  num: number
}

export function sayWord(text: Text) {
  return text.word
}

export function sayNum(text: Text, number?: number) {
  if (number) {
    return number
  } else {
    return text.num
  }
}
