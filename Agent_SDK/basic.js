import { Agent, run, tool } from "@openai/agents";
import "dotenv/config";
import { z } from "zod";

const getCurrentTime = tool({
	name: "get_current_time",
	description: "This tool returns the current time",
    parameters: z.object({}),

	async execute() {
		return new Date().toString();
	},
});

const getConnections = tool({
    name: 'get_connections',
    description: "This tool returns the connections from given pointer ID",
    parameters: z.string(""),
    async execute(id) {
        return [
            {
                id: "node8",
                title: "Reception"
            },
            {
                id: "node22",
                title: "Indoor Games Area"
            },
            {
                id: "node2",
                title: "Corridor"
            }
        ]
    }
})

const agent = new Agent({
    name: "Virtual Tour Assistant",
    tools: [getCurrentTime,getConnections],
	instructions:
		"You are a virtual tour assistant. Help users explore and learn about various landmarks around the world.",
});

async function chatWithAgent(query) {
	const result = await run(agent, query);
	// console.log(result.history);
	console.log(result.finalOutput);
}

chatWithAgent("what are the pointers from here? current location is node1");
