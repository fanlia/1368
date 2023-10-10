
import _ from 'lodash'
import fs from 'node:fs'

const filename = 'words.txt'
const content = fs.readFileSync(filename, 'utf-8')
const words = content.trim().split('\n')

export const lookup = async (word) => {

  const url = `https://dict-co.iciba.com/api/dictionary.php?w=${word}&key=1F9CA812CB18FFDFC95FC17E9C57A5E1&type=json`

  const res = await fetch(url).then(res => res.json())

  return res

}

const delay = (wait = 1000) => new Promise(resolve => setTimeout(resolve, wait))

// const result = await lookup('go')
//
// console.log(result)

const results = []

for (const word of words) {
  const result = await lookup(word)
  console.log(result)
  results.push(result)
  await delay(1000)
}

fs.writeFileSync('dict.json', JSON.stringify(results, null, 2))


