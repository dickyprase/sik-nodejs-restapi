const prisma = require("../src/connection");

module.exports.getAllsUser = function (req, res) {
  prisma.user.findMany().then((users) => {
    res.status(200).json({message: "success fetch all data", data: users});
  });
};

module.exports.getOneUser = function (req, res) {
  const { id } = req.params;
  prisma.user.findUnique({ where: { user_id: Number(id) } }).then((user) => {
    res.status(200).json({message: `success get data user_id ${id}`, data: user});
  });
};

module.exports.createUser = function (req, res) {
  const { name, username, password, phone, telegram_id, profile_picture } = req.body;
  prisma.user
    .create({
      data: {
        name,
        username,
        password,
        phone,
        telegram_id,
        profile_picture
      },
    })
    .then((user) => {
      res.status(201).json({message: "succcess created data", data: user});
    });
};

module.exports.updateUser = function (req, res) {
  const { id } = req.params;
  const { name, username, password, phone, telegram_id, profile_picture } = req.body;

  if (!(name && username && password && phone && telegram_id && profile_picture)) {
    return res.status(400).json({message: "please fill all fields correctly"});
  }

  prisma.user
    .update({
      where: { user_id: Number(id) },
      data: {
        name,
        username,
        password,
        phone,
        telegram_id,
        profile_picture
      },
    })
    .then((user) => {
      res.status(200).json({message: "succcess updated data", data: user});
    });
};

module.exports.deleteUser = function (req, res) {
  const { id } = req.params;
  prisma.user
    .delete({
      where: { user_id: Number(id) },
    })
    .then((user) => {
      res.status(200).json({message: "succcess deleted data", data: user});
    });
};
