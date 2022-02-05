class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None


class LinkedList:
    def __init__(self):
        self.head = None

    # Adds a new node to the front of the list
    def addToFront(self, data):
        newNode = Node(data)
        if self.head == None:
            self.head = newNode
        else:
            newNode.next = self.head
            self.head.prev = newNode
            self.head = newNode

    # Adds a new node to the end of a list
    def addToEnd(self, data):
        newNode = Node(data)
        current = self.head
        while current.next:
            current = current.next
        current.next = newNode
        newNode.prev = current

    # Gets the length of the list
    def length(self):
        count = 0
        current = self.head
        while current:
            count += 1
            current = current.next
        return count

    # Displays the list
    def display(self):
        if self.length() == 0:
            return "Empty"

        current = self.head
        output = ""
        while current:
            output += current.data + " <-> "
            current = current.next
        return output

    # Returns true if the list contains the given value
    def contains(self, value):
        current = self.head
        while current:
            if current.data == value:
                return True
            current = current.next
        return False

    # Deletes all instances of a given value in a list
    def delete(self, value):
        if self.head.data == value:
            self.head = self.head.next
            self.head.prev = None
        current = self.head
        while current.next:
            if current.next.data == value:
                if current.next.next:
                    current.next = current.next.next
                    current.next.prev = None
                else:
                    current.next = None
                    break
            current = current.next


linkedList = LinkedList()
print(linkedList.display())
linkedList.addToFront("hello")
linkedList.addToEnd("Ben")
linkedList.addToFront("tom")
linkedList.addToFront("jerry")
print(linkedList.length())
print(linkedList.display())
print(linkedList.contains("Ben"))
linkedList.delete("Ben")
print(linkedList.display())
linkedList.delete("tom")
print(linkedList.display())
