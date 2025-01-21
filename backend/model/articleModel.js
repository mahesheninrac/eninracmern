const mongoose = require('mongoose');

const ArticleSchema = new mongoose.Schema({
    id: { type: String, required: true }, // Using String to match the format of "15"
    user_id: { type: String, required: true },
    title: { type: String, required: true },
    content: { type: String, required: true },
    slug: { type: String, required: true },
    created_at: { type: Date, required: true, default: Date.now },
    update_at: { type: Date, default: Date.now },
    count: { type: Number, default: 0 },
    type: { type: String, required: true }, // Example: "policy"
    status: { type: String, required: true }, // Example: "1"
    approve: { type: String, required: true }, // Example: "1"
});

// Create the model
const Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;
