class ALazyMan {
  constructor(name, logFn) {
    this.name = name
    this.log = logFn
    this.normalTasks = []    
    this.greet()
    //to ensure all the actions are stored in the list - > we do a set timeout
    setTimeout(() => {
      this._triggerNext()
    }, 0)
  }
  greet() {
    this.normalTasks.push(['greet'])
    return this
  }
  eat(food) {
    this.normalTasks.push(['eat', food])
    return this
  }
  sleep(time) {
    this.normalTasks.push(['sleep', time])
    return this
  }
  sleepFirst(time) {
    this.normalTasks.unshift(['sleep', time])
    return this
  }
  _triggerNext() {
    let task = this.normalTasks.shift()
    if (!task) {
      return
    }
    const [action, param] = task
    switch (action) {
      case 'greet':
        this.log(`Hi, I'm ${this.name}.`)
        this._triggerNext()
        return
      case 'eat':
        this.log(`Eat ${param}.`)
        this._triggerNext()
        return
      case 'sleep':
        setTimeout(() => {
          this.log(`Wake up after ${param} second${param > 1 ? 's' : ''}.`)
          this._triggerNext()
          return
        }, param * 1000)
    }
  }
}

/**
 * @param {string} name
 * @param {(log: string) => void} logFn
 * @returns {Laziness}
 */
function LazyMan(name, logFn) {
  return new ALazyMan(name, logFn)
}
