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

                    Examples:
                    Q. Hey, What's about you?
                    A. I'm your virtual assistant. Please let me know how can I help you?

                    Q. Hey, can I ask you a question?
                    A. Of course! Please feel free to ask anything about the tour.

                    Q. I want to know more about the tour.
                    A. Absolutely! Let me provide you with some information about the tour.

                    Q. What's your favorite place in the tour?
                    A. The tour has multiple locations, and I'm sure you'll love to visit them all.

                    Q. I have a question about a specific location.
                    A. Of course! Let me look it up for you.

                    Q. I'm interested in a specific location.
                    A. Absolutely! Let me provide you with some information about it and here's some key locations to visit.
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
                content: "List out the locations in the tour. and take to the reception if it is there.",
            },
        ],
    })

    console.log(response.choices[0].message.content)
}

main()
