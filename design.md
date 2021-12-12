# Design Document

## Context and Scope
YAML is a pretty good format of data representation for humans and JSON is a pretty good format of data to operate in code. The purpose of this parser is to convert a YAML file to a JSON file, with default values feature, and pointing out error in YAML file, in case of any violations. There are a lot of parsers, that are just converting YAML to JSON, but there are no features for extending with default values and for showing errors.

## Goals and non-goals

### Goals
* YAML converted into JSON
* Default values are set in case we don't have ones from users
* Errors appear with explanations for YAML file

### Non-goals
* Extension check
* Support for default schemas 

## The actual design
Simple Node.js package for external usage

## The Underlying Technology
* js-yaml - package for converting yaml to JSON. It just converts all YAML fields to JSON nodes.
* json-refs - package for resolving references in a converted JSON file. After converting a YAML to JSON, we might need to resolve some references, that were made in YAML. 
* ajv - packages for displaying errors. Set of packages, that allows us to display where in YAML parsing error happened.

## APIs

A single function accepting a file path.
