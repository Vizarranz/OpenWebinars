# Dados los catetos de un triángulo rectángulo, 
# calcular su hipotenusa.

# Siempre que necesitemos importar una librería
# la importaremos al comienzo del programa.

import math

cateto1 = float(input("Introduce el valor del primer cateto: "));
cateto2 = float(input("Introduce el valor del segundo cateto: "));

hipotenusa = math.sqrt(cateto1**2 + cateto2**2);

print("La hipotenusa es: %.2f" %hipotenusa);