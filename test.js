describe('some test', () => {
  xtest('some test', () => {
    console.log('this is a test')
  })
  // if you uncomment this, the test will pass, because afterAll is run and closes the open connection
  // test('some test', () => {
  //   console.log('this is a test')
  // })
})
