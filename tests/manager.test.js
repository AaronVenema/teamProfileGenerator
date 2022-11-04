const manager = require("../lib/manager")

describe("Office number set with constructor", () => {
  it("Set office number via constructor", () => {
    const testOffNum = 50
    const newEmp = new manager("Aaron", 1, "willthiswork@gmail.com", testOffNum)
    expect(newEmp.officeNumber).toBe(testOffNum)
  })

  describe("getRole ()", () => {
    it("Get role via Function", () => {
      const testRole = "manager"
      const newEmp = new manager("Aaron", 1, "willthiswork@gmail.com")
      expect(newEmp.getRole()).toBe(testRole)
    })
  })

  describe("getOfficeNumber()", () => {
    it("Get office number via Function", () => {
      const testOffNum = 50
      const newEmp = new manager("Aaron", 1, "willthiswork@gmail.com", testOffNum)
      expect(newEmp.getOfficeNumber()).toBe(testOffNum)
    })
  })
})