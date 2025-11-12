'use server'

import { db } from '@/lib/db'



// BASE DE DATOS

export async function obtenerClientesDB(query) {
    const sql = 'select * from `clientes` where nombre like ?';
    const values = [`%${query}%`]
    const [clientes] = await db.query(sql, values);

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return clientes
}


export async function obtenerClienteDB(id) {
    const sql = 'select * from clientes where id = ?';
    const values = [id]
    const [rows] = await db.query(sql, values);

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return rows[0]
}





// API


export async function obtenerClientesAPI(query) {
    const response = await fetch('http://localhost:3001/clientes')
    const clientes = await response.json()

    // Introducimos un retardo artificial
    // await new Promise(resolve => setTimeout(resolve, 2000))

    return clientes.filter(a => a.nombre.toLowerCase().includes(query))
}



export async function obtenerClienteAPI(id) {
    const response = await fetch('http://localhost:3001/clientes/' + id)
    if (!response.ok) return null
    const cliente = await response.json()

    // Introducimos un retardo artificial
    await new Promise(resolve => setTimeout(resolve, 2000))

    return cliente
}
