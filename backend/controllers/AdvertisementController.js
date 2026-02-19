import Advertisement from "../models/Advertisement.js";

export const getAllAdvertisements = async (req, res) => {
  try {
    const ads = await Advertisement.find().populate("user");
    res.json(ads);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getAdvertisementById = async (req, res) => {
  try {
    const ad = await Advertisement.findById(req.params.id).populate("user");
    if (!ad)
      return res.status(404).json({ message: "Advertisement not found" });
    res.json(ad);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const createAdvertisement = async (req, res) => {
  try {
    const ad = new Advertisement(req.body);
    await ad.save();
    res.status(201).json(ad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const updateAdvertisement = async (req, res) => {
  try {
    const ad = await Advertisement.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    }).populate("user");
    if (!ad)
      return res.status(404).json({ message: "Advertisement not found" });
    res.json(ad);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

export const deleteAdvertisement = async (req, res) => {
  try {
    const ad = await Advertisement.findByIdAndDelete(req.params.id);
    if (!ad)
      return res.status(404).json({ message: "Advertisement not found" });
    res.json({ message: "Advertisement deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
