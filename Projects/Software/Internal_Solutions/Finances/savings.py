import json

# Import Finances JSON data
with open('./data/finances.json') as finance_data:
  financeData = json.load(finance_data)
savingsData = financeData["Finances"]["forecasting"]["savings"]

Savings = {
  "total":savingsData["total"]
}

def totalSavings(savingsData):
  total = 0
  for savings in savingsData["list"]:
    total += savings["current-amount"]
  return total

Savings["total"] = totalSavings(savingsData)

def info():
  print(Savings["total"])