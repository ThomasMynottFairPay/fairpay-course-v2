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
        const { messages, file } = req.body;

        const systemPrompt = `You are the FairPay Payments Foundations Course AI Tutor. You have access to the full course content below. Answer questions specifically, accurately, and professionally, referencing the course material when applicable.

When a user uploads a document (such as a weekly deliverable, strategy document, or assignment), you should:
1. Carefully read the uploaded document
2. Assess it against the relevant course material
3. Provide constructive, specific feedback highlighting strengths and areas for improvement
4. Reference specific course concepts, frameworks, or criteria the student should consider
5. Be encouraging but honest — help them produce board-ready work

If a question is entirely unrelated to the course, politely steer them back to the payments course.

--- COURSE CONTENT ---
${corpus}`;

        // Build the user content blocks
        let userContent = [];

        if (file && file.data) {
            const mimeType = file.type || 'application/pdf';
            const fileName = file.name || 'uploaded-file';

            if (mimeType === 'application/pdf') {
                // Native PDF support via Claude's document content block
                userContent.push({
                    type: 'document',
                    source: {
                        type: 'base64',
                        media_type: 'application/pdf',
                        data: file.data,
                    },
                });
            } else {
                // Text-based files: decode base64 and include as text
                const decoded = Buffer.from(file.data, 'base64').toString('utf-8');
                userContent.push({
                    type: 'text',
                    text: `--- UPLOADED FILE: ${fileName} ---\n${decoded}\n--- END OF FILE ---`,
                });
            }
        }

        // Add the user's text message
        const textMessage = Array.isArray(messages) ? messages[messages.length - 1].content : messages;
        userContent.push({
            type: 'text',
            text: textMessage || 'Please review the uploaded document and provide feedback based on the course content.',
        });

        const msg = await anthropic.messages.create({
            model: "claude-sonnet-4-20250514",
            max_tokens: 2000,
            system: systemPrompt,
            messages: [{ role: 'user', content: userContent }],
        });

        res.status(200).json({ response: msg.content[0].text });
    } catch (error) {
        console.error('Chat error:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};
