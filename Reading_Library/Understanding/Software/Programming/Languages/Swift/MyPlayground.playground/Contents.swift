import UIKit

var str = "Hello, playground"
str += " you are so cool"
//var errorStr = 'single quotes do not work'
print("This is your destiny")
var name: String = "Jesus"
print("Jesus Reigns")
// Every variable declaration follows the same format:
// var variable_name: variable_type = variable_value
var number: Int = -42                      // "Int" type stores whole numbers both positive and negative
var dubs: Double = 4.2                     // "Double" type stores numbers with decimals (allocates 64 bits)
var dec: Float = 4.2                       // "Float" type also stores numbers with decimals (allocates 32 bits)
var isTrue: Bool = true
number = 5
if number > 2 {
    number += 5
}
else {
    number += 5
}
// We are declaring a mutable string because we store it in a var.
var myMutableString = "change me"
// We are declaring an immutable string because we store it in a const.
let myImmutableString = "can't change"
// We are declaring a mutable array because we are storing it in a variable.
var myMutableArray = ["one"]
// We are declaring an immutable array because we are storing it in a constant.
let myImmutableArray = ["uno"]
// We are declaring a mutable dictionary because we store it in a variable.
var myMutableDictionary = ["one": 1]
// We are declaring an immutable dictionary because we store it in a constant.
let myImmutableDictionary = ["uno": 1]
print("The maximum value \(Int.max)")
print("The minimum value \(Int.min)")
print("The maximum value \(Int32.max)")
print("The minimum value \(Int32.min)")
print("The maximum value \(UInt32.max)")
print("The minimum value \(UInt32.min)")
var myInt32: Int32 = 3
var myNormalInt: Int
                     // This will not error, because we first convert Int32 to instance of Int Type
myNormalInt = Int(myInt32)
print("Addition \(1 + 3)")
print("Subtraction \(1 - 3)")
print("Multiplication \(1 * 3)")
print("Division \(1 / 3)")
//Normal Static String declaration
var name2: String = "John Hancock"
//String can also be constants and make use of type inference
let PASSWORD = "SuP3rS3cRET!"
//Though not the longest of text, it is already getting hard to look at
var Poem = "Alive without breath,As cold as death;Never thirsty, ever drinking,All in mail never clinking."
//This can be reformatted with triple-quotes to allow multiple lines!
Poem = """
'Jesus said to her, “Everyone who drinks of this water will be thirsty again, but whoever drinks of the water that I will give him will never be thirsty again. The water that I will give him will become in him a spring of water welling up to eternal life.” '

John 4:13-14
"""
print(Poem)

var numberOfChampionships = 5
let name3 = "Kobe"
print("My favorite player is \(name) and he has \(numberOfChampionships) rings")
print("His jersey number is \(8 * 3)")

// Declare a variable called rings that is of the Int Type.
var rings = 5
if rings >= 5 {
    print("You are welcome to join the party")
} else {
    print("Go win some more rings")
}

var rings2 = 5
if rings >= 5 {
    print("You are welcome to join the party")
} else if rings > 2 {
    print("Decent...but \(rings) rings aren't enough")
} else {
    print("Go win some more rings")
}

var rings3 = 5
var numOfAllStarAppearances = 17
if rings >= 5 || numOfAllStarAppearances > 3 {
  print("Welcome you are truly a legend")
}

var crazy = true
if !crazy {
    print("Let's party!")
}

// loop from 1 to 5 including 5
for i in 1...5 {
    print(i)
}
// loop from 1 to 5 excluding 5
for i in 1..<5 {
    print(i)
}

var start = 0
var end = 5
// loop from start to end including end
for i in start...end {
    print(i)
}
// loop from start to end excluding end
for i in start..<end {
    print(i)
}

for i in 1...5 {
    print(i)
}

var i = 1
while i < 6 {
    print(i)
    i = i+1
}

var type: String = "Rectangle"
var description: String = "A quadrilateral with four right angles"
var width: Double = 5
var height: Double = 10.5
var area: Double = width * height
height += 1
width += 1
area = width * height
// Note how you can "interpolate" variables into Strings using the following syntax
print("The shape is a \(type) or \(description) with an area of \(area)")

//for i in 1...255 {
//    print(i)
//}

//while i < 100 {
//    if i % 3 == 0 || i % 5==0{
//        print(i)
//    }
//    i = i+1
//}
//
//i=0
//while i < 100 {
//    if i % 3 == 0 && i % 5 == 0 {
//        print("FizzBuzz")
//    } else if i % 3 == 0 {
//        print("Fizz")
//    } else if i % 5 == 0 {
//        print("Buzz")
//    } else {print(i)}
//    i = i+1
//}

