(self.webpackChunkaspath_docs=self.webpackChunkaspath_docs||[]).push([[264],{9080:(e,s,t)=>{"use strict";t.r(s),t.d(s,{default:()=>E});var n=t(6252);const a=(0,n.Wm)("div",{class:"custom-container tip"},[(0,n.Wm)("p",{class:"custom-container-title"},"ASPATH is on early stage development"),(0,n.Wm)("p",null,"You can help us to get faster to our first stable release!")],-1),l=(0,n.Wm)("p",null,"We have some pending quests that need to be addressed:",-1),r=(0,n.Wm)("strong",null,"Website internationalization (i18n)",-1),i=(0,n.Uk)(": This website is powered by "),o={href:"https://vuepress.vuejs.org/",target:"_blank",rel:"noopener noreferrer"},p=(0,n.Uk)("VuePress"),c=(0,n.Uk)(", an static page generator that supports multi-language content out of the box."),u=(0,n.Uk)("To check how VuePress main website implements multiple languages, their "),m={href:"https://github.com/vuejs/vuepress/tree/master/packages/docs",target:"_blank",rel:"noopener noreferrer"},d=(0,n.Uk)("github repo"),h=(0,n.Uk)(" is available publicly."),g=(0,n.uE)('<p>To do list:</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Implement i18n functions on VuePress (needed for implementing other languages)</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Translate to Spanish</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Translate to Portuguese</li></ul>',2),b=(0,n.uE)('<li><p><strong>Refactoring / Code Quality</strong>: There are a lot of refactoring opportunities on both frontend and backend projects. Contributions that help get a better responsibility separation and adopt better code patterns are welcome.</p><p>To do list:</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Frontend: Split Vue components into smaller parts</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Backend: Decouple API logic from business logic.</li></ul></li>',1),k=(0,n.uE)('<p><strong>Quagga Parser Rewrite</strong>: The current quagga parser module uses 2 regex codes of an Apache-2.0 Licensed project. In order to keep the project MIT-licensed, a rewrite should be done to get rid of those snippets coming from a more restrictive licensing.</p><p>To do list:</p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> Re-implement the following regex:</li></ul><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>    APACHE_REGEX_3_2 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;^\\s*(?P&lt;status_codes&gt;(s|x|S|d|h|\\*|\\&gt;|m|r|\\s)+)?&#39;</span>\n                                  <span class="token string">r&#39;(?P&lt;path_type&gt;(i|e|c|l|a|r|I))?\\s{10,20}&#39;</span>\n                                  <span class="token string">r&#39;(?P&lt;next_hop&gt;[a-zA-Z0-9\\.\\:]+)&#39;</span>\n                                  <span class="token string">r&#39; +(?P&lt;metric&gt;(?:\\d+(?=[ \\d]{13}\\d ))?) +(?P&lt;weight&gt;\\d+)&#39;</span>\n                                  <span class="token string">r&#39;(?P&lt;path&gt;[0-9 \\S\\{\\}]+)$&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>',4),f={class:"contains-task-list"},W={class:"task-list-item"},x=(0,n.uE)('<p><input class="task-list-item-checkbox" disabled="" type="checkbox"> Re-implement the following regex:</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>APACHE_REGEX_P4 <span class="token operator">=</span> re<span class="token punctuation">.</span><span class="token builtin">compile</span><span class="token punctuation">(</span><span class="token string">r&#39;^\\s*(?P&lt;status_codes&gt;(?:s|x|S|d|h|m|r|\\*|\\&gt;|\\s)+)?&#39;</span>\n                        <span class="token string">r&#39;(?P&lt;path_type&gt;(?:i|e|c|l|a|r|I))? *&#39;</span>\n                        <span class="token string">r&#39;(?P&lt;prefix&gt;[a-zA-Z0-9\\.\\:\\/\\-\\[\\]]+) +&#39;</span>\n                        <span class="token string">r&#39;(?P&lt;next_hop&gt;[a-zA-Z0-9\\.\\:]+) +&#39;</span>\n                        <span class="token string">r&#39;(?P&lt;metric&gt;(?:\\d+(?=[ \\d]{13}\\d ))?) +&#39;</span>\n<span class="token comment">#                       r&#39;(?P&lt;local_prf&gt;(?:\\d+(?=[ \\d]{6}\\d ))?) +&#39;</span>\n                        <span class="token string">r&#39;(?P&lt;weight&gt;\\d+)(?P&lt;path&gt;[0-9 \\S\\{\\}]+)$&#39;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>Given that we are not using all that data, a much simpler regex string can be implemented. Also, the current implementation didn&#39;t completely work on sample PCH <code>show ip bgp</code> snapshots, hence the commented line.</p><h2 id="where-to-start"><a class="header-anchor" href="#where-to-start">#</a> Where to start</h2>',4),P={href:"https://discord.gg/2FT4XzNvqq",target:"_blank",rel:"noopener noreferrer"},y=(0,n.Uk)("Join our Discord server"),v={href:"https://github.com/aspathproject/aspath/issues/new",target:"_blank",rel:"noopener noreferrer"},w=(0,n.Uk)("Write an issue on Github"),_=(0,n.Uk)(" once you identify something you can contribute on."),T={href:"https://github.com/aspathproject/aspath/compare",target:"_blank",rel:"noopener noreferrer"},A=(0,n.Uk)("Create a Pull request"),U=(0,n.Uk)(" referencing the github issue you worked on."),E={render:function(e,s){const t=(0,n.up)("OutboundLink");return(0,n.wg)(),(0,n.j4)(n.HY,null,[a,l,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("p",null,[r,i,(0,n.Wm)("a",o,[p,(0,n.Wm)(t)]),c]),(0,n.Wm)("p",null,[u,(0,n.Wm)("a",m,[d,(0,n.Wm)(t)]),h]),g]),b,(0,n.Wm)("li",null,[k,(0,n.Wm)("ul",f,[(0,n.Wm)("li",W,[x,(0,n.Wm)("ul",null,[(0,n.Wm)("li",null,[(0,n.Wm)("a",P,[y,(0,n.Wm)(t)])]),(0,n.Wm)("li",null,[(0,n.Wm)("a",v,[w,(0,n.Wm)(t)]),_]),(0,n.Wm)("li",null,[(0,n.Wm)("a",T,[A,(0,n.Wm)(t)]),U])])])])])])],64)}}},3584:(e,s,t)=>{"use strict";t.r(s),t.d(s,{data:()=>n});const n={key:"v-9bc9a7a4",path:"/contributors-wanted.html",title:"",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"Where to start",slug:"where-to-start",children:[]}],filePathRelative:"contributors-wanted.md",git:{updatedTime:1621649683e3,contributors:[]}}}}]);