import _ from 'lodash'
import fs from 'node:fs'

const filename = 'words.txt'
const content = fs.readFileSync(filename, 'utf-8')
const words = content.trim().split('\n')
const duplicate_words = _.chain(words).countBy().toPairs().filter(d => d[1] > 1).value()
const unique_words = _.uniq(words)
console.log('before', words.length)
console.log('duplicate', duplicate_words)
console.log('after', unique_words.length)
fs.writeFileSync(filename, unique_words.join('\n'))
