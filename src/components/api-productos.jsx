import Link from 'next/link'
import Buscar from '@/components/buscar'
import { obtenerProductosAPI } from '@/lib/data'
import { eliminarProductoAPI } from '@/lib/action'
import ProductoEditarAPI from './api-producto-editar'





async function Productos({ query }) {

    const productos = await obtenerProductosAPI(query)


    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Lista de productos (API)
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {productos.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo                           
                    .map((producto) => (
                        <div key={producto.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/productos-api/${producto.id}`}>{producto.nombre}</Link>
                            <div className='flex gap-6'>
                                <ProductoEditarAPI producto={producto} />
                                <form>
                                    <input type="hidden" name='id' value={producto.id} />
                                    <button formAction={eliminarProductoAPI} title='ELIMINAR' className='text-xl'>🗑️</button>
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



