// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import KUTE from 'kute.js'

type Data = {
  name: string
}

const tween = KUTE.fromTo('#blob1',
{ path: '#blob1'},
{ path: '#blob2'},
{repeat: 999, duration: 3000, yoyo: true})

tween.start();

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
