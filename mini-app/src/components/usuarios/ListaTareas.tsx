"use client";
import { Tarea } from "@/src/models/Tarea";
import { useEffect, useState } from "react";

type Filtro = "todas" | "completadas" | "pendientes";

interface ListaTareasProps {
    userId: number;
    userName: string;
}

const ListaTareas = ({ userId, userName }: ListaTareasProps) => {
    const [tareas, setTareas] = useState<Tarea[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [filtro, setFiltro] = useState<Filtro>("todas");

    useEffect(() => {
        setLoading(true);
        setError(null);
        setFiltro("todas");

        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${userId}`)
            .then((response) => {
                if (!response.ok) throw new Error("Error al obtener las tareas");
                return response.json();
            })
            .then((data) => setTareas(data))
            .catch((err: any) => setError(err.message))
            .finally(() => setLoading(false));
    }, [userId]);

    const tareasFiltradas = tareas.filter((tarea) => {
        if (filtro === "completadas") return tarea.completed;
        if (filtro === "pendientes") return !tarea.completed;
        return true;
    });

    const completadas = tareas.filter((t) => t.completed).length;
    const pendientes = tareas.filter((t) => !t.completed).length;

    const filtroClass = (f: Filtro) =>
        `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
            filtro === f
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`;

    if (loading)
        return (
            <div className="flex flex-col items-center justify-center p-12 space-y-3">
                <div className="w-10 h-10 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
                <p className="text-gray-500 text-sm animate-pulse">
                    Cargando tareas...
                </p>
            </div>
        );

    if (error)
        return (
            <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
                <p className="text-sm text-red-700 font-medium">Error: {error}</p>
            </div>
        );

    return (
        <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-5">
                <h3 className="text-xl font-bold text-white">
                    Tareas de {userName}
                </h3>
                <div className="flex gap-4 mt-2 text-blue-100 text-sm">
                    <span>📋 {tareas.length} total</span>
                    <span>✅ {completadas} completadas</span>
                    <span>⏳ {pendientes} pendientes</span>
                </div>
            </div>

            {/* Filtros */}
            <div className="px-6 py-4 border-b border-gray-100 flex gap-3 flex-wrap">
                <button onClick={() => setFiltro("todas")} className={filtroClass("todas")}>
                    Todas ({tareas.length})
                </button>
                <button onClick={() => setFiltro("completadas")} className={filtroClass("completadas")}>
                    ✅ Completadas ({completadas})
                </button>
                <button onClick={() => setFiltro("pendientes")} className={filtroClass("pendientes")}>
                    ⏳ Pendientes ({pendientes})
                </button>
            </div>

            {/* Lista de tareas */}
            <ul className="divide-y divide-gray-50 max-h-96 overflow-y-auto">
                {tareasFiltradas.length === 0 ? (
                    <li className="px-6 py-8 text-center text-gray-400">
                        No hay tareas con este filtro.
                    </li>
                ) : (
                    tareasFiltradas.map((tarea) => (
                        <li
                            key={tarea.id}
                            className="px-6 py-3 flex items-center gap-3 hover:bg-gray-50 transition-colors"
                        >
                            <span
                                className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                    tarea.completed
                                        ? "bg-green-100 text-green-600"
                                        : "bg-amber-100 text-amber-600"
                                }`}
                            >
                                {tarea.completed ? "✓" : "•"}
                            </span>
                            <span
                                className={`text-sm ${
                                    tarea.completed
                                        ? "text-gray-400 line-through"
                                        : "text-gray-700"
                                }`}
                            >
                                {tarea.title}
                            </span>
                        </li>
                    ))
                )}
            </ul>
        </div>
    );
};

export default ListaTareas;
