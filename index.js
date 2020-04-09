/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/
describe("index.js", () => {
  describe("greet() function", () => {
    it("Returns Good Morning before 12pm", () => {
      expect(greet("8:40")).to.equal('Good Morning')
    })
    it("Returns Good Afternoon between 12pm and 5pm ", () => {
      expect(greet("14:21")).to.equal('Good Afternoon')
    })
    it("Returns Good Evening after 5pm", () => {
      expect(greet("19:00")).to.equal('Good Evening')
    })
  })

  describe("displayMessage() function", () => {
    it("updates the DOM with an appropriate message", () => {
      let testContent = "TEST"
      displayMessage(testContent)
      let content = document.getElementById("greeting").innerText
      expect(content).to.equal(testContent)
    })
  })
})
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
