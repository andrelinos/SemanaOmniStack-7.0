import sharp from 'sharp';
import path from 'path';
import fs from 'fs';

import Post from '../models/Post';

module.exports = {
  async index(req, res) {
    const { page = 1 } = req.query;

    await Post.paginate(
      {},
      {
        lean: true,
        sort: { date: 1 },
        offset: (page - 1) * 10,
        limit: 10,
      },

      (err, result) => {
        res.header('X-Total-Count', [result.totalDocs]);

        res.json(result.docs);
      }
    ).sort(-1);
  },

  async store(req, res) {
    const { author, place, description, hashtags } = req.body;
    const { filename: image } = req.file;

    const [name] = image.split('.');
    const fileName = `${name}.jpg`;

    await sharp(req.file.path)
      .resize(500)
      .jpeg({ quality: 70 })
      .toFile(path.resolve(req.file.destination, 'ressized', fileName));

    fs.unlinkSync(req.file.path);

    const post = await Post.create({
      author,
      place,
      description,
      hashtags,
      image,
    });

    req.io.emit('post', post);

    return res.json(post);
  },
};
