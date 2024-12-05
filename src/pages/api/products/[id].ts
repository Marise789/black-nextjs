// pages/api/products/[id].ts

import { NextApiRequest, NextApiResponse } from 'next';
import products from '../../../../database.json';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;

  // Converte o id para número
  const productId = Array.isArray(id) ? id[0] : id; // Em casos onde id pode ser um array
  const numericId = parseInt(productId as string, 10);

  // Verifique se o produto com o ID existe
  const product = products.find((prod) => prod.id === numericId);

  if (!product) {
    return res.status(404).json({ message: 'Produto não encontrado' });
  }

  return res.status(200).json(product);
}
