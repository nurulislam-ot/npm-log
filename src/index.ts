export const orangetoolz = "Hello Orange Toolz"

class Log {
  success(msg: unknown) {
    console.log(`%c ${msg}`, `color: green`)
  }
  danger(msg: unknown) {
    console.log(`%c ${msg}`, `color: red`)
  }
  info(msg: unknown) {
    console.log(`%c ${msg}`, `color: black; background: yellow;`)
  }
}

const log = new Log()
export default log
