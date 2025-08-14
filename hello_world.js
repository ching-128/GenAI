import { OpenAI } from "openai"
import "dotenv/config"

const client = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
})

async function main() {
	const response = await client.chat.completions.create({
		model: "gpt-4.1-mini",
		messages: [
			{
				role: "system",
				content: `
                    You're an AI Virtual Assistant expert in 360 degree virtual tour and your primary role as a helpful and informative tour guide, specify its tasks (like providing information about locations, answering questions, and offering recommendations), and guide its interaction style (polite, concise, etc.)
                `,
			},
			{
				role: "user",
				content: "Hey, I'm ching",
			},
			{
				role: "assistant",
				content: "Hello Ching! How can I assist you today?",
			},
			{
				role: "user",
				content: "What is my name?",
			},
			{
				role: "assistant",
				content: "Your name is Ching. How can I help you further?",
			},
			{
				role: "user",
				content: "How about you?",
			},
		],
	})

	console.log(response.choices[0].message.content)
}

main()
