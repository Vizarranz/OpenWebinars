# Un vendedor recibe un sueldo base mas un 10% extra por comisión de sus ventas, el vendedor desea saber cuánto dinero
# obtendrá por concepto de comisiones por las tres ventas que realiza en el mes y el total que recibirá en el mes tomando
# en cuenta su sueldo base y comisiones.

sal_base = float(input("Inserte el salario base del vendedor: "));

sale1 = float(input("Primera venta: "));
sale2 = float(input("Segunda venta: "));
sale3 = float(input("Tercera venta: "));

sal_total = sal_base + ((sale1 + sale2 + sale3) * 0.1);

print("El sueldo total es de: ", sal_total,"€.");