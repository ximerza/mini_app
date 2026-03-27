# mini_app

## Descripción

Esta aplicación web consume la API pública de [JSONPlaceholder](https://jsonplaceholder.typicode.com/) para mostrar una lista de usuarios y sus tareas asociadas.

El objetivo principal es visualizar la relación entre usuarios y sus tareas, permitiendo explorar qué actividades tiene cada usuario y su estado (completado o pendiente).

## API utilizada

- Base URL: `https://jsonplaceholder.typicode.com/`
- `/users` → Información de usuarios
- `/todos` → Lista de tareas

## Tecnologías

- [Next.js](https://nextjs.org/) 16
- [React](https://react.dev/) 19
- [TypeScript](https://www.typescriptlang.org/) 5
- [Tailwind CSS](https://tailwindcss.com/) 4

---

## 🚀 Guía de Instalación (Paso a Paso)

### Prerrequisitos

Asegúrate de tener instalado lo siguiente antes de comenzar:

| Herramienta | Versión mínima | Verificar con |
|---|---|---|
| **Node.js** | v18 o superior | `node -v` |
| **npm** | v9 o superior | `npm -v` |
| **Git** | Cualquier versión reciente | `git --version` |

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/mini_app.git
```

> Si hiciste un **fork**, reemplaza la URL por la de tu fork.

### Paso 2: Entrar a la carpeta del proyecto

```bash
cd mini_app
```

### Paso 3: Entrar a la carpeta de la aplicación

> ⚠️ **Importante:** El proyecto Next.js está dentro de la subcarpeta `mini-app`.

```bash
cd mini-app
```

### Paso 4: Instalar las dependencias

```bash
npm install
```

Esto instalará automáticamente Next.js, React, TypeScript, Tailwind CSS y todas las demás dependencias del proyecto.

### Paso 5: Ejecutar el servidor de desarrollo

```bash
npm run dev
```

### Paso 6: Abrir en el navegador

Abre tu navegador y ve a:

```
http://localhost:3000
```

¡Listo! Deberías ver la página de inicio con el directorio de usuarios.

---

## 📂 Estructura del Proyecto

```
mini_app/
├── mini-app/              ← Proyecto Next.js (ejecutar comandos aquí)
│   ├── src/
│   │   ├── app/
│   │   │   ├── page.tsx          ← Página principal
│   │   │   ├── layout.tsx        ← Layout raíz
│   │   │   └── usuarios/
│   │   │       └── page.tsx      ← Página de usuarios
│   │   ├── components/
│   │   │   └── usuarios/
│   │   │       ├── header.tsx
│   │   │       ├── footer.tsx
│   │   │       ├── ListaUsuarios.tsx
│   │   │       └── ItemUsuario.tsx
│   │   └── models/
│   │       └── Usuario.ts
│   ├── package.json
│   └── tsconfig.json
└── README.md
```

---

## 📜 Scripts Disponibles

Ejecutar siempre desde la carpeta `mini-app/`:

| Comando | Descripción |
|---|---|
| `npm run dev` | Inicia el servidor de desarrollo en `localhost:3000` |
| `npm run build` | Genera la versión de producción optimizada |
| `npm run start` | Inicia el servidor con la build de producción |
| `npm run lint` | Ejecuta el linter (ESLint) para revisar el código |

---

## Funcionalidades

### Usuario
- Visualización de lista de usuarios
- Tarjetas con: Nombre, Email, Teléfono, Sitio web
- Selección de usuario para ver más detalles

### Tareas por usuario
- Mostrar tareas asociadas a un usuario
- Lista de tareas del usuario seleccionado

### Filtros de tareas
- Filtrar tareas por: Completadas, Pendientes, Todas

---

## Flujo de la Aplicación

1. Se cargan los usuarios desde la API
2. Se muestran en tarjetas con diseño moderno
3. El usuario selecciona un usuario
4. Se cargan sus tareas (todos)
5. Se muestran las tareas filtrables por estado
