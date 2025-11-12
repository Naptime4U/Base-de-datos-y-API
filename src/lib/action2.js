'use server'

import { db } from '@/lib/db'
import { revalidatePath } from 'next/cache'



// BASE DE DATOS


export async function nuevoClienteDB(formData) {
    const nombre = formData.get('nombre')
    const apellido = formData.get('apellido')

    const sql = 'insert into `clientes` (`nombre`, `apellido`) values (?, ?)'
    const values = [nombre, apellido];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/clientes-db')
}


export async function editarClienteDB(formData) {
    const id = formData.get('id')
    const nombre = formData.get('nombre')
    const apellido = formData.get('apellido')

    const sql = 'update clientes set nombre=?, apellido=? where id=?'
    const values = [nombre, apellido, id];

    const [result, fields] = await db.query(sql, values)
    revalidatePath('/clientes-db')
}




export async function eliminarClienteDB(formData) {
    const id = formData.get('id')

    const sql = 'delete from clientes where id = ?'
    const values = [id]
    await db.query(sql, values);

    revalidatePath('/clientes-db')
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
