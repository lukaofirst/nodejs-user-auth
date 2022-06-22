const registerUser = (req, res) => {
    res.send({ message: 'User registered successfully!' });
};

const loginUser = (req, res) => {
    res.send({ message: 'Logged In' });
};

export { registerUser, loginUser };
