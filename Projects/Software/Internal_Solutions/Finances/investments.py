import json

# Import Finances JSON data
with open('./data/finances.json') as finance_data:
  financeData = json.load(finance_data)
investmentsData = financeData["Finances"]["forecasting"]["investments"]

# INVESTMENTS

Investments = {
  "total":investmentsData["total"]
}

def totalInvestments(investmentsData):
  total = 0
  for investments in investmentsData["list"]:
    total += investments["current-amount"]
  return total

Investments["total"] = totalInvestments(investmentsData)

def info():
  print(Investments["total"])