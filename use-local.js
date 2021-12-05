const fs = require("fs")
const YAML = require("js-yaml")
const JsonRefs = require("json-refs")
const path = require("path")
const PathLoader = require("path-loader")

const run = async () => {
	
	const file = path.resolve(__dirname,"./ms_06_workflow")

	const spec = await PathLoader.load(
		file, 
		{
		    processContent: (res, callback) => {
		      callback(undefined, YAML.load(res.text))
		    }
	  	}
	 )
			
	let {resolved, refs} = await JsonRefs.resolveRefs(
		spec,
		{ 
			location: file,
			// filter: (refDetails, path) => {
			// 	if(/^\#\/definitions\//.test(refDetails.uri)){
			// 		// console./log("ignore ", refDetails.uri)
			// 		return false
			// 	}
			// 	return true
			// },
			loaderOptions:{
				processContent: (res, callback) => {
			      callback(YAML.load(res.text))
			    }
			}
		}
	)
	
	console.log(JSON.stringify(resolved, null, " "))
}

run()