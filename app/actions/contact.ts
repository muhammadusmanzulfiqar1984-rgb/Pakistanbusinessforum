'use server'

import { revalidatePath } from 'next/cache'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name')
  const email = formData.get('email')
  const organization = formData.get('organization')
  const message = formData.get('message')

  // Basic validation
  if (!name || !email || !message) {
    return { error: 'Missing required fields' }
  }

  // Simulate network delay and DB save / Email send
  await new Promise((resolve) => setTimeout(resolve, 1500))

  // Here you would typically send an email using Resend, SendGrid, etc.
  // Or save to your database/Sanity CMS
  console.log('--- NEW CONTACT SUBMISSION ---')
  console.log(`Name: ${name}`)
  console.log(`Email: ${email}`)
  console.log(`Org: ${organization}`)
  console.log(`Message: ${message}`)
  console.log('------------------------------')

  return { success: true, message: 'Your message has been sent successfully!' }
}
