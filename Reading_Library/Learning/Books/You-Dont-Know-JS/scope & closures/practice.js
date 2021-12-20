function hello(){
  let theMessage = "A Message"
  eval('theMessage= "Hello from the eval side!"')
  console.log(theMessage)
}

hello()