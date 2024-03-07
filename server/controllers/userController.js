const login = async (req, res) => {
  const { email, password } = req.body;

  res.send("Login");
};

const signUp = (req, res) => {
  const { fName, lName, dob, phone, email, password } = req.body;

  //check if the user already exists using email
  res.send(`Name ${fName}`);
};

module.exports = { signUp, login };
