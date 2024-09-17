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
  include: ["https://neptun*.ppke.hu/hallgato*_uj/*"],
  require: [],
  "run-at": "document-end",
};
