# Pide al usuario dos pares de números x1,y1 y x2,y2, que representen dos puntos en el plano.
# Calcula y muestra la distancia entre ellos.

# Importamos la librería math, ya que vamos a usar funciones de la misma librería, como
# sqrt.
import math;

print("Introduzca las coordenadas del punto A: ");
x1 = int(input("x1: "));
y1 = int(input("y1: "));

print("Introduzca las coordenadas del punto A: ");
x2 = int(input("x2: "));
y2 = int(input("y2: "));

# A continuación, para calcular la distancia entre el punto A(x1,y1) y B(x2.y2) hacemos uso
# de la ecuación de la distancia entre dos puntos en el mismo plano:
# d = √((x2 - x1)² + (y2 - y1)²).
# Donde la variable "dist" será la distancia entre los dos puntos.
# Para mantener la limpieza y claridad del código dividiremos la ecuación en dos partes, 
# la primera será donde se encuentre la operación en las coordenadas en 
# x: (x2 - x1)², que llamaremos "p1" y la segunda es donde se encontrará
# las coordenadas en y:(y2 - y1)².

p1 = pow((x2 - x1),2);
p2 = pow((y2 - y1),2);

dist = math.sqrt(p1 + p2);

# Sacamos el resultado por pantalla mostrando sólo dos decimales:
print("La distancia entre los puntos A y B es de: %.2f" %dist, "unidades.");