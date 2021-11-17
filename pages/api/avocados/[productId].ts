import { NextApiRequest, NextApiResponse } from 'next';
import DB from '@database'

const getAvocado = async (request: NextApiRequest, response: NextApiResponse) => {
    const db = new DB()
    const id = request.query.productId
    const entry = await db.getById(id as string)

    // response.statusCode = 200
    // response.setHeader('Content-Type', 'application/json')
    // response.end(JSON.stringify({ data: entry }))

    // Other way
    response.status(200).json(entry)
}

export default getAvocado