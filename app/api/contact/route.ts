import { z } from 'zod'
import type { NextRequest } from 'next/server'

export const Contact = z.object({
  fullName: z.string().min(2).max(100),
  email: z.string().email(),
  company: z.string().optional(),
  phone: z.string().optional(),
  service: z.string().min(1).max(100),
  budget: z.string().optional(),
  timeline: z.string().optional(),
  details: z.string().min(10).max(5000),
  contactType: z.string().optional(),
  website: z.string().optional(), // honeypot: must be empty
})

const hits = new Map<string, { n: number; ts: number }>() // naive in-memory

function limited(ip: string, limit = 5, windowMs = 60_000) {
  const now = Date.now()
  const rec = hits.get(ip) ?? { n: 0, ts: now }
  if (now - rec.ts > windowMs) { rec.n = 0; rec.ts = now }
  rec.n += 1; hits.set(ip, rec)
  return rec.n > limit
}

export async function POST(req: NextRequest) {
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || '0.0.0.0'
  if (limited(ip)) return new Response('Too Many Requests', { status: 429 })

  const body = await req.json().catch(() => null)
  const parsed = Contact.safeParse(body)
  if (!parsed.success) {
    return new Response(JSON.stringify(parsed.error.flatten()), {
      status: 400,
      headers: { 'content-type': 'application/json' },
    })
  }
  if (parsed.data.website) return new Response('OK', { status: 200 }) // spam bot

  // TODO: send email / persist
  return new Response('OK', { status: 200 })
}