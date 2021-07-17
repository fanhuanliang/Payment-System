const handleError = (res, error) => {
  if (error === "Invalid credentials") {
    return res.status(400).json({ msg: "Invalid credentials" });
  }
  if (error === "no user") {
    return res.status(409).json({ msg: "Can't find the user" });
  }
  if (error === "Could not sign the token") {
    return res.status(404).json("Something wrong on the server");
  }
  return res.status(500).json(error);
};

module.exports = { handleError };
