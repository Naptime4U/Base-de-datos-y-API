import Link from 'next/link'
import Buscar from '@/components/buscar'
import { eliminarClienteDB } from '@/lib/action2'
import { obtenerClientesDB } from '@/lib/data2'
import ClienteEditarDB from './db-cliente-editar'



async function Clientes({ query }) {

    const clientes = await obtenerClientesDB(query)

    return (
        <>
            <h1 className='text-2xl text-slate-600 py-2  mb-2 border-b-2 border-b-slate-600'>
                Listado de clientes
            </h1>

            <Buscar />

            <div className='flex flex-col'>
                {clientes.sort((a, b) => a.createdAt - b.createdAt).reverse()  // Orden inverso de tiempo   
                    .map((cliente) => (
                        <div key={cliente.id} className='p-2 odd:bg-slate-100 flex justify-between'>
                            <Link href={`/clientes-db/${cliente.id}`}>{cliente.nombre}{" "}{cliente.apellido}</Link>
                            <div className='flex gap-6'>
                                <ClienteEditarDB cliente={cliente} />
                                <form>
                                    <input type="hidden" name='id' value={cliente.id} />
                                    <button formAction={eliminarClienteDB} title='ELIMINAR'>🗑️</button>
                                </form>
                            </div>
                        </div>
                    ))

                }
            </div>
        </>
    )
}

export default Clientes
