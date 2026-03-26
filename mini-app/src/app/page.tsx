import Header from "@/src/components/usuarios/header";
import Footer from "@/src/components/usuarios/footer";
import ListaUsuarios from "@/src/components/usuarios/ListaUsuarios";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Bienvenido a <span className="text-blue-600">MiApp</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500">
              La plataforma centralizada para gestionar información de usuarios de forma eficiente y elegante.
            </p>
          </section>
          
          <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
             <ListaUsuarios />
             <div className="p-8 bg-gray-50 border-t border-gray-100 text-center">
                <Link 
                  href="/usuarios" 
                  className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  Ver Directorio Completo
                  <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
             </div>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  );
}