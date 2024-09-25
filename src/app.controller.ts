import { Controller, Get, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';
import { join } from 'path';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  
  @Get('/chat-box')
  getLiveChatWidget(@Res() res: Response): void {
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
 

    @Get('/yoders')
    getWebsite(@Res() res: Response){
      res.sendFile(join(__dirname,'..', "chatbox","index.html"))
    }

}
