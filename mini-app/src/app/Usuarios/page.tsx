"use client";
import { useEffect, useState } from "react";
import { Usuario } from "@/src/models/Usuario";
import ItemUsuario from "@/src/components/usuarios/ItemUsuario";
import ListaTareas from "@/src/components/usuarios/ListaTareas";
import Header from "@/src/components/usuarios/header";
import Footer from "@/src/components/usuarios/footer";

const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState<Usuario | null>(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(data => setUsuarios(data))
            .catch(error => setError(error.message))
            .finally(() => setLoading(false));
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            <main className="flex-grow container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-3xl font-extrabold text-gray-900 border-b-2 border-blue-500 pb-2 inline-block">
                        Directorio de Usuarios Completo
                    </h1>
                    <p className="mt-2 text-gray-500 text-sm">
                        Haz clic en un usuario para ver sus tareas.
                    </p>
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Lista de usuarios */}
                    <div className="lg:col-span-2">
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {usuarios.map((usuario) => (
                                <ItemUsuario
                                    key={usuario.id}
                                    usuario={usuario}
                                    onSelect={setUsuarioSeleccionado}
                                    isSelected={usuarioSeleccionado?.id === usuario.id}
                                />
                            ))}
                        </ul>
                    </div>

                    {/* Panel de tareas */}
                    <div className="lg:col-span-1">
                        {usuarioSeleccionado ? (
                            <div className="sticky top-8">
                                <ListaTareas
                                    userId={usuarioSeleccionado.id}
                                    userName={usuarioSeleccionado.name}
                                />
                            </div>
                        ) : (
                            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center sticky top-8">
                                <div className="mb-4">
                                    <svg className="mx-auto h-16 w-16 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                                    </svg>
                                </div>
                                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                                    Selecciona un usuario
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Haz clic en una tarjeta de usuario para ver sus tareas asignadas.
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default UsuariosPage;