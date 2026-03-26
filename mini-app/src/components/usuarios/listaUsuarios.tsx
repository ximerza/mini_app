"use client";
import { Usuario } from "@/src/models/Usuario";
import { useEffect, useState } from "react";
import ItemUsuario from "@/src/components/usuarios/ItemUsuario";

const ListaUsuarios = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) throw new Error("Error al obtener los usuarios");
                const data = await response.json();
                setUsuarios(data);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    if (loading) return (
        <div className="flex flex-col items-center justify-center p-20 space-y-4">
            <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
            <p className="text-gray-500 font-medium animate-pulse">Cargando usuarios...</p>
        </div>
    );

    if (error) return (
        <div className="bg-red-50 border-l-4 border-red-500 p-4 mx-auto max-w-2xl my-10 rounded-r-lg shadow-sm">
            <div className="flex items-center">
                <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                </div>
                <div className="ml-3">
                    <p className="text-sm text-red-700 font-medium">
                        Error: {error}
                    </p>
                </div>
            </div>
        </div>
    );

    if (usuarios.length === 0) return (
        <div className="text-center p-20 text-gray-500">
            <div className="mb-4">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            </div>
            <p className="text-xl font-medium">No se encontraron usuarios</p>
        </div>
    );

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">Directorio de Usuarios</h1>
                    <p className="mt-2 text-sm text-gray-600">Explore nuestra lista de talentosos profesionales.</p>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                    {usuarios.length} Usuarios
                </div>
            </div>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {usuarios.map((usuario) => (
                    <ItemUsuario key={usuario.id} usuario={usuario} />
                ))}
            </ul>
        </div>
    );
}

export default ListaUsuarios;