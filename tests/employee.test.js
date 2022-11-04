const employee = require("../lib/employee");

describe("New employee created", () => {
  it("Make a new employee", () => {
    const newEmp = new employee();
    expect(typeof (newEmp)).toBe("object");
  });

  it("Setting new employee name with constructor", () => {
    const name = "Aaron"
    const newEmp = new employee(name)
    expect(newEmp.name).toBe(name)
  })

  it("Setting new employee Id with constructor", () => {
    const testId = 1
    const newEmp = new employee("Aaron", testId)
    expect(newEmp.id).toBe(testId)
  })

  it("Setting new employee email with constructor", () => {
    const testEmail = "willthiswork@gmail.com"
    const newEmp = new employee("Aaron", 1, testEmail)
    expect(newEmp.email).toBe(testEmail)
  })

  describe("getName()", () => {
    it("Can get name via function", () => {
      const testName = "Aaron"
      const newEmp = new employee(testName)
      expect(newEmp.getName()).toBe(testName)
    })
  })

  describe("getId()", () => {
    it("Can get id via function", () => {
      const testId = 1
      const newEmp = new employee("Aaron", 1, "willthiswork@gmail.com")
      expect(newEmp.getId()).toBe(testId)
    })
  })

  describe("getEmail()", () => {
    it("Can get email via function", () => {
      const testEmail = "willthiswork@gmail.com"
      const newEmp = new employee("Aaron", 1, "willthiswork@gmail.com")
      expect(newEmp.getEmail()).toBe(testEmail)
    })
  })

  describe("getRole()", () => {
    it("Can get role via function", () => {
      const testJob = "employee"
      const newEmp = new employee("Aaron", 1, "willthiswork@gmail.com")
      expect(newEmp.getRole()).toBe(testJob)
    })
  })
})
