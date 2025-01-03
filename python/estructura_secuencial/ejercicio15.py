# Dadas dos variables numéricas A y B, que el usuario debe teclear, se pide realizar un
# algoritmo que intercambie los valores de ambas variables y muestre cuanto valen al
# final las dos variables.

# En este ejercicio, lo que se pide es cambiar el valor de las variables entre sí, por
# lo que recurriremos a una variable auxiliar que almacene uno de los dos espacios de memoria
# permitiendo así el intercambio entre ambas.

# Creamos las variables para almacenar los valores.
a = int(input("Introduce un número: "));
b = int(input("Introduce un número: "));

# Creamos la variable auxiliar, la cual nos permitirá realizar el intercambio de valores.
# Le asignamos uno de los dos valores de las variables que tenemos.
c = a;

# Le asignamos a la variable 'a' el valor de 'b'.
a = b;

# A continuación, le asignamos a 'b' el valor de 'c', cuyo valor original era el de 'a'.
b = c;

# Mostramos por pantalla las variables una vez los valores han sido intercambiados.
print("El valor de 'a' es: ",a, "\nEl valor de 'b' es: ",b);