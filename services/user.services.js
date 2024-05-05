const UserModel = require("../model/user.model");
const jwt = require("jsonwebtoken");

class UserService {
  static async registerJudges(username, password, judge, ageGroup, gender) {
    try {
      const createJudge = new UserModel({
        username,
        password,
        judge,
        ageGroup,
        gender,
      });
      return await createJudge.save();
    } catch (e) {
      throw e;
    }
  }

  static async checkUser(username) {
    try {
      return await UserModel.findOne({ username });
    } catch (e) {
      throw e;
    }
  }

  static async generateToken(tokenData, secretKey, jwt_expire) {
    return jwt.sign(tokenData, secretKey, { expiresIn: jwt_expire });
  }
}

module.exports = UserService;
