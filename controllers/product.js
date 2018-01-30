'use strict'
const Product = require('../models/product')

// Get one product
function getProduct (req, res) {
    const productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición: ${err}` })
        if (!product) return res.status(404).send({ message: `El producto no existe` })

        res.status(200).send({ product })
    })
}
// Get all products
function getProducts (req, res) {
    Product.find({}, (err, products) => {
        if (err) return res.status(500).send({ message: `Error al realizar la petición ${err}` })
        if (!products) return res.status(404).send({ message: `El producto no existe` })

        res.status(200).send({ products })    
    })
}

// Save one product
function saveProduct (req, res) {
    const productId = req.params.productId
    const update = req.body
    
    Product.findByIdAndUpdate(productId, update, (err, productUpdated) => {
        if (err) res.status(500).send({ message: `Error al actualizar el producto: ${err}` })

        res.status(200).send({ product: productUpdated })
    })
}

// Update one product
function updateProduct (req, res) {
    let product = new Product()
        product.name = req.body.name
        product.picture = req.body.picture
        product.price = req.body.price
        product.category = req.body.category
        product.description = req.body.description

    product.save((err, productStored) => {
        if (err) res.status(500).send({ message: `Error al salvar en BBDD: ${err}` })

        res.status(200).send({ product: productStored })
    })
}

// Delete one product
function deleteProduct (req, res) {
    const productId = req.params.productId

    Product.findById(productId, (err, product) => {
        if (err) return res.status(500).send({ message: `Error al borrar el producto: ${err}` })

        product.remove( err => {
            if (err) res.status(500).send({ message: `Error al borrar el producto: ${err}` })
            
            res.status(200).send({ message: `El producto  ${product.name} ha sido eliminado` })
        })
    })
}

// Exports
module.exports = {
    getProduct,
    getProducts,
    saveProduct,
    updateProduct,
    deleteProduct
}