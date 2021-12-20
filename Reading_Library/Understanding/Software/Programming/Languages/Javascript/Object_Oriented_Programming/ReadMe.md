The four principles of object-oriented programming are encapsulation, abstraction, inheritance, and polymorphism.

Encapsulation is the mechanism of hiding of data implementation by restricting access to public methods. Instance variables are kept private and accessor methods are made public to achieve this.
- Private instance variable and public accessor methods

Abstraction is expressing the intent of the class rather than the actual implementation
- In a way, one class should not know the inner details of another in order to use it, just knowing the interfaces should be good enough.
- Hide unnecessary details from the user.

Inheritance expresses “is-a” and/or “has-a” relationship between two objects.
- Ability to create children classes

Polymorphism gives a way to use a class exactly like its parent so there’s no confusion with mixing types. But each child class keeps its own methods as they are.
- This typically happens by defining a (parent) interface to be reused. It outlines a bunch of common methods. Then, each child class implements its own version of these methods.
- We can write a code that works on the superclass, and it will work with any subclass type as well.

References:
https://www.freecodecamp.org/news/object-oriented-programming-concepts-21bb035f7260/
https://medium.com/@cancerian0684/what-are-four-basic-principles-of-object-oriented-programming-645af8b43727