const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
	// find all products
	// be sure to include its associated Category and Tag data
	try {
		// find all categories with its associated Products
		const productData = await Product.findAll({
			include: [
				Category,
				{
					model: Tag,
					through: ProductTag,
				},
			],
		});
		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// get one product
router.get('/:id', async (req, res) => {
	// find a single product by its `id`
	// be sure to include its associated Category and Tag data
	try {
		// find one category by its `id` value and its associated Products
		const productData = await Product.findByPk(req.params.id, {
			include: [
				{ model: Category },
				{ model: Tag }
			],
		});

		if (!productData) {
			res.status(404).json({ message: 'No product found with that id!' });
			return;
		}

		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

// create new product
router.post('/', async (req, res) => {
	/* req.body should look like this...
	  {
		product_name: "Basketball",
		price: 200.00,
		stock: 3,
		tagIds: [1, 2, 3, 4]
	  }
	*/
	await Product.create(req.body)
		.then((product) => {
			// if there's product tags, we need to create pairings to bulk create in the ProductTag model
			if (req.body.tagIds && req.body.tagIds.length) {
				const productTagIdArr = req.body.tagIds.map((tag_id) => {
					return {
						product_id: product.id,
						tag_id,
					};
				});
				return ProductTag.bulkCreate(productTagIdArr);
			}
			// if no product tags, just respond
			res.status(200).json(product);
		})
		.then((productTagIds) => res.status(200).json(productTagIds))
		.catch((err) => {
			console.log(err);
			res.status(400).json(err);
		});
});

// update product
router.put('/:id', async (req, res) => {
	// update product data
	// console.log({ req, res })
	try {
		const productToUpdate = await Product.update(req.body, {
			where: {
				id: req.params.id,
			},
		})
		// console.log({productToUpdate})
		if (!productToUpdate) {
			res.status(400).send('No product found with that id!');
			return

		}
		const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
		// console.log({ productTags })
		if (!productTags) {
			res.status(400).send('No product tags found!');
			return

		}
			// get list of current tag_ids
			const productTagIds = productTags.map(({ tag_id }) => tag_id);
			// console.log({ productTagIds })
			// create filtered list of new tag_ids
			console.log(req.body.tagIds)
			const newProductTags = req.body.tagIds
				.filter((tag_id) => !productTagIds.includes(tag_id))
				.map((tag_id) => {
					return {
						product_id: req.params.id,
						tag_id,
					};
				});
			console.log( newProductTags )
		// const productTags = await ProductTag.findAll({ where: { product_id: req.params.id } });
		// .then((product) => {
		// 	// find all associated tags from ProductTag
		// 	return
		// })
		// .then((productTags) => {

		// figure out which ones to remove

		const productTagsToRemove = newProductTags
			.filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
			.map(({ id }) => id);

		// run both actions
		await Promise.all([
			ProductTag.destroy({ where: { id: productTagsToRemove } }),
			ProductTag.bulkCreate(newProductTags),
		]);

		res.status(200).json({message: `Product with id ${req.params.id} updated`});
		// .then((updatedProductTags) => )
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', async (req, res) => {
	// delete one product by its `id` value
	try {
		const productData = await Product.destroy({
			where: { id: req.params.id, }
		});
		console.log({ productData })
		if (!productData) {
			res.status(404).json({ message: 'No product with this id!' });
			return;
		}
		res.status(200).json(productData);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
