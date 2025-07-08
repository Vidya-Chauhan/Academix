import Item from "../models/Item.js";

export const postItem = async (req, res) => {
    try {
        const { title, description, category, price, image, contactInfo } = req.body;

        const newItem = new Item({
            title,
            description,
            category,
            price,
            image,
            contactInfo
        });

        await newItem.save();
        res.status(201).json({ message: "Item posted successfully", item: newItem });
    } catch (error) {
        console.error("Error posting item:", error);
        res.status(500).json({ message: "Internal server error" });
    }
};

export const getAllItems = async (req, res) => {
    try {
        const items = await Item.find().sort({ createdAt: -1 });
        res.status(200).json(items);
    } catch (error) {
        console.error("Error fetching items:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}