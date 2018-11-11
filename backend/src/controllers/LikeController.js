const Tweet = require('../models/tweet');

module.exports = {
    async store (req, res) {
        const tweet = await Tweet.findById(req.params.id);

        tweet.set({ likes: tweet.likes + 1 });

        //Salvando
        await tweet.save();

        //Evento do like
        req.io.emit('like', tweet);

        return res.json(tweet);
    },

}