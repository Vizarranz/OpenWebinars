# Escribir un programa que convierta un valor dado en grados Fahrenheit
# a grados Celsius. Recordando que la fórmula de conversión es la siguiente:
# C = (F-32)*5/9.

temp = float(input("Introduzca la temperatura en grados Fahrenheit: "));

tempFinal = (temp - 32) * 5 / 9;
print ("La conversión es: %.3f" %tempFinal,"grados Celsius.");