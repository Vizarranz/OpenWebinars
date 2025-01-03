# Pide al usuario dos números y muestra la "distancia" entre ellos (el valor absoluto de su
# diferencia, de modo que el resultado sea siempre positivo).

n1 = float(input("Introduce el primer número: "));
n2 = float(input("Introduce el segundo número: "));

dist = abs(n1 - n2);

print("La distancia entre ", n1, "y ", n2, "es de: ", dist);