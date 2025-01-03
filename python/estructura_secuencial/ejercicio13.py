# Realizar un algoritmo que lea un número y que muestre su raíz cuadrada y su raíz cúbica.
# Python3 no tiene ninguna función predefinida que permita calcular la raíz cúbica, 
# ¿Cómo se puede calcular?

# Importamos la librería math para usar la función sqrt
import math;

num = float(input("Introduzca un número: "));

# Variable que almacena la raíz cuadrada del número ingresado
n_sqrt = math.sqrt(num);

# Dado que en Python3 no existe ninguna función predefinida para poder calcular
# la raíz cúbica, lo haremos mediante una de las propiedades de las potencias.
# Teniendo en cuenta que hacer la raíz cuadrada de un número equivale a elevarlo
# a un medio, (1/2), donde el 1 representa el exponente de la potencia y 
# el 2 el índice de la raíz que se llevará a cabo, en este caso cuadrada.
# Podemos hacer la misma operación elevando el número a un tercio, (1/3)
# lo cual equivaldría a la raíz cúbica, por lo tanto la operación matemática es la misma.

c_sqrt = pow(num, 1 / 3);

print("La raíz cuadrada de ",num, "es: ", n_sqrt, "\nLa raíz cúbica de ", num, "es: ", c_sqrt);