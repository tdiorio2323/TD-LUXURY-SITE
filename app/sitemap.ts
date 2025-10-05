import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://www.tdstudiosny.com'
  const routes = ['', '/portfolio', '/contact'].map((p) => ({
    url: `${base}${p}`,
    changefreq: 'weekly',
    priority: p === '' ? 1.0 : 0.7,
  }))
  return routes
}
