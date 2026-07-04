const User = require("../models/userModel");

const getUserInfo = async (req, res) => {
  const userId = req.params.id;

  try {
    if (!userId) {
      return res.status(400).json({ message: "User ID not provided" });
    }

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User does not exist" });
    }

    res.status(200).json({ message: "User data sent", user });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

module.exports = getUserInfo;