import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App.tsx'

test('App', () => {
  expect(1).toBe(1)
  render(<App />)
  expect(screen.getByText('Michael Lah'))
  expect(screen.getByText('About Me'))
  expect(screen.getByText('Key Skills'))
  expect(screen.getByText('Experience'))
  expect(screen.getByText('Connect With Me'))
})