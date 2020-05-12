import express from 'express';
import { renderTemplate } from '../helpers/renderTemplate';
import React from 'react';
import ReactDomServer from 'react-dom/server';

const router = express.Router();

router.get('/*', (req, res) => {
    const viewPathname = req.url.replace('/','')
    const capitalizeViewPathname = viewPathname.charAt(0).toUpperCase() + viewPathname.slice(1);
    const pathToView = `../../client/pages/${viewPathname}/${capitalizeViewPathname}.jsx`

    let ViewFile;
    try {
        // If the page exist, render it
        ViewFile = require(pathToView).default;
        const viewMarkup = ReactDomServer.renderToString(<ViewFile></ViewFile>);
        res.status(200);
        res.send(renderTemplate(viewPathname, viewMarkup));
    } catch (error) {
        // HANDLE ERROR
        res.end(`${error}`)
    }
});

module.exports = router;