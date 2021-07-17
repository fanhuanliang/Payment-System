const sendCookie = (res, accessToken, refreshToken, findUser) => {
  res
    .status(200)
    .cookie("accessToken", accessToken, {
      httpOnly: true,
    })
    .cookie("refreshToken", refreshToken, {
      httpOnly: true,
    })
    .json({
      user: {
        id: findUser.id,
        userName: findUser.userName,
        balance: findUser.balance,
      },
    });
};

const deleteCookie = (req, res) => {
  res
    .status(202)
    .clearCookie("accessToken")
    .clearCookie("refreshToken")
    .send("Cookies cleared");
};

module.exports = {
  sendCookie,
  deleteCookie,
};
