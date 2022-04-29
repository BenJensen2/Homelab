class Node:
  def __init__(self):
    self.dataval = None
    self.next = None

class Singly_Linked_List:
  def __init__(self):
    self.head = None
  
  def isEmpty(self):
    if self.head == None:
      return True
    else:
      return False

  def insert_at_back(self,val):
    new_node = Node(val)
    if self.isEmpty():
      self.head = new_node
    else:
      runner = self.head
      while runner != None:
        runner = runner.next
      
      runner.next = new_node



first_list = Singly_Linked_List()
print(first_list.isEmpty())
first_list.insert_at_back(3)
print()