import { NextResponse } from 'next/server';
import products from '@/src/products.json';

export async function GET(
  request: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const filteredProducts = products.filter(
    (p) => p.category.toLowerCase() === category.toLowerCase()
  );

  if (filteredProducts.length === 0) {
    return NextResponse.json(
      { error: 'Nenhum produto encontrado para esta categoria' },
      { status: 404 }
    );
  }

  return NextResponse.json(filteredProducts, { status: 200 });
}
