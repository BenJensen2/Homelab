const readline = require('readline'); // Interface for reading process stdin & out one line at a time


export function main() {
  console.log("Bible Database");


  readline.emitKeypressEvents(process.stdin);
  process.stdin.setRawMode(true);
  
  process.stdin.on('keypress', (key, data) => {
    if (data.ctrl && data.name === 't') {
      process.exit();
    } else {
      console.log('key', key);
      console.log('data', data);
    }
  });
  console.log('Press a key');
}
