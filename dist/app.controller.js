"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const app_service_1 = require("./app.service");
const path_1 = require("path");
let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getLiveChatWidget(res) {
        const script = `window.__lc = window.__lc || {};
  window.__lc.license = 3167192;
  window.__lc.chat_between_groups = false;
  (function(n,t,c){
    function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
    var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
    once:function(){i(["once",c.call(arguments)])},
    off:function(){i(["off",c.call(arguments)])},
    get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
    return i(["get",c.call(arguments)])},
    call:function(){i(["call",c.call(arguments)])},
    init:function(){var n=t.createElement("script");n.async=!0,
    n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",
    t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
  }(window,document,[].slice))
`;
        res.setHeader('Content-Type', 'text/html');
        res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            #chat-widget-container{
              
              height: 100% !important;    
              width: 100% !important;
            }           
          </style>
            
        </head>
        <body>
          <script>
          window.__lc = window.__lc || {};
          window.__lc.license = 3167192;
          window.__lc.chat_between_groups = false;
          (function(n,t,c){
            function i(n){return e._h ? e._h.apply(null,n) : e._q.push(n)}
            var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},
            once:function(){i(["once",c.call(arguments)])},
            off:function(){i(["off",c.call(arguments)])},
            get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");
            return i(["get",c.call(arguments)])},
            call:function(){i(["call",c.call(arguments)])},
            init:function(){var n=t.createElement("script");n.async=!0,
            n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",
            t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e
          }(window,document,[].slice))

          </script>

        </body>
      </html>
    `);
    }
    getWebsite(res) {
        res.sendFile((0, path_1.join)(__dirname, '..', "chatbox", "index.html"));
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)('/chat-box'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getLiveChatWidget", null);
__decorate([
    (0, common_1.Get)('/yoders'),
    __param(0, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getWebsite", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppController);
//# sourceMappingURL=app.controller.js.map