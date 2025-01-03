# Una tienda ofrece un descuento del 15% sobre el total de la compra y un cliente desea saber
# cuánto deberá pagar finalmente por su compra.

pur = float(input("Inserte el precio de su compra: "));

# Multiplicamos por 0.85, ya que es lo mismo que quedarse con el valor de la compra
# tras restarle el 15%.
total = pur * 0.85;
print("El valor tras aplicar el descuento es: %.2f" %total,"€.");