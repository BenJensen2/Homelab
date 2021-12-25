import json

# Import Finances JSON data
with open('./data/finances.json') as finance_data:
  financeData = json.load(finance_data)
incomeData = financeData["Finances"]["forecasting"]["income"]

# INCOME
Income = {
  "total":incomeData["total"]
}

# INCOME FUNCTIONS

def totalIncome(incomeData):
  total = 0
  for income in incomeData["categories"]:
    total += income["amount"]
  return total

Income["total"] = totalIncome(incomeData)

def info():
  print(Income["total"])

def monthlyData():
  return Income["total"]