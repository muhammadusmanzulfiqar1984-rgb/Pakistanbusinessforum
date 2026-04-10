import { VertexAI } from '@google-cloud/vertexai'
import { NextResponse } from 'next/server'

// Initialize Vertex with your Cloud project and location
const project = process.env.GOOGLE_CLOUD_PROJECT_ID || 'your-project-id'
const location = process.env.GOOGLE_CLOUD_LOCATION || 'us-central1'
const vertexAI = new VertexAI({ project, location })

// Instantiate the models
const generativeModel = vertexAI.preview.getGenerativeModel({
  model: 'gemini-1.5-pro-preview-0409',
  generationConfig: {
    maxOutputTokens: 2048,
    temperature: 0.2,
    topP: 0.8,
  },
})

export async function POST(request: Request) {
  try {
    const { messages } = await request.json()
    
    // Validate request
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return NextResponse.json({ error: 'Messages are required' }, { status: 400 })
    }

    // Extract the latest user message
    const latestMessage = messages[messages.length - 1].content

    // Context instruction for the bot
    const systemPrompt = `You are the official AI assistant for the Pakistan Business Forum® (PBF). 
    Your tone is professional, strategic, diplomatic, and highly analytical. 
    You provide information about PBF's research, economic policy, governance structures, and events.
    Keep your answers concise, clear, and relevant. If you don't know the answer, advise the user to contact contact@pakistanbusinessforum.org.
    
    User question: ${latestMessage}`

    const requestBody = {
      contents: [{ role: 'user', parts: [{ text: systemPrompt }] }],
    }

    const streamingResp = await generativeModel.generateContentStream(requestBody)
    
    // Collect the response
    let fullResponse = ''
    for await (const item of streamingResp.stream) {
      if (item.candidates && item.candidates[0].content.parts[0].text) {
        fullResponse += item.candidates[0].content.parts[0].text
      }
    }

    return NextResponse.json({ response: fullResponse })
    
  } catch (error) {
    console.error('Vertex AI Error:', error)
    return NextResponse.json(
      { error: 'An error occurred while communicating with the AI assistant.' }, 
      { status: 500 }
    )
  }
}
