from datetime import datetime


Ben = {"birthdate": datetime(1992, 2, 3)}

Amichi = {"birthdate": datetime(1988, 2, 2)}

Amariya = {"birthdate": datetime(2013, 11, 2)}

Rhema = {"birthdate": datetime(2017, 8, 28)}

Engedi = {"birthdate": datetime(2020, 5, 3)}

Family = {"members": [Ben, Amichi, Amariya, Rhema, Engedi]}

def calculateAge(birthdate):
    # Edge Case: Haven't looked at leap year
    today = datetime.today()
    yearToday = today.year
    monthToday = today.month
    dayToday = today.day

    yearBorn = birthdate.year
    monthBorn = birthdate.month
    dayBorn = birthdate.day

    yearDifference = yearToday - yearBorn
    age = yearDifference
    if monthBorn > monthToday:
        age = yearDifference - 1
    if monthBorn == monthToday & dayBorn > dayToday:
        age = yearDifference - 1
    return age