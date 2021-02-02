'use strict';

const express = require('express'),
    router = express.Router(),
    ceoModel = require('../models/ceoModel')

router.get('/', async (req, res) => {
    const ceosData = await ceoModel.getAll();

    res.render('template', {
        locals: {
            title: "List of Apple CEOs",
            data: ceosData,
        },
        partials: {
            body: 'partials/ceo-list',
        }
    });
});

router.get('/:slug', async (req, res) => {
    const { slug } = req.params; // DECONSTRUCTING
    const executive = await ceoModel.getBySlug(slug);

    if (executive) {
        res.render('template', {
            locals: {
                title: `An Apple CEO: ${executive.name}`,
                executive // you only have to type this once bc the key and the value are the same
            },
            partials: {
                body: 'partials/ceo-details',
            }
        });
    } else {
        res.status(404).send(`No CEO found that matches slug, ${slug}`)
    }
    console.log("Slug is: ", slug);
});

module.exports = router;