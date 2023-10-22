const { Post } = require("../models");
// console.log(Post);

module.exports = {
  create,
  index,
  show,
  update,
  delete: destroy,
};

async function create(req, res) {
  // console.log(req.body)
  const data = req.body
  data.author = req.user._id
  
  // let tagsArray = data.tags.split(", ")
  // tagsArray = tagsArray.map((t) => t.toLowerCase())
  // data.tags = tagsArray

  // data.author = [req.user._id]
  try {
    res.status(201).json(await Post.create(data));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}


async function index(req, res) {
  try {
    // console.log(req.user._id)
    res.status(200).json(await Post.find().populate("tags"));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    res.status(200).json(await Post.findById(req.params.id));
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    res
    .status(200)
    .json(
      await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
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
      await Post.findOneAndDelete({_id: req.params.id})
    );
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}