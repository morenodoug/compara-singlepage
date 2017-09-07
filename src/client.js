import { Lokka } from 'lokka'
import { Transport } from 'lokka-transport-http'

const client = new Lokka({
    transport: new Transport(
        'https://api.graph.cool/simple/v1/cj3aab8m2f6qz0182y9lliztm?query=query%7B%0A%0A%20%20allCompanies%7B%0A%20%20%20%20id%2C%0A%20%20%20%20name%2C%0A%20%20%20%20imageUrl%2C%0A%20%20%20%20offers%7B%0A%20%20%20%20%20%20id%2C%0A%20%20%20%20%09price%2C%0A%20%20%20%20%09deductible%2C%0A%20%20%20%20%7D%0A%20%20%7D%0A%7D',
        // {
        //   Authorization: 'Bearer YOUR_AUTH_TOKEN',
        // }
    )
});

function getItems() {
    return client.query(`
      query{
    
      allCompanies{
        id,
        name,
        imageUrl,
        offers{
          id,
        	price,
        	deductible,
        }
      }
    }
  `)
}

export default getItems;