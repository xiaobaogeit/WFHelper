import logging
import time,json

from typing import List

from utils.WSUtil import WS


class LogUtil:
    LOG_FORMAT = "%(asctime)s - %(levelname)s - %(message)s"
    DATE_FORMAT = "%Y/%m/%d %H:%M:%S"

    logging.basicConfig(
        level=logging.INFO, format=LOG_FORMAT, datefmt=DATE_FORMAT
    )

    lastLog = None

    logArray = []  # type: List[str]
    logLimit = 20

    def setDebugLevel(self):
        logging.getLogger().setLevel(logging.DEBUG)

    def setLastLog(self, log):
        WS.broadcast(json.dumps({
            "type": 'push-log-message',
            "time": int(time.time()),
            "data": log
        }).encode('utf8'))

        log = str(
            time.strftime("%Y-%m-%d %H:%M:%S", time.localtime())
        ) + " {}".format(log)

        self.lastLog = log
        self.logArray.append(log)

        if len(self.logArray) > self.logLimit:
            self.logArray.pop(0)

    def debug(self, msg):
        self.setLastLog(msg)
        logging.debug(msg)

    def info(self, msg):
        self.setLastLog(msg)
        logging.info(msg)

    def warning(self, msg):
        self.setLastLog(msg)
        logging.warning(msg)

    def error(self, msg):
        self.setLastLog(msg)
        logging.error(msg)

    def critical(self, msg):
        self.setLastLog(msg)
        logging.critical(msg)


Log = LogUtil()
