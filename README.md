_This is a fork of [mapbox/tokml](https://github.com/mapbox/tokml)._

# geojson-to-kml

Convert [GeoJSON](http://geojson.org/) to [KML](https://developers.google.com/kml/documentation/).

## Usage

with node

    npm install --save geojson-to-kml

## Example

```js
import tokml from "geojson-to-kml";

// kml is a string of KML data, geojsonObject is a JavaScript object of
// GeoJSON data
const kml = tokml(geojsonObject);

// grab name and description properties from each object and write them in
// KML
const kmlNameDescription = tokml(geojsonObject, {
  name: "name",
  description: "description",
});

// name and describe the KML document as a whole
const kmlDocumentName = tokml(geojsonObject, {
  documentName: "My List Of Markers",
  documentDescription: "One of the many places you are not I am",
});
```

## API

### `tokml(geojsonObject, [options])`

Given [GeoJSON](http://geojson.org/) data as an object, return KML data as a
string of XML.

`options` is an optional object that takes the following options:

**The property to name/description mapping:** while GeoJSON supports freeform
`properties` on each feature, KML has an expectation of `name` and `description`
properties that are often styled and displayed automatically. These options let
you define a mapping from the GeoJSON style to KML's.

- `name`: the name of the property in each GeoJSON Feature that contains
  the feature's name
- `description`: the name of the property in each GeoJSON Feature that contains
  the feature's description

**Timestamp:** KML can associate features with a moment in time via the `TimeStamp` tag. GeoJSON doesn't
have a comparable field, but a custom property can be mapped

- `timestamp`: the name of the property in each GeoJSON Feature that contains
  a timestamp in XML Schema Time (yyyy-mm-ddThh:mm:sszzzzzz)

**Document name and description**: KML supports `name` and `description` properties
for the full document.

- `documentName`: the name of the full document
- `documentDescription`: the description of the full document

**[simplestyle-spec](https://github.com/mapbox/simplestyle-spec)** support:

- `simplestyle`: set to `true` to convert simplestyle-spec styles into KML styles

## Development

Requires [node.js](http://nodejs.org/).

### install

```bash
npm install
```

### test

```bash
npm test
```

### build

```bash
npm run build
```

## Rationale

Why use `geojson-to-kml` instead of `toKml`? Well, `toKml` hasn't been updated in a while and installing it causes `npm` to complain about vulnerabilites.

[@maphubs/tokml](https://github.com/maphubs/tokml) is another fork of `toKml` that I was not aware of when I made `geojson-to-kml`; check it out, it might be a better option!
