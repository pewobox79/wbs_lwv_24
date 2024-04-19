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

    
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
      .then(data => res.status(200).json(data) )

  
  } else if(req.method === "POST"){

    res.status(200).json({message: "das ist ein POST"})
  } else{

    res.status(200).json({ message: 'Hello from Next.js!' })
  }

  
}