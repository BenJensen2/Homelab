import json
import incomeTax

# Import Finances JSON data
with open('./data/finances.json') as finance_data:
  financeData = json.load(finance_data)
houseData = financeData["Finances"]["forecasting"]["expenses"]["house"]
incomeData = financeData["Finances"]["forecasting"]["income"]
savingsData = financeData["Finances"]["forecasting"]["savings"]
investmentsData = financeData["Finances"]["forecasting"]["investments"]

# HOUSE DATA
House = {
  "initial-cost":houseData["initial-cost"],
  "total-interest":houseData["total-interest"],
  "total-cost":houseData["total-cost"],
  "initial-down":houseData["initial-down"],
  "initial-principal":houseData["initial-principal"],
  "current-principal":houseData["current-principal"],
  "current-interest":houseData["current-interest"],
  'current-balance':houseData["current-balance"],
  "annual-interest-rate":houseData["annual-interest-rate"],
  "monthly-interest-rate":houseData["annual-interest-rate"]/12,
  "term-years":houseData["term-years"],
  "term-months":houseData["term-years"]*12,
  "simple-interest-rate":houseData["simple-interest-rate"],
  "monthly-payment":houseData["monthly-payment"],
  "monthly-rent":houseData["monthly-rent"]
}

# HOUSE FUNCTIONS #

# Calculate simple Interest Rate (sir): (1+r)^n
def simpleInterest(interestRate, numberOfPayments):
  return (1 + interestRate) ** numberOfPayments

# Calculate Monthly Mortgage Payment: P[r(sir)/((sir)-1)]
def monthlyMortgagePayment(simpleInterestRate, principal, interestRate):
  return principal * interestRate * simpleInterestRate / (simpleInterestRate-1)

def totalInterest(numberOfPayments, regularPayment, initialCost):
  return (numberOfPayments * regularPayment) - initialCost

def totalCost(initialCost, totalInterest):
  return totalInterest + initialCost

def currentBalance(regularPayment,interestRate, numberOfPayments, numberOfPaymentsAlreadyMade):
  return regularPayment * ((1 - (1 + interestRate) ** (-1*(numberOfPayments - numberOfPaymentsAlreadyMade))) / interestRate)

# Totals Paid with respect to years
def totalPaid(monthlyPayment,years):
  return monthlyPayment*years*12

def principalPaid(initialAmount,currentBalance):
  return initialAmount - currentBalance

def interestPaid(totalPaid, principalPaid):
  return totalPaid - principalPaid

def monthlyAmortizationSchedule(initialAmount, regularPayment,numberOfYears,interestRate,monthlyRent):
  # Calculated with month iteration

  # Fixed Values
  numberOfPayments = numberOfYears * 12
  sir = simpleInterest(interestRate, numberOfPayments)
  
  # Initial Values
  month = 0
  balance = initialAmount
  totalInterest = 0
  totalPrincipal = 0
  totalPaid = 0
  totalRent = 0
  totalMoneySavedRenting = 0
  payment = monthlyMortgagePayment(sir, balance, interestRate)
  
  print("\nMonth ", "Balance    ", "Interest Paid ", "Principal Paid   ", "Total Paid    ", "Cost of Rent  ", "Money Saved Renting")
  while balance > 0.1:
    month +=1
    interest = balance * interestRate
    principal = payment - interest
    totalInterest += interest
    totalPrincipal += principal
    totalPaid += payment
    balance -= principal
    totalRent += monthlyRent
    totalMoneySavedRenting = totalPaid - totalRent - totalPrincipal
    print('{:3}:  {:10,.2f}    {:10,.2f}     {:10,.2f}  {:15,.2f}     {:10,.2f}         {:10,.2f}'.format(month, balance, totalInterest, totalPrincipal, totalPaid, totalRent,totalMoneySavedRenting))


  

# Amortization Schedule
def yearlyAmortizationScheduleCalculatedYearly(initialAmount, regularPayment,numberOfYears,interestRate,monthlyRent):
  # Calculated without month iterations

  numberOfPayments = numberOfYears * 12
  print("\nYear ", "Balance    ", "Interest Paid ", "Principal Paid   ", "Total Paid    ", "Cost of Rent  ", "Money Saved Renting")
  for year in range(1,numberOfYears+1):
    numberOfPaymentsAlreadyMade = year*12
    total = totalPaid(regularPayment,year)
    balance = currentBalance(regularPayment,interestRate, numberOfPayments, numberOfPaymentsAlreadyMade)
    principal = principalPaid(initialAmount, balance)
    interest = interestPaid(total, principal)
    rent = monthlyRent * year * 12
    moneySavedRenting = total - rent - principal
    print('{:2}:  {:10,.2f}    {:10,.2f}     {:10,.2f}  {:15,.2f}     {:10,.2f}         {:10,.2f}'.format(year, balance, interest, principal, total, rent,moneySavedRenting))

