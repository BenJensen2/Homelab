from datetime import datetime

now = datetime.now()  
today = datetime.today()

print("now()          : ", now)
print("today()        : ",today)
print("date(today)    : ", datetime.date(today))
print("time(today)    : ", datetime.time(today))
print("today().year   : ",today.year)
print("today().month  : ",today.month)
print("today().day    : ",today.day)

