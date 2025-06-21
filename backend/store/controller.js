import entrySchema from './model.js';

export const postEntry = async (req, res) => {
  const { name, email, message } = req.body;
  try {
    const entry = await new entrySchema({
      name,
      email,
      message,
    });
    await entry.save();
    res.status(201).json(entry);
  } catch (error) {
    res.status(500).json({ message: "Error creating store entry", error });
  }
}