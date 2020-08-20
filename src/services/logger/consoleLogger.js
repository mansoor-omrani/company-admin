import BaseLogger from "./baseLogger";

class ConsoleLogger extends BaseLogger {
    log(msg) {
        console.log(msg);
    }
    debug(msg) {
        console.debug(msg);
    }
    warn(msg) {
        console.warn(msg);
    }
    danger(msg) {
        console.error(msg);
    }
    info(msg) {
        console.info(msg);
    }
}

export default ConsoleLogger;