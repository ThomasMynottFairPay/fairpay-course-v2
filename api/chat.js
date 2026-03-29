const Anthropic = require('@anthropic-ai/sdk');
const { corpus } = require('./custom_corpus.js');

const anthropic = new Anthropic({
    apiKey: (process.env.ANTHROPIC_API_KEY || '').trim(),
});

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { messages } = req.body;

        const systemPrompt = `You are the FairPay CEO Payments Course AI Tutor. You have access to the full course content below. Answer questions specifically, accurately, and professionally, referencing the course material when applicable. Only answer questions related to the course material. If a question is entirely unrelated, politely steer them back to the payments course.\n\n--- COURSE CONTENT ---\n${corpus}`;

        const parsedMessages = Array.isArray(messages) ? messages : [{ role: 'user', content: messages }];

        const msg = await anthropic.messages.create({
            model: "claude-3-5-sonnet-20241022",
            max_tokens: 1000,
            system: systemPrompt,
            messages: parsedMessages,
        });

        res.status(200).json({ response: msg.content[0].text });
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