# HOUSE CALCULATIONS #
House["simple-interest-rate"] = simpleInterest(House["monthly-interest-rate"], House["term-months"])
House["monthly-payment"] = monthlyMortgagePayment(House["simple-interest-rate"], House["initial-cost"], House["monthly-interest-rate"])
House["total-interest"] = totalInterest((House["term-months"]), House["monthly-payment"], House["initial-cost"])
House["total-cost"] = totalCost(House["initial-cost"], House["total-interest"])
House["current-balance"] = currentBalance(House["monthly-payment"], House["monthly-interest-rate"], House["term-months"], House["term-months"])

print("\nHOUSE COSTS")

# SINGLE OUTPUT #
# print(House["simple-interest-rate"])
print('\nInitial Cost:       ${:,.2f}'.format(House["initial-cost"]))
print('Monthly Payment:    ${:,.2f}'.format(House["monthly-payment"]))
print('Total Interest:     ${:,.2f}'.format(House["total-interest"]))
print('Total Cost:         ${:,.2f}'.format(House["total-cost"]))
print('Monthly Rent:       ${:,.2f}'.format(House["monthly-rent"]))


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


# SAVINGS

Savings = {
  "total":savingsData["total"]
}

def totalSavings(savingsData):
  total = 0
  for savings in savingsData["list"]:
    total += savings["current-amount"]
  return total

Savings["total"] = totalSavings(savingsData)

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


# AMORTIZATION SCHEDULE #
# yearlyAmortizationScheduleCalculatedYearly(House["initial-cost"],House["monthly-payment"], House["term-years"], House["monthly-interest-rate"],House["monthly-rent"])
# monthlyAmortizationSchedule(House["initial-cost"],House["monthly-payment"], House["term-years"], House["monthly-interest-rate"],House["monthly-rent"])

# Finance Schedule
def financeScheduleMonthly(
  initialAmount, 
  regularPayment,
  numberOfYears,
  interestRate,
  monthlyRent,
  monthlyIncome,
  ):
  # Calculated with month iteration

  # Fixed Values
  numberOfPayments = numberOfYears * 12
  sir = simpleInterest(interestRate, numberOfPayments)
  
  # Initial Values
  month = 0
  balance = initialAmount
  totalInterest = 0
  totalPrincipal = 0
  totalPaid = 0
  totalRent = 0
  totalMoneySavedRenting = 0
  payment = monthlyMortgagePayment(sir, balance, interestRate)
  totalIncome = monthlyIncome
  
  print("\nMonth ", "Balance    ", "Interest Paid ", "Principal Paid   ", "Total Paid    ", "Cost of Rent  ", "Money Saved Renting      ", "Income  ")
  while balance > 0.1:
    month +=1

    # Mortgage
    interest = balance * interestRate
    principal = payment - interest
    totalInterest += interest
    totalPrincipal += principal
    totalPaid += payment
    balance -= principal

    # Rent
    totalRent += monthlyRent
    totalMoneySavedRenting = totalPaid - totalRent - totalPrincipal
    
    # Income
    totalIncome += monthlyIncome

    # Roth

    # Output
    print('{:3}:  {:10,.2f}    {:10,.2f}     {:10,.2f}  {:15,.2f}     {:10,.2f}         {:10,.2f}         {:10,.2f}'.format(month, balance, totalInterest, totalPrincipal, totalPaid, totalRent,totalMoneySavedRenting,totalIncome))


  

# OUTPUT: FINANCE SCHEDULE(Monthly)
financeScheduleMonthly(
  House["initial-cost"],
  House["monthly-payment"], 
  House["term-years"], 
  House["monthly-interest-rate"],
  House["monthly-rent"],
  Income["total"])

# OUTPUT: FINANCE SCHEDULE(Yearly)

# OUTPUT: FINANCE SCHEDULE(Total)