const j=document.getElementById("btnMail");j?.addEventListener("click",i=>{const e=document.getElementById("miTextoClicable"),t=document.createElement("textarea");t.value=e.innerText,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),e.innerText="copy",setTimeout(()=>{e.innerText="c"},600),setTimeout(()=>{e.innerText="ca"},700),setTimeout(()=>{e.innerText="cas"},800),setTimeout(()=>{e.innerText="cast"},900),setTimeout(()=>{e.innerText="casta"},1e3),setTimeout(()=>{e.innerText="castan"},1100),setTimeout(()=>{e.innerText="castane"},1200),setTimeout(()=>{e.innerText="castaned"},1300),setTimeout(()=>{e.innerText="castaneda"},1400),setTimeout(()=>{e.innerText="castanedad"},1500),setTimeout(()=>{e.innerText="castanedad1"},1600),setTimeout(()=>{e.innerText="castanedad12"},1700),setTimeout(()=>{e.innerText="castanedad121"},1800),setTimeout(()=>{e.innerText="castanedad121@"},1900),setTimeout(()=>{e.innerText="castanedad121@g"},2e3),setTimeout(()=>{e.innerText="castanedad121@gm"},2100),setTimeout(()=>{e.innerText="castanedad121@gma"},2200),setTimeout(()=>{e.innerText="castanedad121@gmai"},2300),setTimeout(()=>{e.innerText="castanedad121@gmail"},2400),setTimeout(()=>{e.innerText="castanedad121@gmail."},2500),setTimeout(()=>{e.innerText="castanedad121@gmail.c"},2600),setTimeout(()=>{e.innerText="castanedad121@gmail.co"},2700),setTimeout(()=>{e.innerText="castanedad121@gmail.com"},2800)});function T(i,e){if(!(i instanceof e))throw new TypeError("Cannot call a class as a function")}function g(i,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(i,n.key,n)}}function p(i,e,t){return e&&g(i.prototype,e),t&&g(i,t),i}function I(i){return+i.replace(/px/,"")}function O(i){var e=window.devicePixelRatio,t=getComputedStyle(i),n=I(t.getPropertyValue("width")),a=I(t.getPropertyValue("height"));i.setAttribute("width",(n*e).toString()),i.setAttribute("height",(a*e).toString())}function h(i,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,n=Math.random()*(e-i)+i;return Math.floor(n*Math.pow(10,t))/Math.pow(10,t)}function S(i){return i[h(0,i.length)]}var F=.00125,M=5e-4,w=9e-4,D=1e-5,L=6,k=80,B=.9,q=1.7,z=.2,U=.6,X=.03,W=.07,_=15,y=82,H=150,V=100,$=250,G=40,Y=["#fcf403","#62fc03","#f4fc03","#03e7fc","#03fca5","#a503fc","#fc03ad","#fc03c2"];function E(i){var e=1920;return Math.log(i)/Math.log(e)}var A=function(){function i(e){T(this,i);var t=e.initialPosition,n=e.direction,a=e.confettiRadius,s=e.confettiColors,o=e.emojis,u=e.emojiSize,c=e.canvasWidth,d=h(B,q,3),r=d*E(c);this.confettiSpeed={x:r,y:r},this.finalConfettiSpeedX=h(z,U,3),this.rotationSpeed=o.length?.01:h(X,W,3)*E(c),this.dragForceCoefficient=h(M,w,6),this.radius={x:a,y:a},this.initialRadius=a,this.rotationAngle=n==="left"?h(0,.2,3):h(-.2,0,3),this.emojiSize=u,this.emojiRotationAngle=h(0,2*Math.PI),this.radiusYUpdateDirection="down";var l=n==="left"?h(y,_)*Math.PI/180:h(-_,-y)*Math.PI/180;this.absCos=Math.abs(Math.cos(l)),this.absSin=Math.abs(Math.sin(l));var m=h(-H,0),f={x:t.x+(n==="left"?-m:m)*this.absCos,y:t.y-m*this.absSin};this.currentPosition=Object.assign({},f),this.initialPosition=Object.assign({},f),this.color=o.length?null:S(s),this.emoji=o.length?S(o):null,this.createdAt=new Date().getTime(),this.direction=n}return p(i,[{key:"draw",value:function(t){var n=this.currentPosition,a=this.radius,s=this.color,o=this.emoji,u=this.rotationAngle,c=this.emojiRotationAngle,d=this.emojiSize,r=window.devicePixelRatio;s?(t.fillStyle=s,t.beginPath(),t.ellipse(n.x*r,n.y*r,a.x*r,a.y*r,u,0,2*Math.PI),t.fill()):o&&(t.font="".concat(d,"px serif"),t.save(),t.translate(r*n.x,r*n.y),t.rotate(c),t.textAlign="center",t.fillText(o,0,0),t.restore())}},{key:"updatePosition",value:function(t,n){var a=this.confettiSpeed,s=this.dragForceCoefficient,o=this.finalConfettiSpeedX,u=this.radiusYUpdateDirection,c=this.rotationSpeed,d=this.createdAt,r=this.direction,l=n-d;if(a.x>o&&(this.confettiSpeed.x-=s*t),this.currentPosition.x+=a.x*(r==="left"?-this.absCos:this.absCos)*t,this.currentPosition.y=this.initialPosition.y-a.y*this.absSin*l+F*Math.pow(l,2)/2,this.rotationSpeed-=this.emoji?1e-4:D*t,this.rotationSpeed<0&&(this.rotationSpeed=0),this.emoji){this.emojiRotationAngle+=this.rotationSpeed*t%(2*Math.PI);return}u==="down"?(this.radius.y-=t*c,this.radius.y<=0&&(this.radius.y=0,this.radiusYUpdateDirection="up")):(this.radius.y+=t*c,this.radius.y>=this.initialRadius&&(this.radius.y=this.initialRadius,this.radiusYUpdateDirection="down"))}},{key:"getIsVisibleOnCanvas",value:function(t){return this.currentPosition.y<t+V}}]),i}();function J(){var i=document.createElement("canvas");return i.style.position="fixed",i.style.width="100%",i.style.height="100%",i.style.top="0",i.style.left="0",i.style.zIndex="1000",i.style.pointerEvents="none",document.body.appendChild(i),i}function Z(i){var e=i.confettiRadius,t=e===void 0?L:e,n=i.confettiNumber,a=n===void 0?i.confettiesNumber||(i.emojis?G:$):n,s=i.confettiColors,o=s===void 0?Y:s,u=i.emojis,c=u===void 0?i.emojies||[]:u,d=i.emojiSize,r=d===void 0?k:d;return i.emojies&&console.error("emojies argument is deprecated, please use emojis instead"),i.confettiesNumber&&console.error("confettiesNumber argument is deprecated, please use confettiNumber instead"),{confettiRadius:t,confettiNumber:a,confettiColors:o,emojis:c,emojiSize:r}}var K=function(){function i(e){var t=this;T(this,i),this.canvasContext=e,this.shapes=[],this.promise=new Promise(function(n){return t.resolvePromise=n})}return p(i,[{key:"getBatchCompletePromise",value:function(){return this.promise}},{key:"addShapes",value:function(){var t;(t=this.shapes).push.apply(t,arguments)}},{key:"complete",value:function(){var t;return this.shapes.length?!1:((t=this.resolvePromise)===null||t===void 0||t.call(this),!0)}},{key:"processShapes",value:function(t,n,a){var s=this,o=t.timeDelta,u=t.currentTime;this.shapes=this.shapes.filter(function(c){return c.updatePosition(o,u),c.draw(s.canvasContext),a?c.getIsVisibleOnCanvas(n):!0})}}]),i}(),Q=function(){function i(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};T(this,i),this.activeConfettiBatches=[],this.canvas=e.canvas||J(),this.canvasContext=this.canvas.getContext("2d"),this.requestAnimationFrameRequested=!1,this.lastUpdated=new Date().getTime(),this.iterationIndex=0,this.loop=this.loop.bind(this),requestAnimationFrame(this.loop)}return p(i,[{key:"loop",value:function(){this.requestAnimationFrameRequested=!1,O(this.canvas);var t=new Date().getTime(),n=t-this.lastUpdated,a=this.canvas.offsetHeight,s=this.iterationIndex%10===0;this.activeConfettiBatches=this.activeConfettiBatches.filter(function(o){return o.processShapes({timeDelta:n,currentTime:t},a,s),s?!o.complete():!0}),this.iterationIndex++,this.queueAnimationFrameIfNeeded(t)}},{key:"queueAnimationFrameIfNeeded",value:function(t){this.requestAnimationFrameRequested||this.activeConfettiBatches.length<1||(this.requestAnimationFrameRequested=!0,this.lastUpdated=t||new Date().getTime(),requestAnimationFrame(this.loop))}},{key:"addConfetti",value:function(){for(var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=Z(t),a=n.confettiRadius,s=n.confettiNumber,o=n.confettiColors,u=n.emojis,c=n.emojiSize,d=this.canvas.getBoundingClientRect(),r=d.width,l=d.height,m=l*5/7,f={x:0,y:m},P={x:r,y:m},v=new K(this.canvasContext),C=0;C<s/2;C++){var R=new A({initialPosition:f,direction:"right",confettiRadius:a,confettiColors:o,confettiNumber:s,emojis:u,emojiSize:c,canvasWidth:r}),b=new A({initialPosition:P,direction:"left",confettiRadius:a,confettiColors:o,confettiNumber:s,emojis:u,emojiSize:c,canvasWidth:r});v.addShapes(R,b)}return this.activeConfettiBatches.push(v),this.queueAnimationFrameIfNeeded(),v.getBatchCompletePromise()}},{key:"clearCanvas",value:function(){this.activeConfettiBatches=[]}},{key:"destroyCanvas",value:function(){this.canvas.remove()}}]),i}();const x=new Q;document.querySelector("#welcome")?.addEventListener("click",()=>{x.addConfetti()});document.querySelector("#thanks")?.addEventListener("click",()=>{x.addConfetti()});let N=document.querySelector("#img-container");setInterval(()=>{let i=N.firstElementChild;i?.remove(),i!==null&&N.appendChild(i)},2500);