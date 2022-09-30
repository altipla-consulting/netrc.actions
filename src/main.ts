
import { getInput, setFailed } from '@actions/core'
import { homedir } from 'os'
import { promises as fs } from 'fs'
import { resolve } from 'path'


async function run() {
  let auth = [
    `machine ${getInput('machine')}`,
    `\tlogin ${getInput('user')}`,
    `\tpassword ${getInput('password')}`,
    '',
  ]
  await fs.writeFile(resolve(homedir(), '.netrc'), auth.join('\n'), { flag: 'a', mode: 0o600 })
}


async function main(): Promise<void> {
  try {
    await run()
  } catch (err) {
    setFailed(`Action failed with error: ${err}`)
  }
}

main()
