import { sayWord, sayNum } from '../../src/utils'

const text = {
  word: 'word',
  num: 3
}

test('sayWord Test', () => {
  expect(sayWord(text)).toBe('word')
})

test('sayNum Test', () => {
  expect(sayNum(text)).toBe(3)
})

test('sayNum Test 2', () => {
  expect(sayNum(text, 2)).toBe(2)
})
