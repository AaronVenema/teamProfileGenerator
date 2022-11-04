const employee = require("./employee");
class engineer extends employee {
  constructor(name, id, email, github) {
    super(name, id, email)
    this.title = "engineer"
    this.github = github
  }
  getGithub() {
    return this.github
  }
}

module.exports = engineer