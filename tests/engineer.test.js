const engineer = require("../lib/engineer")
describe("Github set with constructor", () => {
  it("Set github username via constructor", () => {
    const testGithub = "gitHubUserName"
    const newEmp = new engineer("Aaron", 1, "willthiswork@gmail.com", testGithub)
    expect(newEmp.github).toBe(testGithub)
  })

  describe("getRole()", () => {
    it("Get role via function", () => {
      const testRole = "engineer"
      const newEmp = new engineer("Aaron", 1, "willthiswork@gmail.com", "githubUser")
      expect(newEmp.getRole()).toBe(testRole)
    })
  })

  describe("getGithub()", () => {
    it("Get github username via function", () => {
      const testGithub = "gitHubUserName"
      const newEmp = new engineer("Aaron", 1, "willthiswork@gmail.com", testGithub)
      expect(newEmp.getGithub()).toBe(testGithub)
    })
  })
})