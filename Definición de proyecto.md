---
course: "[[🖥️Requerimientos de software]]"
reviewed: false
tags:
  - Academy/Note
attachments:
cssclasses:
  - page-width
---
# HealthyPaws
> [!NOTE] Cuidado de Mascotas
> Plataforma para llevar el seguimiento de las mascotas del hogar en cuanto control veterinario, por ejemplo vacunas, tratamientos(veterinarios y estéticos), citas veterinarias. Contar con una vista tanto para el dueño de las mascotas como una vista para el veterinario.
# Objetivos
- Estandarizar y unificar el control veterinario de las mascotas.
- Proveer herramientas para el control de salud de las mascotas.
- Facilitar el trabajo administrativo de los veterinarios.
# Antecedentes
Actualmente no existe ninguna herramienta unificada que permita a los dueños de mascotas y los veterinarios llevar control digital de sus mascotas. Mientras que existen algunas herramientas que lo intentan, estas no proveen las funcionalidades necesarias y su adopción no es general resultando en que cada veterinario utiliza una herramienta diferente, dificultando el seguimiento al cambiar veterinarios.
# Justificación
- Estandarización y  centralización: Proveer una solución completa que todos los veterinarios y dueños de mascotas puedan usar para llevar control de sus mascotas, facilitando cambiar de veterinarios a conveniencia.
- Los sistemas actuales brindan poca información a los dueños de mascotas y sirven para poco más que comunicación con el veterinario y recordatorios de citas.
# Stakeholders
| Nombre      | Definición                             |
| ----------- | -------------------------------------- |
| Cliente     | Personas dueños de mascotas            |
| Veterinario | Profesional que atiende a las mascotas |
# Alcances 
## 1
Que los usuarios puedan llevar control sobre las vacunas que sus mascotas ya tienen y cuales les falta, además de mostrar las fechas estimadas de las siguientes vacunas.
## 2
Que los usuarios puedan ver las citas de su mascota tanto previas como próximas y leer una pequeña nota por cada cita previa así como solicitar citas
## 3
Proveer una vista para veterinarios donde estos pueden ver las próximas citas, así como confirmar o rechazar citas solicitadas por los clientes, adjuntar notas a citas sobre lo que se evaluó en la cita y poder acceder al expediente de la mascota
## 4
Permitir a los usuarios ver todos los medicamentos actualmente asignados a cada mascota junto con su dosis e instrucciones de aplicación.
## 5
Acceso por medio de portal web tanto para usuarios como veterinarios. 
# Requerimientos
| ID     | Nombre                                                                                                                                                                    |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| HP-1-1 | Esquema de vacunas interactivo<br>- [ ] Mostrar como tabla con checks<br>- [ ] Solicitar confirmación al poner un check                                                   |
| HP-1-2 | Estimación de fechas de vacunación<br>- [ ] Estimar fecha de vacuna según fecha de nacimiento de la mascota                                                               |
| HP-1-3 | Notificación de próximas vacunas<br>- [ ] Mencionar el nombre de la mascota y la fecha estimada                                                                           |
| HP-1-4 | Permitir a veterinario registrar vacunas<br>- [ ] Solicitar confirmación al registrar la vacuna                                                                           |
| HP-1-5 | Permitir a veterinario especificar esquema por mascota<br>- [ ] Establecer lapsos de tiempo estimados por cada vacuna para facilitar el calculo de <br>la fecha estimada. |

| ID     | Nombre                                                                                         |
| ------ | ---------------------------------------------------------------------------------------------- |
| HP-2-1 | Programar próxima cita<br>- [ ] Incluir motivo de solicitud<br>- [ ] Incluir nivel de urgencia |
| HP-2-2 | Cancelar cita solicitada<br>- [ ] No permitir cancelación poco antes de cita                   |
| HP-2-3 | Ver historial de citas<br>- [ ] Permitir expandir para ver notas de citas                      |
| HP-2-4 | Notificación de próximas citas<br>- [ ] Incluir el nombre de la mascota y el motivo ingresado  |

| ID     | Nombre                                                                            |
| ------ | --------------------------------------------------------------------------------- |
| HP-3-1 | Permitir confirmar citas solicitadas<br>- [ ] En caso de rechazo solicitar motivo |
| HP-3-2 | Mostrar citas del día<br>- [ ] Mostrar motivo de cada cita                        |
| HP-3-3 | Permitir agregar nota a citas completadas<br>- [ ]                                |

| ID     | Nombre                                                                                                               |
| ------ | -------------------------------------------------------------------------------------------------------------------- |
| HP-4-1 | Mostar tabla general de medicamentos<br>- [ ] Mostrar nombre y dosis                                                 |
| HP-4-2 | Mostrar vista detallada de medicamentos<br>- [ ] Mostrar contraindicaciones, método de aplicación y otra información |

| ID     | Nombre                                                  |
| ------ | ------------------------------------------------------- |
| HP-5-1 | Aplicación accesible por medio de buscador web          |
| HP-5-2 | Accesibilidad móvil<br>- [ ] Procurar responsive design 