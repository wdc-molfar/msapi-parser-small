'use strict';

const YAML = require('js-yaml');
const JsonRefs = require('json-refs');

/**
 * @param spec a YAML converted to an object
 * @param filePath a path to a YAML file
 * returns resolved YAML, as an object
 */
const resolveRef = async (spec, filePath) => {
    const { resolved, refs } = await JsonRefs.resolveRefs(spec, {
        location: filePath,
        loaderOptions: {
            processContent: (res, callback) => {
                callback(YAML.load(res.text));
            },
        },
    });
    return {
        resolved,
        refs,
    };
};

module.exports = { resolveRef };
