from flask import Flask
from wsgiref.simple_server import make_server
from server.Router import setRouter
from utils.ADBUtil import adbUtil
from utils.LogUtil import Log



class Server():
    app = Flask(__name__)
    wfhelper = None

    def __init__(self, wfhelper):

        # TODO 提供参数指定host和port
        self.wfhelper = wfhelper
        setRouter(self)

    def getLastLog(self):
        return Log.lastLog

    def getLogArray(self):
        return Log.logArray

    def setLogLimit(self, value):
        Log.logArray = []
        Log.logLimit = value

    def setState(self, key, value):
        self.wfhelper.state.setState(key, value)

    def getState(self):
        return self.wfhelper.state.content

    def getScreenShot(self):
        return adbUtil.getScreen()

    def touchScreen(self, x, y):
        adbUtil.touchScreen([x, y, x+1, y+1])

    def swipeScreen(self, x1, y1, x2, y2):
        adbUtil.swipeScreen(x1, y1, x2, y2)

    def stopWFHelper(self):
        self.wfhelper.stop()

    def startWFHelper(self):
        self.wfhelper.start()

    def startServer(self):
        server = make_server('', 8080, self.app)
        server.serve_forever()
