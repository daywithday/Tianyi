export default {
    name: 'Resource', data() { return { wsUrl: '', websocket: null } }, methods: {
        updateUrl(urlPath) {
            let _this = this;
            if (urlPath.indexOf('sockjs') != -1) {
                _this.wsUrl = 'http://' + CONFIG.WEBSOCKET_URL + urlPath + ";" + _this.userData.user;
            } else {
                if (window.location.protocol == 'http:') {
                    _this.wsUrl = 'ws://' + CONFIG.WEBSOCKET_URL + urlPath + ";" + _this.userData.user;
                } else {
                    _this.wsUrl = 'wss://' + CONFIG.WEBSOCKET_URL + urlPath + ";" + _this.userData.user;
                }
            }
        }, webSocketLink() {
            let _this = this; var heartCheck = {
                timeout: 5000,//5秒
                timeoutObj: null, reset: function () {
                    clearInterval(this.timeoutObj);
                    return this;
                }, start: function () {
                    this.timeoutObj = setInterval(function () {
                        _this.websocket.send("HeartBeat"); console.log("HeartBeat");
                    }, this.timeout)
                }
            }; if ('WebSocket' in window) {
                _this.updateUrl("/webSocketServer");
                _this.websocket = new WebSocket(_this.wsUrl);
            } else if ('MozWebSocket' in window) {
                _this.updateUrl("/webSocketServer"); _this.websocket = new MozWebSocket(_this.wsUrl);
            } else {
                _this.updateUrl("/sockjs/webSocketServer");
                _this.websocket = new SockJS(_this.wsUrl)
            } _this.websocket.onopen = function () {
                console.log("websock连接成功"); heartCheck.reset().start();
            }; _this.websocket.onmessage = function (event) {
                console.log(event.data);
            }
        }
    }, beforeRouteLeave(to, from, next) {
        if (this.websocket) {
            this.websocket.close()
        }
    }, created() {
        this.webSocketLink();
    }
}