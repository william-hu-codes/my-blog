const { Tag } = require("../models");
// console.log(Tag);

module.exports = {
  create,
  index,
  show,
  update,
  delete: destroy,
  getNewest
};

async function create(req, res) {
    console.log("hitting create action")
    console.log("req.body", req.body)
    const data = req.body

    // let tagsArray = data.tags.split(", ")
    // tagsArray = tagsArray.map((t) => t.toLowerCase())
    // data.tags = tagsArray

    // data.author = [req.user._id]
    try {
        res.status(201).json(await Tag.create(data));
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}


async function index(req, res) {
  try {
    res.status(200).json(await Tag.find());
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    res.status(200).json(await Tag.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    res
    .status(200)
    .json(
      await Tag.findByIdAndUpdate(req.params.id, req.body, { new: true })
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    res
    .status(200)
    .json(
      await Tag.findOneAndDelete({_id: req.params.id})
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function getNewest(req, res) {
    try {
      res.status(200).json(await Tag.findOne().sort({createdAt: -1}));
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }