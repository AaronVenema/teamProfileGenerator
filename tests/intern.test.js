const intern = require("../lib/intern")

describe("School set with constructor", () => {
  it("Set school via constructor", () => {
    const testSchool = "Boise"
    const newEmp = new intern("Aaron", 1, "willthiswork@gmail.com", testSchool)
    expect(newEmp.school).toBe(testSchool)
  })

  describe("getRole()", () => {
    it("Get role via Function", () => {
      const testRole = "intern"
      const newEmp = new intern("Aaron", 1, "willthiswork@gmail.com", "Boise")
      expect(newEmp.getRole()).toBe(testRole)
    })
  })

  describe("getSchool()", () => {
    it("Get role school Function", () => {
      const testSchool = "Boise"
      const newEmp = new intern("Aaron", 1, "willthiswork@gmail.com", testSchool)
      expect(newEmp.getSchool()).toBe(testSchool)
    })
  })
})