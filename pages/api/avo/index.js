import DB from '@database'

const allAvos = async (request, response) => {
  const db = new DB()
  const allEntries = await db.getAll()
  const lenght = await allEntries.length
  response.statusCode = 200
  response.setHeader('content-type', 'application/json')
  response.end(JSON.stringify({ data: allEntries, lenght }))
}

export default allAvos
