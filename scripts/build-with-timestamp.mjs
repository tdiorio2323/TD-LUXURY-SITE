#!/usr/bin/env node
import { spawn } from 'node:child_process'

const env = {
  ...process.env,
  NEXT_PUBLIC_BUILD_TIME: new Date().toISOString(),
}

const child = spawn('next', ['build'], {
  stdio: 'inherit',
  env,
})

child.on('close', (code) => {
  process.exit(code ?? 0)
})
