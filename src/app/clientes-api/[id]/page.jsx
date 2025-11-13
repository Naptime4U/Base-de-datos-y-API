import { obtenerClienteAPI } from "@/lib/data2";
import Link from "next/link";
import { notFound } from 'next/navigation'


async function ProductPage({ params }) {

    const { id } = await params
    const cliente = await obtenerClienteAPI(id)
    if (!cliente) notFound()

    return (
        <section className="min-h-screen max-w-[1024px] mx-auto px-10 py-10">
            <Link href="/clientes-api" className="fixed p-2 bg-orange-300 rounded-full"> &lt;- Volver </Link>
            <h1 className='py-10 text-3xl text-blue-500 text-center border-b-4 border-b-blue-500'>
                Cliente #{cliente.id}
            </h1>
            <div className="flex flex-col gap-10 items-center mt-20 p-10 bg-blue-100 rounded-xl">
                <p className="text-6xl place-self-center">{cliente.nombre}</p>
                <p className="text-2xl place-self-center text-slate-400">{cliente.apellido}</p>
            </div>
        </section>
    );
}

export default ProductPage;