// Arrays

var toDoList1: [String] = ["Deny yourself", "Resist the devil", "He will flee"]


var toDoList: [String] = [String]()              // Setting the array type and initializing the array
//alternative syntax that you may see:
var alternativeToDoList = Array<String>()
toDoList.append("Learn iOS")
toDoList.append("Build the next Flappy Bird")
toDoList.append("Retire in Cancun")
print(toDoList1)

var arrayOfInts = [1, 2, 3, 4, 5]      // Note that we let Swift infer the type here
// The first number lives at index 0.
print("\(arrayOfInts[0])")
// The second number lives at index 1.
print("\(arrayOfInts[1])")
// The third number lives at index 2.
print("\(arrayOfInts[2])")
// The fourth number lives at index 3.
print("\(arrayOfInts[3])")
// The fifth number lives at index 4.
print("\(arrayOfInts[4])")

var arrayOfInts2 = [1, 2, 3, 4, 5]
// => "[1, 2]"
print("\(arrayOfInts2[0...1])")
// => "[2, 3, 4]"
print("\(arrayOfInts2[1..<4])")
// => "[3, 4]"
print("\(arrayOfInts2[2...3])")

var arr = [1, 2, 3, 4]
arr[0] = 8
print(arr)      // The array has now changed!

var nums = [1, 2, 3, 4]
nums.append(5)
print(nums)

var arrayOfInts55 = [1, 2, 3, 4, 5]
let popped = arrayOfInts55.remove(at: 0)
print(popped)
print(arrayOfInts55)

var arrayOfInts4 = [1,2,3,4,5]
let popped2 = arrayOfInts4.removeLast()
print(popped2)
print(arrayOfInts4)

var arrayOfInts3 = [1, 2, 3, 4, 5]
arrayOfInts3.insert(6, at: arrayOfInts.count)

var starters = ["Fisher", "Kobe", "Gasol", "Bynum", "World Peace"]
for starter in starters {
    print(starter)
}

for i in 0..<starters.count {
    print(starters[i])
}

// Dictionaries
// Here we are declaring myDict variable to be of Dictionary Type that will use instances of String as
// its keys and instances of Int as its values
var myDict2: [String: Int]

var myDict3: [String: Int] = [String: Int]()

var myDict4 = [String: Int]()

// here we are declaring myDict variable to be of Dictionary Type that will use instances of String as
// its keys and instances of Int as its values
var dictionary = [
    "Kobe": 24,
    "Lebron": 23,
    "Rondo": 9
]
// Note how we are leveraging Swift's type inference here

dictionary["Kobe"]

var jerseyNumber = dictionary["Kobe"]
print(jerseyNumber) // Optional is not unwrapped

var jerseyNumber2 = dictionary["Kobe"]!
print(jerseyNumber2)

// Best Practice
if let jerseyNumber3 = dictionary["Kobe"] {
    print(jerseyNumber3)
}

var dictionary2 = [
    "Kobe": 8,
    "Lebron": 23,
    "Rondo": 9
]
print(dictionary2)
dictionary2["Fisher"] = 2
print(dictionary2)
dictionary2["Kobe"] = 24
print(dictionary2)

dictionary2["Lebron"] = nil

var lebronsNumber = dictionary.removeValue(forKey: "Lebron")
//print(lebronsNumber)
if let lebronsNumber = dictionary.removeValue(forKey: "Lebron") {
    print(lebronsNumber)
}

for (key, value) in dictionary {
    print("The key is \(key) and the value is \(value)")
}

for x in dictionary {
    print(x)
}

// Functions
func sayHello() {
    print("Hello how are you doing today?")
    print("Jesus is Amazing")
}

sayHello()

func sayHello2(name: String) {
    print("Hello, \(name), how are you doing today?")
}

sayHello2(name: "Ben")

// The two parameters have external names of width and height
// and internal names of w and h
func printDescription(width w: Int, height h: Int) {
print("My width is \(w) and my height is \(h)")
}
// The func can be invoked by calling its name and passing in
// right arguments with corresponding external parameter names.
printDescription(width: 10, height: 20)

func printDescriptionWithWidth(w: Int, andHeight h: Int) {
    print("My width is \(w) and my height is \(h)")
}
printDescriptionWithWidth(w: 10, andHeight: 20)

var myInt = 1
func changeMyInt(someInt: Int) {
    var someInt = someInt
    someInt = someInt + 1
    print(someInt)
}

var myInt2 = 1
func changeMyInt2(someInt: Int) {
    var someInt = someInt
    someInt = someInt + 1
    print(someInt)
}
changeMyInt2(someInt: myInt2)     // => 2
print(myInt2)
