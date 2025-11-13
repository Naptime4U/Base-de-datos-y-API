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

export async function nuevoClienteAPI(formData) {
    const [nombre, apellido] = formData.values()

    const response = await fetch('http://localhost:3001/clientes', {
        method: 'POST',
        body: JSON.stringify({ nombre, apellido, createdAt: new Date().toISOString() })
    })
    const data = await response.json()

    revalidatePath('/clientes-api')
}


export async function editarClienteAPI(formData) {
    const [id, nombre, apellido] = formData.values()

    const response = await fetch('http://localhost:3001/clientes/' + id, {
        method: 'PUT',
        body: JSON.stringify({ nombre, apellido, createdAt: new Date().toISOString() })
    })
    const data = await response.json()
    revalidatePath('/clientes-api')
}


export async function eliminarClienteAPI(formData) {
    const id = formData.get('id')

    await fetch('http://localhost:3001/clientes/' + id, { method: 'DELETE' })

    revalidatePath('/clientes-api')
}
