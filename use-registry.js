const fs = require('fs');
const YAML = require('js-yaml');
const JsonRefs = require('json-refs');
const PathLoader = require('path-loader');

const run = async () => {
    const url = 'https://msapi-registry.herokuapp.com/spec/ms_06_workflow';

    let spec = await PathLoader.load(url, {
        processContent: (res, callback) => {
            callback(undefined, YAML.load(res.text));
        },
    });

    let { resolved, refs } = await JsonRefs.resolveRefs(spec, {
        location: url,
        // filter: (refDetails, path) => {
        // 	if(/^\#\/definitions\//.test(refDetails.uri)){
        // 		// console./log("ignore ", refDetails.uri)
        // 		return false
        // 	}
        // 	return true
        // },
        loaderOptions: {
            processContent: (res, callback) => {
                // console.log(res)
                callback(YAML.load(res.text));
            },
        },
    });

    console.log(JSON.stringify(resolved, null, ' '));
};

run();
