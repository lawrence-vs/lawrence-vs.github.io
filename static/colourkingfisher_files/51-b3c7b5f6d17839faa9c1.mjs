(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[51,12],{"0YPa":function(e,t,n){var i=n("q1tI");t.a=(e,t)=>{const n=Object(i.useRef)(()=>{});Object(i.useEffect)(()=>{n.current=e},[e]),Object(i.useEffect)(()=>{if(null===t)return()=>{};const e=setInterval(()=>n.current(),t);return()=>clearInterval(e)},[t])}},"3/Bf":function(e,t,n){n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return l})),n.d(t,"c",(function(){return d})),n.d(t,"b",(function(){return f})),n.d(t,"d",(function(){return m}));var i=n("7w6Q"),r=n("FZ8N"),o=n("LrH5");const a=Object(o.a)("logPwtStats");let u=null,c=!0;const s=e=>{u=e},l=e=>{u&&(u.historyAction=e)},d=(e,t,n=!0)=>{if(!u)return a("pwt.metrics_quality.no_context"),void i.a.increment("pwt.metrics_quality.no_context",1,{eventName:e});const{browserName:o,browserVersion:c,deviceType:s,isBot:l,isSocialBot:d}=u,f=`pwt.${(d?"socialBot":l&&"bot")||"nonbot"}.metrics_quality.${s}.${e}`,m={...(null==t?void 0:t.tags)||{},browserName:o,browserVersion:(null==c?void 0:c.split(".")[0])||"0"},p=null==t?void 0:t.count;n&&(a(`${f}: ${"number"==typeof p?p:1}`),null!=t&&t.tags&&a(Object.entries(t.tags))),r.c||i.a.count(f,"number"==typeof p?p:1,1,m)},f=(e,t)=>d(`ERROR.${null!=t&&t.action?t.action+".":""}${e}`,{tags:t}),m=({appLoadName:e,clientNavName:t},n)=>{if(u){const i="APP_VOLUME.";c?(d(i.concat(e),{tags:{browserSupportsPwtProfiler:!!n}}),c=!1):"PUSH"===u.historyAction&&d(i.concat(t),{tags:{browserSupportsPwtProfiler:!!n}})}else i.a.increment("pwt.metrics_quality.no_context",1,{eventName:e.concat("."+t)})}},FZ8N:function(e,t,n){n.d(t,"a",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"b",(function(){return o}));const i=window.location.search.includes("debug_tracing"),r=window.location.search.includes("debug_lab_tracing"),o=i||r},HMdf:function(e,t,n){n.d(t,"f",(function(){return d})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return g})),n.d(t,"a",(function(){return _})),n.d(t,"e",(function(){return b})),n.d(t,"b",(function(){return w})),n.d(t,"g",(function(){return v}));var i=n("fyR6"),r=n("vzKb"),o=n("SyXB"),a=n("K8G+"),u=n("FZ8N"),c=n("3/Bf");let s;function l(){window.performance&&window.performance.clearResourceTimings&&(Object(o.c)("resourceBufferCleared"),u.b&&console.info("Warning: Clearing resource timings in default buffer."),Object(c.c)("resourceBufferSize",{count:Object(a.a)("resource").length}),window.performance.clearResourceTimings())}const d=({size:e})=>{if(window.performance){window.PerformanceObserver?(s=Object(a.a)("resource"),Object(r.a)({entryTypes:["resource"]},t=>{s=(s||[]).concat(t.getEntries()),s.length>e&&(s=s.slice(-e))})):(window.addEventListener("popstate",()=>{Object(a.a)("resource").length>e&&l()}),window.performance.setResourceTimingBufferSize&&window.performance.setResourceTimingBufferSize(e));try{window.performance.onresourcetimingbufferfull=()=>{s||l()}}catch(t){}}},f=()=>s||Object(a.a)("resource"),m=Object(i.a)(f),p=f,g=()=>m.get(),_=e=>{e&&m.save(),s&&(Object(c.c)("customBufferSize",{count:s.length}),s=[]),l()},b=()=>({customBufferSize:s?s.length:0,defaultBufferSize:Object(a.a)("resource").length}),w=(e,t=!0)=>{let n=0,i=0;const r=(o=e.filter(e=>t?(e.responseEnd||"img"!==e.initiatorType||(n+=1),e.transferSize||"img"!==e.initiatorType||(i+=1),!!e.responseEnd&&!!e.transferSize&&"img"===e.initiatorType):!!e.responseEnd&&!!e.transferSize).map(e=>8*(e.transferSize||0)/((e.responseEnd-e.responseStart)/1e3)/1e3)).length?o.reduce((e,t)=>e+t,0)/o.length:null;var o;return t&&(n>0&&Object(c.c)("images.downloadSpeed.noResponseEnd",{tags:{count:n}},!1),i>0&&Object(c.c)("images.downloadSpeed.transferSize",{tags:{count:i}},!1)),r},v=e=>{if(!e)return"unknown";const t=Math.floor(e/1e3);return t<1?"0-1":t<5?"1-5":t<10?"5-10":t<20?"10-20":t<40?"20-40":t<80?"40-80":"80_or_above"}},"K8G+":function(e,t,n){function i(e){var t,n;return(null===(t=window)||void 0===t||null===(n=t.performance)||void 0===n?void 0:n.getEntriesByType)&&window.performance.getEntriesByType(e)||[]}n.d(t,"a",(function(){return i}))},LrH5:function(e,t,n){n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var i=n("FZ8N");const r=(e,t)=>{i.b&&(e.style.outline="10px solid "+t,e.style.outlineOffset="-30px")},o=e=>(t,...n)=>{i.b&&console.log("string"==typeof t?`[PWT:${e}] ${t}`:t,...n)}},SyXB:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return c})),n.d(t,"f",(function(){return s})),n.d(t,"b",(function(){return l}));var i=n("XtwW");const r="masonryPagination";let o={};const a=e=>"📌 "+e,u=()=>{const e={};return Object.keys(o).forEach(t=>{(o[t]||[]).slice(0,3).forEach((n,i)=>{e[i?`${t}_${i+1}`:t]=n})}),e},c=(e,t)=>(o[e]||[]).filter(e=>e<t).length,s=(e,t)=>c(e,t)>0,l=()=>{i.a&&Object.keys(o).forEach(e=>((e,t)=>{const n=a(t);e.clearMarks(n),e.clearMeasures(n)})(i.a,e)),o={}};t.c=e=>{i.a&&(o[e]=(o[e]||[]).concat([i.a.now()]),((e,t)=>{const n=a(t);e.mark(n),e.measure(n)})(i.a,e))}},XtwW:function(e,t,n){var i;t.a=(i=window.performance)&&i.clearMarks&&i.clearMeasures&&i.clearResourceTimings&&i.getEntries&&i.getEntriesByName&&i.getEntriesByType&&i.mark&&i.measure&&i.now&&i.setResourceTimingBufferSize?i:null},bNC6:function(e,t,n){n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return l}));const i={id:14,name:"own_profile"},r={id:15,name:"other_profile"},o={initial_app_load:{unauth:{board:{id:114,name:"board_page_interactive"},pin_closeup:{id:113,name:"pin_page_interactive"},other_profile:{id:115,name:"user_page_interactive"},topic:{id:119,name:"topic_page_interactive"},sterling_signup:{id:201,name:"sterling_signup_main_pageload"},sterling_login:{id:202,name:"sterling_login_main_pageload"}},auth:{bizhub:{id:607,name:"bizhub_pinteractive"},homefeed:{id:19,name:"home_feed_pinteractive"},sterling_reporting_details:{id:218,name:"sterling_reporting_details_pageload"},sterling_reporting_overview:{id:219,name:"sterling_reporting_overview_pageload"},sterling_ads_create:{id:221,name:"sterling_adscreate_main_pageload"},sterling_ads_duplicate:{id:206,name:"sterling_adsduplication_main_pageload"},sterling_ads_edit:{id:204,name:"sterling_adsedit_main_pageload"},sterling_billing_profile:{id:203,name:"sterling_billingprofile_main_pageload"},sterling_bulk_editor:{id:205,name:"sterling_bulkeditor_main_pageload"},sterling_pin_builder:{id:222,name:"sterling_adscreate_pinbuilder_pageload"}}},client_route_push:{unauth:{},auth:{bizhub:{id:608,name:"bizhub_page_render"},homefeed:{id:2,name:"home_feed_render"},search:{id:3,name:"search_feed_render"},pin_closeup:{id:13,name:"pin_closeup_details"},own_profile:i,other_profile:r}},client_route_replace:{unauth:{},auth:{own_profile:i,other_profile:r}}},a={client_route_push:{auth:{pin_closeup:{story_pin:{id:700,name:"story_pin_closeup"}}}}},u={board_picker:16,grid_bottom_spinner:12,facebook_autologin:500,google_autologin:501,story_pin_step:701},c=e=>{var t,n;const{navigationType:i,isAuthenticated:r,segment:u,surface:c}=e,s=r?"auth":"unauth",l=null===(t=a[i])||void 0===t||null===(n=t[s])||void 0===n?void 0:n[c];return u&&l&&l[u]||o[i][s][c]},s=e=>{if("stopwatch"===e.type)return u[e.name]||null;const t=c(e);return t?t.id:null},l=e=>{if("stopwatch"===e.type)return e.name;const{navigationType:t,isAuthenticated:n,segment:i,surface:r}=e,o=n?"auth":"unauth",a=c(e);return a?a.name:`${t}_${o}_${r}${i?"_"+i:""}`}},bZU8:function(e,t,n){n.d(t,"c",(function(){return i})),n.d(t,"d",(function(){return o})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return u})),n.d(t,"e",(function(){return c}));const i="pwt-grid-item",r=['div[data-grid-item="true"]',"div.Masonry div.Collection-Item","div.Grid__Item",`div[data-test-id="${i}"]`],o=r.join(","),a=r.map(e=>e+" img").join(","),u=r.map(e=>e+" div[style*=background-image]").join(","),c=r.map(e=>e+" video").join(",")},fyR6:function(e,t,n){t.a=e=>{let t=null;return{get:()=>t||e(),save:()=>{t=e()}}}},gg0E:function(e,t,n){n.d(t,"a",(function(){return _})),n.d(t,"b",(function(){return w}));var i=n("q1tI"),r=n("SyXB"),o=n("0YPa"),a=n("bNC6"),u=n("HMdf"),c=n("3/Bf"),s=n("y2Ga"),l=n("bZU8");const d=(e,t)=>{const n=(e=>e instanceof HTMLDivElement||e instanceof HTMLVideoElement?e.getBoundingClientRect():e.parentElement instanceof HTMLElement?e.parentElement.getBoundingClientRect():null)(e);if(!n)return Object(c.b)("missing_client_rect"),!1;return!(e instanceof HTMLImageElement&&n.width<100&&n.height<100)&&(({top:e,height:t},{foldY:n,pageYOffset:i})=>{const r=e+i;if(r>=n)return!1;const o=Math.min(t,n-r);return o>.5*t||o>.2*n})(n,t)},f=()=>{const e=(()=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),null;const e=document.querySelectorAll(l.d);return e[e.length-1]||null})();if(!e)return!1;const t=window.innerHeight||0,n=window.pageYOffset||0;return e.getBoundingClientRect().top+n>=t},m=(e,t)=>{if(!document.querySelector)return Object(c.b)("missing_document_query_selector"),[];const n={foldY:window.innerHeight||0,pageYOffset:window.pageYOffset||0},i=[l.b,...e?[l.a]:[],...t?[l.e]:[]].join(",");return[...document.querySelectorAll(i)].reduce((e,i)=>{if((i instanceof HTMLImageElement||i instanceof HTMLDivElement||i instanceof HTMLVideoElement&&t)&&d(i,n)){const t=(e=>{if(e instanceof HTMLImageElement)return e.src;if(e instanceof HTMLVideoElement)return e.attributes.poster.value;const t=((e.style||{}).backgroundImage||"").match(/^url\(["'](http.*)["']\)$/);return t&&t[1]||null})(i);if(t)return e.concat([{htmlElement:i,url:t}])}return e},[])};var p=n("LrH5");const g=Object(p.a)("GridProfiler"),_=()=>!!(window.addEventListener&&window.removeEventListener&&"number"==typeof window.innerHeight&&"number"==typeof window.pageYOffset&&document.querySelector&&document.querySelectorAll),b=(e,t)=>{if(!t){const t=document.querySelector?document.querySelectorAll(l.d).length:(Object(c.b)("missing_document_query_selector"),0);if(t===e)return g("No new items, so skip the viewport-fill check."),{complete:!1,numOfItemsChecked:e};if(!f())return g("Viewport may not be filled yet."),{complete:!1,numOfItemsChecked:t}}return{complete:!0}};function w({isAtEndOfFeed:e,pinData:t,includeBackgroundImages:n,includeVideos:l=!1}){const d=Object(s.c)(),f=null==d?void 0:d.id,_=null==d?void 0:d.setVisuallyCompleteResult,[w,v]=Object(i.useState)({status:"DISABLED"});Object(i.useEffect)(()=>{v(_?{status:"LAYOUT",failedCount:0,numOfItemsChecked:0}:{status:"DISABLED"})},[f,_]),Object(i.useEffect)(()=>{if("DISABLED"!==w.status&&Object(r.c)("GridVisuallyCompleteProfiler_"+w.status),g("new status",w),"LAYOUT"===w.status){const e=((e,t)=>{const n=()=>{window.removeEventListener(e,n),t()};return window.addEventListener(e,n),()=>window.removeEventListener(e,n)})("scroll",()=>{Object(r.c)("scrollDuringLayout")});return()=>{e()}}return()=>{}},[w.status]),Object(o.a)(()=>{if(!d||!_)return;const{abort:i,metricId:r}=d;switch(w.status){case"LAYOUT":{const t=b(w.numOfItemsChecked,e);t.complete?v({status:"TIMING",failedCount:0,pinElements:m(n,l).map(({htmlElement:e,url:t})=>({fileName:(t||"").replace(/.*\//,""),element:e}),[])}):500*w.failedCount>6e4?(Object(c.c)(`images.${Object(a.b)(r)}.visuallyComplete.maxLayoutAttempt`),i("visuallyComplete_layoutTimeout"),v({status:"DISABLED"})):v({...w,failedCount:w.failedCount+1,numOfItemsChecked:t.numOfItemsChecked});break}case"TIMING":{const e=Object(u.c)(),n=w.pinElements.length,o=[];let s=0,l=0,f=0;if(w.pinElements.forEach(({element:t,fileName:n})=>{const i=e.find(e=>("img"===e.initiatorType||"css"===e.initiatorType)&&e.name.endsWith(n));i?i.responseEnd?(o.push(i),Object(p.b)(t,"green")):(f+=1,Object(p.b)(t,"blue")):t instanceof HTMLImageElement&&t.complete?(l+=1,Object(p.b)(t,"red")):(s+=1,Object(p.b)(t,"greenyellow"))}),s||f)100*w.failedCount>6e4?(Object(c.c)(`images.${Object(a.b)(r)}.visuallyComplete.maxAttempt`,{tags:{totalImageCount:n,incompleteCount:s,noTimingCount:l,noTimingResponseEndCount:f}}),i("visuallyComplete_timingTimeout"),v({status:"DISABLED"})):v({...w,failedCount:w.failedCount+1});else{if(g(`All ${o.length} images are fetched`),t&&t.length){const e=((e,t)=>{let n=0,i=0,r=0,o=0,a=0;return e=e.filter(e=>"pin"===e.type),t.forEach((t,u)=>{var c,s,l,d,f,m;const p=t.fileName.split(".")[0];let g;g=e[u],p!==(null===(c=g)||void 0===c?void 0:c.image_signature)&&(g=e.find(e=>p===(null==e?void 0:e.image_signature))||{}),void 0===g?a+=1:g.is_promoted||"PROMOTED_PIN"===(null===(s=g.recommendation_reason)||void 0===s?void 0:s.reason)||null!==(l=g)&&void 0!==l&&null!==(d=l.promoter)&&void 0!==d&&d.length?r+=1:null!==g.story_pin_data_id&&void 0!==g.story_pin_data_id?n+=1:null!==(f=g)&&void 0!==f&&null!==(m=f.videos)&&void 0!==m&&m.video_list?i+=1:o+=1}),{storyPinCount:n,videoCount:i,adCount:r,imageCount:o,unknownCount:a}})(t,w.pinElements);Object.entries(e).forEach(([e,t])=>{d.addBinaryAnnotation(e,t,"I16")}),Object(c.c)(Object(a.b)(r)+".pinTypes",{tags:e})}_({imageTimings:o}),v({status:"DISABLED"}),Object(c.c)(`images.${Object(a.b)(r)}.visuallyComplete.complete`,{tags:{totalImageCount:n,noTimingCount:l}})}break}}},(e=>("LAYOUT"===e.status?500:"TIMING"===e.status&&100)||null)(w))}},vzKb:function(e,t,n){t.a=(e,t,n)=>{if(!window.PerformanceObserver)return null;try{const i=new window.PerformanceObserver(t);return i.observe(e),window.addEventListener("beforeunload",()=>{i.disconnect()}),n&&window.addEventListener("popstate",()=>{n()}),i}catch(i){return null}}},y2Ga:function(e,t,n){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return a}));var i=n("1dBE");const{Consumer:r,Provider:o,useHook:a}=Object(i.b)("pwtSurfaceContext")}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/51-b3c7b5f6d17839faa9c1.mjs.map