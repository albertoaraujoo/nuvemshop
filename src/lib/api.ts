/**
 * Retorna a URL base da API dependendo do ambiente
 * Usa variáveis de ambiente da Vercel quando disponíveis
 */
export function getBaseUrl() {
  // Vercel - Production
  if (process.env.VERCEL_ENV === 'production' && process.env.VERCEL_PROJECT_PRODUCTION_URL) {
    return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  }

  // Vercel - Preview/Development
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  // Local Development
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3000';
  }

  // Fallback - usa URL relativa (funciona em Server Components)
  return '';
}
