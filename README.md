# mini_app

**Descripcion**

Esta aplicación web consume la API pública de JSONPlaceholder para mostrar una lista de usuarios y sus tareas asociadas.

El objetivo principal es visualizar la relación entre usuarios y sus tareas, permitiendo explorar qué actividades tiene cada usuario y su estado (completado o pendiente).

**API utilizada**

https://jsonplaceholder.typicode.com/

Endpoints utilizados:

/users → Información de usuarios

/todos → Lista de tareas

# Funcionalidades 

**Usuario:**

-Visualización de lista de usuarios

-Tarjetas con:Nombre, Email, Ciudad

-Selección de usuario para ver más detalles

**Tareas por usuario**

-Mostrar tareas asociadas a un usuario 

-Lista de tareas del usuario seleccionado

**Filtros de tareas**

-Filtrar tareas por: Completadas, Pendientes, Todas

**Flujo de la aplicación**

Se cargan los usuarios desde la API

Se muestran en tarjetas

El usuario selecciona un usuario

Se cargan sus tareas (todos)

Se muestran las tareas filtrables por estado
  


