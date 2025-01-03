# Un alumno desea saber cuál será su calificación final en la materia de Algoritmos.
# Dicha calificación se compone de los siguientes porcentajes:

# - 55% del promedio de sus tres calificaciones parciales.
# - 30% de la calificación del exámen final.
# - 15% de la calificación de un trabajo final.

mark1 = float(input("Introduzca la nota del primer parcial: "));
mark2 = float(input("Introduzca la nota del segundo parcial: "));
mark3 = float(input("Introduzca la nota del tercer parcial: "));

final_exam = float(input("Introduzca la nota del examen final: "));

final_project = float(input("Introduzca la nota del trabajo final: "));

avg_mark = ((mark1 + mark2 + mark3) / 3) * 0.55;

final_exam *= 0.3;
final_project *= 0.15;

final_mark = avg_mark + final_exam + final_project;
print("La calificación final de la materia es de: %.1f" %final_mark);