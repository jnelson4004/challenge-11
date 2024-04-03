const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // Category.findAll()
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // Category.findByPk(req.params.id)
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  Category.create(req.body)
    .then((category) => {
      if (req.body.tagIds && req.body.tagIds.length) {
        const tagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            category_id: category.id,
            tag_id,
          };
        });
        return CategoryTag.bulkCreate(tagIdArr);
      }
      res.status(200).json(category);
    })
    .then((categoryTags) => res.status(200).json(categoryTags))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  // Category.update(req.params.id, req.body)
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  // Category.destroy(req.params.id)
});

module.exports = router;
