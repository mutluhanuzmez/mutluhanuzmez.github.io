(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{150:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return p});a(172);var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=(a(157),a(174)),l=a.n(o),c=a(161),d=a(162),u=a(158),f=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=this.props.data,t=e.site.siteMetadata.title,a=e.site.siteMetadata.author;return s.a.createElement(c.a,{location:this.props.location,title:t},s.a.createElement(d.a,{title:"Contact",keywords:["gmail","mutluhan","üzmez","email"]}),s.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},s.a.createElement("div",null,s.a.createElement("div",{style:{display:"flex",marginBottom:Object(u.a)(2.5)}},s.a.createElement(l.a,{fixed:e.avatar.childImageSharp.fixed,alt:a,style:{marginRight:Object(u.a)(.5),marginBottom:0,minWidth:100,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),s.a.createElement("h1",null,"Mutluhan ÜZMEZ")),s.a.createElement("div",null,s.a.createElement("h3",null,"mutluhanuzmez@gmail.com"),s.a.createElement("p",null,"You can send an email to me by form at the right!"))),s.a.createElement("div",{style:{padding:Object(u.a)(2.5),marginLeft:Object(u.a)(2.5)}},s.a.createElement("form",{style:{display:"flex",flexDirection:"column",justifyContent:"flex-start",alignItems:"flex-start",marginBottom:Object(u.a)(2.5)},action:"https://formspree.io/mutluhanuzmez@gmail.com",method:"POST"},s.a.createElement("input",{style:{height:Object(u.a)(1),marginBottom:Object(u.a)(1/8),width:Object(u.a)(20),opacity:.5,color:"black",paddingLeft:Object(u.a)(1/8)},placeholder:"Name",type:"text",name:"name"}),s.a.createElement("input",{style:{height:Object(u.a)(1),marginBottom:Object(u.a)(1/8),width:Object(u.a)(20),opacity:.5,color:"black",paddingLeft:Object(u.a)(1/8)},placeholder:"Your Email",type:"email",name:"_replyto"}),s.a.createElement("textarea",{style:{height:Object(u.a)(5),marginBottom:Object(u.a)(1/8),width:Object(u.a)(20),opacity:.5,color:"black",paddingLeft:Object(u.a)(1/8)},name:"message",placeholder:"Message"}),s.a.createElement("input",{style:{height:Object(u.a)(1),marginBottom:Object(u.a)(1/8),width:Object(u.a)(20),opacity:.6,borderRadius:5,color:"white",backgroundColor:"#111",paddingBottom:Object(u.a)(1)},type:"submit",value:"Send"})))))},t}(s.a.Component);t.default=f;var p="2057776395"},157:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(32),l=a.n(o);a.d(t,"a",function(){return l.a});a(159);var c=r.a.createContext({}),d=function(e){return r.a.createElement(c.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};d.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(e,t,a){"use strict";a.d(t,"a",function(){return l}),a.d(t,"b",function(){return c});var i=a(164),r=a.n(i),n=a(165),s=a.n(n);s.a.overrideThemeStyles=function(){return{"a.gatsby-resp-image-link":{boxShadow:"none"}}},delete s.a.googleFonts;var o=new r.a(s.a);var l=o.rhythm,c=o.scale},159:function(e,t,a){var i;e.exports=(i=a(160))&&i.default||i},160:function(e,t,a){"use strict";a.r(t);a(33);var i=a(0),r=a.n(i),n=a(4),s=a.n(n),o=a(54),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},161:function(e,t,a){"use strict";var i=a(7),r=a.n(i),n=a(0),s=a.n(n),o=a(157),l=a(158),c=(a(146),function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e,t=this.props,a=(t.title,t.children);return e=s.a.createElement("div",{className:"Header"},s.a.createElement("h2",{className:"TitleStyle"},s.a.createElement(o.a,{className:"TitleStyle",to:"/"},"Mutluhan Üzmez")),s.a.createElement("ul",{className:"Navbar",style:{paddingRight:Object(l.a)(.75)}},s.a.createElement("li",{className:"NavLi"},s.a.createElement(o.a,{to:"/contact"},"Contact")),s.a.createElement("li",{className:"NavLi"},s.a.createElement(o.a,{to:"/resume"},"Resume")),s.a.createElement("li",{className:"NavLi"},s.a.createElement(o.a,{to:"/stack"},"Stack")),s.a.createElement("li",{className:"NavLi"},s.a.createElement(o.a,{to:"/"},"Blog")))),s.a.createElement("div",{class:"mainContainer"},s.a.createElement("header",null,e),s.a.createElement("main",{style:{marginLeft:"auto",marginRight:"auto",maxWidth:Object(l.a)(48),padding:Object(l.a)(1,5)+" "+Object(l.a)(.75)}},a),s.a.createElement("footer",null))},t}(s.a.Component));t.a=c},162:function(e,t,a){"use strict";var i=a(163),r=a(0),n=a.n(r),s=a(4),o=a.n(s),l=a(166),c=a.n(l),d=a(157);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return n.a.createElement(d.b,{query:f,render:function(e){var i=t||e.site.siteMetadata.description;return n.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:o},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:i})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var f="1025518380"},163:function(e){e.exports={data:{site:{siteMetadata:{title:"Mutluhan ÜZMEZ",description:"A starter blog demonstrating what Gatsby can do.",author:"Mutluhan ÜZMEZ"}}}}},172:function(e,t,a){"use strict";a(173)("fixed",function(e){return function(){return e(this,"tt","","")}})},173:function(e,t,a){var i=a(11),r=a(17),n=a(18),s=/"/g,o=function(e,t,a,i){var r=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(i).replace(s,"&quot;")+'"'),o+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),i(i.P+i.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},174:function(e,t,a){"use strict";var i=a(8);t.__esModule=!0,t.default=void 0;var r,n=i(a(7)),s=i(a(34)),o=i(a(74)),l=i(a(75)),c=i(a(0)),d=i(a(4)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",i=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",n=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+i+r+"<img "+o+l+t+s+n+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},y=c.default.forwardRef(function(e,t){var a=e.style,i=e.onLoad,r=e.onError,n=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},n,{onLoad:i,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});y.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var b=function(e){function t(t){var a;a=e.call(this,t)||this;var i=!0,r=!1,n=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=!1,r=!0),"undefined"==typeof window&&(i=!1),t.critical&&(i=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:i,imgLoaded:!1,IOSupported:r,fadeIn:n,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,n.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,i=e.className,r=e.style,n=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.Tag,E=e.itemProp,w="boolean"==typeof b?"lightgray":b,S=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,f),L=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),j={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var O=m;return c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(v,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),O.base64&&c.default.createElement(y,(0,l.default)({src:O.base64},j)),O.tracedSVG&&c.default.createElement(y,(0,l.default)({src:O.tracedSVG},j)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement("source",{srcSet:O.srcSet,sizes:O.sizes}),c.default.createElement(y,{alt:a,title:t,src:O.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t},O))}}))}if(h){var R=h,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:R.width,height:R.height},n);return"inherit"===n.display&&delete N.display,c.default.createElement(v,{className:(i||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(R.srcSet)},R.base64&&c.default.createElement(y,(0,l.default)({src:R.base64},j)),R.tracedSVG&&c.default.createElement(y,(0,l.default)({src:R.tracedSVG},j)),w&&c.default.createElement(v,{title:t,style:{backgroundColor:w,width:R.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:R.height}}),this.state.isVisible&&c.default.createElement("picture",null,R.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:R.srcSetWebp,sizes:R.sizes}),c.default.createElement("source",{srcSet:R.srcSet,sizes:R.sizes}),c.default.createElement(y,{alt:a,title:t,width:R.width,height:R.height,src:R.src,style:L,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,l.default)({alt:a,title:t,width:R.width,height:R.height},R))}}))}return null},t}(c.default.Component);b.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var v=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),E=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});b.propTypes={resolutions:v,sizes:E,fixed:v,fluid:E,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string};var w=b;t.default=w}}]);
//# sourceMappingURL=component---src-pages-contact-js-429ffd8cf3f3a7124101.js.map