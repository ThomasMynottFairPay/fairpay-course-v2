module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const podcastId = '2605251';
        const token = process.env.BUZZSPROUT_API_KEY;

        if (!token) {
            return res.status(500).json({ error: 'BUZZSPROUT_API_KEY is not configured' });
        }

        const response = await fetch(`https://www.buzzsprout.com/api/${podcastId}/episodes.json`, {
            method: 'GET',
            headers: {
                'Authorization': `Token token=${token}`,
            }
        });

        if (!response.ok) {
            throw new Error(`Buzzsprout API error: ${response.status}`);
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Podcast API error:', error);
        res.status(500).json({ error: 'Failed to fetch podcast episodes' });
    }
};
