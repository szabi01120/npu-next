import "./style/main.less";
import { Logger } from "tslog";

const logger = new Logger();
async function main() {
  logger.info("Neptun PowerUp! Next loaded");
}

main().catch((e) => {
  logger.error(e);
});
