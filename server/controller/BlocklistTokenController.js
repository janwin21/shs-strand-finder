const BlocklistToken = require("../model/blocklist_tokens");

class BlocklistTokenController {
  async create(req, res) {
    const { accessToken } = req.body;

    // INIT
    const newBlocklistToken = new BlocklistToken({ accessToken });

    // SAVE
    newBlocklistToken.save();

    // RESPONSE
    res.json({ accessToken });
  }
}

module.exports = BlocklistTokenController;
