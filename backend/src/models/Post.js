import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const PostSchema = new mongoose.Schema(
  {
    author: String,
    place: String,
    description: String,
    hashtags: String,
    image: String,
    likes: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

PostSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Post', PostSchema);
