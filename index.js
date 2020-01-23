import { tag } from "./lib/strxml";
import { root, documentName, documentDescription } from "./src/tokml";

export default function tokml(geojson, options) {
  options = options || {
    documentName: undefined,
    documentDescription: undefined,
    name: "name",
    description: "description",
    simplestyle: false,
    timestamp: "timestamp"
  };

  return (
    '<?xml version="1.0" encoding="UTF-8"?>' +
    tag(
      "kml",
      tag(
        "Document",
        documentName(options) +
          documentDescription(options) +
          root(geojson, options)
      ),
      [["xmlns", "http://www.opengis.net/kml/2.2"]]
    )
  );
}
