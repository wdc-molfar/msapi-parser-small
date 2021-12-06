'use strict';

const PathLoader = require('path-loader');
const YAML = require('js-yaml');

/**
 * @param filePath a file path, or a url to a file
 * @returns {Promise<object>} YAML as an object
 * @type {{filePath: string}}
 */
const convertYamlToObject = async (filePath) => {
    return PathLoader.load(filePath, {
        processContent: (res, callback) => {
            callback(undefined, YAML.load(res.text));
        },
    });
};

module.exports = { convertYamlToObject };
