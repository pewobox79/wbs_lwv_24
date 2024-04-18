// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name?: string,
  msg?: string,
  data?: []
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("request data", req)
  if (req.method === 'POST') {
    // Process a POST request
  } else if (req.method === 'GET') {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    res.status(200).json(data)

    // Handle any other HTTP method
    res.status(200).json({ name: 'John Doe' })
  } else if (req.method === 'PUT') {
    res.status(200).json({ msg: "Put method provided" })
  }

}
