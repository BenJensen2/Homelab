import json

# Import Finances JSON data
with open('./data/everyDollar.json') as finance_data:
  financeData = json.load(finance_data)
houseData = financeData["Finances"]["forecasting"]["expenses"]["house"]

# House Data
House = {
  "overall-cost":houseData["overall-cost"],
  "overall-interest":houseData["overall-interest"],
  "total-cost":houseData["total-cost"],
  "initial-down":houseData["initial-down"],
  "initial-principal":houseData["initial-principal"],
  "current-principal":houseData["current-principal"],
  "current-interest":houseData["current-interest"],
  "annual-interest-rate":houseData["annual-interest-rate"],
  "monthly-interest-rate":houseData["annual-interest-rate"]/12,
  "term-years":houseData["term-years"],
  "term-months":houseData["term-years"]*12,
  "compound-interest-rate":houseData["compound-interest-rate"],
  "monthly-payment":houseData["monthly-payment"],
  "cost-of-rent":houseData["cost-of-rent"]
}

# Calculate Compound Interest Rate: (1+r)^n
def compoundInterest(interestRate, numberOfPayments):
  return (1 + interestRate) ** numberOfPayments
House["compound-interest-rate"] = compoundInterest(House["monthly-interest-rate"],House["term-months"])

# Calculate Monthly Mortgage Payment: P[r(cir)/((cir)-1)]
House["monthly-payment"] = House["overall-cost"]*(
  (House["monthly-interest-rate"] * House["compound-interest-rate"])/
    (House["compound-interest-rate"]-1)
  )

# Overall Interest: (Payments * Months) - Overall Cost
House["overall-interest"] = (House["monthly-payment"] * House["term-months"]) - House["overall-cost"]

# Total Cost: Overall Cost + Overall Interest
House["total-cost"] = House["overall-cost"] + House["overall-interest"]


# OUTPUT
# table = {'Sjoerd': 4127, 'Jack': 4098, 'Dcab': 7678}
# for name, phone in table.items():
#   print(f'{name:10} ==> {phone:10d}')

# print(f'Overall: {House["overall-cost"]:.3f}')
# print(f'Overall Cost:  {round(House["overall-cost"],2)}')
# print(f'Overall Interest:  {round(House["overall-interest"],2)}')
# print(f'Total Cost:  {round(House["total-cost"],2)}')
# print(f'Monthly Payment:  {round(House["monthly-payment"],2)}')