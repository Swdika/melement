
import math

Qmax = 5500 # N
Hmax = 390    # mm
pi = math.pi
k = 1.25 #...1.3
Tac = 60 # MPa
d1=math.sqrt((4*k*Qmax)/(pi*Tac))
print ("\td1=" + str(d1) + " mm")

