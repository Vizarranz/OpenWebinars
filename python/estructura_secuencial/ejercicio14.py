# Dado un número de dos cifras, diseñe un algoritmo que permita obtener el número invertido.
# Ejemplo: El número introducido es "23", lo que se muestra por pantalla será "32".

# Creamos la variable que almacenará el número de entrada.
num = int(input("Introduzca un número de dos cifras: "));

# Almacenamos las decenas en una variable.
# Recordamos que con el operador '//' obtenemos la parte entera del cociente.
# Por ejemplo, si se trata de 11 // 2, el resultado que devolverá será '5'.
doz = num // 10;

# Almacenamos las unidades en otra variable.
# Recordamos que con el operador '%', obtenemos el resto de la división.
# Por lo tanto al dividir un número de dos cifras entre 10, siempre obtendremos
# las unidades como resultado de la operación.
units = num % 10;

# El ejercicio pide que se muestre de manera invertida, por lo tanto realizaremos una
# conversión del tipo int al tipo string, para poder concatenar ambas variables y que
# se muestren por pantalla de manera correcta, lo único que haremos será alterar el orden
# de ambas.
print("El número ingresado es ", num, "\nEl número invertido es ",str(units)+str(doz));