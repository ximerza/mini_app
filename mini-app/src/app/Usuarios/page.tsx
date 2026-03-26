"use client";
import { useEffect, useState } from "react";
import { Usuario } from "@/src/models/Usuario";
import ItemUsuario from "@/src/components/usuarios/ItemUsuario";
import Header from "@/src/components/usuarios/header";
import Footer from "@/src/components/usuarios/footer";

const UsuariosPage = () => {
    const [usuarios, setUsuarios] = useState<Usuario[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Llamar a la API de usuarios
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
                </div>

                {error && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {usuarios.map((usuario) => (
                        <ItemUsuario key={usuario.id} usuario={usuario} />
                    ))}
                </ul>
            </main>
            <Footer />
        </div>
    );
}

export default UsuariosPage;