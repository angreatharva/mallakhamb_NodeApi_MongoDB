const UserService = require("../services/user.services");

exports.registerJudges = async (req, res, next) => {
  try {
    const { username, password, isSuperior, judge, ageGroup, gender } =
      req.body;

    // Make sure username is provided
    if (!username) {
      throw new Error("Username is required");
    }

    const successRes = await UserService.registerJudges(
      username,
      password,
      judge,
      ageGroup,
      gender
    );

    res.json({
      status: true,
      message: "Registered Judge Successfully.!",
      username: username,
      judge: judge,
      ageGroup: ageGroup,
    });
  } catch (e) {
    next(e); // Pass the error to the error handling middleware
  }
};

exports.login = async (req, res, next) => {
  try {
    const { username, password, isSuperior } = req.body;

    const user = await UserService.checkUser(username);
    if (!user) {
      throw new Error("User does not Exist");
    }
    const isMatch = await user.comparePassword(password);

    if (!isMatch) {
      throw new Error("Password is Invalid");
    }

    let tokenData = { _id: user._id, username: user.username };

    const token = await UserService.generateToken(tokenData, "secretKey", "1h");

    res
      .status(200)
      .json({ status: true, token: token, username: user.username });
  } catch (e) {
    next(e); // Pass the error to the error handling middleware
  }
};
