import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarProductoDB } from '@/lib/action'
import { obtenerProductosDB } from '@/lib/data'
import ProductoEditarDB from './db-producto-editar'



async function Productos({ query }) {

    const productos = await obtenerProductosDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de productos
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {productos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((producto) => (
                        <div key={producto.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/productos-db/${producto.id}`}>{producto.nombre}</Link>
                            <div className='flex gap-6'>
                                <ProductoEditarDB producto={producto} />
                                <form>
                                    <input type="hidden" name='id' value={producto.id} />
                                    <button formAction={eliminarProductoDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Productos



