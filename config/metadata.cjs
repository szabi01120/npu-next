const {
  author,
  dependencies,
  repository,
  version,
} = require("../package.json");

module.exports = {
  name: "npu-next",
  namespace: "https://mmate.xyz/",
  version: version,
  author: author,
  source: repository.url,
  license: "MIT",
  match: ["https://neptun2.ppke.hu/hallgato2_uj/*"],
  require: [],
  "run-at": "document-end",
};
