import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const formData = await request.json()
    
    const params = new URLSearchParams()
    params.append('name', formData.name || '')
    params.append('email', formData.email || '')
    params.append('message', formData.message || '')
    params.append('timestamp', formData.timestamp || new Date().toISOString())

    const response = await fetch(
      'https://script.google.com/macros/s/AKfycby9Ou8plSU9JIXzK-dCuDdoaGCofq4VXVH0b0YXvqjYlRpIagY2OWLqTWZgjPSMLNmu6g/exec',
      {
        method: 'POST',
        body: params,
        redirect: 'follow'
      }
    )

    const data = await response.json()
    return NextResponse.json(data)
    
  } catch (error) {
    return NextResponse.json(
      { result: 'error', error: 'Failed to submit form' },
      { status: 500 }
    )
  }
}