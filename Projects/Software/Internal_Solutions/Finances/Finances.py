from datetime import date, datetime, timedelta

import reference
import income
import house
import savings
import investments

# Schedule Function
#   - Time Interval
#   - Start Date
#   - People Included


def dateDifference(startDate, endDate, resolution):

    if resolution == 'year':
        difference = endDate.year - startDate.year
    if resolution == 'month':
        difference = endDate.month - startDate.month
    if resolution == 'day':
        difference = endDate.day - startDate.day
    return difference
    

def schedule(startDate, endDate, timeInterval, peopleIncluded):
    print(startDate)
    print(endDate)
    print(timeInterval)
    print(peopleIncluded)


def monthlySchedule(income,houseData):
    print("Monthly Schedule")
    print(income)
    month = 1
    print(
        "\nMonth   ",
        "Income      ",
        "Balance      ",
        "Cost of Rent  ",
        "Interest Paid ",
        "Principal Paid   ",
        "Total Paid    ",
        "Money Saved Renting      ",
    )
    print("{:3}:  {:10,.2f}    {:10,.2f}     {:10,.2f}".format(month, income, houseData["initialAmount"], houseData["monthlyRent"]))


def yearlySchedule():
    print("Yearly Schedule")


# OUTPUT
income.info()
house.info()
savings.info()
investments.info()
monthlySchedule(income.monthlyData(),house.monthlyData())
yearlySchedule()


startDate = date.today()
endDate = date(2057,2,3)
# schedule(startDate, )
schedule(startDate,endDate,'year',["Ben", "Amichi"])

print(dateDifference(startDate,endDate,"day"))
print(timedelta(days=3,seconds=22))
# print(timedelta(endDate - startDate))