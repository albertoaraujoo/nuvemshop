import { NextResponse } from 'next/server';
import products from '@/src/products.json';

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const productId = parseInt(id);

  const product = products.find((p) => p.id === productId);

  if (!product) {
    return NextResponse.json({ error: 'Produto não encontrado' }, { status: 404 });
  }

  return NextResponse.json(product, { status: 200 });
}
