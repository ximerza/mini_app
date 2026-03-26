import Header from "../components/usuarios/header";
import Footer from '../components/usuarios/footer';

export default function Home() {
  return (
    <div>
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <h2 className="text-2xl font-bold text-gray-800">Bienvenido a MiApp</h2>
        <p className="text-gray-600 mt-4">
          Esta es la página de inicio de tu aplicación.
        </p>
      </main>
      <Footer />
    </div>
  );
}