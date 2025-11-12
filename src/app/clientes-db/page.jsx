import { Suspense } from "react";
import Link from "next/link";

import Fallback from "@/components/fallback";
import Clientes from "@/components/db-clientes";
import ClienteNuevo from "@/components/db-cliente-nuevo";



async function ClientesPage({ searchParams }) {
    let { query } = await searchParams
    query ??= ''

    console.log(query)

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/" className="fixed text-4xl p-2 bg-orange-300 rounded-full">🏠</Link>

            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                BASE DE DATOS
            </h1>


            <ClienteNuevo />


            <Suspense fallback={<Fallback>Obteniendo datos ... </Fallback>}>
                <Clientes query={query} />
            </Suspense>
        </section>
    );
}

export default ClientesPage;