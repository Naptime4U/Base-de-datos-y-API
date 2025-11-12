'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'



// BASE DE DATOS


export async function nuevoProductoDB(formData) {
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = formData.get('precio')

    const sql = 'insert into `productos` (`nombre`, `descripcion`, `precio`) values (?, ?, ?)'
    const values = [nombre, descripcion, precio];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/productos-db')
}


export async function editarProductoDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const descripcion = formData.get('descripcion')
    const precio = formData.get('precio')

    const sql = 'update productos set nombre=?, descripcion=?, precio=? where id=?'
    const values = [nombre, descripcion, precio, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/productos-db')
}




export async function eliminarProductoDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from productos where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/productos-db')
}





// API

export async function nuevoProductoAPI(formData) {
    const [nombre, descripcion, precio] = formData.values()

    const response = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        body: JSON.stringify({ nombre, descripcion, precio: +precio, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/productos-api')
}


export async function editarProductoAPI(formData) {
    const [id, nombre, descripcion, precio] = formData.values()

    const response = await fetch('http://localhost:3001/productos/' + id, {
        method: 'PUT',
        body: JSON.stringify({ nombre, descripcion, precio: +precio, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/productos-api')
}


export async function eliminarProductoAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/productos/' + id, { method: 'DELETE' })

    revalidatePath('/productos-api')
}
