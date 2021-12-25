# 2021 Married Filing Jointly

# Pseudo Code
# Input max with each percentage
# Calculate Min with amount in each bracket
def calculateBracket(*args):
  print(args)
  brackets =[]
  count = 0
  bracketCount = 0
  for arg in args:
    count+=1
    if arg <1:
      bracketCount+=1
      bracket = {}
      print("percentage",arg)
      print("max",args[count])
      bracket["percentage"]= arg
      bracket["max"] = args[count]
      if count == 1:
        bracket["min"] = 0
      else:
        bracket["min"]= args[count-2]+1
      brackets.append(bracket)
  return brackets

print(calculateBracket(.1,19900,.12,81050,.22,172750))