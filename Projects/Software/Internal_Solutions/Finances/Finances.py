import income
import house
import savings
import investments


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
