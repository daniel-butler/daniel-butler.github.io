(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[741],{8842:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/projects/revenue",function(){return s(3639)}])},32:function(e,n){"use strict";n.Z={src:"/_next/static/media/core-foodservice.15de6778.svg",height:71,width:158}},126:function(e,n,s){"use strict";s.d(n,{B:function(){return m}});var a=s(1799),t=s(9396),o=s(5893),c=s(9008),i=s.n(c),r=s(1163),l=s(956),d=s(5933),p=s(6010);function h(e){var n=e.children,s=e.className;return(0,o.jsx)("div",{className:(0,p.Z)(s,"prose dark:prose-invert"),children:n})}function u(e){return(0,o.jsx)("svg",(0,t.Z)((0,a.Z)({viewBox:"0 0 16 16",fill:"none","aria-hidden":"true"},e),{children:(0,o.jsx)("path",{d:"M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}))}function m(e){var n=e.children,s=e.meta,a=e.isRssFeed,t=e.previousPathname,c=(0,r.useRouter)();return void 0!==a&&a?n:(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(i(),{children:[(0,o.jsx)("title",{children:"".concat(s.title," - Daniel Butler")}),(0,o.jsx)("meta",{name:"description",content:s.description})]}),(0,o.jsx)(l.W,{className:"mt-16 lg:mt-32",children:(0,o.jsx)("div",{className:"xl:relative",children:(0,o.jsxs)("div",{className:"mx-auto max-w-2xl",children:[t&&(0,o.jsx)("button",{type:"button",onClick:function(){return c.back()},"aria-label":"Go back to articles",className:"group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:mb-0 lg:-mt-2 xl:-top-1.5 xl:left-0 xl:mt-0",children:(0,o.jsx)(u,{className:"h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400"})}),(0,o.jsxs)("article",{children:[(0,o.jsxs)("header",{className:"flex flex-col",children:[(0,o.jsx)("h1",{className:"mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl",children:s.title}),(0,o.jsxs)("time",{dateTime:s.date,className:"order-first flex items-center text-base text-zinc-400 dark:text-zinc-500",children:[(0,o.jsx)("span",{className:"h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500"}),(0,o.jsx)("span",{className:"ml-3",children:(0,d.p)(s.date)})]})]}),(0,o.jsx)(h,{className:"mt-8",children:n})]})]})})})]})}},5933:function(e,n,s){"use strict";function a(e){return new Date("".concat(e,"T00:00:00Z")).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric",timeZone:"UTC"})}s.d(n,{p:function(){return a}})},3639:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return h},meta:function(){return l}});var a=s(5893),t=s(1151),o=s(126),c=s(32),i={src:"/_next/static/media/revenue-landing-page.c2f1dda1.png",height:969,width:1670,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAMAAABPT11nAAAAIVBMVEX+//7V0dn5+PlqSnlyUIHMwtLHvc3MztDd2OGqrbapo7EfZpLIAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAKElEQVR4nC3BgQ0AIAwCMBDYpv8fbGJsUZWkciDZloX1oPE1SDY5+wINZgCE8w2yhwAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},r=s(1058),l={author:"Daniel Butler",date:"2020-05-15",title:"Revenue",description:"A webapp that optimizes workflows of integral daily and monthly accounting processes.",logo:c.Z,platform:"Connect"},d=function(e){return(0,a.jsx)(o.B,Object.assign({meta:l},e))};function p(e){var n=Object.assign({h1:"h1",p:"p",h2:"h2",h3:"h3",pre:"pre",code:"code",span:"span"},(0,t.ah)(),e.components);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{children:"Overview"}),"\n",(0,a.jsx)(n.p,{children:"The project was a webpage that automated the most difficult and tedious journal entries the revenue team had to complete.\nAdditionally, aggregated aging data across the various entities tracked separately in the accounting system.\nThe combined aging data was used to streamline the month end closing process."}),"\n",(0,a.jsx)(r.Z,{src:i,alt:"Main page"}),"\n",(0,a.jsx)(n.p,{children:"The CORE Group had close to twenty different legal entities each with their own set of books.\nThe customers would make a payment (or multiple payments) to one of the entities.\nWhen the accounting department booked the revenue to properly recognize the revenue the payment had to split between the entities."}),"\n",(0,a.jsx)(n.h2,{children:"Features and Value added"}),"\n",(0,a.jsx)(n.h3,{children:"Automated Journal Entries"}),"\n",(0,a.jsx)(n.p,{children:"The webpage took an Excel file broken down by location and generated the various intercompany and Customer Invoice entries to clean up the Customer Aging.\nThe webpage was processed by the backend server to pull out the relevant data reducing the fields needed to be entered.\nThe final result was a csv file that was imported into each Company's accounting system."}),"\n",(0,a.jsx)(n.h3,{children:"Aging"}),"\n",(0,a.jsx)(n.p,{children:"The Aging is a report of entries that do not have a corresponding offsetting entry in the books, or they have not been applied.\nThis is a standard Accounting report generated by accounting systems.\nThe complexity for the CORE Group was that there were close to twenty of these reports each could have information related to the other one.\nThe Aging page combined all the entities into a single report to make reconciliation easier."}),"\n",(0,a.jsx)("video",{className:"w-max",children:(0,a.jsx)("source",{src:"/media/revenue-demo-video.mp4",type:"video/mp4",controls:!0})}),"\n",(0,a.jsx)(n.h2,{children:"Development Process"}),"\n",(0,a.jsx)(n.p,{children:"The application was developed and used in production in three weeks.\nThe first phase generated the journal entries only.\nThe second phase looked at the file to autofill the form needed to generate the entry.\n10 fields are need to complete the entry after the second phase all, but one of the fields was autofilled.\nThe third phase was adding the aging report and only came about because of discussions with the team to see what pain points they had in their process overall."}),"\n",(0,a.jsx)(n.p,{children:"The application was built with flask and used sql alchemy to query the MSSQL database.\nAdditionally, the frontend used vue.js for the front end automation and ajax requests to parse the excel file."}),"\n",(0,a.jsx)(n.h3,{children:"Learning"}),"\n",(0,a.jsx)(n.p,{children:"At the time, I was on a Domain Driven Design kick, so I used that to build the webpage.\nI really should not have because it was not a heavy domain logic problem, so the architecture added unnecessary overhead.\nI had to do some really weird things, like attach the response of the handlers to the unit of work object, below is an example."}),"\n",(0,a.jsx)(n.pre,{className:"language-python",children:(0,a.jsxs)(n.code,{className:"language-python",children:[(0,a.jsx)(n.span,{className:"token keyword",children:"def"})," ",(0,a.jsx)(n.span,{className:"token function",children:"generate_imports"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"\n    cmd ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," commands",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"CreateJEImports",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n        imported_data",(0,a.jsx)(n.span,{className:"token operator",children:"="}),"imported_data_df",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"to_dict",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"orient",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token string",children:"'records'"}),(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n        ",(0,a.jsx)(n.span,{className:"token comment",children:"# ..."}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n    bus",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"handle",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"cmd",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n    ",(0,a.jsx)(n.span,{className:"token keyword",children:"return"})," bus",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"uow",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"response  ",(0,a.jsx)(n.span,{className:"token comment",children:"# TODO: see if there is a better way!"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"In order to support the synchronous nature of the request/response of the webserver the message bus had to have separate methods to return a value."}),"\n",(0,a.jsx)(n.pre,{className:"language-python",children:(0,a.jsxs)(n.code,{className:"language-python",children:[(0,a.jsx)(n.span,{className:"token keyword",children:"class"})," ",(0,a.jsx)(n.span,{className:"token class-name",children:"MessageBus"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n    ",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"\n\n    ",(0,a.jsx)(n.span,{className:"token keyword",children:"def"})," ",(0,a.jsx)(n.span,{className:"token function",children:"handle_with_return_value"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"self",(0,a.jsx)(n.span,{className:"token punctuation",children:","})," message",(0,a.jsx)(n.span,{className:"token punctuation",children:":"})," Message",(0,a.jsx)(n.span,{className:"token punctuation",children:")"})," ",(0,a.jsx)(n.span,{className:"token operator",children:"-"}),(0,a.jsx)(n.span,{className:"token operator",children:">"})," typing",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"Any",(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n        ",(0,a.jsx)(n.span,{className:"token triple-quoted-string string",children:'"""Only handles message...\n        Will not handle the events generated\n        from the message (Command or Event) parameter\n        """'}),"\n        ",(0,a.jsx)(n.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(n.span,{className:"token builtin",children:"isinstance"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:","})," events",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"Event",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n            logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"debug",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                ",(0,a.jsx)(n.span,{className:"token string",children:"'Handling message of type '"}),"\n                ",(0,a.jsx)(n.span,{className:"token string",children:"'Event with result value'"}),"\n            ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"try"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                handler ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," self",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"event_handlers",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),(0,a.jsx)(n.span,{className:"token builtin",children:"type"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"return"})," handler",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"  ",(0,a.jsx)(n.span,{className:"token comment",children:"# <-- Return happening here"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"except"})," KeyError ",(0,a.jsx)(n.span,{className:"token keyword",children:"as"})," e",(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"exception",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                    ",(0,a.jsx)(n.span,{className:"token string-interpolation",children:(0,a.jsx)(n.span,{className:"token string",children:"f'Exception handling Event '"})}),"\n                    ",(0,a.jsxs)(n.span,{className:"token string-interpolation",children:[(0,a.jsx)(n.span,{className:"token string",children:"f'"}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:" no handler set'"})]}),"\n                ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"raise"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"except"})," Exception ",(0,a.jsx)(n.span,{className:"token keyword",children:"as"})," e",(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"exception",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                    ",(0,a.jsx)(n.span,{className:"token string-interpolation",children:(0,a.jsx)(n.span,{className:"token string",children:"f'Exception handling Event with '"})}),"\n                    ",(0,a.jsxs)(n.span,{className:"token string-interpolation",children:[(0,a.jsx)(n.span,{className:"token string",children:"f'return value "}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:" error: "}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"e",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:"'"})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n                    exc_info",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token boolean",children:"True"}),"\n                ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"raise"}),"\n\n        ",(0,a.jsx)(n.span,{className:"token keyword",children:"if"})," ",(0,a.jsx)(n.span,{className:"token builtin",children:"isinstance"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:","})," commands",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"Command",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n            logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"debug",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                ",(0,a.jsx)(n.span,{className:"token string",children:"'Handling message of type '"}),"\n                ",(0,a.jsx)(n.span,{className:"token string",children:"'Command with result value'"}),"\n            ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"try"}),(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                handler ",(0,a.jsx)(n.span,{className:"token operator",children:"="})," self",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"command_handlers",(0,a.jsx)(n.span,{className:"token punctuation",children:"["}),(0,a.jsx)(n.span,{className:"token builtin",children:"type"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),(0,a.jsx)(n.span,{className:"token punctuation",children:"]"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"return"})," handler",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"  ",(0,a.jsx)(n.span,{className:"token comment",children:"# <-- Return happening here"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"except"})," KeyError ",(0,a.jsx)(n.span,{className:"token keyword",children:"as"})," e",(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"exception",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                    ",(0,a.jsx)(n.span,{className:"token string-interpolation",children:(0,a.jsx)(n.span,{className:"token string",children:"f'Exception handling Command '"})}),"\n                    ",(0,a.jsxs)(n.span,{className:"token string-interpolation",children:[(0,a.jsx)(n.span,{className:"token string",children:"f'"}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:" no handler set'"})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n                    exc_info",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token boolean",children:"True"}),"\n                ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"raise"}),"\n            ",(0,a.jsx)(n.span,{className:"token keyword",children:"except"})," Exception ",(0,a.jsx)(n.span,{className:"token keyword",children:"as"})," e",(0,a.jsx)(n.span,{className:"token punctuation",children:":"}),"\n                logger",(0,a.jsx)(n.span,{className:"token punctuation",children:"."}),"exception",(0,a.jsx)(n.span,{className:"token punctuation",children:"("}),"\n                    ",(0,a.jsx)(n.span,{className:"token string-interpolation",children:(0,a.jsx)(n.span,{className:"token string",children:"f'Exception handling Command with '"})}),"\n                    ",(0,a.jsxs)(n.span,{className:"token string-interpolation",children:[(0,a.jsx)(n.span,{className:"token string",children:"f'return value "}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"message",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:" error: "}),(0,a.jsxs)(n.span,{className:"token interpolation",children:[(0,a.jsx)(n.span,{className:"token punctuation",children:"{"}),"e",(0,a.jsx)(n.span,{className:"token punctuation",children:"}"})]}),(0,a.jsx)(n.span,{className:"token string",children:"'"})]}),(0,a.jsx)(n.span,{className:"token punctuation",children:","}),"\n                    exc_info",(0,a.jsx)(n.span,{className:"token operator",children:"="}),(0,a.jsx)(n.span,{className:"token boolean",children:"True"}),"\n                ",(0,a.jsx)(n.span,{className:"token punctuation",children:")"}),"\n                ",(0,a.jsx)(n.span,{className:"token keyword",children:"raise"}),"\n"]})}),"\n",(0,a.jsx)(n.p,{children:"Both of those broke the crux of the Command and Query Responsibility Segregation which was used as the architecture of the codebase."}),"\n",(0,a.jsx)(n.h2,{children:"Extras"}),"\n",(0,a.jsx)(n.p,{children:"Because we could leverage the current process the team used the Excel file that was parsed used tab names to delineate which one to use."})]})}var h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,a.jsx)(d,Object.assign({},e,{children:(0,a.jsx)(p,e)}))}},9008:function(e,n,s){e.exports=s(5443)},1151:function(e,n,s){"use strict";s.d(n,{ah:function(){return o}});var a=s(7294);let t=a.createContext({});function o(e){let n=a.useContext(t);return a.useMemo(()=>"function"==typeof e?e(n):{...n,...e},[n,e])}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=8842)}),_N_E=e.O()}]);