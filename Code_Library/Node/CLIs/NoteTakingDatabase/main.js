function display(){
  if (process.stdin == "^[[D"){
    console.log("Left arrow")
  }
}


export function main() {
  // Display message on console
  console.log("Note App");
  process.stdout.write("Process Out Note");
  console.log("Input\n")
  process.stdin.pipe(process.stdout);
  display()
}
