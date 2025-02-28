# Dos vehículos viajan a diferentes velocidades (v1 y v2), ambos se encuentran a una distancia 'd'.
# El que está detrás viaja a una velocidad mayor. Se pide:
# Hacer un algoritmo para ingresar la distancia entre los dos vehículos (km) y sus respectivas
# velocidades (km/h) y con esto determinar y mostrar en qué tiempo (minutos) alcanzará el vehículo
# más rápido al otro

# En resumen, nos dicen que necesitamos ingresar las dos velocidades de los vehículos, donde 
# la mayor velocidad se le asociará al vehículo que trata de alcanzar al de menor velocidad, 
# también pediramos la distancia al usuario y con esto mostraremos el tiempo que tarda en
# alcanzar un vehículo al otro (en minutos).

# Almacenamos las velocidades y la distancia a la que se encuentran los vehículos.
v1 = float(input("Introduzca la velocidad en km/h del vehículo que persigue(la mayor):"));
v2 = float(input("Introduzca la velocidad en km/h del vehículo perseguido(la menor):"));
d = float(input("Introduzca la distancia en km entre los dos vehículos:"));

# Una vez tenemos los datos, nos disponemos a calcular el tiempo de alcance entre un vehículo
# y el otro mediante la fórmula de cinemática de un MRU(Movimiento Rectilíneo Uniforme):
# v = s / t; donde 's' es el espacio y 't' es el tiempo que le toma alcanzarlo.
# Despejando el tiempo de esta ecuación, obtendríamos el siguiente despeje:
# t = s / v; por lo tanto.