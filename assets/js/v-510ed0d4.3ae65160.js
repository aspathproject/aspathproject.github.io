(self.webpackChunkaspath_docs=self.webpackChunkaspath_docs||[]).push([[495],{1668:(e,a,t)=>{"use strict";t.r(a),t.d(a,{default:()=>F});var o=t(6252);const r=(0,o.Wm)("h1",{id:"changelog"},[(0,o.Wm)("a",{class:"header-anchor",href:"#changelog"},"#"),(0,o.Uk)(" Changelog")],-1),n=(0,o.Wm)("h2",{id:"may-14-2021"},[(0,o.Wm)("a",{class:"header-anchor",href:"#may-14-2021"},"#"),(0,o.Uk)(" May 14, 2021")],-1),l=(0,o.Uk)("Guide"),s=(0,o.Uk)(" page has been added to the website."),i=(0,o.Wm)("li",null,[(0,o.Uk)("A fully working PCH Daily Routing Snapshot grabber, parser and ingester has been tested and should be available on "),(0,o.Wm)("code",null,"develop"),(0,o.Uk)(" branch on the following days.")],-1),d=(0,o.Uk)("A "),h={href:"https://discord.gg/2FT4XzNvqq",target:"_blank",rel:"noopener noreferrer"},u=(0,o.Uk)("Discord server"),c=(0,o.Uk)(" has been created to be in contact with people that wants to contribute or need help deploying an early version of the software."),p=(0,o.Uk)("Thanks everyone for the interest in the project. You can watch again the "),m={href:"https://www.youtube.com/watch?v=Mt_oW5CtU5c",target:"_blank",rel:"noopener noreferrer"},g=(0,o.Uk)("LACNIC 35 ASPATH presentation"),b=(0,o.Uk)(" on Youtube."),k=(0,o.Wm)("li",null,[(0,o.Uk)("If you want to collaborate on this project and don't know where to start, you can check the new "),(0,o.Wm)("a",{href:"/contributors-wanted"},"Contributors Wanted"),(0,o.Uk)(" page.")],-1),f=(0,o.uE)('<h2 id="may-9-2021"><a class="header-anchor" href="#may-9-2021">#</a> May 9, 2021</h2><ul><li>Groundwork for grabber modules: route collector entries in database will also have a &#39;driver&#39; and &#39;driver_opts&#39; column to be able to execute the corresponding procedure to grab and parse new snapshots.</li><li>PCH Daily Routing Snapshots will be the first driver to be implemented (WIP). An scraper module will grab new datasets from https://www.pch.net/resources/Routing_Data/IPv4_daily_snapshots/ and Quagga/Cisco parser will process and add the routing snapshots to database.</li></ul><h2 id="may-8-2021"><a class="header-anchor" href="#may-8-2021">#</a> May 8, 2021</h2><ul><li>Frontend: Implemented snapshot browsing capability. Now it&#39;s possible to quickly search and look any routing snapshot from the same route collector.</li><li>API: Snapshot metadata is now included in snapshots/:id/routes, including snapshot ID and creation date.</li></ul><h2 id="apr-16-2021"><a class="header-anchor" href="#apr-16-2021">#</a> Apr 16, 2021</h2>',5),w=(0,o.Wm)("li",null,"Backend API development is now public. Python FastAPI, Celery and Masonite ORM are the main technologies being used for this module.",-1),W=(0,o.Uk)("ASPATH code repository is now a "),y=(0,o.Wm)("strong",null,"monorepo",-1),U=(0,o.Uk)(" and it's available on "),v={href:"https://github.com/aspathproject/aspath",target:"_blank",rel:"noopener noreferrer"},A=(0,o.Uk)("ASPATH project github page"),C=(0,o.Uk)(". Code will be maintained in "),_=(0,o.Wm)("code",null,"develop",-1),M=(0,o.Uk)(" branch until an stable version is released."),P=(0,o.Wm)("li",null,[(0,o.Uk)("Implemented easy deployment using docker-compose. Now it's possible to start the software by cloning the main repository and using "),(0,o.Wm)("code",null,"docker-compose up"),(0,o.Uk)(" command.")],-1),I=(0,o.Wm)("li",null,[(0,o.Uk)("Docker-compose deployment is configured with a portable "),(0,o.Wm)("code",null,"data"),(0,o.Uk)(" folder. This folder will contain every file related to postgres database and redis instance to make it easier to backup or move to another machine.")],-1),R=(0,o.Wm)("h2",{id:"mar-25-2021"},[(0,o.Wm)("a",{class:"header-anchor",href:"#mar-25-2021"},"#"),(0,o.Uk)(" Mar 25, 2021")],-1),S=(0,o.Uk)("Website is launched on "),j={href:"https://aspath.app",target:"_blank",rel:"noopener noreferrer"},D=(0,o.Uk)("aspath.app"),T=(0,o.Uk)("."),H=(0,o.Uk)("Created a Revue profile for newsletter service. Subscribe on our "),N={href:"https://www.getrevue.co/profile/aspath",target:"_blank",rel:"noopener noreferrer"},q=(0,o.Uk)("Revue profile"),E=(0,o.Uk)(" to get updates about the project and major releases."),F={render:function(e,a){const t=(0,o.up)("RouterLink"),F=(0,o.up)("OutboundLink");return(0,o.wg)(),(0,o.j4)(o.HY,null,[r,n,(0,o.Wm)("ul",null,[(0,o.Wm)("li",null,[(0,o.Wm)(t,{to:"/guide/"},{default:(0,o.w5)((()=>[l])),_:1}),s]),i,(0,o.Wm)("li",null,[d,(0,o.Wm)("a",h,[u,(0,o.Wm)(F)]),c]),(0,o.Wm)("li",null,[p,(0,o.Wm)("a",m,[g,(0,o.Wm)(F)]),b]),k]),f,(0,o.Wm)("ul",null,[w,(0,o.Wm)("li",null,[W,y,U,(0,o.Wm)("a",v,[A,(0,o.Wm)(F)]),C,_,M]),P,I]),R,(0,o.Wm)("ul",null,[(0,o.Wm)("li",null,[S,(0,o.Wm)("a",j,[D,(0,o.Wm)(F)]),T]),(0,o.Wm)("li",null,[H,(0,o.Wm)("a",N,[q,(0,o.Wm)(F)]),E])])],64)}}},3437:(e,a,t)=>{"use strict";t.r(a),t.d(a,{data:()=>o});const o={key:"v-510ed0d4",path:"/changelog/",title:"Changelog",lang:"en-US",frontmatter:{sidebar:"auto"},excerpt:"",headers:[{level:2,title:"May 14, 2021",slug:"may-14-2021",children:[]},{level:2,title:"May 9, 2021",slug:"may-9-2021",children:[]},{level:2,title:"May 8, 2021",slug:"may-8-2021",children:[]},{level:2,title:"Apr 16, 2021",slug:"apr-16-2021",children:[]},{level:2,title:"Mar 25, 2021",slug:"mar-25-2021",children:[]}],filePathRelative:"changelog/README.md",git:{updatedTime:1621649683e3,contributors:[]}}}}]);