// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  message: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {

  if(req.method === "GET"){

    let data = []
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(dataValues => console.log(dataValues) )

    return res.status(200).json([])
  } else if(req.method === "POST"){

    res.status(200).json({message: "das ist ein POST"})
  } else{

    res.status(200).json({ message: 'Hello from Next.js!' })
  }

  
}