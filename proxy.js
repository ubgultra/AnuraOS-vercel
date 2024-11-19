const axios = require('axios');

module.exports = async (req, res) => {
  try {
    const response = await axios.get('https://anura.pro', {
      headers: { 'User-Agent': req.headers['user-agent'] }
    });
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send('Error fetching AnuraOS');
  }
};
