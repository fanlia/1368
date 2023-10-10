
import _ from 'lodash'
import fs from 'node:fs'

const filename = 'dict.json'
const content = fs.readFileSync(filename, 'utf-8')
const words = JSON.parse(content)

const unique_words = words.filter(d => d.word_name)

fs.writeFileSync(filename, JSON.stringify(unique_words, null, 2))


