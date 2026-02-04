/**
 * Retorna a URL base da API dependendo do ambiente
 * Em desenvolvimento: http://localhost:3000
 * Em produção: usa a URL do deploy (Vercel)
 */
export function getBaseUrl() {
  // Em produção na Vercel
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Em desenvolvimento
  return 'http://localhost:3000';
}
