# Realiza un programa que reciba una cantidad de minutos y muestre por pantalla a cuantas
# horas y minutos corresponde.
# Por ejemplo: 1000 minutos son 16 horas y 40 minutos.

n_min = int(input("Introduzca el número de minutos: "));

res_h = n_min // 60;
res_min = n_min % 60;

print(res_h, "horas, ", res_min, "minutos.");