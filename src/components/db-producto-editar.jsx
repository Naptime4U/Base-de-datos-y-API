'use client'
import { editarProductoDB } from "@/lib/action";
import { useState } from "react";


function ProductoEditarDB({ producto }) {
    const [visible, setVisible] = useState(false)

    return (
        <>
            {visible &&
                <form className='my-10 grid grid-cols-[150px_auto] gap-4'>
                    <input type="hidden" name='id' defaultValue={producto.id} />

                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        required
                        id='nombre'
                        name='nombre'
                        defaultValue={producto.nombre}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='descripcion'>Descripción:</label>
                    <input
                        required
                        id='descripcion'
                        name='descripcion'
                        defaultValue={producto.descripcion}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <label htmlFor='precio'>Precio</label>
                    <input
                        required
                        id='precio'
                        name='precio'
                        type='number'
                        step='0.01'
                        defaultValue={producto.precio}
                        className='p-1 border border-slate-200 focus:outline-blue-300 text-lg'
                    />

                    <div className='col-span-2 grid gap-2'>
                        <button formAction={editarProductoDB} className='bg-green-600 text-white px-4 py-2 rounded-xl'>
                            Actualizar producto
                        </button>
                    </div>
                </form>
            }
            <span onClick={() => setVisible(!visible)}>
                {visible ? "✖" : "📝"}
            </span>
        </>
    );
}

export default ProductoEditarDB;