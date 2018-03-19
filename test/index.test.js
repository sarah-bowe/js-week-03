const fs = require('fs')
const path = require('path')
const index = require('../index')

const code = fs.readFileSync(path.join('index.js'), {encoding: 'utf8'})

test('returns 0', () => expect(index.apply()).toBe(0))

test('says "Hi there!"', () => expect(index.hiThere()).toBe("Hi there!"));

test('is identical the result of y * 2', () => expect(index.whatIsIt()).toBe(true))

test('is identical the result of x', () => expect(index.whatDoesItDo()).toBe(true))

test('adds two numbers', () => {
  expect(index.add(8,9)).toBe(17)
  expect(index.add(10,20)).toBe(30)
})

test('doubles a number', () => {
  expect(index.double(8)).toBe(16)
  expect(index.double(10)).toBe(20)
})

test('returns a number', () => {
  const result = index.closure()
  expect(typeof result).toBe('number')
})

test('returns a number using a pure function', () => {
  const match = code.match(/purifyMe = \(\) =>([\s\S]+?)const/)
  const arrows = match[1].match(/=>/g)
  const result = index.purifyMe()
  expect(typeof result).toBe('number')
  expect(arrows.length).toBe(1)
})

test('evaluates to 950 using a closure', () => {
  const match = code.match(/closureWannaBe = \(\) =>([\s\S]+?)module/)
  const arrows = match[1].match(/=>/g)
  const result = index.closureWannaBe();
  expect(result).toBe(950)
  expect(arrows.length).toBe(2)
})