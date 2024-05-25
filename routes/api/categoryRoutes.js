const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
	try {
		// find all categories with its associated Products
		const categoryData = await Category.findAll({
			include: [
				{ model: Product }
			],
		});
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.get('/:id', async (req, res) => {
	try {
		// find one category by its `id` value and its associated Products
		const categoryData = await Category.findByPk(req.params.id, {
			include: [{
				model: Product
			}],
		});

		if (!categoryData) {
			res.status(404).json({ message: 'No category found with that id!' });
			return;
		}

		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}

});

router.post('/', async (req, res) => {
	// create a new category
	try {
		const categoryData = await Category.create(req.body);
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(400).json(err);
	}
});

router.put('/:id', async (req, res) => {
	// update a category by its `id` value
	try {
		const categoryData = await Category.update(req.body, {
			where: {
				id: req.params.id,
			}
		});
		if (!categoryData[0]) {
			res.status(404).json({ message: 'No category found with that id!' });
			return;
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

router.delete('/:id', async (req, res) => {
	// delete a category by its `id` value
	try {
		const categoryData = await Category.destroy({
			where: { id: req.params.id, }
		});
		if (!categoryData) {
			res.status(404).json({ message: 'No trip with this id!' });
			return;
		}
		res.status(200).json(categoryData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;