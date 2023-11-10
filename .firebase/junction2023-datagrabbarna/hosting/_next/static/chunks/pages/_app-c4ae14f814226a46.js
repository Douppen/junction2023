(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{4444:function(i,h,f){"use strict";f.d(h,{$s:function(){return calculateBackoffMillis},BH:function(){return Deferred},DV:function(){return safeGet},GJ:function(){return isAdmin},L:function(){return base64urlEncodeWithoutPadding},LL:function(){return ErrorFactory},P0:function(){return getDefaultEmulatorHostnameAndPort},Pz:function(){return getExperimentalSetting},Sg:function(){return createMockUserToken},UI:function(){return map},US:function(){return en},Wl:function(){return stringify},Yr:function(){return isNodeSdk},ZR:function(){return FirebaseError},aH:function(){return getDefaultAppConfig},b$:function(){return isReactNative},cI:function(){return jsonEval},dS:function(){return stringToByteArray},eu:function(){return validateIndexedDBOpenable},g5:function(){return assertionError},gK:function(){return errorPrefix},gQ:function(){return Sha1},h$:function(){return base64Encode},hl:function(){return isIndexedDBAvailable},hu:function(){return assert},m9:function(){return getModularInstance},ne:function(){return createSubscribe},p$:function(){return deepCopy},pd:function(){return extractQuerystring},q4:function(){return getDefaultEmulatorHost},r3:function(){return contains},ru:function(){return isBrowserExtension},tV:function(){return base64Decode},uI:function(){return isMobileCordova},ug:function(){return stringLength},vZ:function(){return function deepEqual(i,h){if(i===h)return!0;let f=Object.keys(i),m=Object.keys(h);for(let L of f){if(!m.includes(L))return!1;let f=i[L],en=h[L];if(isObject(f)&&isObject(en)){if(!deepEqual(f,en))return!1}else if(f!==en)return!1}for(let i of m)if(!f.includes(i))return!1;return!0}},w1:function(){return isIE},w9:function(){return isValidFormat},xO:function(){return querystring},xb:function(){return isEmpty},z$:function(){return getUA},zI:function(){return areCookiesEnabled},zd:function(){return querystringDecode}});var m=f(3454);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"},assert=function(i,h){if(!i)throw assertionError(h)},assertionError=function(i){return Error("Firebase Database ("+L.SDK_VERSION+") INTERNAL ASSERT FAILED: "+i)},stringToByteArray$1=function(i){let h=[],f=0;for(let m=0;m<i.length;m++){let L=i.charCodeAt(m);L<128?h[f++]=L:(L<2048?h[f++]=L>>6|192:((64512&L)==55296&&m+1<i.length&&(64512&i.charCodeAt(m+1))==56320?(L=65536+((1023&L)<<10)+(1023&i.charCodeAt(++m)),h[f++]=L>>18|240,h[f++]=L>>12&63|128):h[f++]=L>>12|224,h[f++]=L>>6&63|128),h[f++]=63&L|128)}return h},byteArrayToString=function(i){let h=[],f=0,m=0;for(;f<i.length;){let L=i[f++];if(L<128)h[m++]=String.fromCharCode(L);else if(L>191&&L<224){let en=i[f++];h[m++]=String.fromCharCode((31&L)<<6|63&en)}else if(L>239&&L<365){let en=i[f++],er=i[f++],ei=i[f++],es=((7&L)<<18|(63&en)<<12|(63&er)<<6|63&ei)-65536;h[m++]=String.fromCharCode(55296+(es>>10)),h[m++]=String.fromCharCode(56320+(1023&es))}else{let en=i[f++],er=i[f++];h[m++]=String.fromCharCode((15&L)<<12|(63&en)<<6|63&er)}}return h.join("")},en={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray(i,h){if(!Array.isArray(i))throw Error("encodeByteArray takes an array as a parameter");this.init_();let f=h?this.byteToCharMapWebSafe_:this.byteToCharMap_,m=[];for(let h=0;h<i.length;h+=3){let L=i[h],en=h+1<i.length,er=en?i[h+1]:0,ei=h+2<i.length,es=ei?i[h+2]:0,eo=L>>2,el=(3&L)<<4|er>>4,eh=(15&er)<<2|es>>6,eu=63&es;ei||(eu=64,en||(eh=64)),m.push(f[eo],f[el],f[eh],f[eu])}return m.join("")},encodeString(i,h){return this.HAS_NATIVE_SUPPORT&&!h?btoa(i):this.encodeByteArray(stringToByteArray$1(i),h)},decodeString(i,h){return this.HAS_NATIVE_SUPPORT&&!h?atob(i):byteArrayToString(this.decodeStringToByteArray(i,h))},decodeStringToByteArray(i,h){this.init_();let f=h?this.charToByteMapWebSafe_:this.charToByteMap_,m=[];for(let h=0;h<i.length;){let L=f[i.charAt(h++)],en=h<i.length,er=en?f[i.charAt(h)]:0;++h;let ei=h<i.length,es=ei?f[i.charAt(h)]:64;++h;let eo=h<i.length,el=eo?f[i.charAt(h)]:64;if(++h,null==L||null==er||null==es||null==el)throw new DecodeBase64StringError;let eh=L<<2|er>>4;if(m.push(eh),64!==es){let i=er<<4&240|es>>2;if(m.push(i),64!==el){let i=es<<6&192|el;m.push(i)}}}return m},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let i=0;i<this.ENCODED_VALS.length;i++)this.byteToCharMap_[i]=this.ENCODED_VALS.charAt(i),this.charToByteMap_[this.byteToCharMap_[i]]=i,this.byteToCharMapWebSafe_[i]=this.ENCODED_VALS_WEBSAFE.charAt(i),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[i]]=i,i>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(i)]=i,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(i)]=i)}}};let DecodeBase64StringError=class DecodeBase64StringError extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}};let base64Encode=function(i){let h=stringToByteArray$1(i);return en.encodeByteArray(h,!0)},base64urlEncodeWithoutPadding=function(i){return base64Encode(i).replace(/\./g,"")},base64Decode=function(i){try{return en.decodeString(i,!0)}catch(i){console.error("base64Decode failed: ",i)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function deepCopy(i){return function deepExtend(i,h){if(!(h instanceof Object))return h;switch(h.constructor){case Date:return new Date(h.getTime());case Object:void 0===i&&(i={});break;case Array:i=[];break;default:return h}for(let f in h)h.hasOwnProperty(f)&&"__proto__"!==f&&(i[f]=deepExtend(i[f],h[f]));return i}(void 0,i)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let getDefaultsFromGlobal=()=>/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if(void 0!==f.g)return f.g;throw Error("Unable to locate global object.")})().__FIREBASE_DEFAULTS__,getDefaultsFromEnvVariable=()=>{if(void 0===m||void 0===m.env)return;let i=m.env.__FIREBASE_DEFAULTS__;if(i)return JSON.parse(i)},getDefaultsFromCookie=()=>{let i;if("undefined"==typeof document)return;try{i=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(i){return}let h=i&&base64Decode(i[1]);return h&&JSON.parse(h)},getDefaults=()=>{try{return getDefaultsFromGlobal()||getDefaultsFromEnvVariable()||getDefaultsFromCookie()}catch(i){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${i}`);return}},getDefaultEmulatorHost=i=>{var h,f;return null===(f=null===(h=getDefaults())||void 0===h?void 0:h.emulatorHosts)||void 0===f?void 0:f[i]},getDefaultEmulatorHostnameAndPort=i=>{let h=getDefaultEmulatorHost(i);if(!h)return;let f=h.lastIndexOf(":");if(f<=0||f+1===h.length)throw Error(`Invalid host ${h} with no separate hostname and port!`);let m=parseInt(h.substring(f+1),10);return"["===h[0]?[h.substring(1,f-1),m]:[h.substring(0,f),m]},getDefaultAppConfig=()=>{var i;return null===(i=getDefaults())||void 0===i?void 0:i.config},getExperimentalSetting=i=>{var h;return null===(h=getDefaults())||void 0===h?void 0:h[`_${i}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Deferred=class Deferred{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((i,h)=>{this.resolve=i,this.reject=h})}wrapCallback(i){return(h,f)=>{h?this.reject(h):this.resolve(f),"function"==typeof i&&(this.promise.catch(()=>{}),1===i.length?i(h):i(h,f))}}};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createMockUserToken(i,h){if(i.uid)throw Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');let f=h||"demo-project",m=i.iat||0,L=i.sub||i.user_id;if(!L)throw Error("mockUserToken must contain 'sub' or 'user_id' field!");let en=Object.assign({iss:`https://securetoken.google.com/${f}`,aud:f,iat:m,exp:m+3600,auth_time:m,sub:L,user_id:L,firebase:{sign_in_provider:"custom",identities:{}}},i);return[base64urlEncodeWithoutPadding(JSON.stringify({alg:"none",type:"JWT"})),base64urlEncodeWithoutPadding(JSON.stringify(en)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getUA(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function isMobileCordova(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(getUA())}function isBrowserExtension(){let i="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof i&&void 0!==i.id}function isReactNative(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function isIE(){let i=getUA();return i.indexOf("MSIE ")>=0||i.indexOf("Trident/")>=0}function isNodeSdk(){return!0===L.NODE_CLIENT||!0===L.NODE_ADMIN}function isIndexedDBAvailable(){try{return"object"==typeof indexedDB}catch(i){return!1}}function validateIndexedDBOpenable(){return new Promise((i,h)=>{try{let f=!0,m="validate-browser-context-for-indexeddb-analytics-module",L=self.indexedDB.open(m);L.onsuccess=()=>{L.result.close(),f||self.indexedDB.deleteDatabase(m),i(!0)},L.onupgradeneeded=()=>{f=!1},L.onerror=()=>{var i;h((null===(i=L.error)||void 0===i?void 0:i.message)||"")}}catch(i){h(i)}})}function areCookiesEnabled(){return"undefined"!=typeof navigator&&!!navigator.cookieEnabled}let FirebaseError=class FirebaseError extends Error{constructor(i,h,f){super(h),this.code=i,this.customData=f,this.name="FirebaseError",Object.setPrototypeOf(this,FirebaseError.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,ErrorFactory.prototype.create)}};let ErrorFactory=class ErrorFactory{constructor(i,h,f){this.service=i,this.serviceName=h,this.errors=f}create(i,...h){let f=h[0]||{},m=`${this.service}/${i}`,L=this.errors[i],en=L?L.replace(er,(i,h)=>{let m=f[h];return null!=m?String(m):`<${h}?>`}):"Error",ei=`${this.serviceName}: ${en} (${m}).`,es=new FirebaseError(m,ei,f);return es}};let er=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jsonEval(i){return JSON.parse(i)}function stringify(i){return JSON.stringify(i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let decode=function(i){let h={},f={},m={},L="";try{let en=i.split(".");h=jsonEval(base64Decode(en[0])||""),f=jsonEval(base64Decode(en[1])||""),L=en[2],m=f.d||{},delete f.d}catch(i){}return{header:h,claims:f,data:m,signature:L}},isValidFormat=function(i){let h=decode(i),f=h.claims;return!!f&&"object"==typeof f&&f.hasOwnProperty("iat")},isAdmin=function(i){let h=decode(i).claims;return"object"==typeof h&&!0===h.admin};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function contains(i,h){return Object.prototype.hasOwnProperty.call(i,h)}function safeGet(i,h){return Object.prototype.hasOwnProperty.call(i,h)?i[h]:void 0}function isEmpty(i){for(let h in i)if(Object.prototype.hasOwnProperty.call(i,h))return!1;return!0}function map(i,h,f){let m={};for(let L in i)Object.prototype.hasOwnProperty.call(i,L)&&(m[L]=h.call(f,i[L],L,i));return m}function isObject(i){return null!==i&&"object"==typeof i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function querystring(i){let h=[];for(let[f,m]of Object.entries(i))Array.isArray(m)?m.forEach(i=>{h.push(encodeURIComponent(f)+"="+encodeURIComponent(i))}):h.push(encodeURIComponent(f)+"="+encodeURIComponent(m));return h.length?"&"+h.join("&"):""}function querystringDecode(i){let h={},f=i.replace(/^\?/,"").split("&");return f.forEach(i=>{if(i){let[f,m]=i.split("=");h[decodeURIComponent(f)]=decodeURIComponent(m)}}),h}function extractQuerystring(i){let h=i.indexOf("?");if(!h)return"";let f=i.indexOf("#",h);return i.substring(h,f>0?f:void 0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sha1=class Sha1{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(let i=1;i<this.blockSize;++i)this.pad_[i]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(i,h){let f,m;h||(h=0);let L=this.W_;if("string"==typeof i)for(let f=0;f<16;f++)L[f]=i.charCodeAt(h)<<24|i.charCodeAt(h+1)<<16|i.charCodeAt(h+2)<<8|i.charCodeAt(h+3),h+=4;else for(let f=0;f<16;f++)L[f]=i[h]<<24|i[h+1]<<16|i[h+2]<<8|i[h+3],h+=4;for(let i=16;i<80;i++){let h=L[i-3]^L[i-8]^L[i-14]^L[i-16];L[i]=(h<<1|h>>>31)&4294967295}let en=this.chain_[0],er=this.chain_[1],ei=this.chain_[2],es=this.chain_[3],eo=this.chain_[4];for(let i=0;i<80;i++){i<40?i<20?(f=es^er&(ei^es),m=1518500249):(f=er^ei^es,m=1859775393):i<60?(f=er&ei|es&(er|ei),m=2400959708):(f=er^ei^es,m=3395469782);let h=(en<<5|en>>>27)+f+eo+m+L[i]&4294967295;eo=es,es=ei,ei=(er<<30|er>>>2)&4294967295,er=en,en=h}this.chain_[0]=this.chain_[0]+en&4294967295,this.chain_[1]=this.chain_[1]+er&4294967295,this.chain_[2]=this.chain_[2]+ei&4294967295,this.chain_[3]=this.chain_[3]+es&4294967295,this.chain_[4]=this.chain_[4]+eo&4294967295}update(i,h){if(null==i)return;void 0===h&&(h=i.length);let f=h-this.blockSize,m=0,L=this.buf_,en=this.inbuf_;for(;m<h;){if(0===en)for(;m<=f;)this.compress_(i,m),m+=this.blockSize;if("string"==typeof i){for(;m<h;)if(L[en]=i.charCodeAt(m),++en,++m,en===this.blockSize){this.compress_(L),en=0;break}}else for(;m<h;)if(L[en]=i[m],++en,++m,en===this.blockSize){this.compress_(L),en=0;break}}this.inbuf_=en,this.total_+=h}digest(){let i=[],h=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=255&h,h/=256;this.compress_(this.buf_);let f=0;for(let h=0;h<5;h++)for(let m=24;m>=0;m-=8)i[f]=this.chain_[h]>>m&255,++f;return i}};function createSubscribe(i,h){let f=new ObserverProxy(i,h);return f.subscribe.bind(f)}let ObserverProxy=class ObserverProxy{constructor(i,h){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=h,this.task.then(()=>{i(this)}).catch(i=>{this.error(i)})}next(i){this.forEachObserver(h=>{h.next(i)})}error(i){this.forEachObserver(h=>{h.error(i)}),this.close(i)}complete(){this.forEachObserver(i=>{i.complete()}),this.close()}subscribe(i,h,f){let m;if(void 0===i&&void 0===h&&void 0===f)throw Error("Missing Observer.");void 0===(m=!function(i,h){if("object"!=typeof i||null===i)return!1;for(let f of h)if(f in i&&"function"==typeof i[f])return!0;return!1}(i,["next","error","complete"])?{next:i,error:h,complete:f}:i).next&&(m.next=noop),void 0===m.error&&(m.error=noop),void 0===m.complete&&(m.complete=noop);let L=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?m.error(this.finalError):m.complete()}catch(i){}}),this.observers.push(m),L}unsubscribeOne(i){void 0!==this.observers&&void 0!==this.observers[i]&&(delete this.observers[i],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(i){if(!this.finalized)for(let h=0;h<this.observers.length;h++)this.sendOne(h,i)}sendOne(i,h){this.task.then(()=>{if(void 0!==this.observers&&void 0!==this.observers[i])try{h(this.observers[i])}catch(i){"undefined"!=typeof console&&console.error&&console.error(i)}})}close(i){this.finalized||(this.finalized=!0,void 0!==i&&(this.finalError=i),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}};function noop(){}function errorPrefix(i,h){return`${i} failed: ${h} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let stringToByteArray=function(i){let h=[],f=0;for(let m=0;m<i.length;m++){let L=i.charCodeAt(m);if(L>=55296&&L<=56319){let h=L-55296;assert(++m<i.length,"Surrogate pair missing trail surrogate.");let f=i.charCodeAt(m)-56320;L=65536+(h<<10)+f}L<128?h[f++]=L:(L<2048?h[f++]=L>>6|192:(L<65536?h[f++]=L>>12|224:(h[f++]=L>>18|240,h[f++]=L>>12&63|128),h[f++]=L>>6&63|128),h[f++]=63&L|128)}return h},stringLength=function(i){let h=0;for(let f=0;f<i.length;f++){let m=i.charCodeAt(f);m<128?h++:m<2048?h+=2:m>=55296&&m<=56319?(h+=4,f++):h+=3}return h};function calculateBackoffMillis(i,h=1e3,f=2){let m=h*Math.pow(f,i);return Math.min(144e5,m+Math.round(.5*m*(Math.random()-.5)*2))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getModularInstance(i){return i&&i._delegate?i._delegate:i}},3454:function(i,h,f){"use strict";var m,L;i.exports=(null==(m=f.g.process)?void 0:m.env)&&"object"==typeof(null==(L=f.g.process)?void 0:L.env)?f.g.process:f(7663)},6840:function(i,h,f){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return f(1684)}])},1684:function(i,h,f){"use strict";let m,L,en,er;f.r(h),f.d(h,{default:function(){return App}});var ei=f(5893);let es={apiKey:"AIzaSyDfJBcSweV9nfU69i5E1RMntH7jezNAVcc",authDomain:"junction2023-datagrabbarna.firebaseapp.com",projectId:"junction2023-datagrabbarna",storageBucket:"junction2023-datagrabbarna.appspot.com",messagingSenderId:"830943649685",appId:"1:830943649685:web:693d43912b1f0aedc4209c"};var eo=f(5816),el=f(3333),eh=f(4444),eu=f(8463);f(6292);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ec="analytics",ep="https://www.googletagmanager.com/gtag/js",ef=new el.Yd("@firebase/analytics"),eg=new eh.LL("analytics","Analytics",{"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function createGtagTrustedTypesScriptURL(i){if(!i.startsWith(ep)){let h=eg.create("invalid-gtag-resource",{gtagURL:i});return ef.warn(h.message),""}return i}function promiseAllSettled(i){return Promise.all(i.map(i=>i.catch(i=>i)))}async function gtagOnConfig(i,h,f,m,L,en){let er=m[L];try{if(er)await h[er];else{let i=await promiseAllSettled(f),m=i.find(i=>i.measurementId===L);m&&await h[m.appId]}}catch(i){ef.error(i)}i("config",L,en)}async function gtagOnEvent(i,h,f,m,L){try{let en=[];if(L&&L.send_to){let i=L.send_to;Array.isArray(i)||(i=[i]);let m=await promiseAllSettled(f);for(let f of i){let i=m.find(i=>i.measurementId===f),L=i&&h[i.appId];if(L)en.push(L);else{en=[];break}}}0===en.length&&(en=Object.values(h)),await Promise.all(en),i("event",m,L||{})}catch(i){ef.error(i)}}let em=new class{constructor(i={},h=1e3){this.throttleMetadata=i,this.intervalMillis=h}getThrottleMetadata(i){return this.throttleMetadata[i]}setThrottleMetadata(i,h){this.throttleMetadata[i]=h}deleteThrottleMetadata(i){delete this.throttleMetadata[i]}};async function fetchDynamicConfig(i){var h;let{appId:f,apiKey:m}=i,L={method:"GET",headers:new Headers({Accept:"application/json","x-goog-api-key":m})},en="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}",f),er=await fetch(en,L);if(200!==er.status&&304!==er.status){let i="";try{let f=await er.json();(null===(h=f.error)||void 0===h?void 0:h.message)&&(i=f.error.message)}catch(i){}throw eg.create("config-fetch-failed",{httpStatus:er.status,responseMessage:i})}return er.json()}async function fetchDynamicConfigWithRetry(i,h=em,f){let{appId:m,apiKey:L,measurementId:en}=i.options;if(!m)throw eg.create("no-app-id");if(!L){if(en)return{measurementId:en,appId:m};throw eg.create("no-api-key")}let er=h.getThrottleMetadata(m)||{backoffCount:0,throttleEndTimeMillis:Date.now()},ei=new AnalyticsAbortSignal;return setTimeout(async()=>{ei.abort()},void 0!==f?f:6e4),attemptFetchDynamicConfigWithRetry({appId:m,apiKey:L,measurementId:en},er,ei,h)}async function attemptFetchDynamicConfigWithRetry(i,{throttleEndTimeMillis:h,backoffCount:f},m,L=em){var en;let{appId:er,measurementId:ei}=i;try{await new Promise((i,f)=>{let L=Math.max(h-Date.now(),0),en=setTimeout(i,L);m.addEventListener(()=>{clearTimeout(en),f(eg.create("fetch-throttle",{throttleEndTimeMillis:h}))})})}catch(i){if(ei)return ef.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${ei} provided in the "measurementId" field in the local Firebase config. [${null==i?void 0:i.message}]`),{appId:er,measurementId:ei};throw i}try{let h=await fetchDynamicConfig(i);return L.deleteThrottleMetadata(er),h}catch(eo){if(!function(i){if(!(i instanceof eh.ZR)||!i.customData)return!1;let h=Number(i.customData.httpStatus);return 429===h||500===h||503===h||504===h}(eo)){if(L.deleteThrottleMetadata(er),ei)return ef.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${ei} provided in the "measurementId" field in the local Firebase config. [${null==eo?void 0:eo.message}]`),{appId:er,measurementId:ei};throw eo}let h=503===Number(null===(en=null==eo?void 0:eo.customData)||void 0===en?void 0:en.httpStatus)?(0,eh.$s)(f,L.intervalMillis,30):(0,eh.$s)(f,L.intervalMillis),es={throttleEndTimeMillis:Date.now()+h,backoffCount:f+1};return L.setThrottleMetadata(er,es),ef.debug(`Calling attemptFetch again in ${h} millis`),attemptFetchDynamicConfigWithRetry(i,es,m,L)}}let AnalyticsAbortSignal=class AnalyticsAbortSignal{constructor(){this.listeners=[]}addEventListener(i){this.listeners.push(i)}abort(){this.listeners.forEach(i=>i())}};async function logEvent$1(i,h,f,m,L){if(L&&L.global){i("event",f,m);return}{let L=await h,en=Object.assign(Object.assign({},m),{send_to:L});i("event",f,en)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function validateIndexedDB(){if(!(0,eh.hl)())return ef.warn(eg.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await (0,eh.eu)()}catch(i){return ef.warn(eg.create("indexeddb-unavailable",{errorInfo:null==i?void 0:i.toString()}).message),!1}return!0}async function _initializeAnalytics(i,h,f,en,er,ei,es){var eo;let el=fetchDynamicConfigWithRetry(i);el.then(h=>{f[h.measurementId]=h.appId,i.options.measurementId&&h.measurementId!==i.options.measurementId&&ef.warn(`The measurement ID in the local Firebase config (${i.options.measurementId}) does not match the measurement ID fetched from the server (${h.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(i=>ef.error(i)),h.push(el);let eh=validateIndexedDB().then(i=>i?en.getId():void 0),[eu,ec]=await Promise.all([el,eh]);!function(i){let h=window.document.getElementsByTagName("script");for(let f of Object.values(h))if(f.src&&f.src.includes(ep)&&f.src.includes(i))return f;return null}(ei)&&function(i,h){let f;let m=(window.trustedTypes&&(f=window.trustedTypes.createPolicy("firebase-js-sdk-policy",{createScriptURL:createGtagTrustedTypesScriptURL})),f),L=document.createElement("script"),en=`${ep}?l=${i}&id=${h}`;L.src=m?null==m?void 0:m.createScriptURL(en):en,L.async=!0,document.head.appendChild(L)}(ei,eu.measurementId),L&&(er("consent","default",L),L=void 0),er("js",new Date);let eg=null!==(eo=null==es?void 0:es.config)&&void 0!==eo?eo:{};return eg.origin="firebase",eg.update=!0,null!=ec&&(eg.firebase_id=ec),er("config",eu.measurementId,eg),m&&(er("set",m),m=void 0),eu.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AnalyticsService=class AnalyticsService{constructor(i){this.app=i}_delete(){return delete e_[this.app.options.appId],Promise.resolve()}};let e_={},ev=[],ey={},ew="dataLayer",eC=!1,eI="@firebase/analytics",eT="0.10.0";(0,eo.Xd)(new eu.wA(ec,(i,{options:h})=>{let f=i.getProvider("app").getImmediate(),m=i.getProvider("installations-internal").getImmediate();return function(i,h,f){!function(){let i=[];if((0,eh.ru)()&&i.push("This is a browser extension environment."),(0,eh.zI)()||i.push("Cookies are not available."),i.length>0){let h=i.map((i,h)=>`(${h+1}) ${i}`).join(" "),f=eg.create("invalid-analytics-context",{errorInfo:h});ef.warn(f.message)}}();let m=i.options.appId;if(!m)throw eg.create("no-app-id");if(!i.options.apiKey){if(i.options.measurementId)ef.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${i.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw eg.create("no-api-key")}if(null!=e_[m])throw eg.create("already-exists",{id:m});if(!eC){var L,ei;let i,h;i=[],Array.isArray(window[ew])?i=window[ew]:window[ew]=i;let{wrappedGtag:f,gtagCore:m}=(L="gtag",h=function(...i){window[ew].push(arguments)},window[L]&&"function"==typeof window[L]&&(h=window[L]),window[L]=(ei=h,async function(i,...h){try{if("event"===i){let[i,f]=h;await gtagOnEvent(ei,e_,ev,i,f)}else if("config"===i){let[i,f]=h;await gtagOnConfig(ei,e_,ev,ey,i,f)}else if("consent"===i){let[i]=h;ei("consent","update",i)}else if("get"===i){let[i,f,m]=h;ei("get",i,f,m)}else if("set"===i){let[i]=h;ei("set",i)}else ei(i,...h)}catch(i){ef.error(i)}}),{gtagCore:h,wrappedGtag:window[L]});er=f,en=m,eC=!0}e_[m]=_initializeAnalytics(i,ev,ey,h,en,ew,f);let es=new AnalyticsService(i);return es}(f,m,h)},"PUBLIC")),(0,eo.Xd)(new eu.wA("analytics-internal",function(i){try{let h=i.getProvider(ec).getImmediate();return{logEvent:(i,f,m)=>{var L;return L=h,void(L=(0,eh.m9)(L),logEvent$1(er,e_[L.app.options.appId],i,f,m).catch(i=>ef.error(i)))}}}catch(i){throw eg.create("interop-component-reg-failed",{reason:i})}},"PRIVATE")),(0,eo.KN)(eI,eT),(0,eo.KN)(eI,eT,"esm2017");var eE=f(9451),eS=f(6100),eP=f(7004),ek=f(6650),eR=f(7294),eN=f(5076);function Providers(i){let{children:h}=i;return(0,ei.jsx)(eN.RE,{firebaseConfig:es,children:(0,ei.jsx)(FirebaseComponents,{children:h})})}function FirebaseComponents(i){let{children:h}=i,f=(0,eN.$N)(),m=(0,eS.ad)(f),L=(0,eE.v0)(f),en=(0,ek.cF)(f),er=(0,eP.$C)(f,"europe-west1");return(0,ei.jsx)(eN.Ho,{sdk:L,children:(0,ei.jsx)(eN.Bs,{sdk:m,children:(0,ei.jsx)(eN.Xq,{sdk:en,children:(0,ei.jsx)(eN.Dm,{sdk:er,children:(0,ei.jsx)(FirebaseAnalyticsWrapper,{app:f,children:h})})})})})}function FirebaseAnalyticsWrapper(i){let{children:h,app:f}=i,[m,L]=(0,eR.useState)(!1);return(0,eR.useEffect)(()=>{L(!0)},[]),(0,ei.jsx)(ei.Fragment,{children:m?(0,ei.jsx)(eN.ng,{sdk:function(i=(0,eo.Mq)()){i=(0,eh.m9)(i);let h=(0,eo.qX)(i,ec);return h.isInitialized()?h.getImmediate():function(i,h={}){let f=(0,eo.qX)(i,ec);if(f.isInitialized()){let i=f.getImmediate();if((0,eh.vZ)(h,f.getOptions()))return i;throw eg.create("already-initialized")}let m=f.initialize({options:h});return m}(i)}(f),children:h}):(0,ei.jsx)(ei.Fragment,{children:h})})}function App(i){let{Component:h,pageProps:f}=i;return(0,ei.jsx)(Providers,{children:(0,ei.jsx)(h,{...f})})}f(2352)},2352:function(){},7663:function(i){!function(){var h={229:function(i){var h,f,m,L=i.exports={};function defaultSetTimout(){throw Error("setTimeout has not been defined")}function defaultClearTimeout(){throw Error("clearTimeout has not been defined")}function runTimeout(i){if(h===setTimeout)return setTimeout(i,0);if((h===defaultSetTimout||!h)&&setTimeout)return h=setTimeout,setTimeout(i,0);try{return h(i,0)}catch(f){try{return h.call(null,i,0)}catch(f){return h.call(this,i,0)}}}!function(){try{h="function"==typeof setTimeout?setTimeout:defaultSetTimout}catch(i){h=defaultSetTimout}try{f="function"==typeof clearTimeout?clearTimeout:defaultClearTimeout}catch(i){f=defaultClearTimeout}}();var en=[],er=!1,ei=-1;function cleanUpNextTick(){er&&m&&(er=!1,m.length?en=m.concat(en):ei=-1,en.length&&drainQueue())}function drainQueue(){if(!er){var i=runTimeout(cleanUpNextTick);er=!0;for(var h=en.length;h;){for(m=en,en=[];++ei<h;)m&&m[ei].run();ei=-1,h=en.length}m=null,er=!1,function(i){if(f===clearTimeout)return clearTimeout(i);if((f===defaultClearTimeout||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(i);try{f(i)}catch(h){try{return f.call(null,i)}catch(h){return f.call(this,i)}}}(i)}}function Item(i,h){this.fun=i,this.array=h}function noop(){}L.nextTick=function(i){var h=Array(arguments.length-1);if(arguments.length>1)for(var f=1;f<arguments.length;f++)h[f-1]=arguments[f];en.push(new Item(i,h)),1!==en.length||er||runTimeout(drainQueue)},Item.prototype.run=function(){this.fun.apply(null,this.array)},L.title="browser",L.browser=!0,L.env={},L.argv=[],L.version="",L.versions={},L.on=noop,L.addListener=noop,L.once=noop,L.off=noop,L.removeListener=noop,L.removeAllListeners=noop,L.emit=noop,L.prependListener=noop,L.prependOnceListener=noop,L.listeners=function(i){return[]},L.binding=function(i){throw Error("process.binding is not supported")},L.cwd=function(){return"/"},L.chdir=function(i){throw Error("process.chdir is not supported")},L.umask=function(){return 0}}},f={};function __nccwpck_require__(i){var m=f[i];if(void 0!==m)return m.exports;var L=f[i]={exports:{}},en=!0;try{h[i](L,L.exports,__nccwpck_require__),en=!1}finally{en&&delete f[i]}return L.exports}__nccwpck_require__.ab="//";var m=__nccwpck_require__(229);i.exports=m}()},5816:function(i,h,f){"use strict";let m,L;f.d(h,{Jn:function(){return eS},qX:function(){return _getProvider},Xd:function(){return _registerComponent},Mq:function(){return getApp},C6:function(){return getApps},ZF:function(){return initializeApp},KN:function(){return registerVersion}});var en,er=f(8463),ei=f(3333),es=f(4444);let instanceOfAny=(i,h)=>h.some(h=>i instanceof h),eo=new WeakMap,el=new WeakMap,eh=new WeakMap,eu=new WeakMap,ec=new WeakMap,ep={get(i,h,f){if(i instanceof IDBTransaction){if("done"===h)return el.get(i);if("objectStoreNames"===h)return i.objectStoreNames||eh.get(i);if("store"===h)return f.objectStoreNames[1]?void 0:f.objectStore(f.objectStoreNames[0])}return wrap_idb_value_wrap(i[h])},set:(i,h,f)=>(i[h]=f,!0),has:(i,h)=>i instanceof IDBTransaction&&("done"===h||"store"===h)||h in i};function wrap_idb_value_wrap(i){var h;if(i instanceof IDBRequest)return function(i){let h=new Promise((h,f)=>{let unlisten=()=>{i.removeEventListener("success",success),i.removeEventListener("error",error)},success=()=>{h(wrap_idb_value_wrap(i.result)),unlisten()},error=()=>{f(i.error),unlisten()};i.addEventListener("success",success),i.addEventListener("error",error)});return h.then(h=>{h instanceof IDBCursor&&eo.set(h,i)}).catch(()=>{}),ec.set(h,i),h}(i);if(eu.has(i))return eu.get(i);let f="function"==typeof(h=i)?h!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(h)?function(...i){return h.apply(unwrap(this),i),wrap_idb_value_wrap(eo.get(this))}:function(...i){return wrap_idb_value_wrap(h.apply(unwrap(this),i))}:function(i,...f){let m=h.call(unwrap(this),i,...f);return eh.set(m,i.sort?i.sort():[i]),wrap_idb_value_wrap(m)}:(h instanceof IDBTransaction&&function(i){if(el.has(i))return;let h=new Promise((h,f)=>{let unlisten=()=>{i.removeEventListener("complete",complete),i.removeEventListener("error",error),i.removeEventListener("abort",error)},complete=()=>{h(),unlisten()},error=()=>{f(i.error||new DOMException("AbortError","AbortError")),unlisten()};i.addEventListener("complete",complete),i.addEventListener("error",error),i.addEventListener("abort",error)});el.set(i,h)}(h),instanceOfAny(h,m||(m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(h,ep):h;return f!==i&&(eu.set(i,f),ec.set(f,i)),f}let unwrap=i=>ec.get(i),ef=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],em=new Map;function getMethod(i,h){if(!(i instanceof IDBDatabase&&!(h in i)&&"string"==typeof h))return;if(em.get(h))return em.get(h);let f=h.replace(/FromIndex$/,""),m=h!==f,L=eg.includes(f);if(!(f in(m?IDBIndex:IDBObjectStore).prototype)||!(L||ef.includes(f)))return;let method=async function(i,...h){let en=this.transaction(i,L?"readwrite":"readonly"),er=en.store;return m&&(er=er.index(h.shift())),(await Promise.all([er[f](...h),L&&en.done]))[0]};return em.set(h,method),method}ep={...en=ep,get:(i,h,f)=>getMethod(i,h)||en.get(i,h,f),has:(i,h)=>!!getMethod(i,h)||en.has(i,h)};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PlatformLoggerServiceImpl=class PlatformLoggerServiceImpl{constructor(i){this.container=i}getPlatformInfoString(){let i=this.container.getProviders();return i.map(i=>{if(!function(i){let h=i.getComponent();return(null==h?void 0:h.type)==="VERSION"}(i))return null;{let h=i.getImmediate();return`${h.library}/${h.version}`}}).filter(i=>i).join(" ")}};let e_="@firebase/app",ev="0.9.13",ey=new ei.Yd("@firebase/app"),ew="[DEFAULT]",eC={[e_]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},eI=new Map,eT=new Map;function _registerComponent(i){let h=i.name;if(eT.has(h))return ey.debug(`There were multiple attempts to register component ${h}.`),!1;for(let f of(eT.set(h,i),eI.values()))!function(i,h){try{i.container.addComponent(h)}catch(f){ey.debug(`Component ${h.name} failed to register with FirebaseApp ${i.name}`,f)}}(f,i);return!0}function _getProvider(i,h){let f=i.container.getProvider("heartbeat").getImmediate({optional:!0});return f&&f.triggerHeartbeat(),i.container.getProvider(h)}let eE=new es.LL("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAppImpl=class FirebaseAppImpl{constructor(i,h,f){this._isDeleted=!1,this._options=Object.assign({},i),this._config=Object.assign({},h),this._name=h.name,this._automaticDataCollectionEnabled=h.automaticDataCollectionEnabled,this._container=f,this.container.addComponent(new er.wA("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(i){this.checkDestroyed(),this._automaticDataCollectionEnabled=i}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(i){this._isDeleted=i}checkDestroyed(){if(this.isDeleted)throw eE.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eS="9.23.0";function initializeApp(i,h={}){let f=i;if("object"!=typeof h){let i=h;h={name:i}}let m=Object.assign({name:ew,automaticDataCollectionEnabled:!1},h),L=m.name;if("string"!=typeof L||!L)throw eE.create("bad-app-name",{appName:String(L)});if(f||(f=(0,es.aH)()),!f)throw eE.create("no-options");let en=eI.get(L);if(en){if((0,es.vZ)(f,en.options)&&(0,es.vZ)(m,en.config))return en;throw eE.create("duplicate-app",{appName:L})}let ei=new er.H0(L);for(let i of eT.values())ei.addComponent(i);let eo=new FirebaseAppImpl(f,m,ei);return eI.set(L,eo),eo}function getApp(i=ew){let h=eI.get(i);if(!h&&i===ew&&(0,es.aH)())return initializeApp();if(!h)throw eE.create("no-app",{appName:i});return h}function getApps(){return Array.from(eI.values())}function registerVersion(i,h,f){var m;let L=null!==(m=eC[i])&&void 0!==m?m:i;f&&(L+=`-${f}`);let en=L.match(/\s|\//),ei=h.match(/\s|\//);if(en||ei){let i=[`Unable to register library "${L}" with version "${h}":`];en&&i.push(`library name "${L}" contains illegal characters (whitespace or "/")`),en&&ei&&i.push("and"),ei&&i.push(`version name "${h}" contains illegal characters (whitespace or "/")`),ey.warn(i.join(" "));return}_registerComponent(new er.wA(`${L}-version`,()=>({library:L,version:h}),"VERSION"))}let eP="firebase-heartbeat-store",ek=null;function getDbPromise(){return ek||(ek=(function(i,h,{blocked:f,upgrade:m,blocking:L,terminated:en}={}){let er=indexedDB.open(i,1),ei=wrap_idb_value_wrap(er);return m&&er.addEventListener("upgradeneeded",i=>{m(wrap_idb_value_wrap(er.result),i.oldVersion,i.newVersion,wrap_idb_value_wrap(er.transaction),i)}),f&&er.addEventListener("blocked",i=>f(i.oldVersion,i.newVersion,i)),ei.then(i=>{en&&i.addEventListener("close",()=>en()),L&&i.addEventListener("versionchange",i=>L(i.oldVersion,i.newVersion,i))}).catch(()=>{}),ei})("firebase-heartbeat-database",0,{upgrade:(i,h)=>{0===h&&i.createObjectStore(eP)}}).catch(i=>{throw eE.create("idb-open",{originalErrorMessage:i.message})})),ek}async function readHeartbeatsFromIndexedDB(i){try{let h=await getDbPromise(),f=await h.transaction(eP).objectStore(eP).get(computeKey(i));return f}catch(i){if(i instanceof es.ZR)ey.warn(i.message);else{let h=eE.create("idb-get",{originalErrorMessage:null==i?void 0:i.message});ey.warn(h.message)}}}async function writeHeartbeatsToIndexedDB(i,h){try{let f=await getDbPromise(),m=f.transaction(eP,"readwrite"),L=m.objectStore(eP);await L.put(h,computeKey(i)),await m.done}catch(i){if(i instanceof es.ZR)ey.warn(i.message);else{let h=eE.create("idb-set",{originalErrorMessage:null==i?void 0:i.message});ey.warn(h.message)}}}function computeKey(i){return`${i.name}!${i.options.appId}`}let HeartbeatServiceImpl=class HeartbeatServiceImpl{constructor(i){this.container=i,this._heartbeatsCache=null;let h=this.container.getProvider("app").getImmediate();this._storage=new HeartbeatStorageImpl(h),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){let i=this.container.getProvider("platform-logger").getImmediate(),h=i.getPlatformInfoString(),f=getUTCDateString();return(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate===f||this._heartbeatsCache.heartbeats.some(i=>i.date===f))?void 0:(this._heartbeatsCache.heartbeats.push({date:f,agent:h}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{let h=new Date(i.date).valueOf(),f=Date.now();return f-h<=2592e6}),this._storage.overwrite(this._heartbeatsCache))}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";let i=getUTCDateString(),{heartbeatsToSend:h,unsentEntries:f}=function(i,h=1024){let f=[],m=i.slice();for(let L of i){let i=f.find(i=>i.agent===L.agent);if(i){if(i.dates.push(L.date),countBytes(f)>h){i.dates.pop();break}}else if(f.push({agent:L.agent,dates:[L.date]}),countBytes(f)>h){f.pop();break}m=m.slice(1)}return{heartbeatsToSend:f,unsentEntries:m}}(this._heartbeatsCache.heartbeats),m=(0,es.L)(JSON.stringify({version:2,heartbeats:h}));return this._heartbeatsCache.lastSentHeartbeatDate=i,f.length>0?(this._heartbeatsCache.heartbeats=f,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),m}};function getUTCDateString(){let i=new Date;return i.toISOString().substring(0,10)}let HeartbeatStorageImpl=class HeartbeatStorageImpl{constructor(i){this.app=i,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,es.hl)()&&(0,es.eu)().then(()=>!0).catch(()=>!1)}async read(){let i=await this._canUseIndexedDBPromise;if(!i)return{heartbeats:[]};{let i=await readHeartbeatsFromIndexedDB(this.app);return i||{heartbeats:[]}}}async overwrite(i){var h;let f=await this._canUseIndexedDBPromise;if(f){let f=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(h=i.lastSentHeartbeatDate)&&void 0!==h?h:f.lastSentHeartbeatDate,heartbeats:i.heartbeats})}}async add(i){var h;let f=await this._canUseIndexedDBPromise;if(f){let f=await this.read();return writeHeartbeatsToIndexedDB(this.app,{lastSentHeartbeatDate:null!==(h=i.lastSentHeartbeatDate)&&void 0!==h?h:f.lastSentHeartbeatDate,heartbeats:[...f.heartbeats,...i.heartbeats]})}}};function countBytes(i){return(0,es.L)(JSON.stringify({version:2,heartbeats:i})).length}_registerComponent(new er.wA("platform-logger",i=>new PlatformLoggerServiceImpl(i),"PRIVATE")),_registerComponent(new er.wA("heartbeat",i=>new HeartbeatServiceImpl(i),"PRIVATE")),registerVersion(e_,ev,""),registerVersion(e_,ev,"esm2017"),registerVersion("fire-js","")},8463:function(i,h,f){"use strict";f.d(h,{H0:function(){return ComponentContainer},wA:function(){return Component}});var m=f(4444);let Component=class Component{constructor(i,h,f){this.name=i,this.instanceFactory=h,this.type=f,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(i){return this.instantiationMode=i,this}setMultipleInstances(i){return this.multipleInstances=i,this}setServiceProps(i){return this.serviceProps=i,this}setInstanceCreatedCallback(i){return this.onInstanceCreated=i,this}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let L="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Provider=class Provider{constructor(i,h){this.name=i,this.container=h,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(i){let h=this.normalizeInstanceIdentifier(i);if(!this.instancesDeferred.has(h)){let i=new m.BH;if(this.instancesDeferred.set(h,i),this.isInitialized(h)||this.shouldAutoInitialize())try{let f=this.getOrInitializeService({instanceIdentifier:h});f&&i.resolve(f)}catch(i){}}return this.instancesDeferred.get(h).promise}getImmediate(i){var h;let f=this.normalizeInstanceIdentifier(null==i?void 0:i.identifier),m=null!==(h=null==i?void 0:i.optional)&&void 0!==h&&h;if(this.isInitialized(f)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:f})}catch(i){if(m)return null;throw i}else{if(m)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(i){if(i.name!==this.name)throw Error(`Mismatching Component ${i.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=i,this.shouldAutoInitialize()){if("EAGER"===i.instantiationMode)try{this.getOrInitializeService({instanceIdentifier:L})}catch(i){}for(let[i,h]of this.instancesDeferred.entries()){let f=this.normalizeInstanceIdentifier(i);try{let i=this.getOrInitializeService({instanceIdentifier:f});h.resolve(i)}catch(i){}}}}clearInstance(i=L){this.instancesDeferred.delete(i),this.instancesOptions.delete(i),this.instances.delete(i)}async delete(){let i=Array.from(this.instances.values());await Promise.all([...i.filter(i=>"INTERNAL"in i).map(i=>i.INTERNAL.delete()),...i.filter(i=>"_delete"in i).map(i=>i._delete())])}isComponentSet(){return null!=this.component}isInitialized(i=L){return this.instances.has(i)}getOptions(i=L){return this.instancesOptions.get(i)||{}}initialize(i={}){let{options:h={}}=i,f=this.normalizeInstanceIdentifier(i.instanceIdentifier);if(this.isInitialized(f))throw Error(`${this.name}(${f}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);let m=this.getOrInitializeService({instanceIdentifier:f,options:h});for(let[i,h]of this.instancesDeferred.entries()){let L=this.normalizeInstanceIdentifier(i);f===L&&h.resolve(m)}return m}onInit(i,h){var f;let m=this.normalizeInstanceIdentifier(h),L=null!==(f=this.onInitCallbacks.get(m))&&void 0!==f?f:new Set;L.add(i),this.onInitCallbacks.set(m,L);let en=this.instances.get(m);return en&&i(en,m),()=>{L.delete(i)}}invokeOnInitCallbacks(i,h){let f=this.onInitCallbacks.get(h);if(f)for(let m of f)try{m(i,h)}catch(i){}}getOrInitializeService({instanceIdentifier:i,options:h={}}){let f=this.instances.get(i);if(!f&&this.component&&(f=this.component.instanceFactory(this.container,{instanceIdentifier:i===L?void 0:i,options:h}),this.instances.set(i,f),this.instancesOptions.set(i,h),this.invokeOnInitCallbacks(f,i),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,i,f)}catch(i){}return f||null}normalizeInstanceIdentifier(i=L){return this.component?this.component.multipleInstances?i:L:i}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ComponentContainer=class ComponentContainer{constructor(i){this.name=i,this.providers=new Map}addComponent(i){let h=this.getProvider(i.name);if(h.isComponentSet())throw Error(`Component ${i.name} has already been registered with ${this.name}`);h.setComponent(i)}addOrOverwriteComponent(i){let h=this.getProvider(i.name);h.isComponentSet()&&this.providers.delete(i.name),this.addComponent(i)}getProvider(i){if(this.providers.has(i))return this.providers.get(i);let h=new Provider(i,this);return this.providers.set(i,h),h}getProviders(){return Array.from(this.providers.values())}}},6292:function(i,h,f){"use strict";let m,L;var en,er=f(5816),ei=f(8463),es=f(4444);let instanceOfAny=(i,h)=>h.some(h=>i instanceof h),eo=new WeakMap,el=new WeakMap,eh=new WeakMap,eu=new WeakMap,ec=new WeakMap,ep={get(i,h,f){if(i instanceof IDBTransaction){if("done"===h)return el.get(i);if("objectStoreNames"===h)return i.objectStoreNames||eh.get(i);if("store"===h)return f.objectStoreNames[1]?void 0:f.objectStore(f.objectStoreNames[0])}return wrap_idb_value_wrap(i[h])},set:(i,h,f)=>(i[h]=f,!0),has:(i,h)=>i instanceof IDBTransaction&&("done"===h||"store"===h)||h in i};function wrap_idb_value_wrap(i){var h;if(i instanceof IDBRequest)return function(i){let h=new Promise((h,f)=>{let unlisten=()=>{i.removeEventListener("success",success),i.removeEventListener("error",error)},success=()=>{h(wrap_idb_value_wrap(i.result)),unlisten()},error=()=>{f(i.error),unlisten()};i.addEventListener("success",success),i.addEventListener("error",error)});return h.then(h=>{h instanceof IDBCursor&&eo.set(h,i)}).catch(()=>{}),ec.set(h,i),h}(i);if(eu.has(i))return eu.get(i);let f="function"==typeof(h=i)?h!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(L||(L=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(h)?function(...i){return h.apply(unwrap(this),i),wrap_idb_value_wrap(eo.get(this))}:function(...i){return wrap_idb_value_wrap(h.apply(unwrap(this),i))}:function(i,...f){let m=h.call(unwrap(this),i,...f);return eh.set(m,i.sort?i.sort():[i]),wrap_idb_value_wrap(m)}:(h instanceof IDBTransaction&&function(i){if(el.has(i))return;let h=new Promise((h,f)=>{let unlisten=()=>{i.removeEventListener("complete",complete),i.removeEventListener("error",error),i.removeEventListener("abort",error)},complete=()=>{h(),unlisten()},error=()=>{f(i.error||new DOMException("AbortError","AbortError")),unlisten()};i.addEventListener("complete",complete),i.addEventListener("error",error),i.addEventListener("abort",error)});el.set(i,h)}(h),instanceOfAny(h,m||(m=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])))?new Proxy(h,ep):h;return f!==i&&(eu.set(i,f),ec.set(f,i)),f}let unwrap=i=>ec.get(i),ef=["get","getKey","getAll","getAllKeys","count"],eg=["put","add","delete","clear"],em=new Map;function getMethod(i,h){if(!(i instanceof IDBDatabase&&!(h in i)&&"string"==typeof h))return;if(em.get(h))return em.get(h);let f=h.replace(/FromIndex$/,""),m=h!==f,L=eg.includes(f);if(!(f in(m?IDBIndex:IDBObjectStore).prototype)||!(L||ef.includes(f)))return;let method=async function(i,...h){let en=this.transaction(i,L?"readwrite":"readonly"),er=en.store;return m&&(er=er.index(h.shift())),(await Promise.all([er[f](...h),L&&en.done]))[0]};return em.set(h,method),method}ep={...en=ep,get:(i,h,f)=>getMethod(i,h)||en.get(i,h,f),has:(i,h)=>!!getMethod(i,h)||en.has(i,h)};let e_="@firebase/installations",ev="0.6.4",ey=`w:${ev}`,ew="FIS_v2",eC=new es.LL("installations","Installations",{"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."});function isServerError(i){return i instanceof es.ZR&&i.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getInstallationsEndpoint({projectId:i}){return`https://firebaseinstallations.googleapis.com/v1/projects/${i}/installations`}function extractAuthTokenInfoFromResponse(i){return{token:i.token,requestStatus:2,expiresIn:Number(i.expiresIn.replace("s","000")),creationTime:Date.now()}}async function getErrorFromResponse(i,h){let f=await h.json(),m=f.error;return eC.create("request-failed",{requestName:i,serverCode:m.code,serverMessage:m.message,serverStatus:m.status})}function getHeaders({apiKey:i}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":i})}async function retryIfServerError(i){let h=await i();return h.status>=500&&h.status<600?i():h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function createInstallationRequest({appConfig:i,heartbeatServiceProvider:h},{fid:f}){let m=getInstallationsEndpoint(i),L=getHeaders(i),en=h.getImmediate({optional:!0});if(en){let i=await en.getHeartbeatsHeader();i&&L.append("x-firebase-client",i)}let er={fid:f,authVersion:ew,appId:i.appId,sdkVersion:ey},ei={method:"POST",headers:L,body:JSON.stringify(er)},es=await retryIfServerError(()=>fetch(m,ei));if(es.ok){let i=await es.json(),h={fid:i.fid||f,registrationStatus:2,refreshToken:i.refreshToken,authToken:extractAuthTokenInfoFromResponse(i.authToken)};return h}throw await getErrorFromResponse("Create Installation",es)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sleep(i){return new Promise(h=>{setTimeout(h,i)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eI=/^[cdef][\w-]{21}$/;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getKey(i){return`${i.appName}!${i.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eT=new Map;function fidChanged(i,h){let f=getKey(i);callFidChangeCallbacks(f,h),function(i,h){let f=(!eE&&"BroadcastChannel"in self&&((eE=new BroadcastChannel("[Firebase] FID Change")).onmessage=i=>{callFidChangeCallbacks(i.data.key,i.data.fid)}),eE);f&&f.postMessage({key:i,fid:h}),0===eT.size&&eE&&(eE.close(),eE=null)}(f,h)}function callFidChangeCallbacks(i,h){let f=eT.get(i);if(f)for(let i of f)i(h)}let eE=null,eS="firebase-installations-store",eP=null;function getDbPromise(){return eP||(eP=function(i,h,{blocked:f,upgrade:m,blocking:L,terminated:en}={}){let er=indexedDB.open(i,1),ei=wrap_idb_value_wrap(er);return m&&er.addEventListener("upgradeneeded",i=>{m(wrap_idb_value_wrap(er.result),i.oldVersion,i.newVersion,wrap_idb_value_wrap(er.transaction))}),f&&er.addEventListener("blocked",()=>f()),ei.then(i=>{en&&i.addEventListener("close",()=>en()),L&&i.addEventListener("versionchange",()=>L())}).catch(()=>{}),ei}("firebase-installations-database",0,{upgrade:(i,h)=>{0===h&&i.createObjectStore(eS)}})),eP}async function set(i,h){let f=getKey(i),m=await getDbPromise(),L=m.transaction(eS,"readwrite"),en=L.objectStore(eS),er=await en.get(f);return await en.put(h,f),await L.done,er&&er.fid===h.fid||fidChanged(i,h.fid),h}async function remove(i){let h=getKey(i),f=await getDbPromise(),m=f.transaction(eS,"readwrite");await m.objectStore(eS).delete(h),await m.done}async function update(i,h){let f=getKey(i),m=await getDbPromise(),L=m.transaction(eS,"readwrite"),en=L.objectStore(eS),er=await en.get(f),ei=h(er);return void 0===ei?await en.delete(f):await en.put(ei,f),await L.done,ei&&(!er||er.fid!==ei.fid)&&fidChanged(i,ei.fid),ei}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getInstallationEntry(i){let h;let f=await update(i.appConfig,f=>{let m=function(i){let h=i||{fid:function(){try{let i=new Uint8Array(17),h=self.crypto||self.msCrypto;h.getRandomValues(i),i[0]=112+i[0]%16;let f=function(i){let h=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){let h=btoa(String.fromCharCode(...i));return h.replace(/\+/g,"-").replace(/\//g,"_")}(i);return h.substr(0,22)}(i);return eI.test(f)?f:""}catch(i){return""}}(),registrationStatus:0};return clearTimedOutRequest(h)}(f),L=function(i,h){if(0===h.registrationStatus){if(!navigator.onLine){let i=Promise.reject(eC.create("app-offline"));return{installationEntry:h,registrationPromise:i}}let f={fid:h.fid,registrationStatus:1,registrationTime:Date.now()},m=registerInstallation(i,f);return{installationEntry:f,registrationPromise:m}}return 1===h.registrationStatus?{installationEntry:h,registrationPromise:waitUntilFidRegistration(i)}:{installationEntry:h}}(i,m);return h=L.registrationPromise,L.installationEntry});return""===f.fid?{installationEntry:await h}:{installationEntry:f,registrationPromise:h}}async function registerInstallation(i,h){try{let f=await createInstallationRequest(i,h);return set(i.appConfig,f)}catch(f){throw isServerError(f)&&409===f.customData.serverCode?await remove(i.appConfig):await set(i.appConfig,{fid:h.fid,registrationStatus:0}),f}}async function waitUntilFidRegistration(i){let h=await updateInstallationRequest(i.appConfig);for(;1===h.registrationStatus;)await sleep(100),h=await updateInstallationRequest(i.appConfig);if(0===h.registrationStatus){let{installationEntry:h,registrationPromise:f}=await getInstallationEntry(i);return f||h}return h}function updateInstallationRequest(i){return update(i,i=>{if(!i)throw eC.create("installation-not-found");return clearTimedOutRequest(i)})}function clearTimedOutRequest(i){return 1===i.registrationStatus&&i.registrationTime+1e4<Date.now()?{fid:i.fid,registrationStatus:0}:i}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function generateAuthTokenRequest({appConfig:i,heartbeatServiceProvider:h},f){let m=function(i,{fid:h}){return`${getInstallationsEndpoint(i)}/${h}/authTokens:generate`}(i,f),L=function(i,{refreshToken:h}){let f=getHeaders(i);return f.append("Authorization",`${ew} ${h}`),f}(i,f),en=h.getImmediate({optional:!0});if(en){let i=await en.getHeartbeatsHeader();i&&L.append("x-firebase-client",i)}let er={installation:{sdkVersion:ey,appId:i.appId}},ei={method:"POST",headers:L,body:JSON.stringify(er)},es=await retryIfServerError(()=>fetch(m,ei));if(es.ok){let i=await es.json(),h=extractAuthTokenInfoFromResponse(i);return h}throw await getErrorFromResponse("Generate Auth Token",es)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function refreshAuthToken(i,h=!1){let f;let m=await update(i.appConfig,m=>{var L;if(!isEntryRegistered(m))throw eC.create("not-registered");let en=m.authToken;if(!h&&2===(L=en).requestStatus&&!function(i){let h=Date.now();return h<i.creationTime||i.creationTime+i.expiresIn<h+36e5}(L))return m;if(1===en.requestStatus)return f=waitUntilAuthTokenRequest(i,h),m;{if(!navigator.onLine)throw eC.create("app-offline");let h=function(i){let h={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},i),{authToken:h})}(m);return f=fetchAuthTokenFromServer(i,h),h}}),L=f?await f:m.authToken;return L}async function waitUntilAuthTokenRequest(i,h){let f=await updateAuthTokenRequest(i.appConfig);for(;1===f.authToken.requestStatus;)await sleep(100),f=await updateAuthTokenRequest(i.appConfig);let m=f.authToken;return 0===m.requestStatus?refreshAuthToken(i,h):m}function updateAuthTokenRequest(i){return update(i,i=>{if(!isEntryRegistered(i))throw eC.create("not-registered");let h=i.authToken;return 1===h.requestStatus&&h.requestTime+1e4<Date.now()?Object.assign(Object.assign({},i),{authToken:{requestStatus:0}}):i})}async function fetchAuthTokenFromServer(i,h){try{let f=await generateAuthTokenRequest(i,h),m=Object.assign(Object.assign({},h),{authToken:f});return await set(i.appConfig,m),f}catch(f){if(isServerError(f)&&(401===f.customData.serverCode||404===f.customData.serverCode))await remove(i.appConfig);else{let f=Object.assign(Object.assign({},h),{authToken:{requestStatus:0}});await set(i.appConfig,f)}throw f}}function isEntryRegistered(i){return void 0!==i&&2===i.registrationStatus}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getId(i){let{installationEntry:h,registrationPromise:f}=await getInstallationEntry(i);return f?f.catch(console.error):refreshAuthToken(i).catch(console.error),h.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function getToken(i,h=!1){await completeInstallationRegistration(i);let f=await refreshAuthToken(i,h);return f.token}async function completeInstallationRegistration(i){let{registrationPromise:h}=await getInstallationEntry(i);h&&await h}function getMissingValueError(i){return eC.create("missing-app-config-values",{valueName:i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ek="installations";(0,er.Xd)(new ei.wA(ek,i=>{let h=i.getProvider("app").getImmediate(),f=/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){if(!i||!i.options)throw getMissingValueError("App Configuration");if(!i.name)throw getMissingValueError("App Name");for(let h of["projectId","apiKey","appId"])if(!i.options[h])throw getMissingValueError(h);return{appName:i.name,projectId:i.options.projectId,apiKey:i.options.apiKey,appId:i.options.appId}}(h),m=(0,er.qX)(h,"heartbeat");return{app:h,appConfig:f,heartbeatServiceProvider:m,_delete:()=>Promise.resolve()}},"PUBLIC")),(0,er.Xd)(new ei.wA("installations-internal",i=>{let h=i.getProvider("app").getImmediate(),f=(0,er.qX)(h,ek).getImmediate();return{getId:()=>getId(f),getToken:i=>getToken(f,i)}},"PRIVATE")),(0,er.KN)(e_,ev),(0,er.KN)(e_,ev,"esm2017")},3333:function(i,h,f){"use strict";var m,L;f.d(h,{Yd:function(){return Logger},in:function(){return m}});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let en=[];(L=m||(m={}))[L.DEBUG=0]="DEBUG",L[L.VERBOSE=1]="VERBOSE",L[L.INFO=2]="INFO",L[L.WARN=3]="WARN",L[L.ERROR=4]="ERROR",L[L.SILENT=5]="SILENT";let er={debug:m.DEBUG,verbose:m.VERBOSE,info:m.INFO,warn:m.WARN,error:m.ERROR,silent:m.SILENT},ei=m.INFO,es={[m.DEBUG]:"log",[m.VERBOSE]:"log",[m.INFO]:"info",[m.WARN]:"warn",[m.ERROR]:"error"},defaultLogHandler=(i,h,...f)=>{if(h<i.logLevel)return;let m=new Date().toISOString(),L=es[h];if(L)console[L](`[${m}]  ${i.name}:`,...f);else throw Error(`Attempted to log a message with an invalid logType (value: ${h})`)};let Logger=class Logger{constructor(i){this.name=i,this._logLevel=ei,this._logHandler=defaultLogHandler,this._userLogHandler=null,en.push(this)}get logLevel(){return this._logLevel}set logLevel(i){if(!(i in m))throw TypeError(`Invalid value "${i}" assigned to \`logLevel\``);this._logLevel=i}setLogLevel(i){this._logLevel="string"==typeof i?er[i]:i}get logHandler(){return this._logHandler}set logHandler(i){if("function"!=typeof i)throw TypeError("Value assigned to `logHandler` must be a function");this._logHandler=i}get userLogHandler(){return this._userLogHandler}set userLogHandler(i){this._userLogHandler=i}debug(...i){this._userLogHandler&&this._userLogHandler(this,m.DEBUG,...i),this._logHandler(this,m.DEBUG,...i)}log(...i){this._userLogHandler&&this._userLogHandler(this,m.VERBOSE,...i),this._logHandler(this,m.VERBOSE,...i)}info(...i){this._userLogHandler&&this._userLogHandler(this,m.INFO,...i),this._logHandler(this,m.INFO,...i)}warn(...i){this._userLogHandler&&this._userLogHandler(this,m.WARN,...i),this._logHandler(this,m.WARN,...i)}error(...i){this._userLogHandler&&this._userLogHandler(this,m.ERROR,...i),this._logHandler(this,m.ERROR,...i)}}},9451:function(i,h,f){"use strict";f.d(h,{v0:function(){return getAuth},MX:function(){return onIdTokenChanged}});var m,L=f(4444),en=f(5816);function __rest(i,h){var f={};for(var m in i)Object.prototype.hasOwnProperty.call(i,m)&&0>h.indexOf(m)&&(f[m]=i[m]);if(null!=i&&"function"==typeof Object.getOwnPropertySymbols)for(var L=0,m=Object.getOwnPropertySymbols(i);L<m.length;L++)0>h.indexOf(m[L])&&Object.prototype.propertyIsEnumerable.call(i,m[L])&&(f[m[L]]=i[m[L]]);return f}"function"==typeof SuppressedError&&SuppressedError;var er=f(3333),ei=f(8463);function _prodErrorMap(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}let es=new L.LL("auth","Firebase",_prodErrorMap()),eo=new er.Yd("@firebase/auth");function _logError(i,...h){eo.logLevel<=er.in.ERROR&&eo.error(`Auth (${en.Jn}): ${i}`,...h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _fail(i,...h){throw createErrorInternal(i,...h)}function _createError(i,...h){return createErrorInternal(i,...h)}function createErrorInternal(i,...h){if("string"!=typeof i){let f=h[0],m=[...h.slice(1)];return m[0]&&(m[0].appName=i.name),i._errorFactory.create(f,...m)}return es.create(i,...h)}function _assert(i,h,...f){if(!i)throw createErrorInternal(h,...f)}function debugFail(i){let h="INTERNAL ASSERTION FAILED: "+i;throw _logError(h),Error(h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getCurrentUrl(){var i;return"undefined"!=typeof self&&(null===(i=self.location)||void 0===i?void 0:i.href)||""}function _getCurrentScheme(){var i;return"undefined"!=typeof self&&(null===(i=self.location)||void 0===i?void 0:i.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Delay=class Delay{constructor(i,h){this.shortDelay=i,this.longDelay=h,h>i||debugFail("Short delay should be less than long delay!"),this.isMobile=(0,L.uI)()||(0,L.b$)()}get(){return!("undefined"!=typeof navigator&&navigator&&"onLine"in navigator&&"boolean"==typeof navigator.onLine&&("http:"===_getCurrentScheme()||"https:"===_getCurrentScheme()||(0,L.ru)()||"connection"in navigator))||navigator.onLine?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _emulatorUrl(i,h){i.emulator||debugFail("Emulator should always be set here");let{url:f}=i.emulator;return h?`${f}${h.startsWith("/")?h.slice(1):h}`:f}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FetchProvider=class FetchProvider{static initialize(i,h,f){this.fetchImpl=i,h&&(this.headersImpl=h),f&&(this.responseImpl=f)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!=typeof self&&"fetch"in self?self.fetch:void debugFail("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!=typeof self&&"Headers"in self?self.Headers:void debugFail("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!=typeof self&&"Response"in self?self.Response:void debugFail("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},eh=new Delay(3e4,6e4);function _addTidIfNecessary(i,h){return i.tenantId&&!h.tenantId?Object.assign(Object.assign({},h),{tenantId:i.tenantId}):h}async function _performApiRequest(i,h,f,m,en={}){return _performFetchWithErrorHandling(i,en,async()=>{let en={},er={};m&&("GET"===h?er=m:en={body:JSON.stringify(m)});let ei=(0,L.xO)(Object.assign({key:i.config.apiKey},er)).slice(1),es=await i._getAdditionalHeaders();return es["Content-Type"]="application/json",i.languageCode&&(es["X-Firebase-Locale"]=i.languageCode),FetchProvider.fetch()(_getFinalTarget(i,i.config.apiHost,f,ei),Object.assign({method:h,headers:es,referrerPolicy:"no-referrer"},en))})}async function _performFetchWithErrorHandling(i,h,f){i._canInitEmulator=!1;let m=Object.assign(Object.assign({},el),h);try{let h=new NetworkTimeout(i),en=await Promise.race([f(),h.promise]);h.clearNetworkTimeout();let er=await en.json();if("needConfirmation"in er)throw _makeTaggedError(i,"account-exists-with-different-credential",er);if(en.ok&&!("errorMessage"in er))return er;{let h=en.ok?er.errorMessage:er.error.message,[f,ei]=h.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===f)throw _makeTaggedError(i,"credential-already-in-use",er);if("EMAIL_EXISTS"===f)throw _makeTaggedError(i,"email-already-in-use",er);if("USER_DISABLED"===f)throw _makeTaggedError(i,"user-disabled",er);let es=m[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(ei)throw function(i,h,f){let m=Object.assign(Object.assign({},_prodErrorMap()),{[h]:f}),en=new L.LL("auth","Firebase",m);return en.create(h,{appName:i.name})}(i,es,ei);_fail(i,es)}}catch(h){if(h instanceof L.ZR)throw h;_fail(i,"network-request-failed",{message:String(h)})}}async function _performSignInRequest(i,h,f,m,L={}){let en=await _performApiRequest(i,h,f,m,L);return"mfaPendingCredential"in en&&_fail(i,"multi-factor-auth-required",{_serverResponse:en}),en}function _getFinalTarget(i,h,f,m){let L=`${h}${f}?${m}`;return i.config.emulator?_emulatorUrl(i.config,L):`${i.config.apiScheme}://${L}`}let NetworkTimeout=class NetworkTimeout{constructor(i){this.auth=i,this.timer=null,this.promise=new Promise((i,h)=>{this.timer=setTimeout(()=>h(_createError(this.auth,"network-request-failed")),eh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}};function _makeTaggedError(i,h,f){let m={appName:i.name};f.email&&(m.email=f.email),f.phoneNumber&&(m.phoneNumber=f.phoneNumber);let L=_createError(i,h,m);return L.customData._tokenResponse=f,L}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function deleteAccount(i,h){return _performApiRequest(i,"POST","/v1/accounts:delete",h)}async function getAccountInfo(i,h){return _performApiRequest(i,"POST","/v1/accounts:lookup",h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function utcTimestampToDateString(i){if(i)try{let h=new Date(Number(i));if(!isNaN(h.getTime()))return h.toUTCString()}catch(i){}}async function getIdTokenResult(i,h=!1){let f=(0,L.m9)(i),m=await f.getIdToken(h),en=_parseToken(m);_assert(en&&en.exp&&en.auth_time&&en.iat,f.auth,"internal-error");let er="object"==typeof en.firebase?en.firebase:void 0,ei=null==er?void 0:er.sign_in_provider;return{claims:en,token:m,authTime:utcTimestampToDateString(secondsStringToMilliseconds(en.auth_time)),issuedAtTime:utcTimestampToDateString(secondsStringToMilliseconds(en.iat)),expirationTime:utcTimestampToDateString(secondsStringToMilliseconds(en.exp)),signInProvider:ei||null,signInSecondFactor:(null==er?void 0:er.sign_in_second_factor)||null}}function secondsStringToMilliseconds(i){return 1e3*Number(i)}function _parseToken(i){let[h,f,m]=i.split(".");if(void 0===h||void 0===f||void 0===m)return _logError("JWT malformed, contained fewer than 3 sections"),null;try{let i=(0,L.tV)(f);if(!i)return _logError("Failed to decode base64 JWT payload"),null;return JSON.parse(i)}catch(i){return _logError("Caught error parsing JWT payload as JSON",null==i?void 0:i.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _logoutIfInvalidated(i,h,f=!1){if(f)return h;try{return await h}catch(h){throw h instanceof L.ZR&&function({code:i}){return"auth/user-disabled"===i||"auth/user-token-expired"===i}(h)&&i.auth.currentUser===i&&await i.auth.signOut(),h}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ProactiveRefresh=class ProactiveRefresh{constructor(i){this.user=i,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(i){var h;if(i){let i=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),i}{this.errorBackoff=3e4;let i=null!==(h=this.user.stsTokenManager.expirationTime)&&void 0!==h?h:0,f=i-Date.now()-3e5;return Math.max(0,f)}}schedule(i=!1){if(!this.isRunning)return;let h=this.getInterval(i);this.timerId=setTimeout(async()=>{await this.iteration()},h)}async iteration(){try{await this.user.getIdToken(!0)}catch(i){(null==i?void 0:i.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserMetadata=class UserMetadata{constructor(i,h){this.createdAt=i,this.lastLoginAt=h,this._initializeTime()}_initializeTime(){this.lastSignInTime=utcTimestampToDateString(this.lastLoginAt),this.creationTime=utcTimestampToDateString(this.createdAt)}_copy(i){this.createdAt=i.createdAt,this.lastLoginAt=i.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reloadWithoutSaving(i){var h;let f=i.auth,m=await i.getIdToken(),L=await _logoutIfInvalidated(i,getAccountInfo(f,{idToken:m}));_assert(null==L?void 0:L.users.length,f,"internal-error");let en=L.users[0];i._notifyReloadListener(en);let er=(null===(h=en.providerUserInfo)||void 0===h?void 0:h.length)?en.providerUserInfo.map(i=>{var{providerId:h}=i,f=__rest(i,["providerId"]);return{providerId:h,uid:f.rawId||"",displayName:f.displayName||null,email:f.email||null,phoneNumber:f.phoneNumber||null,photoURL:f.photoUrl||null}}):[],ei=function(i,h){let f=i.filter(i=>!h.some(h=>h.providerId===i.providerId));return[...f,...h]}(i.providerData,er),es=i.isAnonymous,eo=!(i.email&&en.passwordHash)&&!(null==ei?void 0:ei.length),el={uid:en.localId,displayName:en.displayName||null,photoURL:en.photoUrl||null,email:en.email||null,emailVerified:en.emailVerified||!1,phoneNumber:en.phoneNumber||null,tenantId:en.tenantId||null,providerData:ei,metadata:new UserMetadata(en.createdAt,en.lastLoginAt),isAnonymous:!!es&&eo};Object.assign(i,el)}async function reload(i){let h=(0,L.m9)(i);await _reloadWithoutSaving(h),await h.auth._persistUserIfCurrent(h),h.auth._notifyListenersIfCurrent(h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function requestStsToken(i,h){let f=await _performFetchWithErrorHandling(i,{},async()=>{let f=(0,L.xO)({grant_type:"refresh_token",refresh_token:h}).slice(1),{tokenApiHost:m,apiKey:en}=i.config,er=_getFinalTarget(i,m,"/v1/token",`key=${en}`),ei=await i._getAdditionalHeaders();return ei["Content-Type"]="application/x-www-form-urlencoded",FetchProvider.fetch()(er,{method:"POST",headers:ei,body:f})});return{accessToken:f.access_token,expiresIn:f.expires_in,refreshToken:f.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StsTokenManager=class StsTokenManager{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(i){_assert(i.idToken,"internal-error"),_assert(void 0!==i.idToken,"internal-error"),_assert(void 0!==i.refreshToken,"internal-error");let h="expiresIn"in i&&void 0!==i.expiresIn?Number(i.expiresIn):function(i){let h=_parseToken(i);return _assert(h,"internal-error"),_assert(void 0!==h.exp,"internal-error"),_assert(void 0!==h.iat,"internal-error"),Number(h.exp)-Number(h.iat)}(i.idToken);this.updateTokensAndExpiration(i.idToken,i.refreshToken,h)}async getToken(i,h=!1){return(_assert(!this.accessToken||this.refreshToken,i,"user-token-expired"),h||!this.accessToken||this.isExpired)?this.refreshToken?(await this.refresh(i,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(i,h){let{accessToken:f,refreshToken:m,expiresIn:L}=await requestStsToken(i,h);this.updateTokensAndExpiration(f,m,Number(L))}updateTokensAndExpiration(i,h,f){this.refreshToken=h||null,this.accessToken=i||null,this.expirationTime=Date.now()+1e3*f}static fromJSON(i,h){let{refreshToken:f,accessToken:m,expirationTime:L}=h,en=new StsTokenManager;return f&&(_assert("string"==typeof f,"internal-error",{appName:i}),en.refreshToken=f),m&&(_assert("string"==typeof m,"internal-error",{appName:i}),en.accessToken=m),L&&(_assert("number"==typeof L,"internal-error",{appName:i}),en.expirationTime=L),en}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(i){this.accessToken=i.accessToken,this.refreshToken=i.refreshToken,this.expirationTime=i.expirationTime}_clone(){return Object.assign(new StsTokenManager,this.toJSON())}_performRefresh(){return debugFail("not implemented")}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function assertStringOrUndefined(i,h){_assert("string"==typeof i||void 0===i,"internal-error",{appName:h})}let UserImpl=class UserImpl{constructor(i){var{uid:h,auth:f,stsTokenManager:m}=i,L=__rest(i,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ProactiveRefresh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=h,this.auth=f,this.stsTokenManager=m,this.accessToken=m.accessToken,this.displayName=L.displayName||null,this.email=L.email||null,this.emailVerified=L.emailVerified||!1,this.phoneNumber=L.phoneNumber||null,this.photoURL=L.photoURL||null,this.isAnonymous=L.isAnonymous||!1,this.tenantId=L.tenantId||null,this.providerData=L.providerData?[...L.providerData]:[],this.metadata=new UserMetadata(L.createdAt||void 0,L.lastLoginAt||void 0)}async getIdToken(i){let h=await _logoutIfInvalidated(this,this.stsTokenManager.getToken(this.auth,i));return _assert(h,this.auth,"internal-error"),this.accessToken!==h&&(this.accessToken=h,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),h}getIdTokenResult(i){return getIdTokenResult(this,i)}reload(){return reload(this)}_assign(i){this!==i&&(_assert(this.uid===i.uid,this.auth,"internal-error"),this.displayName=i.displayName,this.photoURL=i.photoURL,this.email=i.email,this.emailVerified=i.emailVerified,this.phoneNumber=i.phoneNumber,this.isAnonymous=i.isAnonymous,this.tenantId=i.tenantId,this.providerData=i.providerData.map(i=>Object.assign({},i)),this.metadata._copy(i.metadata),this.stsTokenManager._assign(i.stsTokenManager))}_clone(i){let h=new UserImpl(Object.assign(Object.assign({},this),{auth:i,stsTokenManager:this.stsTokenManager._clone()}));return h.metadata._copy(this.metadata),h}_onReload(i){_assert(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=i,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(i){this.reloadListener?this.reloadListener(i):this.reloadUserInfo=i}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(i,h=!1){let f=!1;i.idToken&&i.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(i),f=!0),h&&await _reloadWithoutSaving(this),await this.auth._persistUserIfCurrent(this),f&&this.auth._notifyListenersIfCurrent(this)}async delete(){let i=await this.getIdToken();return await _logoutIfInvalidated(this,deleteAccount(this.auth,{idToken:i})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(i=>Object.assign({},i)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(i,h){var f,m,L,en,er,ei,es,eo;let el=null!==(f=h.displayName)&&void 0!==f?f:void 0,eh=null!==(m=h.email)&&void 0!==m?m:void 0,eu=null!==(L=h.phoneNumber)&&void 0!==L?L:void 0,ec=null!==(en=h.photoURL)&&void 0!==en?en:void 0,ep=null!==(er=h.tenantId)&&void 0!==er?er:void 0,ef=null!==(ei=h._redirectEventId)&&void 0!==ei?ei:void 0,eg=null!==(es=h.createdAt)&&void 0!==es?es:void 0,em=null!==(eo=h.lastLoginAt)&&void 0!==eo?eo:void 0,{uid:e_,emailVerified:ev,isAnonymous:ey,providerData:ew,stsTokenManager:eC}=h;_assert(e_&&eC,i,"internal-error");let eI=StsTokenManager.fromJSON(this.name,eC);_assert("string"==typeof e_,i,"internal-error"),assertStringOrUndefined(el,i.name),assertStringOrUndefined(eh,i.name),_assert("boolean"==typeof ev,i,"internal-error"),_assert("boolean"==typeof ey,i,"internal-error"),assertStringOrUndefined(eu,i.name),assertStringOrUndefined(ec,i.name),assertStringOrUndefined(ep,i.name),assertStringOrUndefined(ef,i.name),assertStringOrUndefined(eg,i.name),assertStringOrUndefined(em,i.name);let eT=new UserImpl({uid:e_,auth:i,email:eh,emailVerified:ev,displayName:el,isAnonymous:ey,photoURL:ec,phoneNumber:eu,tenantId:ep,stsTokenManager:eI,createdAt:eg,lastLoginAt:em});return ew&&Array.isArray(ew)&&(eT.providerData=ew.map(i=>Object.assign({},i))),ef&&(eT._redirectEventId=ef),eT}static async _fromIdTokenResponse(i,h,f=!1){let m=new StsTokenManager;m.updateFromServerResponse(h);let L=new UserImpl({uid:h.localId,auth:i,stsTokenManager:m,isAnonymous:f});return await _reloadWithoutSaving(L),L}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eu=new Map;function _getInstance(i){i instanceof Function||debugFail("Expected a class definition");let h=eu.get(i);return h?h instanceof i||debugFail("Instance stored in cache mismatched with class"):(h=new i,eu.set(i,h)),h}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let InMemoryPersistence=class InMemoryPersistence{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(i,h){this.storage[i]=h}async _get(i){let h=this.storage[i];return void 0===h?null:h}async _remove(i){delete this.storage[i]}_addListener(i,h){}_removeListener(i,h){}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _persistenceKeyName(i,h,f){return`firebase:${i}:${h}:${f}`}InMemoryPersistence.type="NONE";let PersistenceUserManager=class PersistenceUserManager{constructor(i,h,f){this.persistence=i,this.auth=h,this.userKey=f;let{config:m,name:L}=this.auth;this.fullUserKey=_persistenceKeyName(this.userKey,m.apiKey,L),this.fullPersistenceKey=_persistenceKeyName("persistence",m.apiKey,L),this.boundEventHandler=h._onStorageEvent.bind(h),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(i){return this.persistence._set(this.fullUserKey,i.toJSON())}async getCurrentUser(){let i=await this.persistence._get(this.fullUserKey);return i?UserImpl._fromJSON(this.auth,i):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(i){if(this.persistence===i)return;let h=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=i,h)return this.setCurrentUser(h)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(i,h,f="authUser"){if(!h.length)return new PersistenceUserManager(_getInstance(InMemoryPersistence),i,f);let m=(await Promise.all(h.map(async i=>{if(await i._isAvailable())return i}))).filter(i=>i),L=m[0]||_getInstance(InMemoryPersistence),en=_persistenceKeyName(f,i.config.apiKey,i.name),er=null;for(let f of h)try{let h=await f._get(en);if(h){let m=UserImpl._fromJSON(i,h);f!==L&&(er=m),L=f;break}}catch(i){}let ei=m.filter(i=>i._shouldAllowMigration);return L._shouldAllowMigration&&ei.length&&(L=ei[0],er&&await L._set(en,er.toJSON()),await Promise.all(h.map(async i=>{if(i!==L)try{await i._remove(en)}catch(i){}}))),new PersistenceUserManager(L,i,f)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getBrowserName(i){let h=i.toLowerCase();if(h.includes("opera/")||h.includes("opr/")||h.includes("opios/"))return"Opera";if(_isIEMobile(h))return"IEMobile";if(h.includes("msie")||h.includes("trident/"))return"IE";{if(h.includes("edge/"))return"Edge";if(_isFirefox(h))return"Firefox";if(h.includes("silk/"))return"Silk";if(_isBlackBerry(h))return"Blackberry";if(_isWebOS(h))return"Webos";if(_isSafari(h))return"Safari";if((h.includes("chrome/")||_isChromeIOS(h))&&!h.includes("edge/"))return"Chrome";if(_isAndroid(h))return"Android";let f=i.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/);if((null==f?void 0:f.length)===2)return f[1]}return"Other"}function _isFirefox(i=(0,L.z$)()){return/firefox\//i.test(i)}function _isSafari(i=(0,L.z$)()){let h=i.toLowerCase();return h.includes("safari/")&&!h.includes("chrome/")&&!h.includes("crios/")&&!h.includes("android")}function _isChromeIOS(i=(0,L.z$)()){return/crios\//i.test(i)}function _isIEMobile(i=(0,L.z$)()){return/iemobile/i.test(i)}function _isAndroid(i=(0,L.z$)()){return/android/i.test(i)}function _isBlackBerry(i=(0,L.z$)()){return/blackberry/i.test(i)}function _isWebOS(i=(0,L.z$)()){return/webos/i.test(i)}function _isIOS(i=(0,L.z$)()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function _isMobileBrowser(i=(0,L.z$)()){return _isIOS(i)||_isAndroid(i)||_isWebOS(i)||_isBlackBerry(i)||/windows phone/i.test(i)||_isIEMobile(i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _getClientVersion(i,h=[]){let f;switch(i){case"Browser":f=_getBrowserName((0,L.z$)());break;case"Worker":f=`${_getBrowserName((0,L.z$)())}-${i}`;break;default:f=i}let m=h.length?h.join(","):"FirebaseCore-web";return`${f}/JsCore/${en.Jn}/${m}`}async function getRecaptchaConfig(i,h){return _performApiRequest(i,"GET","/v2/recaptchaConfig",_addTidIfNecessary(i,h))}function isEnterprise(i){return void 0!==i&&void 0!==i.enterprise}let RecaptchaConfig=class RecaptchaConfig{constructor(i){if(this.siteKey="",this.emailPasswordEnabled=!1,void 0===i.recaptchaKey)throw Error("recaptchaKey undefined");this.siteKey=i.recaptchaKey.split("/")[3],this.emailPasswordEnabled=i.recaptchaEnforcementState.some(i=>"EMAIL_PASSWORD_PROVIDER"===i.provider&&"OFF"!==i.enforcementState)}};function _loadJS(i){return new Promise((h,f)=>{var m,L;let en=document.createElement("script");en.setAttribute("src",i),en.onload=h,en.onerror=i=>{let h=_createError("internal-error");h.customData=i,f(h)},en.type="text/javascript",en.charset="UTF-8",(null!==(L=null===(m=document.getElementsByTagName("head"))||void 0===m?void 0:m[0])&&void 0!==L?L:document).appendChild(en)})}function _generateCallbackName(i){return`__${i}${Math.floor(1e6*Math.random())}`}let RecaptchaEnterpriseVerifier=class RecaptchaEnterpriseVerifier{constructor(i){this.type="recaptcha-enterprise",this.auth=_castAuth(i)}async verify(i="verify",h=!1){async function retrieveSiteKey(i){if(!h){if(null==i.tenantId&&null!=i._agentRecaptchaConfig)return i._agentRecaptchaConfig.siteKey;if(null!=i.tenantId&&void 0!==i._tenantRecaptchaConfigs[i.tenantId])return i._tenantRecaptchaConfigs[i.tenantId].siteKey}return new Promise(async(h,f)=>{getRecaptchaConfig(i,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(void 0===m.recaptchaKey)f(Error("recaptcha Enterprise site key undefined"));else{let f=new RecaptchaConfig(m);return null==i.tenantId?i._agentRecaptchaConfig=f:i._tenantRecaptchaConfigs[i.tenantId]=f,h(f.siteKey)}}).catch(i=>{f(i)})})}function retrieveRecaptchaToken(h,f,m){let L=window.grecaptcha;isEnterprise(L)?L.enterprise.ready(()=>{L.enterprise.execute(h,{action:i}).then(i=>{f(i)}).catch(()=>{f("NO_RECAPTCHA")})}):m(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((i,f)=>{retrieveSiteKey(this.auth).then(m=>{if(!h&&isEnterprise(window.grecaptcha))retrieveRecaptchaToken(m,i,f);else{if("undefined"==typeof window){f(Error("RecaptchaVerifier is only supported in browser"));return}_loadJS("https://www.google.com/recaptcha/enterprise.js?render="+m).then(()=>{retrieveRecaptchaToken(m,i,f)}).catch(i=>{f(i)})}}).catch(i=>{f(i)})})}};async function injectRecaptchaFields(i,h,f,m=!1){let L;let en=new RecaptchaEnterpriseVerifier(i);try{L=await en.verify(f)}catch(i){L=await en.verify(f,!0)}let er=Object.assign({},h);return m?Object.assign(er,{captchaResp:L}):Object.assign(er,{captchaResponse:L}),Object.assign(er,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(er,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),er}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthMiddlewareQueue=class AuthMiddlewareQueue{constructor(i){this.auth=i,this.queue=[]}pushCallback(i,h){let wrappedCallback=h=>new Promise((f,m)=>{try{let m=i(h);f(m)}catch(i){m(i)}});wrappedCallback.onAbort=h,this.queue.push(wrappedCallback);let f=this.queue.length-1;return()=>{this.queue[f]=()=>Promise.resolve()}}async runMiddleware(i){if(this.auth.currentUser===i)return;let h=[];try{for(let f of this.queue)await f(i),f.onAbort&&h.push(f.onAbort)}catch(i){for(let i of(h.reverse(),h))try{i()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null==i?void 0:i.message})}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthImpl=class AuthImpl{constructor(i,h,f,m){this.app=i,this.heartbeatServiceProvider=h,this.appCheckServiceProvider=f,this.config=m,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Subscription(this),this.idTokenSubscription=new Subscription(this),this.beforeStateQueue=new AuthMiddlewareQueue(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=es,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=i.name,this.clientVersion=m.sdkClientVersion}_initializeWithPersistence(i,h){return h&&(this._popupRedirectResolver=_getInstance(h)),this._initializationPromise=this.queue(async()=>{var f,m;if(!this._deleted&&(this.persistenceManager=await PersistenceUserManager.create(this,i),!this._deleted)){if(null===(f=this._popupRedirectResolver)||void 0===f?void 0:f._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(h),this.lastNotifiedUid=(null===(m=this.currentUser)||void 0===m?void 0:m.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;let i=await this.assertedPersistence.getCurrentUser();if(this.currentUser||i){if(this.currentUser&&i&&this.currentUser.uid===i.uid){this._currentUser._assign(i),await this.currentUser.getIdToken();return}await this._updateCurrentUser(i,!0)}}async initializeCurrentUser(i){var h;let f=await this.assertedPersistence.getCurrentUser(),m=f,L=!1;if(i&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();let f=null===(h=this.redirectUser)||void 0===h?void 0:h._redirectEventId,en=null==m?void 0:m._redirectEventId,er=await this.tryRedirectSignIn(i);(!f||f===en)&&(null==er?void 0:er.user)&&(m=er.user,L=!0)}if(!m)return this.directlySetCurrentUser(null);if(!m._redirectEventId){if(L)try{await this.beforeStateQueue.runMiddleware(m)}catch(i){m=f,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(i))}return m?this.reloadAndSetCurrentUserOrClear(m):this.directlySetCurrentUser(null)}return(_assert(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===m._redirectEventId)?this.directlySetCurrentUser(m):this.reloadAndSetCurrentUserOrClear(m)}async tryRedirectSignIn(i){let h=null;try{h=await this._popupRedirectResolver._completeRedirectFn(this,i,!0)}catch(i){await this._setRedirectUser(null)}return h}async reloadAndSetCurrentUserOrClear(i){try{await _reloadWithoutSaving(i)}catch(i){if((null==i?void 0:i.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(i)}useDeviceLanguage(){this.languageCode=function(){if("undefined"==typeof navigator)return null;let i=navigator;return i.languages&&i.languages[0]||i.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(i){let h=i?(0,L.m9)(i):null;return h&&_assert(h.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(h&&h._clone(this))}async _updateCurrentUser(i,h=!1){if(!this._deleted)return i&&_assert(this.tenantId===i.tenantId,this,"tenant-id-mismatch"),h||await this.beforeStateQueue.runMiddleware(i),this.queue(async()=>{await this.directlySetCurrentUser(i),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(i){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_getInstance(i))})}async initializeRecaptchaConfig(){let i=await getRecaptchaConfig(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),h=new RecaptchaConfig(i);if(null==this.tenantId?this._agentRecaptchaConfig=h:this._tenantRecaptchaConfigs[this.tenantId]=h,h.emailPasswordEnabled){let i=new RecaptchaEnterpriseVerifier(this);i.verify()}}_getRecaptchaConfig(){return null==this.tenantId?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(i){this._errorFactory=new L.LL("auth","Firebase",i())}onAuthStateChanged(i,h,f){return this.registerStateListener(this.authStateSubscription,i,h,f)}beforeAuthStateChanged(i,h){return this.beforeStateQueue.pushCallback(i,h)}onIdTokenChanged(i,h,f){return this.registerStateListener(this.idTokenSubscription,i,h,f)}toJSON(){var i;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(i=this._currentUser)||void 0===i?void 0:i.toJSON()}}async _setRedirectUser(i,h){let f=await this.getOrInitRedirectPersistenceManager(h);return null===i?f.removeCurrentUser():f.setCurrentUser(i)}async getOrInitRedirectPersistenceManager(i){if(!this.redirectPersistenceManager){let h=i&&_getInstance(i)||this._popupRedirectResolver;_assert(h,this,"argument-error"),this.redirectPersistenceManager=await PersistenceUserManager.create(this,[_getInstance(h._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(i){var h,f;return(this._isInitialized&&await this.queue(async()=>{}),(null===(h=this._currentUser)||void 0===h?void 0:h._redirectEventId)===i)?this._currentUser:(null===(f=this.redirectUser)||void 0===f?void 0:f._redirectEventId)===i?this.redirectUser:null}async _persistUserIfCurrent(i){if(i===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(i))}_notifyListenersIfCurrent(i){i===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var i,h;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);let f=null!==(h=null===(i=this.currentUser)||void 0===i?void 0:i.uid)&&void 0!==h?h:null;this.lastNotifiedUid!==f&&(this.lastNotifiedUid=f,this.authStateSubscription.next(this.currentUser))}registerStateListener(i,h,f,m){if(this._deleted)return()=>{};let L="function"==typeof h?h:h.next.bind(h),en=this._isInitialized?Promise.resolve():this._initializationPromise;return(_assert(en,this,"internal-error"),en.then(()=>L(this.currentUser)),"function"==typeof h)?i.addObserver(h,f,m):i.addObserver(h)}async directlySetCurrentUser(i){this.currentUser&&this.currentUser!==i&&this._currentUser._stopProactiveRefresh(),i&&this.isProactiveRefreshEnabled&&i._startProactiveRefresh(),this.currentUser=i,i?await this.assertedPersistence.setCurrentUser(i):await this.assertedPersistence.removeCurrentUser()}queue(i){return this.operations=this.operations.then(i,i),this.operations}get assertedPersistence(){return _assert(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(i){!i||this.frameworks.includes(i)||(this.frameworks.push(i),this.frameworks.sort(),this.clientVersion=_getClientVersion(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var i;let h={"X-Client-Version":this.clientVersion};this.app.options.appId&&(h["X-Firebase-gmpid"]=this.app.options.appId);let f=await (null===(i=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===i?void 0:i.getHeartbeatsHeader());f&&(h["X-Firebase-Client"]=f);let m=await this._getAppCheckToken();return m&&(h["X-Firebase-AppCheck"]=m),h}async _getAppCheckToken(){var i;let h=await (null===(i=this.appCheckServiceProvider.getImmediate({optional:!0}))||void 0===i?void 0:i.getToken());return(null==h?void 0:h.error)&&function(i,...h){eo.logLevel<=er.in.WARN&&eo.warn(`Auth (${en.Jn}): ${i}`,...h)}(`Error while retrieving App Check token: ${h.error}`),null==h?void 0:h.token}};function _castAuth(i){return(0,L.m9)(i)}let Subscription=class Subscription{constructor(i){this.auth=i,this.observer=null,this.addObserver=(0,L.ne)(i=>this.observer=i)}get next(){return _assert(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}};function extractProtocol(i){let h=i.indexOf(":");return h<0?"":i.substr(0,h+1)}function parsePort(i){if(!i)return null;let h=Number(i);return isNaN(h)?null:h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthCredential=class AuthCredential{constructor(i,h){this.providerId=i,this.signInMethod=h}toJSON(){return debugFail("not implemented")}_getIdTokenResponse(i){return debugFail("not implemented")}_linkToIdToken(i,h){return debugFail("not implemented")}_getReauthenticationResolver(i){return debugFail("not implemented")}};async function updateEmailPassword(i,h){return _performApiRequest(i,"POST","/v1/accounts:update",h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithPassword(i,h){return _performSignInRequest(i,"POST","/v1/accounts:signInWithPassword",_addTidIfNecessary(i,h))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithEmailLink$1(i,h){return _performSignInRequest(i,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(i,h))}async function signInWithEmailLinkForLinking(i,h){return _performSignInRequest(i,"POST","/v1/accounts:signInWithEmailLink",_addTidIfNecessary(i,h))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthCredential=class EmailAuthCredential extends AuthCredential{constructor(i,h,f,m=null){super("password",f),this._email=i,this._password=h,this._tenantId=m}static _fromEmailAndPassword(i,h){return new EmailAuthCredential(i,h,"password")}static _fromEmailAndCode(i,h,f=null){return new EmailAuthCredential(i,h,"emailLink",f)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(i){let h="string"==typeof i?JSON.parse(i):i;if((null==h?void 0:h.email)&&(null==h?void 0:h.password)){if("password"===h.signInMethod)return this._fromEmailAndPassword(h.email,h.password);if("emailLink"===h.signInMethod)return this._fromEmailAndCode(h.email,h.password,h.tenantId)}return null}async _getIdTokenResponse(i){var h;switch(this.signInMethod){case"password":let f={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(null===(h=i._getRecaptchaConfig())||void 0===h||!h.emailPasswordEnabled)return signInWithPassword(i,f).catch(async h=>{if("auth/missing-recaptcha-token"!==h.code)return Promise.reject(h);{console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");let h=await injectRecaptchaFields(i,f,"signInWithPassword");return signInWithPassword(i,h)}});{let h=await injectRecaptchaFields(i,f,"signInWithPassword");return signInWithPassword(i,h)}case"emailLink":return signInWithEmailLink$1(i,{email:this._email,oobCode:this._password});default:_fail(i,"internal-error")}}async _linkToIdToken(i,h){switch(this.signInMethod){case"password":return updateEmailPassword(i,{idToken:h,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return signInWithEmailLinkForLinking(i,{idToken:h,email:this._email,oobCode:this._password});default:_fail(i,"internal-error")}}_getReauthenticationResolver(i){return this._getIdTokenResponse(i)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function signInWithIdp(i,h){return _performSignInRequest(i,"POST","/v1/accounts:signInWithIdp",_addTidIfNecessary(i,h))}let OAuthCredential=class OAuthCredential extends AuthCredential{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(i){let h=new OAuthCredential(i.providerId,i.signInMethod);return i.idToken||i.accessToken?(i.idToken&&(h.idToken=i.idToken),i.accessToken&&(h.accessToken=i.accessToken),i.nonce&&!i.pendingToken&&(h.nonce=i.nonce),i.pendingToken&&(h.pendingToken=i.pendingToken)):i.oauthToken&&i.oauthTokenSecret?(h.accessToken=i.oauthToken,h.secret=i.oauthTokenSecret):_fail("argument-error"),h}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(i){let h="string"==typeof i?JSON.parse(i):i,{providerId:f,signInMethod:m}=h,L=__rest(h,["providerId","signInMethod"]);if(!f||!m)return null;let en=new OAuthCredential(f,m);return en.idToken=L.idToken||void 0,en.accessToken=L.accessToken||void 0,en.secret=L.secret,en.nonce=L.nonce,en.pendingToken=L.pendingToken||null,en}_getIdTokenResponse(i){let h=this.buildRequest();return signInWithIdp(i,h)}_linkToIdToken(i,h){let f=this.buildRequest();return f.idToken=h,signInWithIdp(i,f)}_getReauthenticationResolver(i){let h=this.buildRequest();return h.autoCreate=!1,signInWithIdp(i,h)}buildRequest(){let i={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)i.pendingToken=this.pendingToken;else{let h={};this.idToken&&(h.id_token=this.idToken),this.accessToken&&(h.access_token=this.accessToken),this.secret&&(h.oauth_token_secret=this.secret),h.providerId=this.providerId,this.nonce&&!this.pendingToken&&(h.nonce=this.nonce),i.postBody=(0,L.xO)(h)}return i}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sendPhoneVerificationCode(i,h){return _performApiRequest(i,"POST","/v1/accounts:sendVerificationCode",_addTidIfNecessary(i,h))}async function signInWithPhoneNumber$1(i,h){return _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,h))}async function linkWithPhoneNumber$1(i,h){let f=await _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,h));if(f.temporaryProof)throw _makeTaggedError(i,"account-exists-with-different-credential",f);return f}let ec={USER_NOT_FOUND:"user-not-found"};async function verifyPhoneNumberForExisting(i,h){let f=Object.assign(Object.assign({},h),{operation:"REAUTH"});return _performSignInRequest(i,"POST","/v1/accounts:signInWithPhoneNumber",_addTidIfNecessary(i,f),ec)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthCredential=class PhoneAuthCredential extends AuthCredential{constructor(i){super("phone","phone"),this.params=i}static _fromVerification(i,h){return new PhoneAuthCredential({verificationId:i,verificationCode:h})}static _fromTokenResponse(i,h){return new PhoneAuthCredential({phoneNumber:i,temporaryProof:h})}_getIdTokenResponse(i){return signInWithPhoneNumber$1(i,this._makeVerificationRequest())}_linkToIdToken(i,h){return linkWithPhoneNumber$1(i,Object.assign({idToken:h},this._makeVerificationRequest()))}_getReauthenticationResolver(i){return verifyPhoneNumberForExisting(i,this._makeVerificationRequest())}_makeVerificationRequest(){let{temporaryProof:i,phoneNumber:h,verificationId:f,verificationCode:m}=this.params;return i&&h?{temporaryProof:i,phoneNumber:h}:{sessionInfo:f,code:m}}toJSON(){let i={providerId:this.providerId};return this.params.phoneNumber&&(i.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(i.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(i.verificationCode=this.params.verificationCode),this.params.verificationId&&(i.verificationId=this.params.verificationId),i}static fromJSON(i){"string"==typeof i&&(i=JSON.parse(i));let{verificationId:h,verificationCode:f,phoneNumber:m,temporaryProof:L}=i;return f||h||m||L?new PhoneAuthCredential({verificationId:h,verificationCode:f,phoneNumber:m,temporaryProof:L}):null}};let ActionCodeURL=class ActionCodeURL{constructor(i){var h,f,m,en,er,ei;let es=(0,L.zd)((0,L.pd)(i)),eo=null!==(h=es.apiKey)&&void 0!==h?h:null,el=null!==(f=es.oobCode)&&void 0!==f?f:null,eh=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}(null!==(m=es.mode)&&void 0!==m?m:null);_assert(eo&&el&&eh,"argument-error"),this.apiKey=eo,this.operation=eh,this.code=el,this.continueUrl=null!==(en=es.continueUrl)&&void 0!==en?en:null,this.languageCode=null!==(er=es.languageCode)&&void 0!==er?er:null,this.tenantId=null!==(ei=es.tenantId)&&void 0!==ei?ei:null}static parseLink(i){let h=function(i){let h=(0,L.zd)((0,L.pd)(i)).link,f=h?(0,L.zd)((0,L.pd)(h)).deep_link_id:null,m=(0,L.zd)((0,L.pd)(i)).deep_link_id,en=m?(0,L.zd)((0,L.pd)(m)).link:null;return en||m||f||h||i}(i);try{return new ActionCodeURL(h)}catch(i){return null}}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EmailAuthProvider=class EmailAuthProvider{constructor(){this.providerId=EmailAuthProvider.PROVIDER_ID}static credential(i,h){return EmailAuthCredential._fromEmailAndPassword(i,h)}static credentialWithLink(i,h){let f=ActionCodeURL.parseLink(h);return _assert(f,"argument-error"),EmailAuthCredential._fromEmailAndCode(i,f.code,f.tenantId)}};EmailAuthProvider.PROVIDER_ID="password",EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD="password",EmailAuthProvider.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FederatedAuthProvider=class FederatedAuthProvider{constructor(i){this.providerId=i,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(i){this.defaultLanguageCode=i}setCustomParameters(i){return this.customParameters=i,this}getCustomParameters(){return this.customParameters}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BaseOAuthProvider=class BaseOAuthProvider extends FederatedAuthProvider{constructor(){super(...arguments),this.scopes=[]}addScope(i){return this.scopes.includes(i)||this.scopes.push(i),this}getScopes(){return[...this.scopes]}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FacebookAuthProvider=class FacebookAuthProvider extends BaseOAuthProvider{constructor(){super("facebook.com")}static credential(i){return OAuthCredential._fromParams({providerId:FacebookAuthProvider.PROVIDER_ID,signInMethod:FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return FacebookAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return FacebookAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return FacebookAuthProvider.credential(i.oauthAccessToken)}catch(i){return null}}};FacebookAuthProvider.FACEBOOK_SIGN_IN_METHOD="facebook.com",FacebookAuthProvider.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GoogleAuthProvider=class GoogleAuthProvider extends BaseOAuthProvider{constructor(){super("google.com"),this.addScope("profile")}static credential(i,h){return OAuthCredential._fromParams({providerId:GoogleAuthProvider.PROVIDER_ID,signInMethod:GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,idToken:i,accessToken:h})}static credentialFromResult(i){return GoogleAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return GoogleAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;let{oauthIdToken:h,oauthAccessToken:f}=i;if(!h&&!f)return null;try{return GoogleAuthProvider.credential(h,f)}catch(i){return null}}};GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD="google.com",GoogleAuthProvider.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let GithubAuthProvider=class GithubAuthProvider extends BaseOAuthProvider{constructor(){super("github.com")}static credential(i){return OAuthCredential._fromParams({providerId:GithubAuthProvider.PROVIDER_ID,signInMethod:GithubAuthProvider.GITHUB_SIGN_IN_METHOD,accessToken:i})}static credentialFromResult(i){return GithubAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return GithubAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i||!("oauthAccessToken"in i)||!i.oauthAccessToken)return null;try{return GithubAuthProvider.credential(i.oauthAccessToken)}catch(i){return null}}};GithubAuthProvider.GITHUB_SIGN_IN_METHOD="github.com",GithubAuthProvider.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TwitterAuthProvider=class TwitterAuthProvider extends BaseOAuthProvider{constructor(){super("twitter.com")}static credential(i,h){return OAuthCredential._fromParams({providerId:TwitterAuthProvider.PROVIDER_ID,signInMethod:TwitterAuthProvider.TWITTER_SIGN_IN_METHOD,oauthToken:i,oauthTokenSecret:h})}static credentialFromResult(i){return TwitterAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return TwitterAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;let{oauthAccessToken:h,oauthTokenSecret:f}=i;if(!h||!f)return null;try{return TwitterAuthProvider.credential(h,f)}catch(i){return null}}};TwitterAuthProvider.TWITTER_SIGN_IN_METHOD="twitter.com",TwitterAuthProvider.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let UserCredentialImpl=class UserCredentialImpl{constructor(i){this.user=i.user,this.providerId=i.providerId,this._tokenResponse=i._tokenResponse,this.operationType=i.operationType}static async _fromIdTokenResponse(i,h,f,m=!1){let L=await UserImpl._fromIdTokenResponse(i,f,m),en=providerIdForResponse(f),er=new UserCredentialImpl({user:L,providerId:en,_tokenResponse:f,operationType:h});return er}static async _forOperation(i,h,f){await i._updateTokensIfNecessary(f,!0);let m=providerIdForResponse(f);return new UserCredentialImpl({user:i,providerId:m,_tokenResponse:f,operationType:h})}};function providerIdForResponse(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MultiFactorError=class MultiFactorError extends L.ZR{constructor(i,h,f,m){var L;super(h.code,h.message),this.operationType=f,this.user=m,Object.setPrototypeOf(this,MultiFactorError.prototype),this.customData={appName:i.name,tenantId:null!==(L=i.tenantId)&&void 0!==L?L:void 0,_serverResponse:h.customData._serverResponse,operationType:f}}static _fromErrorAndOperation(i,h,f,m){return new MultiFactorError(i,h,f,m)}};function _processCredentialSavingMfaContextIfNecessary(i,h,f,m){let L="reauthenticate"===h?f._getReauthenticationResolver(i):f._getIdTokenResponse(i);return L.catch(f=>{if("auth/multi-factor-auth-required"===f.code)throw MultiFactorError._fromErrorAndOperation(i,f,h,m);throw f})}async function _link$1(i,h,f=!1){let m=await _logoutIfInvalidated(i,h._linkToIdToken(i.auth,await i.getIdToken()),f);return UserCredentialImpl._forOperation(i,"link",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _reauthenticate(i,h,f=!1){let{auth:m}=i,L="reauthenticate";try{let en=await _logoutIfInvalidated(i,_processCredentialSavingMfaContextIfNecessary(m,L,h,i),f);_assert(en.idToken,m,"internal-error");let er=_parseToken(en.idToken);_assert(er,m,"internal-error");let{sub:ei}=er;return _assert(i.uid===ei,m,"user-mismatch"),UserCredentialImpl._forOperation(i,L,en)}catch(i){throw(null==i?void 0:i.code)==="auth/user-not-found"&&_fail(m,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _signInWithCredential(i,h,f=!1){let m="signIn",L=await _processCredentialSavingMfaContextIfNecessary(i,m,h),en=await UserCredentialImpl._fromIdTokenResponse(i,m,L);return f||await i._updateCurrentUser(en.user),en}function onIdTokenChanged(i,h,f,m){return(0,L.m9)(i).onIdTokenChanged(h,f,m)}new WeakMap;let ep="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserPersistenceClass=class BrowserPersistenceClass{constructor(i,h){this.storageRetriever=i,this.type=h}_isAvailable(){try{if(!this.storage)return Promise.resolve(!1);return this.storage.setItem(ep,"1"),this.storage.removeItem(ep),Promise.resolve(!0)}catch(i){return Promise.resolve(!1)}}_set(i,h){return this.storage.setItem(i,JSON.stringify(h)),Promise.resolve()}_get(i){let h=this.storage.getItem(i);return Promise.resolve(h?JSON.parse(h):null)}_remove(i){return this.storage.removeItem(i),Promise.resolve()}get storage(){return this.storageRetriever()}};let BrowserLocalPersistence=class BrowserLocalPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(i,h)=>this.onStorageEvent(i,h),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(){let i=(0,L.z$)();return _isSafari(i)||_isIOS(i)}()&&function(){try{return!!(window&&window!==window.top)}catch(i){return!1}}(),this.fallbackToPolling=_isMobileBrowser(),this._shouldAllowMigration=!0}forAllChangedKeys(i){for(let h of Object.keys(this.listeners)){let f=this.storage.getItem(h),m=this.localCache[h];f!==m&&i(h,m,f)}}onStorageEvent(i,h=!1){if(!i.key){this.forAllChangedKeys((i,h,f)=>{this.notifyListeners(i,f)});return}let f=i.key;if(h?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){let m=this.storage.getItem(f);if(i.newValue!==m)null!==i.newValue?this.storage.setItem(f,i.newValue):this.storage.removeItem(f);else if(this.localCache[f]===i.newValue&&!h)return}let triggerListeners=()=>{let i=this.storage.getItem(f);(h||this.localCache[f]!==i)&&this.notifyListeners(f,i)},m=this.storage.getItem(f);(0,L.w1)()&&10===document.documentMode&&m!==i.newValue&&i.newValue!==i.oldValue?setTimeout(triggerListeners,10):triggerListeners()}notifyListeners(i,h){this.localCache[i]=h;let f=this.listeners[i];if(f)for(let i of Array.from(f))i(h?JSON.parse(h):h)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((i,h,f)=>{this.onStorageEvent(new StorageEvent("storage",{key:i,oldValue:h,newValue:f}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(i,h){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[i]||(this.listeners[i]=new Set,this.localCache[i]=this.storage.getItem(i)),this.listeners[i].add(h)}_removeListener(i,h){this.listeners[i]&&(this.listeners[i].delete(h),0===this.listeners[i].size&&delete this.listeners[i]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(i,h){await super._set(i,h),this.localCache[i]=JSON.stringify(h)}async _get(i){let h=await super._get(i);return this.localCache[i]=JSON.stringify(h),h}async _remove(i){await super._remove(i),delete this.localCache[i]}};BrowserLocalPersistence.type="LOCAL";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let BrowserSessionPersistence=class BrowserSessionPersistence extends BrowserPersistenceClass{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(i,h){}_removeListener(i,h){}};BrowserSessionPersistence.type="SESSION";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Receiver=class Receiver{constructor(i){this.eventTarget=i,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(i){let h=this.receivers.find(h=>h.isListeningto(i));if(h)return h;let f=new Receiver(i);return this.receivers.push(f),f}isListeningto(i){return this.eventTarget===i}async handleEvent(i){let{eventId:h,eventType:f,data:m}=i.data,L=this.handlersMap[f];if(!(null==L?void 0:L.size))return;i.ports[0].postMessage({status:"ack",eventId:h,eventType:f});let en=Array.from(L).map(async h=>h(i.origin,m)),er=await Promise.all(en.map(async i=>{try{let h=await i;return{fulfilled:!0,value:h}}catch(i){return{fulfilled:!1,reason:i}}}));i.ports[0].postMessage({status:"done",eventId:h,eventType:f,response:er})}_subscribe(i,h){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[i]||(this.handlersMap[i]=new Set),this.handlersMap[i].add(h)}_unsubscribe(i,h){this.handlersMap[i]&&h&&this.handlersMap[i].delete(h),h&&0!==this.handlersMap[i].size||delete this.handlersMap[i],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _generateEventId(i="",h=10){let f="";for(let i=0;i<h;i++)f+=Math.floor(10*Math.random());return i+f}Receiver.receivers=[];/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sender=class Sender{constructor(i){this.target=i,this.handlers=new Set}removeMessageHandler(i){i.messageChannel&&(i.messageChannel.port1.removeEventListener("message",i.onMessage),i.messageChannel.port1.close()),this.handlers.delete(i)}async _send(i,h,f=50){let m,L;let en="undefined"!=typeof MessageChannel?new MessageChannel:null;if(!en)throw Error("connection_unavailable");return new Promise((er,ei)=>{let es=_generateEventId("",20);en.port1.start();let eo=setTimeout(()=>{ei(Error("unsupported_event"))},f);L={messageChannel:en,onMessage(i){if(i.data.eventId===es)switch(i.data.status){case"ack":clearTimeout(eo),m=setTimeout(()=>{ei(Error("timeout"))},3e3);break;case"done":clearTimeout(m),er(i.data.response);break;default:clearTimeout(eo),clearTimeout(m),ei(Error("invalid_response"))}}},this.handlers.add(L),en.port1.addEventListener("message",L.onMessage),this.target.postMessage({eventType:i,eventId:es,data:h},[en.port2])}).finally(()=>{L&&this.removeMessageHandler(L)})}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _window(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _isWorker(){return void 0!==_window().WorkerGlobalScope&&"function"==typeof _window().importScripts}async function _getActiveServiceWorker(){if(!(null==navigator?void 0:navigator.serviceWorker))return null;try{let i=await navigator.serviceWorker.ready;return i.active}catch(i){return null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ef="firebaseLocalStorageDb",eg="firebaseLocalStorage",em="fbase_key";let DBPromise=class DBPromise{constructor(i){this.request=i}toPromise(){return new Promise((i,h)=>{this.request.addEventListener("success",()=>{i(this.request.result)}),this.request.addEventListener("error",()=>{h(this.request.error)})})}};function getObjectStore(i,h){return i.transaction([eg],h?"readwrite":"readonly").objectStore(eg)}function _openDatabase(){let i=indexedDB.open(ef,1);return new Promise((h,f)=>{i.addEventListener("error",()=>{f(i.error)}),i.addEventListener("upgradeneeded",()=>{let h=i.result;try{h.createObjectStore(eg,{keyPath:em})}catch(i){f(i)}}),i.addEventListener("success",async()=>{let f=i.result;f.objectStoreNames.contains(eg)?h(f):(f.close(),await function(){let i=indexedDB.deleteDatabase(ef);return new DBPromise(i).toPromise()}(),h(await _openDatabase()))})})}async function _putObject(i,h,f){let m=getObjectStore(i,!0).put({[em]:h,value:f});return new DBPromise(m).toPromise()}async function getObject(i,h){let f=getObjectStore(i,!1).get(h),m=await new DBPromise(f).toPromise();return void 0===m?null:m.value}function _deleteObject(i,h){let f=getObjectStore(i,!0).delete(h);return new DBPromise(f).toPromise()}let IndexedDBLocalPersistence=class IndexedDBLocalPersistence{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await _openDatabase()),this.db}async _withRetries(i){let h=0;for(;;)try{let h=await this._openDb();return await i(h)}catch(i){if(h++>3)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return _isWorker()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Receiver._getInstance(_isWorker()?self:null),this.receiver._subscribe("keyChanged",async(i,h)=>{let f=await this._poll();return{keyProcessed:f.includes(h.key)}}),this.receiver._subscribe("ping",async(i,h)=>["keyChanged"])}async initializeSender(){var i,h;if(this.activeServiceWorker=await _getActiveServiceWorker(),!this.activeServiceWorker)return;this.sender=new Sender(this.activeServiceWorker);let f=await this.sender._send("ping",{},800);f&&(null===(i=f[0])||void 0===i?void 0:i.fulfilled)&&(null===(h=f[0])||void 0===h?void 0:h.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(i){var h;if(this.sender&&this.activeServiceWorker&&((null===(h=null==navigator?void 0:navigator.serviceWorker)||void 0===h?void 0:h.controller)||null)===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:i},this.serviceWorkerReceiverAvailable?800:50)}catch(i){}}async _isAvailable(){try{if(!indexedDB)return!1;let i=await _openDatabase();return await _putObject(i,ep,"1"),await _deleteObject(i,ep),!0}catch(i){}return!1}async _withPendingWrite(i){this.pendingWrites++;try{await i()}finally{this.pendingWrites--}}async _set(i,h){return this._withPendingWrite(async()=>(await this._withRetries(f=>_putObject(f,i,h)),this.localCache[i]=h,this.notifyServiceWorker(i)))}async _get(i){let h=await this._withRetries(h=>getObject(h,i));return this.localCache[i]=h,h}async _remove(i){return this._withPendingWrite(async()=>(await this._withRetries(h=>_deleteObject(h,i)),delete this.localCache[i],this.notifyServiceWorker(i)))}async _poll(){let i=await this._withRetries(i=>{let h=getObjectStore(i,!1).getAll();return new DBPromise(h).toPromise()});if(!i||0!==this.pendingWrites)return[];let h=[],f=new Set;for(let{fbase_key:m,value:L}of i)f.add(m),JSON.stringify(this.localCache[m])!==JSON.stringify(L)&&(this.notifyListeners(m,L),h.push(m));for(let i of Object.keys(this.localCache))this.localCache[i]&&!f.has(i)&&(this.notifyListeners(i,null),h.push(i));return h}notifyListeners(i,h){this.localCache[i]=h;let f=this.listeners[i];if(f)for(let i of Array.from(f))i(h)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(i,h){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[i]||(this.listeners[i]=new Set,this._get(i)),this.listeners[i].add(h)}_removeListener(i,h){this.listeners[i]&&(this.listeners[i].delete(h),0===this.listeners[i].size&&delete this.listeners[i]),0===Object.keys(this.listeners).length&&this.stopPolling()}};async function _verifyPhoneNumber(i,h,f){var m,L,en;let er=await f.verify();try{let ei;if(_assert("string"==typeof er,i,"argument-error"),_assert("recaptcha"===f.type,i,"argument-error"),ei="string"==typeof h?{phoneNumber:h}:h,"session"in ei){let h=ei.session;if("phoneNumber"in ei){_assert("enroll"===h.type,i,"internal-error");let f=await (L={idToken:h.credential,phoneEnrollmentInfo:{phoneNumber:ei.phoneNumber,recaptchaToken:er}},_performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:start",_addTidIfNecessary(i,L)));return f.phoneSessionInfo.sessionInfo}{_assert("signin"===h.type,i,"internal-error");let f=(null===(m=ei.multiFactorHint)||void 0===m?void 0:m.uid)||ei.multiFactorUid;_assert(f,i,"missing-multi-factor-info");let L=await (en={mfaPendingCredential:h.credential,mfaEnrollmentId:f,phoneSignInInfo:{recaptchaToken:er}},_performApiRequest(i,"POST","/v2/accounts/mfaSignIn:start",_addTidIfNecessary(i,en)));return L.phoneResponseInfo.sessionInfo}}{let{sessionInfo:h}=await sendPhoneVerificationCode(i,{phoneNumber:ei.phoneNumber,recaptchaToken:er});return h}}finally{f._reset()}}IndexedDBLocalPersistence.type="LOCAL",_generateCallbackName("rcb"),new Delay(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PhoneAuthProvider=class PhoneAuthProvider{constructor(i){this.providerId=PhoneAuthProvider.PROVIDER_ID,this.auth=_castAuth(i)}verifyPhoneNumber(i,h){return _verifyPhoneNumber(this.auth,i,(0,L.m9)(h))}static credential(i,h){return PhoneAuthCredential._fromVerification(i,h)}static credentialFromResult(i){return PhoneAuthProvider.credentialFromTaggedObject(i)}static credentialFromError(i){return PhoneAuthProvider.credentialFromTaggedObject(i.customData||{})}static credentialFromTaggedObject({_tokenResponse:i}){if(!i)return null;let{phoneNumber:h,temporaryProof:f}=i;return h&&f?PhoneAuthCredential._fromTokenResponse(h,f):null}};PhoneAuthProvider.PROVIDER_ID="phone",PhoneAuthProvider.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IdpCredential=class IdpCredential extends AuthCredential{constructor(i){super("custom","custom"),this.params=i}_getIdTokenResponse(i){return signInWithIdp(i,this._buildIdpRequest())}_linkToIdToken(i,h){return signInWithIdp(i,this._buildIdpRequest(h))}_getReauthenticationResolver(i){return signInWithIdp(i,this._buildIdpRequest())}_buildIdpRequest(i){let h={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return i&&(h.idToken=i),h}};function _signIn(i){return _signInWithCredential(i.auth,new IdpCredential(i),i.bypassAuthState)}function _reauth(i){let{auth:h,user:f}=i;return _assert(f,h,"internal-error"),_reauthenticate(f,new IdpCredential(i),i.bypassAuthState)}async function _link(i){let{auth:h,user:f}=i;return _assert(f,h,"internal-error"),_link$1(f,new IdpCredential(i),i.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AbstractPopupRedirectOperation=class AbstractPopupRedirectOperation{constructor(i,h,f,m,L=!1){this.auth=i,this.resolver=f,this.user=m,this.bypassAuthState=L,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(h)?h:[h]}execute(){return new Promise(async(i,h)=>{this.pendingPromise={resolve:i,reject:h};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(i){let{urlResponse:h,sessionId:f,postBody:m,tenantId:L,error:en,type:er}=i;if(en){this.reject(en);return}let ei={auth:this.auth,requestUri:h,sessionId:f,tenantId:L||void 0,postBody:m||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(er)(ei))}catch(i){this.reject(i)}}onError(i){this.reject(i)}getIdpTask(i){switch(i){case"signInViaPopup":case"signInViaRedirect":return _signIn;case"linkViaPopup":case"linkViaRedirect":return _link;case"reauthViaPopup":case"reauthViaRedirect":return _reauth;default:_fail(this.auth,"internal-error")}}resolve(i){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.resolve(i),this.unregisterAndCleanUp()}reject(i){this.pendingPromise||debugFail("Pending promise was never set"),this.pendingPromise.reject(i),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let e_=new Delay(2e3,1e4);let PopupOperation=class PopupOperation extends AbstractPopupRedirectOperation{constructor(i,h,f,m,L){super(i,h,m,L),this.provider=f,this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction&&PopupOperation.currentPopupAction.cancel(),PopupOperation.currentPopupAction=this}async executeNotNull(){let i=await this.execute();return _assert(i,this.auth,"internal-error"),i}async onExecution(){1===this.filter.length||debugFail("Popup operations only handle one event");let i=_generateEventId();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],i),this.authWindow.associatedEvent=i,this.resolver._originValidation(this.auth).catch(i=>{this.reject(i)}),this.resolver._isIframeWebStorageSupported(this.auth,i=>{i||this.reject(_createError(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var i;return(null===(i=this.authWindow)||void 0===i?void 0:i.associatedEvent)||null}cancel(){this.reject(_createError(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,PopupOperation.currentPopupAction=null}pollUserCancellation(){let poll=()=>{var i,h;if(null===(h=null===(i=this.authWindow)||void 0===i?void 0:i.window)||void 0===h?void 0:h.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(_createError(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(poll,e_.get())};poll()}};PopupOperation.currentPopupAction=null;let ev=new Map;let RedirectAction=class RedirectAction extends AbstractPopupRedirectOperation{constructor(i,h,f=!1){super(i,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],h,void 0,f),this.eventId=null}async execute(){let i=ev.get(this.auth._key());if(!i){try{let h=await _getAndClearPendingRedirectStatus(this.resolver,this.auth),f=h?await super.execute():null;i=()=>Promise.resolve(f)}catch(h){i=()=>Promise.reject(h)}ev.set(this.auth._key(),i)}return this.bypassAuthState||ev.set(this.auth._key(),()=>Promise.resolve(null)),i()}async onAuthEvent(i){if("signInViaRedirect"===i.type)return super.onAuthEvent(i);if("unknown"===i.type){this.resolve(null);return}if(i.eventId){let h=await this.auth._redirectUserForId(i.eventId);if(h)return this.user=h,super.onAuthEvent(i);this.resolve(null)}}async onExecution(){}cleanUp(){}};async function _getAndClearPendingRedirectStatus(i,h){let f=_persistenceKeyName("pendingRedirect",h.config.apiKey,h.name),m=_getInstance(i._redirectPersistence);if(!await m._isAvailable())return!1;let L=await m._get(f)==="true";return await m._remove(f),L}function _overrideRedirectResult(i,h){ev.set(i._key(),h)}async function _getRedirectResult(i,h,f=!1){let m=_castAuth(i),L=h?_getInstance(h):(_assert(m._popupRedirectResolver,m,"argument-error"),m._popupRedirectResolver),en=new RedirectAction(m,L,f),er=await en.execute();return er&&!f&&(delete er.user._redirectEventId,await m._persistUserIfCurrent(er.user),await m._setRedirectUser(null,h)),er}let AuthEventManager=class AuthEventManager{constructor(i){this.auth=i,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(i){this.consumers.add(i),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,i)&&(this.sendToConsumer(this.queuedRedirectEvent,i),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(i){this.consumers.delete(i)}onEvent(i){if(this.hasEventBeenHandled(i))return!1;let h=!1;return this.consumers.forEach(f=>{this.isEventForConsumer(i,f)&&(h=!0,this.sendToConsumer(i,f),this.saveEventToCache(i))}),this.hasHandledPotentialRedirect||!function(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return isNullRedirectEvent(i);default:return!1}}(i)||(this.hasHandledPotentialRedirect=!0,h||(this.queuedRedirectEvent=i,h=!0)),h}sendToConsumer(i,h){var f;if(i.error&&!isNullRedirectEvent(i)){let m=(null===(f=i.error.code)||void 0===f?void 0:f.split("auth/")[1])||"internal-error";h.onError(_createError(this.auth,m))}else h.onAuthEvent(i)}isEventForConsumer(i,h){let f=null===h.eventId||!!i.eventId&&i.eventId===h.eventId;return h.filter.includes(i.type)&&f}hasEventBeenHandled(i){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(eventUid(i))}saveEventToCache(i){this.cachedEventUids.add(eventUid(i)),this.lastProcessedEventTime=Date.now()}};function eventUid(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(i=>i).join("-")}function isNullRedirectEvent({type:i,error:h}){return"unknown"===i&&(null==h?void 0:h.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _getProjectConfig(i,h={}){return _performApiRequest(i,"GET","/v1/projects",h)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ey=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ew=/^https?/;async function _validateOrigin(i){if(i.config.emulator)return;let{authorizedDomains:h}=await _getProjectConfig(i);for(let i of h)try{if(function(i){let h=_getCurrentUrl(),{protocol:f,hostname:m}=new URL(h);if(i.startsWith("chrome-extension://")){let L=new URL(i);return""===L.hostname&&""===m?"chrome-extension:"===f&&i.replace("chrome-extension://","")===h.replace("chrome-extension://",""):"chrome-extension:"===f&&L.hostname===m}if(!ew.test(f))return!1;if(ey.test(i))return m===i;let L=i.replace(/\./g,"\\."),en=RegExp("^(.+\\."+L+"|"+L+")$","i");return en.test(m)}(i))return}catch(i){}_fail(i,"unauthorized-domain")}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eC=new Delay(3e4,6e4);function resetUnloadedGapiModules(){let i=_window().___jsl;if(null==i?void 0:i.H){for(let h of Object.keys(i.H))if(i.H[h].r=i.H[h].r||[],i.H[h].L=i.H[h].L||[],i.H[h].r=[...i.H[h].L],i.CP)for(let h=0;h<i.CP.length;h++)i.CP[h]=null}}let eI=null,eT=new Delay(5e3,15e3),eE={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},eS=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);async function _openIframe(i){let h=await (eI=eI||new Promise((h,f)=>{var m,L,en;function loadGapiIframe(){resetUnloadedGapiModules(),gapi.load("gapi.iframes",{callback:()=>{h(gapi.iframes.getContext())},ontimeout:()=>{resetUnloadedGapiModules(),f(_createError(i,"network-request-failed"))},timeout:eC.get()})}if(null===(L=null===(m=_window().gapi)||void 0===m?void 0:m.iframes)||void 0===L?void 0:L.Iframe)h(gapi.iframes.getContext());else if(null===(en=_window().gapi)||void 0===en?void 0:en.load)loadGapiIframe();else{let h=_generateCallbackName("iframefcb");return _window()[h]=()=>{gapi.load?loadGapiIframe():f(_createError(i,"network-request-failed"))},_loadJS(`https://apis.google.com/js/api.js?onload=${h}`).catch(i=>f(i))}}).catch(i=>{throw eI=null,i})),f=_window().gapi;return _assert(f,i,"internal-error"),h.open({where:document.body,url:function(i){let h=i.config;_assert(h.authDomain,i,"auth-domain-config-required");let f=h.emulator?_emulatorUrl(h,"emulator/auth/iframe"):`https://${i.config.authDomain}/__/auth/iframe`,m={apiKey:h.apiKey,appName:i.name,v:en.Jn},er=eS.get(i.config.apiHost);er&&(m.eid=er);let ei=i._getFrameworks();return ei.length&&(m.fw=ei.join(",")),`${f}?${(0,L.xO)(m).slice(1)}`}(i),messageHandlersFilter:f.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:eE,dontclear:!0},h=>new Promise(async(f,m)=>{await h.restyle({setHideOnLeave:!1});let L=_createError(i,"network-request-failed"),en=_window().setTimeout(()=>{m(L)},eT.get());function clearTimerAndResolve(){_window().clearTimeout(en),f(h)}h.ping(clearTimerAndResolve).then(clearTimerAndResolve,()=>{m(L)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eP={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};let AuthPopup=class AuthPopup{constructor(i){this.window=i,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(i){}}};let ek=encodeURIComponent("fac");async function _getRedirectUrl(i,h,f,m,er,ei){_assert(i.config.authDomain,i,"auth-domain-config-required"),_assert(i.config.apiKey,i,"invalid-api-key");let es={apiKey:i.config.apiKey,appName:i.name,authType:f,redirectUrl:m,v:en.Jn,eventId:er};if(h instanceof FederatedAuthProvider)for(let[f,m]of(h.setDefaultLanguage(i.languageCode),es.providerId=h.providerId||"",(0,L.xb)(h.getCustomParameters())||(es.customParameters=JSON.stringify(h.getCustomParameters())),Object.entries(ei||{})))es[f]=m;if(h instanceof BaseOAuthProvider){let i=h.getScopes().filter(i=>""!==i);i.length>0&&(es.scopes=i.join(","))}for(let h of(i.tenantId&&(es.tid=i.tenantId),Object.keys(es)))void 0===es[h]&&delete es[h];let eo=await i._getAppCheckToken(),el=eo?`#${ek}=${encodeURIComponent(eo)}`:"";return`${function({config:i}){return i.emulator?_emulatorUrl(i,"emulator/auth/handler"):`https://${i.authDomain}/__/auth/handler`}(i)}?${(0,L.xO)(es).slice(1)}${el}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eR="webStorageSupport",eN=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=BrowserSessionPersistence,this._completeRedirectFn=_getRedirectResult,this._overrideRedirectResult=_overrideRedirectResult}async _openPopup(i,h,f,m){var en;(null===(en=this.eventManagers[i._key()])||void 0===en?void 0:en.manager)||debugFail("_initialize() not called before _openPopup()");let er=await _getRedirectUrl(i,h,f,_getCurrentUrl(),m);return function(i,h,f,m=500,en=600){let er=Math.max((window.screen.availHeight-en)/2,0).toString(),ei=Math.max((window.screen.availWidth-m)/2,0).toString(),es="",eo=Object.assign(Object.assign({},eP),{width:m.toString(),height:en.toString(),top:er,left:ei}),el=(0,L.z$)().toLowerCase();f&&(es=_isChromeIOS(el)?"_blank":f),_isFirefox(el)&&(h=h||"http://localhost",eo.scrollbars="yes");let eh=Object.entries(eo).reduce((i,[h,f])=>`${i}${h}=${f},`,"");if(function(i=(0,L.z$)()){var h;return _isIOS(i)&&!!(null===(h=window.navigator)||void 0===h?void 0:h.standalone)}(el)&&"_self"!==es)return function(i,h){let f=document.createElement("a");f.href=i,f.target=h;let m=document.createEvent("MouseEvent");m.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),f.dispatchEvent(m)}(h||"",es),new AuthPopup(null);let eu=window.open(h||"",es,eh);_assert(eu,i,"popup-blocked");try{eu.focus()}catch(i){}return new AuthPopup(eu)}(i,er,_generateEventId())}async _openRedirect(i,h,f,m){await this._originValidation(i);let L=await _getRedirectUrl(i,h,f,_getCurrentUrl(),m);return _window().location.href=L,new Promise(()=>{})}_initialize(i){let h=i._key();if(this.eventManagers[h]){let{manager:i,promise:f}=this.eventManagers[h];return i?Promise.resolve(i):(f||debugFail("If manager is not set, promise should be"),f)}let f=this.initAndGetManager(i);return this.eventManagers[h]={promise:f},f.catch(()=>{delete this.eventManagers[h]}),f}async initAndGetManager(i){let h=await _openIframe(i),f=new AuthEventManager(i);return h.register("authEvent",h=>{_assert(null==h?void 0:h.authEvent,i,"invalid-auth-event");let m=f.onEvent(h.authEvent);return{status:m?"ACK":"ERROR"}},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[i._key()]={manager:f},this.iframes[i._key()]=h,f}_isIframeWebStorageSupported(i,h){let f=this.iframes[i._key()];f.send(eR,{type:eR},f=>{var m;let L=null===(m=null==f?void 0:f[0])||void 0===m?void 0:m[eR];void 0!==L&&h(!!L),_fail(i,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(i){let h=i._key();return this.originValidationPromises[h]||(this.originValidationPromises[h]=_validateOrigin(i)),this.originValidationPromises[h]}get _shouldInitProactively(){return _isMobileBrowser()||_isSafari()||_isIOS()}};let MultiFactorAssertionImpl=class MultiFactorAssertionImpl{constructor(i){this.factorId=i}_process(i,h,f){switch(h.type){case"enroll":return this._finalizeEnroll(i,h.credential,f);case"signin":return this._finalizeSignIn(i,h.credential);default:return debugFail("unexpected MultiFactorSessionType")}}};let PhoneMultiFactorAssertionImpl=class PhoneMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(i){super("phone"),this.credential=i}static _fromCredential(i){return new PhoneMultiFactorAssertionImpl(i)}_finalizeEnroll(i,h,f){return _performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(i,{idToken:h,displayName:f,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}_finalizeSignIn(i,h){return _performApiRequest(i,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(i,{mfaPendingCredential:h,phoneVerificationInfo:this.credential._makeVerificationRequest()}))}};let TotpMultiFactorAssertionImpl=class TotpMultiFactorAssertionImpl extends MultiFactorAssertionImpl{constructor(i,h,f){super("totp"),this.otp=i,this.enrollmentId=h,this.secret=f}static _fromSecret(i,h){return new TotpMultiFactorAssertionImpl(h,void 0,i)}static _fromEnrollmentId(i,h){return new TotpMultiFactorAssertionImpl(h,i)}async _finalizeEnroll(i,h,f){return _assert(void 0!==this.secret,i,"argument-error"),_performApiRequest(i,"POST","/v2/accounts/mfaEnrollment:finalize",_addTidIfNecessary(i,{idToken:h,displayName:f,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)}))}async _finalizeSignIn(i,h){_assert(void 0!==this.enrollmentId&&void 0!==this.otp,i,"argument-error");let f={verificationCode:this.otp};return _performApiRequest(i,"POST","/v2/accounts/mfaSignIn:finalize",_addTidIfNecessary(i,{mfaPendingCredential:h,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:f}))}};let TotpSecret=class TotpSecret{constructor(i,h,f,m,L,en,er){this.sessionInfo=en,this.auth=er,this.secretKey=i,this.hashingAlgorithm=h,this.codeLength=f,this.codeIntervalSeconds=m,this.enrollmentCompletionDeadline=L}static _fromStartTotpMfaEnrollmentResponse(i,h){return new TotpSecret(i.totpSessionInfo.sharedSecretKey,i.totpSessionInfo.hashingAlgorithm,i.totpSessionInfo.verificationCodeLength,i.totpSessionInfo.periodSec,new Date(i.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),i.totpSessionInfo.sessionInfo,h)}_makeTotpVerificationInfo(i){return{sessionInfo:this.sessionInfo,verificationCode:i}}generateQrCodeUrl(i,h){var f;let m=!1;return(_isEmptyString(i)||_isEmptyString(h))&&(m=!0),m&&(_isEmptyString(i)&&(i=(null===(f=this.auth.currentUser)||void 0===f?void 0:f.email)||"unknownuser"),_isEmptyString(h)&&(h=this.auth.name)),`otpauth://totp/${h}:${i}?secret=${this.secretKey}&issuer=${h}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}};function _isEmptyString(i){return void 0===i||(null==i?void 0:i.length)===0}var eA="@firebase/auth",eO="0.23.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AuthInterop=class AuthInterop{constructor(i){this.auth=i,this.internalListeners=new Map}getUid(){var i;return this.assertAuthConfigured(),(null===(i=this.auth.currentUser)||void 0===i?void 0:i.uid)||null}async getToken(i){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;let h=await this.auth.currentUser.getIdToken(i);return{accessToken:h}}addAuthTokenListener(i){if(this.assertAuthConfigured(),this.internalListeners.has(i))return;let h=this.auth.onIdTokenChanged(h=>{i((null==h?void 0:h.stsTokenManager.accessToken)||null)});this.internalListeners.set(i,h),this.updateProactiveRefresh()}removeAuthTokenListener(i){this.assertAuthConfigured();let h=this.internalListeners.get(i);h&&(this.internalListeners.delete(i),h(),this.updateProactiveRefresh())}assertAuthConfigured(){_assert(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}};let ex=(0,L.Pz)("authIdTokenMaxAge")||300,eD=null,mintCookieFactory=i=>async h=>{let f=h&&await h.getIdTokenResult(),m=f&&(new Date().getTime()-Date.parse(f.issuedAtTime))/1e3;if(m&&m>ex)return;let L=null==f?void 0:f.token;eD!==L&&(eD=L,await fetch(i,{method:L?"POST":"DELETE",headers:L?{Authorization:`Bearer ${L}`}:{}}))};function getAuth(i=(0,en.Mq)()){let h=(0,en.qX)(i,"auth");if(h.isInitialized())return h.getImmediate();let f=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i,h){let f=(0,en.qX)(i,"auth");if(f.isInitialized()){let i=f.getImmediate(),m=f.getOptions();if((0,L.vZ)(m,null!=h?h:{}))return i;_fail(i,"already-initialized")}let m=f.initialize({options:h});return m}(i,{popupRedirectResolver:eN,persistence:[IndexedDBLocalPersistence,BrowserLocalPersistence,BrowserSessionPersistence]}),m=(0,L.Pz)("authTokenSyncURL");if(m){let i=mintCookieFactory(m);(0,L.m9)(f).beforeAuthStateChanged(i,()=>i(f.currentUser)),onIdTokenChanged(f,h=>i(h))}let er=(0,L.q4)("auth");return er&&function(i,h,f){let m=_castAuth(i);_assert(m._canInitEmulator,m,"emulator-config-failed"),_assert(/^https?:\/\//.test(h),m,"invalid-emulator-scheme");let L=!!(null==f?void 0:f.disableWarnings),en=extractProtocol(h),{host:er,port:ei}=function(i){let h=extractProtocol(i),f=/(\/\/)?([^?#/]+)/.exec(i.substr(h.length));if(!f)return{host:"",port:null};let m=f[2].split("@").pop()||"",L=/^(\[[^\]]+\])(:|$)/.exec(m);if(L){let i=L[1];return{host:i,port:parsePort(m.substr(i.length+1))}}{let[i,h]=m.split(":");return{host:i,port:parsePort(h)}}}(h),es=null===ei?"":`:${ei}`;m.config.emulator={url:`${en}//${er}${es}/`},m.settings.appVerificationDisabledForTesting=!0,m.emulatorConfig=Object.freeze({host:er,port:ei,protocol:en.replace(":",""),options:Object.freeze({disableWarnings:L})}),L||function(){function attachBanner(){let i=document.createElement("p"),h=i.style;i.innerText="Running in emulator mode. Do not use with production credentials.",h.position="fixed",h.width="100%",h.backgroundColor="#ffffff",h.border=".1em solid #000000",h.color="#b50000",h.bottom="0px",h.left="0px",h.margin="0px",h.zIndex="10000",h.textAlign="center",i.classList.add("firebase-emulator-warning"),document.body.appendChild(i)}"undefined"!=typeof console&&"function"==typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",attachBanner):attachBanner())}()}(f,`http://${er}`),f}m="Browser",(0,en.Xd)(new ei.wA("auth",(i,{options:h})=>{let f=i.getProvider("app").getImmediate(),L=i.getProvider("heartbeat"),en=i.getProvider("app-check-internal"),{apiKey:er,authDomain:ei}=f.options;_assert(er&&!er.includes(":"),"invalid-api-key",{appName:f.name});let es={apiKey:er,authDomain:ei,clientPlatform:m,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:_getClientVersion(m)},eo=new AuthImpl(f,L,en,es);return function(i,h){let f=(null==h?void 0:h.persistence)||[],m=(Array.isArray(f)?f:[f]).map(_getInstance);(null==h?void 0:h.errorMap)&&i._updateErrorMap(h.errorMap),i._initializeWithPersistence(m,null==h?void 0:h.popupRedirectResolver)}(eo,h),eo},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((i,h,f)=>{let m=i.getProvider("auth-internal");m.initialize()})),(0,en.Xd)(new ei.wA("auth-internal",i=>{let h=_castAuth(i.getProvider("auth").getImmediate());return new AuthInterop(h)},"PRIVATE").setInstantiationMode("EXPLICIT")),(0,en.KN)(eA,eO,/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(m)),(0,en.KN)(eA,eO,"esm2017")},6100:function(i,h,f){"use strict";f.d(h,{ad:function(){return Ph}});var m,L,en,er,ei,es,eo,el=f(5816),eh=f(8463),eu=f(3333),ec=f(4444),ep="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},ef={},eg=eg||{},em=ep||self;function aa(i){var h=typeof i;return"array"==(h="object"!=h?h:i?Array.isArray(i)?"array":h:"null")||"object"==h&&"number"==typeof i.length}function p(i){var h=typeof i;return"object"==h&&null!=i||"function"==h}function ea(i,h,f){return i.call.apply(i.bind,arguments)}function fa(i,h,f){if(!i)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var f=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(f,m),i.apply(h,f)}}return function(){return i.apply(h,arguments)}}function q(i,h,f){return(q=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?ea:fa).apply(null,arguments)}function ha(i,h){var f=Array.prototype.slice.call(arguments,1);return function(){var h=f.slice();return h.push.apply(h,arguments),i.apply(this,h)}}function r(i,h){function c(){}c.prototype=h.prototype,i.$=h.prototype,i.prototype=new c,i.prototype.constructor=i,i.ac=function(i,f,m){for(var L=Array(arguments.length-2),en=2;en<arguments.length;en++)L[en-2]=arguments[en];return h.prototype[f].apply(i,L)}}function v(){this.s=this.s,this.o=this.o}v.prototype.s=!1,v.prototype.sa=function(){this.s||(this.s=!0,this.N())},v.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};let e_=Array.prototype.indexOf?function(i,h){return Array.prototype.indexOf.call(i,h,void 0)}:function(i,h){if("string"==typeof i)return"string"!=typeof h||1!=h.length?-1:i.indexOf(h,0);for(let f=0;f<i.length;f++)if(f in i&&i[f]===h)return f;return -1};function ma(i){let h=i.length;if(0<h){let f=Array(h);for(let m=0;m<h;m++)f[m]=i[m];return f}return[]}function na(i,h){for(let h=1;h<arguments.length;h++){let f=arguments[h];if(aa(f)){let h=i.length||0,m=f.length||0;i.length=h+m;for(let L=0;L<m;L++)i[h+L]=f[L]}else i.push(f)}}function w(i,h){this.type=i,this.g=this.target=h,this.defaultPrevented=!1}w.prototype.h=function(){this.defaultPrevented=!0};var ev=function(){if(!em.addEventListener||!Object.defineProperty)return!1;var i=!1,h=Object.defineProperty({},"passive",{get:function(){i=!0}});try{em.addEventListener("test",()=>{},h),em.removeEventListener("test",()=>{},h)}catch(i){}return i}();function x(i){return/^[\s\xa0]*$/.test(i)}function pa(){var i=em.navigator;return i&&(i=i.userAgent)?i:""}function y(i){return -1!=pa().indexOf(i)}function qa(i){return qa[" "](i),i}qa[" "]=function(){};var ey=y("Opera"),ew=y("Trident")||y("MSIE"),eC=y("Edge"),eI=eC||ew,eT=y("Gecko")&&!(-1!=pa().toLowerCase().indexOf("webkit")&&!y("Edge"))&&!(y("Trident")||y("MSIE"))&&!y("Edge"),eE=-1!=pa().toLowerCase().indexOf("webkit")&&!y("Edge");function ya(){var i=em.document;return i?i.documentMode:void 0}e:{var eS,eP="",ek=(eS=pa(),eT?/rv:([^\);]+)(\)|;)/.exec(eS):eC?/Edge\/([\d\.]+)/.exec(eS):ew?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(eS):eE?/WebKit\/(\S+)/.exec(eS):ey?/(?:Version)[ \/]?(\S+)/.exec(eS):void 0);if(ek&&(eP=ek?ek[1]:""),ew){var eR=ya();if(null!=eR&&eR>parseFloat(eP)){L=String(eR);break e}}L=eP}var eN=em.document&&ew&&(ya()||parseInt(L,10))||void 0;function A(i,h){if(w.call(this,i?i.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,i){var f=this.type=i.type,m=i.changedTouches&&i.changedTouches.length?i.changedTouches[0]:null;if(this.target=i.target||i.srcElement,this.g=h,h=i.relatedTarget){if(eT){e:{try{qa(h.nodeName);var L=!0;break e}catch(i){}L=!1}L||(h=null)}}else"mouseover"==f?h=i.fromElement:"mouseout"==f&&(h=i.toElement);this.relatedTarget=h,m?(this.clientX=void 0!==m.clientX?m.clientX:m.pageX,this.clientY=void 0!==m.clientY?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0),this.button=i.button,this.key=i.key||"",this.ctrlKey=i.ctrlKey,this.altKey=i.altKey,this.shiftKey=i.shiftKey,this.metaKey=i.metaKey,this.pointerId=i.pointerId||0,this.pointerType="string"==typeof i.pointerType?i.pointerType:eA[i.pointerType]||"",this.state=i.state,this.i=i,i.defaultPrevented&&A.$.h.call(this)}}r(A,w);var eA={2:"touch",3:"pen",4:"mouse"};A.prototype.h=function(){A.$.h.call(this);var i=this.i;i.preventDefault?i.preventDefault():i.returnValue=!1};var eO="closure_listenable_"+(1e6*Math.random()|0),ex=0;function Ja(i,h,f,m,L){this.listener=i,this.proxy=null,this.src=h,this.type=f,this.capture=!!m,this.la=L,this.key=++ex,this.fa=this.ia=!1}function Ka(i){i.fa=!0,i.listener=null,i.proxy=null,i.src=null,i.la=null}function Na(i,h,f){for(let m in i)h.call(f,i[m],m,i)}function Pa(i){let h={};for(let f in i)h[f]=i[f];return h}let eD="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ra(i,h){let f,m;for(let h=1;h<arguments.length;h++){for(f in m=arguments[h])i[f]=m[f];for(let h=0;h<eD.length;h++)f=eD[h],Object.prototype.hasOwnProperty.call(m,f)&&(i[f]=m[f])}}function Sa(i){this.src=i,this.g={},this.h=0}function Ua(i,h){var f=h.type;if(f in i.g){var m,L=i.g[f],en=e_(L,h);(m=0<=en)&&Array.prototype.splice.call(L,en,1),m&&(Ka(h),0==i.g[f].length&&(delete i.g[f],i.h--))}}function Ta(i,h,f,m){for(var L=0;L<i.length;++L){var en=i[L];if(!en.fa&&en.listener==h&&!!f==en.capture&&en.la==m)return L}return -1}Sa.prototype.add=function(i,h,f,m,L){var en=i.toString();(i=this.g[en])||(i=this.g[en]=[],this.h++);var er=Ta(i,h,m,L);return -1<er?(h=i[er],f||(h.ia=!1)):((h=new Ja(h,this.src,en,!!m,L)).ia=f,i.push(h)),h};var eL="closure_lm_"+(1e6*Math.random()|0),eF={};function ab(i,h,f,m,L,en){if(!h)throw Error("Invalid event type");var er=p(L)?!!L.capture:!!L,ei=bb(i);if(ei||(i[eL]=ei=new Sa(i)),(f=ei.add(h,f,m,er,en)).proxy)return f;if(m=function a(i){return eb.call(a.src,a.listener,i)},f.proxy=m,m.src=i,m.listener=f,i.addEventListener)ev||(L=er),void 0===L&&(L=!1),i.addEventListener(h.toString(),m,L);else if(i.attachEvent)i.attachEvent(db(h.toString()),m);else if(i.addListener&&i.removeListener)i.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return f}function gb(i){if("number"!=typeof i&&i&&!i.fa){var h=i.src;if(h&&h[eO])Ua(h.i,i);else{var f=i.type,m=i.proxy;h.removeEventListener?h.removeEventListener(f,m,i.capture):h.detachEvent?h.detachEvent(db(f),m):h.addListener&&h.removeListener&&h.removeListener(m),(f=bb(h))?(Ua(f,i),0==f.h&&(f.src=null,h[eL]=null)):Ka(i)}}}function db(i){return i in eF?eF[i]:eF[i]="on"+i}function eb(i,h){if(i.fa)i=!0;else{h=new A(h,this);var f=i.listener,m=i.la||i.src;i.ia&&gb(i),i=f.call(m,h)}return i}function bb(i){return(i=i[eL])instanceof Sa?i:null}var eM="__closure_events_fn_"+(1e9*Math.random()>>>0);function $a(i){return"function"==typeof i?i:(i[eM]||(i[eM]=function(h){return i.handleEvent(h)}),i[eM])}function B(){v.call(this),this.i=new Sa(this),this.S=this,this.J=null}function C(i,h){var f,m=i.J;if(m)for(f=[];m;m=m.J)f.push(m);if(i=i.S,m=h.type||h,"string"==typeof h)h=new w(h,i);else if(h instanceof w)h.target=h.target||i;else{var L=h;Ra(h=new w(m,i),L)}if(L=!0,f)for(var en=f.length-1;0<=en;en--){var er=h.g=f[en];L=ib(er,m,!0,h)&&L}if(L=ib(er=h.g=i,m,!0,h)&&L,L=ib(er,m,!1,h)&&L,f)for(en=0;en<f.length;en++)L=ib(er=h.g=f[en],m,!1,h)&&L}function ib(i,h,f,m){if(!(h=i.i.g[String(h)]))return!0;h=h.concat();for(var L=!0,en=0;en<h.length;++en){var er=h[en];if(er&&!er.fa&&er.capture==f){var ei=er.listener,es=er.la||er.src;er.ia&&Ua(i.i,er),L=!1!==ei.call(es,m)&&L}}return L&&!m.defaultPrevented}r(B,v),B.prototype[eO]=!0,B.prototype.removeEventListener=function(i,h,f,m){!function fb(i,h,f,m,L){if(Array.isArray(h))for(var en=0;en<h.length;en++)fb(i,h[en],f,m,L);else(m=p(m)?!!m.capture:!!m,f=$a(f),i&&i[eO])?(i=i.i,(h=String(h).toString())in i.g&&-1<(f=Ta(en=i.g[h],f,m,L))&&(Ka(en[f]),Array.prototype.splice.call(en,f,1),0==en.length&&(delete i.g[h],i.h--))):i&&(i=bb(i))&&(h=i.g[h.toString()],i=-1,h&&(i=Ta(h,f,m,L)),(f=-1<i?h[i]:null)&&gb(f))}(this,i,h,f,m)},B.prototype.N=function(){if(B.$.N.call(this),this.i){var i,h=this.i;for(i in h.g){for(var f=h.g[i],m=0;m<f.length;m++)Ka(f[m]);delete h.g[i],h.h--}}this.J=null},B.prototype.O=function(i,h,f,m){return this.i.add(String(i),h,!1,f,m)},B.prototype.P=function(i,h,f,m){return this.i.add(String(i),h,!0,f,m)};var eU=em.JSON.stringify,ej=new class{constructor(i,h){this.i=i,this.j=h,this.h=0,this.g=null}get(){let i;return 0<this.h?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}(()=>new pb,i=>i.reset());let pb=class pb{constructor(){this.next=this.g=this.h=null}set(i,h){this.h=i,this.g=h,this.next=null}reset(){this.next=this.g=this.h=null}};let eW,eq=!1,eV=new class{constructor(){this.h=this.g=null}add(i,h){let f=ej.get();f.set(i,h),this.h?this.h.next=f:this.g=f,this.h=f}},vb=()=>{let i=em.Promise.resolve(void 0);eW=()=>{i.then(ub)}};var ub=()=>{let i;for(var h;i=null,eV.g&&(i=eV.g,eV.g=eV.g.next,eV.g||(eV.h=null),i.next=null),h=i;){try{h.h.call(h.g)}catch(i){!function(i){em.setTimeout(()=>{throw i},0)}(i)}ej.j(h),100>ej.h&&(ej.h++,h.next=ej.g,ej.g=h)}eq=!1};function wb(i,h){B.call(this),this.h=i||1,this.g=h||em,this.j=q(this.qb,this),this.l=Date.now()}function xb(i){i.ga=!1,i.T&&(i.g.clearTimeout(i.T),i.T=null)}function yb(i,h,f){if("function"==typeof i)f&&(i=q(i,f));else if(i&&"function"==typeof i.handleEvent)i=q(i.handleEvent,i);else throw Error("Invalid listener argument");return 2147483647<Number(h)?-1:em.setTimeout(i,h||0)}r(wb,B),(eo=wb.prototype).ga=!1,eo.T=null,eo.qb=function(){if(this.ga){var i=Date.now()-this.l;0<i&&i<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-i):(this.T&&(this.g.clearTimeout(this.T),this.T=null),C(this,"tick"),this.ga&&(xb(this),this.start()))}},eo.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())},eo.N=function(){wb.$.N.call(this),xb(this),delete this.g};let Ab=class Ab extends v{constructor(i,h){super(),this.m=i,this.j=h,this.h=null,this.i=!1,this.g=null}l(i){this.h=arguments,this.g?this.i=!0:function zb(i){i.g=yb(()=>{i.g=null,i.i&&(i.i=!1,zb(i))},i.j);let h=i.h;i.h=null,i.m.apply(null,h)}(this)}N(){super.N(),this.g&&(em.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}};function Bb(i){v.call(this),this.h=i,this.g={}}r(Bb,v);var eB=[];function Db(i,h,f,m){Array.isArray(f)||(f&&(eB[0]=f.toString()),f=eB);for(var L=0;L<f.length;L++){var en=function Ya(i,h,f,m,L){if(m&&m.once)return function Za(i,h,f,m,L){if(Array.isArray(h)){for(var en=0;en<h.length;en++)Za(i,h[en],f,m,L);return null}return f=$a(f),i&&i[eO]?i.P(h,f,p(m)?!!m.capture:!!m,L):ab(i,h,f,!0,m,L)}(i,h,f,m,L);if(Array.isArray(h)){for(var en=0;en<h.length;en++)Ya(i,h[en],f,m,L);return null}return f=$a(f),i&&i[eO]?i.O(h,f,p(m)?!!m.capture:!!m,L):ab(i,h,f,!1,m,L)}(h,f[L],m||i.handleEvent,!1,i.h||i);if(!en)break;i.g[en.key]=en}}function Fb(i){Na(i.g,function(i,h){this.g.hasOwnProperty(h)&&gb(i)},i),i.g={}}function Gb(){this.g=!0}function D(i,h,f,m){i.info(function(){return"XMLHTTP TEXT ("+h+"): "+function(i,h){if(!i.g)return h;if(!h)return null;try{var f=JSON.parse(h);if(f){for(i=0;i<f.length;i++)if(Array.isArray(f[i])){var m=f[i];if(!(2>m.length)){var L=m[1];if(Array.isArray(L)&&!(1>L.length)){var en=L[0];if("noop"!=en&&"stop"!=en&&"close"!=en)for(var er=1;er<L.length;er++)L[er]=""}}}}return eU(f)}catch(i){return h}}(i,f)+(m?" "+m:"")})}Bb.prototype.N=function(){Bb.$.N.call(this),Fb(this)},Bb.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Gb.prototype.Ea=function(){this.g=!1},Gb.prototype.info=function(){};var eG={},eH=null;function Mb(){return eH=eH||new B}function Nb(i){w.call(this,eG.Ta,i)}function Ob(i){let h=Mb();C(h,new Nb(h))}function Pb(i,h){w.call(this,eG.STAT_EVENT,i),this.stat=h}function F(i){let h=Mb();C(h,new Pb(h,i))}function Qb(i,h){w.call(this,eG.Ua,i),this.size=h}function Rb(i,h){if("function"!=typeof i)throw Error("Fn must not be null and must be a function");return em.setTimeout(function(){i()},h)}eG.Ta="serverreachability",r(Nb,w),eG.STAT_EVENT="statevent",r(Pb,w),eG.Ua="timingevent",r(Qb,w);var e$={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},ez={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function Ub(){}function Vb(i){return i.h||(i.h=i.i())}function Wb(){}Ub.prototype.h=null;var eK={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Yb(){w.call(this,"d")}function Zb(){w.call(this,"c")}function ac(){}function bc(i,h,f,m){this.l=i,this.j=h,this.m=f,this.W=m||1,this.U=new Bb(this),this.P=eQ,i=eI?125:void 0,this.V=new wb(i),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new dc}function dc(){this.i=null,this.g="",this.h=!1}r(Yb,w),r(Zb,w),r(ac,Ub),ac.prototype.g=function(){return new XMLHttpRequest},ac.prototype.i=function(){return{}},er=new ac;var eQ=45e3,eY={},eJ={};function gc(i,h,f){i.L=1,i.v=hc(G(h)),i.s=f,i.S=!0,ic(i,null)}function ic(i,h){i.G=Date.now(),jc(i),i.A=G(i.v);var f=i.A,m=i.W;Array.isArray(m)||(m=[String(m)]),kc(f.i,"t",m),i.C=0,f=i.l.J,i.h=new dc,i.g=lc(i.l,f?h:null,!i.s),0<i.O&&(i.M=new Ab(q(i.Pa,i,i.g),i.O)),Db(i.U,i.g,"readystatechange",i.nb),h=i.I?Pa(i.I):{},i.s?(i.u||(i.u="POST"),h["Content-Type"]="application/x-www-form-urlencoded",i.g.ha(i.A,i.u,i.s,h)):(i.u="GET",i.g.ha(i.A,i.u,null,h)),Ob(),function(i,h,f,m,L,en){i.info(function(){if(i.g){if(en)for(var er="",ei=en.split("&"),es=0;es<ei.length;es++){var eo=ei[es].split("=");if(1<eo.length){var el=eo[0];eo=eo[1];var eh=el.split("_");er=2<=eh.length&&"type"==eh[1]?er+(el+"=")+eo+"&":er+(el+"=redacted&")}}else er=null}else er=en;return"XMLHTTP REQ ("+m+") [attempt "+L+"]: "+h+"\n"+f+"\n"+er})}(i.j,i.u,i.A,i.m,i.W,i.s)}function oc(i){return!!i.g&&"GET"==i.u&&2!=i.L&&i.l.Ha}function rc(i,h,f){let m=!0,L;for(;!i.J&&i.C<f.length;)if((L=function(i,h){var f=i.C,m=h.indexOf("\n",f);return -1==m?eJ:isNaN(f=Number(h.substring(f,m)))?eY:(m+=1)+f>h.length?eJ:(h=h.slice(m,m+f),i.C=m+f,h)}(i,f))==eJ){4==h&&(i.o=4,F(14),m=!1),D(i.j,i.m,null,"[Incomplete Response]");break}else if(L==eY){i.o=4,F(15),D(i.j,i.m,f,"[Invalid Chunk]"),m=!1;break}else D(i.j,i.m,L,null),qc(i,L);oc(i)&&L!=eJ&&L!=eY&&(i.h.g="",i.C=0),4!=h||0!=f.length||i.h.h||(i.o=1,F(16),m=!1),i.i=i.i&&m,m?0<f.length&&!i.ba&&(i.ba=!0,(h=i.l).g==i&&h.ca&&!h.M&&(h.l.info("Great, no buffering proxy detected. Bytes received: "+f.length),vc(h),h.M=!0,F(11))):(D(i.j,i.m,f,"[Invalid Chunked Response]"),I(i),pc(i))}function jc(i){i.Y=Date.now()+i.P,wc(i,i.P)}function wc(i,h){if(null!=i.B)throw Error("WatchDog timer not null");i.B=Rb(q(i.lb,i),h)}function nc(i){i.B&&(em.clearTimeout(i.B),i.B=null)}function pc(i){0==i.l.H||i.J||sc(i.l,i)}function I(i){nc(i);var h=i.M;h&&"function"==typeof h.sa&&h.sa(),i.M=null,xb(i.V),Fb(i.U),i.g&&(h=i.g,i.g=null,h.abort(),h.sa())}function qc(i,h){try{var f=i.l;if(0!=f.H&&(f.g==i||xc(f.i,i))){if(!i.K&&xc(f.i,i)&&3==f.H){try{var m=f.Ja.g.parse(h)}catch(i){m=null}if(Array.isArray(m)&&3==m.length){var L=m;if(0==L[0]){e:if(!f.u){if(f.g){if(f.g.G+3e3<i.G)yc(f),zc(f);else break e}Ac(f),F(18)}}else f.Fa=L[1],0<f.Fa-f.V&&37500>L[2]&&f.G&&0==f.A&&!f.v&&(f.v=Rb(q(f.ib,f),6e3));if(1>=Bc(f.i)&&f.oa){try{f.oa()}catch(i){}f.oa=void 0}}else J(f,11)}else if((i.K||f.g==i)&&yc(f),!x(h))for(L=f.Ja.g.parse(h),h=0;h<L.length;h++){let ei=L[h];if(f.V=ei[0],ei=ei[1],2==f.H){if("c"==ei[0]){f.K=ei[1],f.pa=ei[2];let h=ei[3];null!=h&&(f.ra=h,f.l.info("VER="+f.ra));let L=ei[4];null!=L&&(f.Ga=L,f.l.info("SVER="+f.Ga));let es=ei[5];null!=es&&"number"==typeof es&&0<es&&(m=1.5*es,f.L=m,f.l.info("backChannelRequestTimeoutMs_="+m)),m=f;let eo=i.g;if(eo){let i=eo.g?eo.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(i){var en=m.i;en.g||-1==i.indexOf("spdy")&&-1==i.indexOf("quic")&&-1==i.indexOf("h2")||(en.j=en.l,en.g=new Set,en.h&&(Cc(en,en.h),en.h=null))}if(m.F){let i=eo.g?eo.g.getResponseHeader("X-HTTP-Session-Id"):null;i&&(m.Da=i,K(m.I,m.F,i))}}if(f.H=3,f.h&&f.h.Ba(),f.ca&&(f.S=Date.now()-i.G,f.l.info("Handshake RTT: "+f.S+"ms")),(m=f).wa=Dc(m,m.J?m.pa:null,m.Y),i.K){Ec(m.i,i);var er=m.L;er&&i.setTimeout(er),i.B&&(nc(i),jc(i)),m.g=i}else Fc(m);0<f.j.length&&Gc(f)}else"stop"!=ei[0]&&"close"!=ei[0]||J(f,7)}else 3==f.H&&("stop"==ei[0]||"close"==ei[0]?"stop"==ei[0]?J(f,7):Hc(f):"noop"!=ei[0]&&f.h&&f.h.Aa(ei),f.A=0)}}Ob(4)}catch(i){}}function Kc(i,h){if(i.forEach&&"function"==typeof i.forEach)i.forEach(h,void 0);else if(aa(i)||"string"==typeof i)Array.prototype.forEach.call(i,h,void 0);else for(var f=function(i){if(i.ta&&"function"==typeof i.ta)return i.ta();if(!i.Z||"function"!=typeof i.Z){if("undefined"!=typeof Map&&i instanceof Map)return Array.from(i.keys());if(!("undefined"!=typeof Set&&i instanceof Set)){if(aa(i)||"string"==typeof i){var h=[];i=i.length;for(var f=0;f<i;f++)h.push(f);return h}for(let m in h=[],f=0,i)h[f++]=m;return h}}}(i),m=function(i){if(i.Z&&"function"==typeof i.Z)return i.Z();if("undefined"!=typeof Map&&i instanceof Map||"undefined"!=typeof Set&&i instanceof Set)return Array.from(i.values());if("string"==typeof i)return i.split("");if(aa(i)){for(var h=[],f=i.length,m=0;m<f;m++)h.push(i[m]);return h}for(m in h=[],f=0,i)h[f++]=i[m];return h}(i),L=m.length,en=0;en<L;en++)h.call(void 0,m[en],f&&f[en],i)}(eo=bc.prototype).setTimeout=function(i){this.P=i},eo.nb=function(i){i=i.target;let h=this.M;h&&3==H(i)?h.l():this.Pa(i)},eo.Pa=function(i){try{if(i==this.g)e:{let el=H(this.g);var h=this.g.Ia();let eh=this.g.da();if(!(3>el)&&(3!=el||eI||this.g&&(this.h.h||this.g.ja()||mc(this.g)))){this.J||4!=el||7==h||(8==h||0>=eh?Ob(3):Ob(2)),nc(this);var f=this.g.da();this.ca=f;t:if(oc(this)){var m=mc(this.g);i="";var L=m.length,en=4==H(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){I(this),pc(this);var er="";break t}this.h.i=new em.TextDecoder}for(h=0;h<L;h++)this.h.h=!0,i+=this.h.i.decode(m[h],{stream:en&&h==L-1});m.splice(0,L),this.h.g+=i,this.C=0,er=this.h.g}else er=this.g.ja();if(this.i=200==f,function(i,h,f,m,L,en,er){i.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+L+"]: "+h+"\n"+f+"\n"+en+" "+er})}(this.j,this.u,this.A,this.m,this.W,el,f),this.i){if(this.aa&&!this.K){t:{if(this.g){var ei,es=this.g;if((ei=es.g?es.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!x(ei)){var eo=ei;break t}}eo=null}if(f=eo)D(this.j,this.m,f,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,qc(this,f);else{this.i=!1,this.o=3,F(12),I(this),pc(this);break e}}this.S?(rc(this,el,er),eI&&this.i&&3==el&&(Db(this.U,this.V,"tick",this.mb),this.V.start())):(D(this.j,this.m,er,null),qc(this,er)),4==el&&I(this),this.i&&!this.J&&(4==el?sc(this.l,this):(this.i=!1,jc(this)))}else(function(i){let h={};i=(i.g&&2<=H(i)&&i.g.getAllResponseHeaders()||"").split("\r\n");for(let m=0;m<i.length;m++){if(x(i[m]))continue;var f=function(i){var h=1;i=i.split(":");let f=[];for(;0<h&&i.length;)f.push(i.shift()),h--;return i.length&&f.push(i.join(":")),f}(i[m]);let L=f[0];if("string"!=typeof(f=f[1]))continue;f=f.trim();let en=h[L]||[];h[L]=en,en.push(f)}!function(i,h){for(let f in i)h.call(void 0,i[f],f,i)}(h,function(i){return i.join(", ")})})(this.g),400==f&&0<er.indexOf("Unknown SID")?(this.o=3,F(12)):(this.o=0,F(13)),I(this),pc(this)}}}catch(i){}finally{}},eo.mb=function(){if(this.g){var i=H(this.g),h=this.g.ja();this.C<h.length&&(nc(this),rc(this,i,h),this.i&&4!=i&&jc(this))}},eo.cancel=function(){this.J=!0,I(this)},eo.lb=function(){this.B=null;let i=Date.now();0<=i-this.Y?(function(i,h){i.info(function(){return"TIMEOUT: "+h})}(this.j,this.A),2!=this.L&&(Ob(),F(17)),I(this),this.o=2,pc(this)):wc(this,this.Y-i)};var eX=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function M(i){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,i instanceof M){this.h=i.h,Nc(this,i.j),this.s=i.s,this.g=i.g,Oc(this,i.m),this.l=i.l;var h=i.i,f=new Pc;f.i=h.i,h.g&&(f.g=new Map(h.g),f.h=h.h),Qc(this,f),this.o=i.o}else i&&(h=String(i).match(eX))?(this.h=!1,Nc(this,h[1]||"",!0),this.s=Rc(h[2]||""),this.g=Rc(h[3]||"",!0),Oc(this,h[4]),this.l=Rc(h[5]||"",!0),Qc(this,h[6]||"",!0),this.o=Rc(h[7]||"")):(this.h=!1,this.i=new Pc(null,this.h))}function G(i){return new M(i)}function Nc(i,h,f){i.j=f?Rc(h,!0):h,i.j&&(i.j=i.j.replace(/:$/,""))}function Oc(i,h){if(h){if(isNaN(h=Number(h))||0>h)throw Error("Bad port number "+h);i.m=h}else i.m=null}function Qc(i,h,f){var m,L;h instanceof Pc?(i.i=h,m=i.i,(L=i.h)&&!m.j&&(N(m),m.i=null,m.g.forEach(function(i,h){var f=h.toLowerCase();h!=f&&($c(this,h),kc(this,f,i))},m)),m.j=L):(f||(h=Sc(h,e2)),i.i=new Pc(h,i.h))}function K(i,h,f){i.i.set(h,f)}function hc(i){return K(i,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),i}function Rc(i,h){return i?h?decodeURI(i.replace(/%25/g,"%2525")):decodeURIComponent(i):""}function Sc(i,h,f){return"string"==typeof i?(i=encodeURI(i).replace(h,Zc),f&&(i=i.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),i):null}function Zc(i){return"%"+((i=i.charCodeAt(0))>>4&15).toString(16)+(15&i).toString(16)}M.prototype.toString=function(){var i=[],h=this.j;h&&i.push(Sc(h,eZ,!0),":");var f=this.g;return(f||"file"==h)&&(i.push("//"),(h=this.s)&&i.push(Sc(h,eZ,!0),"@"),i.push(encodeURIComponent(String(f)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(f=this.m)&&i.push(":",String(f))),(f=this.l)&&(this.g&&"/"!=f.charAt(0)&&i.push("/"),i.push(Sc(f,"/"==f.charAt(0)?e1:e0,!0))),(f=this.i.toString())&&i.push("?",f),(f=this.o)&&i.push("#",Sc(f,e4)),i.join("")};var eZ=/[#\/\?@]/g,e0=/[#\?:]/g,e1=/[#\?]/g,e2=/[#\?@]/g,e4=/#/g;function Pc(i,h){this.h=this.g=null,this.i=i||null,this.j=!!h}function N(i){i.g||(i.g=new Map,i.h=0,i.i&&function(i,h){if(i){i=i.split("&");for(var f=0;f<i.length;f++){var m=i[f].indexOf("="),L=null;if(0<=m){var en=i[f].substring(0,m);L=i[f].substring(m+1)}else en=i[f];h(en,L?decodeURIComponent(L.replace(/\+/g," ")):"")}}}(i.i,function(h,f){i.add(decodeURIComponent(h.replace(/\+/g," ")),f)}))}function $c(i,h){N(i),h=O(i,h),i.g.has(h)&&(i.i=null,i.h-=i.g.get(h).length,i.g.delete(h))}function ad(i,h){return N(i),h=O(i,h),i.g.has(h)}function kc(i,h,f){$c(i,h),0<f.length&&(i.i=null,i.g.set(O(i,h),ma(f)),i.h+=f.length)}function O(i,h){return h=String(h),i.j&&(h=h.toLowerCase()),h}(eo=Pc.prototype).add=function(i,h){N(this),this.i=null,i=O(this,i);var f=this.g.get(i);return f||this.g.set(i,f=[]),f.push(h),this.h+=1,this},eo.forEach=function(i,h){N(this),this.g.forEach(function(f,m){f.forEach(function(f){i.call(h,f,m,this)},this)},this)},eo.ta=function(){N(this);let i=Array.from(this.g.values()),h=Array.from(this.g.keys()),f=[];for(let m=0;m<h.length;m++){let L=i[m];for(let i=0;i<L.length;i++)f.push(h[m])}return f},eo.Z=function(i){N(this);let h=[];if("string"==typeof i)ad(this,i)&&(h=h.concat(this.g.get(O(this,i))));else{i=Array.from(this.g.values());for(let f=0;f<i.length;f++)h=h.concat(i[f])}return h},eo.set=function(i,h){return N(this),this.i=null,ad(this,i=O(this,i))&&(this.h-=this.g.get(i).length),this.g.set(i,[h]),this.h+=1,this},eo.get=function(i,h){return i&&0<(i=this.Z(i)).length?String(i[0]):h},eo.toString=function(){if(this.i)return this.i;if(!this.g)return"";let i=[],h=Array.from(this.g.keys());for(var f=0;f<h.length;f++){var m=h[f];let en=encodeURIComponent(String(m)),er=this.Z(m);for(m=0;m<er.length;m++){var L=en;""!==er[m]&&(L+="="+encodeURIComponent(String(er[m]))),i.push(L)}}return this.i=i.join("&")};var e9=class{constructor(i,h){this.g=i,this.map=h}};function cd(i){this.l=i||e6,i=em.PerformanceNavigationTiming?0<(i=em.performance.getEntriesByType("navigation")).length&&("hq"==i[0].nextHopProtocol||"h2"==i[0].nextHopProtocol):!!(em.g&&em.g.Ka&&em.g.Ka()&&em.g.Ka().ec),this.j=i?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var e6=10;function ed(i){return!!i.h||!!i.g&&i.g.size>=i.j}function Bc(i){return i.h?1:i.g?i.g.size:0}function xc(i,h){return i.h?i.h==h:!!i.g&&i.g.has(h)}function Cc(i,h){i.g?i.g.add(h):i.h=h}function Ec(i,h){i.h&&i.h==h?i.h=null:i.g&&i.g.has(h)&&i.g.delete(h)}function fd(i){if(null!=i.h)return i.i.concat(i.h.F);if(null!=i.g&&0!==i.g.size){let h=i.i;for(let f of i.g.values())h=h.concat(f.F);return h}return ma(i.i)}cd.prototype.cancel=function(){if(this.i=fd(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(let i of this.g.values())i.cancel();this.g.clear()}};var e5=class{stringify(i){return em.JSON.stringify(i,void 0)}parse(i){return em.JSON.parse(i,void 0)}};function hd(){this.g=new e5}function kd(i,h,f,m,L){try{h.onload=null,h.onerror=null,h.onabort=null,h.ontimeout=null,L(m)}catch(i){}}function ld(i){this.l=i.fc||null,this.j=i.ob||!1}function md(i,h){B.call(this),this.F=i,this.u=h,this.m=void 0,this.readyState=e3,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}r(ld,Ub),ld.prototype.g=function(){return new md(this.l,this.j)},ld.prototype.i=(m={},function(){return m}),r(md,B);var e3=0;function qd(i){i.j.read().then(i.Xa.bind(i)).catch(i.ka.bind(i))}function pd(i){i.readyState=4,i.l=null,i.j=null,i.A=null,od(i)}function od(i){i.onreadystatechange&&i.onreadystatechange.call(i)}(eo=md.prototype).open=function(i,h){if(this.readyState!=e3)throw this.abort(),Error("Error reopening a connection");this.C=i,this.B=h,this.readyState=1,od(this)},eo.send=function(i){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;let h={headers:this.v,method:this.C,credentials:this.m,cache:void 0};i&&(h.body=i),(this.F||em).fetch(new Request(this.B,h)).then(this.$a.bind(this),this.ka.bind(this))},eo.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,pd(this)),this.readyState=e3},eo.$a=function(i){if(this.g&&(this.l=i,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=i.headers,this.readyState=2,od(this)),this.g&&(this.readyState=3,od(this),this.g))){if("arraybuffer"===this.responseType)i.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(void 0!==em.ReadableStream&&"body"in i){if(this.j=i.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;qd(this)}else i.text().then(this.Za.bind(this),this.ka.bind(this))}},eo.Xa=function(i){if(this.g){if(this.u&&i.value)this.response.push(i.value);else if(!this.u){var h=i.value?i.value:new Uint8Array(0);(h=this.A.decode(h,{stream:!i.done}))&&(this.response=this.responseText+=h)}i.done?pd(this):od(this),3==this.readyState&&qd(this)}},eo.Za=function(i){this.g&&(this.response=this.responseText=i,pd(this))},eo.Ya=function(i){this.g&&(this.response=i,pd(this))},eo.ka=function(){this.g&&pd(this)},eo.setRequestHeader=function(i,h){this.v.append(i,h)},eo.getResponseHeader=function(i){return this.h&&this.h.get(i.toLowerCase())||""},eo.getAllResponseHeaders=function(){if(!this.h)return"";let i=[],h=this.h.entries();for(var f=h.next();!f.done;)i.push((f=f.value)[0]+": "+f[1]),f=h.next();return i.join("\r\n")},Object.defineProperty(md.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(i){this.m=i?"include":"same-origin"}});var e7=em.JSON.parse;function P(i){B.call(this),this.headers=new Map,this.u=i||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=e8,this.L=this.M=!1}r(P,B);var e8="",te=/^https?$/i,tn=["POST","PUT"];function vd(i,h){i.h=!1,i.g&&(i.l=!0,i.g.abort(),i.l=!1),i.j=h,i.m=5,yd(i),zd(i)}function yd(i){i.F||(i.F=!0,C(i,"complete"),C(i,"error"))}function Ad(i){if(i.h&&void 0!==eg&&(!i.C[1]||4!=H(i)||2!=i.da())){if(i.v&&4==H(i))yb(i.La,0,i);else if(C(i,"readystatechange"),4==H(i)){i.h=!1;try{let er=i.da();switch(er){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var h,f,m=!0;break;default:m=!1}if(!(h=m)){if(f=0===er){var L=String(i.I).match(eX)[1]||null;!L&&em.self&&em.self.location&&(L=em.self.location.protocol.slice(0,-1)),f=!te.test(L?L.toLowerCase():"")}h=f}if(h)C(i,"complete"),C(i,"success");else{i.m=6;try{var en=2<H(i)?i.g.statusText:""}catch(i){en=""}i.j=en+" ["+i.da()+"]",yd(i)}}finally{zd(i)}}}}function zd(i,h){if(i.g){wd(i);let f=i.g,m=i.C[0]?()=>{}:null;i.g=null,i.C=null,h||C(i,"ready");try{f.onreadystatechange=m}catch(i){}}}function wd(i){i.g&&i.L&&(i.g.ontimeout=null),i.A&&(em.clearTimeout(i.A),i.A=null)}function H(i){return i.g?i.g.readyState:0}function mc(i){try{if(!i.g)return null;if("response"in i.g)return i.g.response;switch(i.K){case e8:case"text":return i.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in i.g)return i.g.mozResponseArrayBuffer}return null}catch(i){return null}}function Bd(i){let h="";return Na(i,function(i,f){h+=f+":"+i+"\r\n"}),h}function Cd(i,h,f){e:{for(m in f){var m=!1;break e}m=!0}m||(f=Bd(f),"string"==typeof i?null!=f&&encodeURIComponent(String(f)):K(i,h,f))}function Dd(i,h,f){return f&&f.internalChannelParams&&f.internalChannelParams[i]||h}function Ed(i){this.Ga=0,this.j=[],this.l=new Gb,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Dd("failFast",!1,i),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Dd("baseRetryDelayMs",5e3,i),this.hb=Dd("retryDelaySeedMs",1e4,i),this.eb=Dd("forwardChannelMaxRetries",2,i),this.xa=Dd("forwardChannelRequestTimeoutMs",2e4,i),this.va=i&&i.xmlHttpFactory||void 0,this.Ha=i&&i.dc||!1,this.L=void 0,this.J=i&&i.supportsCrossDomainXhr||!1,this.K="",this.i=new cd(i&&i.concurrentRequestLimit),this.Ja=new hd,this.P=i&&i.fastHandshake||!1,this.O=i&&i.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=i&&i.bc||!1,i&&i.Ea&&this.l.Ea(),i&&i.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&i&&i.detectBufferingProxy||!1,this.qa=void 0,i&&i.longPollingTimeout&&0<i.longPollingTimeout&&(this.qa=i.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}function Hc(i){if(Fd(i),3==i.H){var h=i.W++,f=G(i.I);if(K(f,"SID",i.K),K(f,"RID",h),K(f,"TYPE","terminate"),Gd(i,f),(h=new bc(i,i.l,h)).L=2,h.v=hc(G(f)),f=!1,em.navigator&&em.navigator.sendBeacon)try{f=em.navigator.sendBeacon(h.v.toString(),"")}catch(i){}!f&&em.Image&&((new Image).src=h.v,f=!0),f||(h.g=lc(h.l,null),h.g.ha(h.v)),h.G=Date.now(),jc(h)}Hd(i)}function zc(i){i.g&&(vc(i),i.g.cancel(),i.g=null)}function Fd(i){zc(i),i.u&&(em.clearTimeout(i.u),i.u=null),yc(i),i.i.cancel(),i.m&&("number"==typeof i.m&&em.clearTimeout(i.m),i.m=null)}function Gc(i){if(!ed(i.i)&&!i.m){i.m=!0;var h=i.Na;eW||vb(),eq||(eW(),eq=!0),eV.add(h,i),i.C=0}}function Ld(i,h){var f;f=h?h.m:i.W++;let m=G(i.I);K(m,"SID",i.K),K(m,"RID",f),K(m,"AID",i.V),Gd(i,m),i.o&&i.s&&Cd(m,i.o,i.s),f=new bc(i,i.l,f,i.C+1),null===i.o&&(f.I=i.s),h&&(i.j=h.F.concat(i.j)),h=Kd(i,f,1e3),f.setTimeout(Math.round(.5*i.xa)+Math.round(.5*i.xa*Math.random())),Cc(i.i,f),gc(f,m,h)}function Gd(i,h){i.na&&Na(i.na,function(i,f){K(h,f,i)}),i.h&&Kc({},function(i,f){K(h,f,i)})}function Kd(i,h,f){f=Math.min(i.j.length,f);var m=i.h?q(i.h.Va,i.h,i):null;e:{var L=i.j;let h=-1;for(;;){let i=["count="+f];-1==h?0<f?(h=L[0].g,i.push("ofs="+h)):h=0:i.push("ofs="+h);let en=!0;for(let er=0;er<f;er++){let f=L[er].g,ei=L[er].map;if(0>(f-=h))h=Math.max(0,L[er].g-100),en=!1;else try{!function(i,h,f){let m=f||"";try{Kc(i,function(i,f){let L=i;p(i)&&(L=eU(i)),h.push(m+f+"="+encodeURIComponent(L))})}catch(i){throw h.push(m+"type="+encodeURIComponent("_badmap")),i}}(ei,i,"req"+f+"_")}catch(i){m&&m(ei)}}if(en){m=i.join("&");break e}}}return i=i.j.splice(0,f),h.F=i,m}function Fc(i){if(!i.g&&!i.u){i.ba=1;var h=i.Ma;eW||vb(),eq||(eW(),eq=!0),eV.add(h,i),i.A=0}}function Ac(i){return!i.g&&!i.u&&!(3<=i.A)&&(i.ba++,i.u=Rb(q(i.Ma,i),Jd(i,i.A)),i.A++,!0)}function vc(i){null!=i.B&&(em.clearTimeout(i.B),i.B=null)}function Md(i){i.g=new bc(i,i.l,"rpc",i.ba),null===i.o&&(i.g.I=i.s),i.g.O=0;var h=G(i.wa);K(h,"RID","rpc"),K(h,"SID",i.K),K(h,"AID",i.V),K(h,"CI",i.G?"0":"1"),!i.G&&i.qa&&K(h,"TO",i.qa),K(h,"TYPE","xmlhttp"),Gd(i,h),i.o&&i.s&&Cd(h,i.o,i.s),i.L&&i.g.setTimeout(i.L);var f=i.g;i=i.pa,f.L=1,f.v=hc(G(h)),f.s=null,f.S=!0,ic(f,i)}function yc(i){null!=i.v&&(em.clearTimeout(i.v),i.v=null)}function sc(i,h){var f=null;if(i.g==h){yc(i),vc(i),i.g=null;var m=2}else{if(!xc(i.i,h))return;f=h.F,Ec(i.i,h),m=1}if(0!=i.H){if(h.i){if(1==m){f=h.s?h.s.length:0,h=Date.now()-h.G;var L,en=i.C;C(m=Mb(),new Qb(m,f)),Gc(i)}else Fc(i)}else if(3==(en=h.o)||0==en&&0<h.ca||!(1==m&&(L=h,!(Bc(i.i)>=i.i.j-(i.m?1:0))&&(i.m?(i.j=L.F.concat(i.j),!0):1!=i.H&&2!=i.H&&!(i.C>=(i.cb?0:i.eb))&&(i.m=Rb(q(i.Na,i,L),Jd(i,i.C)),i.C++,!0)))||2==m&&Ac(i)))switch(f&&0<f.length&&((h=i.i).i=h.i.concat(f)),en){case 1:J(i,5);break;case 4:J(i,10);break;case 3:J(i,6);break;default:J(i,2)}}}function Jd(i,h){let f=i.ab+Math.floor(Math.random()*i.hb);return i.isActive()||(f*=2),f*h}function J(i,h){if(i.l.info("Error code "+h),2==h){var f=null;i.h&&(f=null);var m=q(i.pb,i);f||(f=new M("//www.google.com/images/cleardot.gif"),em.location&&"http"==em.location.protocol||Nc(f,"https"),hc(f)),function(i,h){let f=new Gb;if(em.Image){let m=new Image;m.onload=ha(kd,f,m,"TestLoadImage: loaded",!0,h),m.onerror=ha(kd,f,m,"TestLoadImage: error",!1,h),m.onabort=ha(kd,f,m,"TestLoadImage: abort",!1,h),m.ontimeout=ha(kd,f,m,"TestLoadImage: timeout",!1,h),em.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=i}else h(!1)}(f.toString(),m)}else F(2);i.H=0,i.h&&i.h.za(h),Hd(i),Fd(i)}function Hd(i){if(i.H=0,i.ma=[],i.h){let h=fd(i.i);(0!=h.length||0!=i.j.length)&&(na(i.ma,h),na(i.ma,i.j),i.i.i.length=0,ma(i.j),i.j.length=0),i.h.ya()}}function Dc(i,h,f){var m=f instanceof M?G(f):new M(f);if(""!=m.g)h&&(m.g=h+"."+m.g),Oc(m,m.m);else{var L=em.location;m=L.protocol,h=h?h+"."+L.hostname:L.hostname,L=+L.port;var en=new M(null);m&&Nc(en,m),h&&(en.g=h),L&&Oc(en,L),f&&(en.l=f),m=en}return f=i.F,h=i.Da,f&&h&&K(m,f,h),K(m,"VER",i.ra),Gd(i,m),m}function lc(i,h,f){if(h&&!i.J)throw Error("Can't create secondary domain capable XhrIo object.");return(h=new P(f&&i.Ha&&!i.va?new ld({ob:!0}):i.va)).Oa(i.J),h}function Nd(){}function Od(){if(ew&&!(10<=Number(eN)))throw Error("Environmental error: no available transport.")}function Q(i,h){B.call(this),this.g=new Ed(h),this.l=i,this.h=h&&h.messageUrlParams||null,i=h&&h.messageHeaders||null,h&&h.clientProtocolHeaderRequired&&(i?i["X-Client-Protocol"]="webchannel":i={"X-Client-Protocol":"webchannel"}),this.g.s=i,i=h&&h.initMessageHeaders||null,h&&h.messageContentType&&(i?i["X-WebChannel-Content-Type"]=h.messageContentType:i={"X-WebChannel-Content-Type":h.messageContentType}),h&&h.Ca&&(i?i["X-WebChannel-Client-Profile"]=h.Ca:i={"X-WebChannel-Client-Profile":h.Ca}),this.g.U=i,(i=h&&h.cc)&&!x(i)&&(this.g.o=i),this.A=h&&h.supportsCrossDomainXhr||!1,this.v=h&&h.sendRawJson||!1,(h=h&&h.httpSessionIdParam)&&!x(h)&&(this.g.F=h,null!==(i=this.h)&&h in i&&h in(i=this.h)&&delete i[h]),this.j=new R(this)}function Pd(i){Yb.call(this),i.__headers__&&(this.headers=i.__headers__,this.statusCode=i.__status__,delete i.__headers__,delete i.__status__);var h=i.__sm__;if(h){e:{for(let f in h){i=f;break e}i=void 0}(this.i=i)&&(i=this.i,h=null!==h&&i in h?h[i]:void 0),this.data=h}else this.data=i}function Qd(){Zb.call(this),this.status=1}function R(i){this.g=i}function S(){this.blockSize=-1,this.blockSize=64,this.g=[,,,,],this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}function Sd(i,h,f){f||(f=0);var m=Array(16);if("string"==typeof h)for(var L=0;16>L;++L)m[L]=h.charCodeAt(f++)|h.charCodeAt(f++)<<8|h.charCodeAt(f++)<<16|h.charCodeAt(f++)<<24;else for(L=0;16>L;++L)m[L]=h[f++]|h[f++]<<8|h[f++]<<16|h[f++]<<24;h=i.g[0],f=i.g[1],L=i.g[2];var en=i.g[3],er=h+(en^f&(L^en))+m[0]+3614090360&4294967295;er=en+(L^(h=f+(er<<7&4294967295|er>>>25))&(f^L))+m[1]+3905402710&4294967295,er=L+(f^(en=h+(er<<12&4294967295|er>>>20))&(h^f))+m[2]+606105819&4294967295,er=f+(h^(L=en+(er<<17&4294967295|er>>>15))&(en^h))+m[3]+3250441966&4294967295,er=h+(en^(f=L+(er<<22&4294967295|er>>>10))&(L^en))+m[4]+4118548399&4294967295,er=en+(L^(h=f+(er<<7&4294967295|er>>>25))&(f^L))+m[5]+1200080426&4294967295,er=L+(f^(en=h+(er<<12&4294967295|er>>>20))&(h^f))+m[6]+2821735955&4294967295,er=f+(h^(L=en+(er<<17&4294967295|er>>>15))&(en^h))+m[7]+4249261313&4294967295,er=h+(en^(f=L+(er<<22&4294967295|er>>>10))&(L^en))+m[8]+1770035416&4294967295,er=en+(L^(h=f+(er<<7&4294967295|er>>>25))&(f^L))+m[9]+2336552879&4294967295,er=L+(f^(en=h+(er<<12&4294967295|er>>>20))&(h^f))+m[10]+4294925233&4294967295,er=f+(h^(L=en+(er<<17&4294967295|er>>>15))&(en^h))+m[11]+2304563134&4294967295,er=h+(en^(f=L+(er<<22&4294967295|er>>>10))&(L^en))+m[12]+1804603682&4294967295,er=en+(L^(h=f+(er<<7&4294967295|er>>>25))&(f^L))+m[13]+4254626195&4294967295,er=L+(f^(en=h+(er<<12&4294967295|er>>>20))&(h^f))+m[14]+2792965006&4294967295,er=f+(h^(L=en+(er<<17&4294967295|er>>>15))&(en^h))+m[15]+1236535329&4294967295,f=L+(er<<22&4294967295|er>>>10),er=h+(L^en&(f^L))+m[1]+4129170786&4294967295,h=f+(er<<5&4294967295|er>>>27),er=en+(f^L&(h^f))+m[6]+3225465664&4294967295,en=h+(er<<9&4294967295|er>>>23),er=L+(h^f&(en^h))+m[11]+643717713&4294967295,L=en+(er<<14&4294967295|er>>>18),er=f+(en^h&(L^en))+m[0]+3921069994&4294967295,f=L+(er<<20&4294967295|er>>>12),er=h+(L^en&(f^L))+m[5]+3593408605&4294967295,h=f+(er<<5&4294967295|er>>>27),er=en+(f^L&(h^f))+m[10]+38016083&4294967295,en=h+(er<<9&4294967295|er>>>23),er=L+(h^f&(en^h))+m[15]+3634488961&4294967295,L=en+(er<<14&4294967295|er>>>18),er=f+(en^h&(L^en))+m[4]+3889429448&4294967295,f=L+(er<<20&4294967295|er>>>12),er=h+(L^en&(f^L))+m[9]+568446438&4294967295,h=f+(er<<5&4294967295|er>>>27),er=en+(f^L&(h^f))+m[14]+3275163606&4294967295,en=h+(er<<9&4294967295|er>>>23),er=L+(h^f&(en^h))+m[3]+4107603335&4294967295,L=en+(er<<14&4294967295|er>>>18),er=f+(en^h&(L^en))+m[8]+1163531501&4294967295,f=L+(er<<20&4294967295|er>>>12),er=h+(L^en&(f^L))+m[13]+2850285829&4294967295,h=f+(er<<5&4294967295|er>>>27),er=en+(f^L&(h^f))+m[2]+4243563512&4294967295,en=h+(er<<9&4294967295|er>>>23),er=L+(h^f&(en^h))+m[7]+1735328473&4294967295,L=en+(er<<14&4294967295|er>>>18),er=f+(en^h&(L^en))+m[12]+2368359562&4294967295,er=h+((f=L+(er<<20&4294967295|er>>>12))^L^en)+m[5]+4294588738&4294967295,er=en+((h=f+(er<<4&4294967295|er>>>28))^f^L)+m[8]+2272392833&4294967295,er=L+((en=h+(er<<11&4294967295|er>>>21))^h^f)+m[11]+1839030562&4294967295,er=f+((L=en+(er<<16&4294967295|er>>>16))^en^h)+m[14]+4259657740&4294967295,er=h+((f=L+(er<<23&4294967295|er>>>9))^L^en)+m[1]+2763975236&4294967295,er=en+((h=f+(er<<4&4294967295|er>>>28))^f^L)+m[4]+1272893353&4294967295,er=L+((en=h+(er<<11&4294967295|er>>>21))^h^f)+m[7]+4139469664&4294967295,er=f+((L=en+(er<<16&4294967295|er>>>16))^en^h)+m[10]+3200236656&4294967295,er=h+((f=L+(er<<23&4294967295|er>>>9))^L^en)+m[13]+681279174&4294967295,er=en+((h=f+(er<<4&4294967295|er>>>28))^f^L)+m[0]+3936430074&4294967295,er=L+((en=h+(er<<11&4294967295|er>>>21))^h^f)+m[3]+3572445317&4294967295,er=f+((L=en+(er<<16&4294967295|er>>>16))^en^h)+m[6]+76029189&4294967295,er=h+((f=L+(er<<23&4294967295|er>>>9))^L^en)+m[9]+3654602809&4294967295,er=en+((h=f+(er<<4&4294967295|er>>>28))^f^L)+m[12]+3873151461&4294967295,er=L+((en=h+(er<<11&4294967295|er>>>21))^h^f)+m[15]+530742520&4294967295,er=f+((L=en+(er<<16&4294967295|er>>>16))^en^h)+m[2]+3299628645&4294967295,f=L+(er<<23&4294967295|er>>>9),er=h+(L^(f|~en))+m[0]+4096336452&4294967295,h=f+(er<<6&4294967295|er>>>26),er=en+(f^(h|~L))+m[7]+1126891415&4294967295,en=h+(er<<10&4294967295|er>>>22),er=L+(h^(en|~f))+m[14]+2878612391&4294967295,L=en+(er<<15&4294967295|er>>>17),er=f+(en^(L|~h))+m[5]+4237533241&4294967295,f=L+(er<<21&4294967295|er>>>11),er=h+(L^(f|~en))+m[12]+1700485571&4294967295,h=f+(er<<6&4294967295|er>>>26),er=en+(f^(h|~L))+m[3]+2399980690&4294967295,en=h+(er<<10&4294967295|er>>>22),er=L+(h^(en|~f))+m[10]+4293915773&4294967295,L=en+(er<<15&4294967295|er>>>17),er=f+(en^(L|~h))+m[1]+2240044497&4294967295,f=L+(er<<21&4294967295|er>>>11),er=h+(L^(f|~en))+m[8]+1873313359&4294967295,h=f+(er<<6&4294967295|er>>>26),er=en+(f^(h|~L))+m[15]+4264355552&4294967295,en=h+(er<<10&4294967295|er>>>22),er=L+(h^(en|~f))+m[6]+2734768916&4294967295,L=en+(er<<15&4294967295|er>>>17),er=f+(en^(L|~h))+m[13]+1309151649&4294967295,f=L+(er<<21&4294967295|er>>>11),er=h+(L^(f|~en))+m[4]+4149444226&4294967295,h=f+(er<<6&4294967295|er>>>26),er=en+(f^(h|~L))+m[11]+3174756917&4294967295,en=h+(er<<10&4294967295|er>>>22),er=L+(h^(en|~f))+m[2]+718787259&4294967295,L=en+(er<<15&4294967295|er>>>17),er=f+(en^(L|~h))+m[9]+3951481745&4294967295,i.g[0]=i.g[0]+h&4294967295,i.g[1]=i.g[1]+(L+(er<<21&4294967295|er>>>11))&4294967295,i.g[2]=i.g[2]+L&4294967295,i.g[3]=i.g[3]+en&4294967295}function T(i,h){this.h=h;for(var f=[],m=!0,L=i.length-1;0<=L;L--){var en=0|i[L];m&&en==h||(f[L]=en,m=!1)}this.g=f}(eo=P.prototype).Oa=function(i){this.M=i},eo.ha=function(i,h,f,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+i);h=h?h.toUpperCase():"GET",this.I=i,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():er.g(),this.C=this.u?Vb(this.u):Vb(er),this.g.onreadystatechange=q(this.La,this);try{this.G=!0,this.g.open(h,String(i),!0),this.G=!1}catch(i){vd(this,i);return}if(i=f||"",f=new Map(this.headers),m){if(Object.getPrototypeOf(m)===Object.prototype)for(var L in m)f.set(L,m[L]);else if("function"==typeof m.keys&&"function"==typeof m.get)for(let i of m.keys())f.set(i,m.get(i));else throw Error("Unknown input type for opt_headers: "+String(m))}for(let[en,er]of(m=Array.from(f.keys()).find(i=>"content-type"==i.toLowerCase()),L=em.FormData&&i instanceof em.FormData,!(0<=e_(tn,h))||m||L||f.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),f))this.g.setRequestHeader(en,er);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{var en;wd(this),0<this.B&&((this.L=(en=this.g,ew&&"number"==typeof en.timeout&&void 0!==en.ontimeout))?(this.g.timeout=this.B,this.g.ontimeout=q(this.ua,this)):this.A=yb(this.ua,this.B,this)),this.v=!0,this.g.send(i),this.v=!1}catch(i){vd(this,i)}},eo.ua=function(){void 0!==eg&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,C(this,"timeout"),this.abort(8))},eo.abort=function(i){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=i||7,C(this,"complete"),C(this,"abort"),zd(this))},eo.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),zd(this,!0)),P.$.N.call(this)},eo.La=function(){this.s||(this.G||this.v||this.l?Ad(this):this.kb())},eo.kb=function(){Ad(this)},eo.isActive=function(){return!!this.g},eo.da=function(){try{return 2<H(this)?this.g.status:-1}catch(i){return -1}},eo.ja=function(){try{return this.g?this.g.responseText:""}catch(i){return""}},eo.Wa=function(i){if(this.g){var h=this.g.responseText;return i&&0==h.indexOf(i)&&(h=h.substring(i.length)),e7(h)}},eo.Ia=function(){return this.m},eo.Sa=function(){return"string"==typeof this.j?this.j:String(this.j)},(eo=Ed.prototype).ra=8,eo.H=1,eo.Na=function(i){if(this.m){if(this.m=null,1==this.H){if(!i){this.W=Math.floor(1e5*Math.random()),i=this.W++;let L=new bc(this,this.l,i),en=this.s;if(this.U&&(en?Ra(en=Pa(en),this.U):en=this.U),null!==this.o||this.O||(L.I=en,en=null),this.P)e:{for(var h=0,f=0;f<this.j.length;f++){t:{var m=this.j[f];if("__data__"in m.map&&"string"==typeof(m=m.map.__data__)){m=m.length;break t}m=void 0}if(void 0===m)break;if(4096<(h+=m)){h=f;break e}if(4096===h||f===this.j.length-1){h=f+1;break e}}h=1e3}else h=1e3;h=Kd(this,L,h),K(f=G(this.I),"RID",i),K(f,"CVER",22),this.F&&K(f,"X-HTTP-Session-Id",this.F),Gd(this,f),en&&(this.O?h="headers="+encodeURIComponent(String(Bd(en)))+"&"+h:this.o&&Cd(f,this.o,en)),Cc(this.i,L),this.bb&&K(f,"TYPE","init"),this.P?(K(f,"$req",h),K(f,"SID","null"),L.aa=!0,gc(L,f,null)):gc(L,f,h),this.H=2}}else 3==this.H&&(i?Ld(this,i):0==this.j.length||ed(this.i)||Ld(this))}},eo.Ma=function(){if(this.u=null,Md(this),this.ca&&!(this.M||null==this.g||0>=this.S)){var i=2*this.S;this.l.info("BP detection timer enabled: "+i),this.B=Rb(q(this.jb,this),i)}},eo.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,F(10),zc(this),Md(this))},eo.ib=function(){null!=this.v&&(this.v=null,zc(this),Ac(this),F(19))},eo.pb=function(i){i?(this.l.info("Successfully pinged google.com"),F(2)):(this.l.info("Failed to ping google.com"),F(1))},eo.isActive=function(){return!!this.h&&this.h.isActive(this)},(eo=Nd.prototype).Ba=function(){},eo.Aa=function(){},eo.za=function(){},eo.ya=function(){},eo.isActive=function(){return!0},eo.Va=function(){},Od.prototype.g=function(i,h){return new Q(i,h)},r(Q,B),Q.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var i=this.g,h=this.l,f=this.h||void 0;F(0),i.Y=h,i.na=f||{},i.G=i.aa,i.I=Dc(i,null,i.Y),Gc(i)},Q.prototype.close=function(){Hc(this.g)},Q.prototype.u=function(i){var h=this.g;if("string"==typeof i){var f={};f.__data__=i,i=f}else this.v&&((f={}).__data__=eU(i),i=f);h.j.push(new e9(h.fb++,i)),3==h.H&&Gc(h)},Q.prototype.N=function(){this.g.h=null,delete this.j,Hc(this.g),delete this.g,Q.$.N.call(this)},r(Pd,Yb),r(Qd,Zb),r(R,Nd),R.prototype.Ba=function(){C(this.g,"a")},R.prototype.Aa=function(i){C(this.g,new Pd(i))},R.prototype.za=function(i){C(this.g,new Qd)},R.prototype.ya=function(){C(this.g,"b")},r(S,function(){this.blockSize=-1}),S.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0},S.prototype.j=function(i,h){void 0===h&&(h=i.length);for(var f=h-this.blockSize,m=this.m,L=this.h,en=0;en<h;){if(0==L)for(;en<=f;)Sd(this,i,en),en+=this.blockSize;if("string"==typeof i){for(;en<h;)if(m[L++]=i.charCodeAt(en++),L==this.blockSize){Sd(this,m),L=0;break}}else for(;en<h;)if(m[L++]=i[en++],L==this.blockSize){Sd(this,m),L=0;break}}this.h=L,this.i+=h},S.prototype.l=function(){var i=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);i[0]=128;for(var h=1;h<i.length-8;++h)i[h]=0;var f=8*this.i;for(h=i.length-8;h<i.length;++h)i[h]=255&f,f/=256;for(this.j(i),i=Array(16),h=f=0;4>h;++h)for(var m=0;32>m;m+=8)i[f++]=this.g[h]>>>m&255;return i};var ti={};function Td(i){return -128<=i&&128>i?Object.prototype.hasOwnProperty.call(ti,i)?ti[i]:ti[i]=new T([0|i],0>i?-1:0):new T([0|i],0>i?-1:0)}function U(i){if(isNaN(i)||!isFinite(i))return to;if(0>i)return W(U(-i));for(var h=[],f=1,m=0;i>=f;m++)h[m]=i/f|0,f*=ts;return new T(h,0)}var ts=4294967296,to=Td(0),ta=Td(1),tl=Td(16777216);function Y(i){if(0!=i.h)return!1;for(var h=0;h<i.g.length;h++)if(0!=i.g[h])return!1;return!0}function X(i){return -1==i.h}function W(i){for(var h=i.g.length,f=[],m=0;m<h;m++)f[m]=~i.g[m];return new T(f,~i.h).add(ta)}function Zd(i,h){return i.add(W(h))}function $d(i,h){for(;(65535&i[h])!=i[h];)i[h+1]+=i[h]>>>16,i[h]&=65535,h++}function ae(i,h){this.g=i,this.h=h}function Yd(i,h){if(Y(h))throw Error("division by zero");if(Y(i))return new ae(to,to);if(X(i))return h=Yd(W(i),h),new ae(W(h.g),W(h.h));if(X(h))return h=Yd(i,W(h)),new ae(W(h.g),h.h);if(30<i.g.length){if(X(i)||X(h))throw Error("slowDivide_ only works with positive integers.");for(var f=ta,m=h;0>=m.X(i);)f=be(f),m=be(m);var L=Z(f,1),en=Z(m,1);for(m=Z(m,2),f=Z(f,2);!Y(m);){var er=en.add(m);0>=er.X(i)&&(L=L.add(f),en=er),m=Z(m,1),f=Z(f,1)}return h=Zd(i,L.R(h)),new ae(L,h)}for(L=to;0<=i.X(h);){for(m=48>=(m=Math.ceil(Math.log(f=Math.max(1,Math.floor(i.ea()/h.ea())))/Math.LN2))?1:Math.pow(2,m-48),er=(en=U(f)).R(h);X(er)||0<er.X(i);)f-=m,er=(en=U(f)).R(h);Y(en)&&(en=ta),L=L.add(en),i=Zd(i,er)}return new ae(L,i)}function be(i){for(var h=i.g.length+1,f=[],m=0;m<h;m++)f[m]=i.D(m)<<1|i.D(m-1)>>>31;return new T(f,i.h)}function Z(i,h){var f=h>>5;h%=32;for(var m=i.g.length-f,L=[],en=0;en<m;en++)L[en]=0<h?i.D(en+f)>>>h|i.D(en+f+1)<<32-h:i.D(en+f);return new T(L,i.h)}(eo=T.prototype).ea=function(){if(X(this))return-W(this).ea();for(var i=0,h=1,f=0;f<this.g.length;f++){var m=this.D(f);i+=(0<=m?m:ts+m)*h,h*=ts}return i},eo.toString=function(i){if(2>(i=i||10)||36<i)throw Error("radix out of range: "+i);if(Y(this))return"0";if(X(this))return"-"+W(this).toString(i);for(var h=U(Math.pow(i,6)),f=this,m="";;){var L=Yd(f,h).g,en=((0<(f=Zd(f,L.R(h))).g.length?f.g[0]:f.h)>>>0).toString(i);if(Y(f=L))return en+m;for(;6>en.length;)en="0"+en;m=en+m}},eo.D=function(i){return 0>i?0:i<this.g.length?this.g[i]:this.h},eo.X=function(i){return X(i=Zd(this,i))?-1:Y(i)?0:1},eo.abs=function(){return X(this)?W(this):this},eo.add=function(i){for(var h=Math.max(this.g.length,i.g.length),f=[],m=0,L=0;L<=h;L++){var en=m+(65535&this.D(L))+(65535&i.D(L)),er=(en>>>16)+(this.D(L)>>>16)+(i.D(L)>>>16);m=er>>>16,en&=65535,er&=65535,f[L]=er<<16|en}return new T(f,-2147483648&f[f.length-1]?-1:0)},eo.R=function(i){if(Y(this)||Y(i))return to;if(X(this))return X(i)?W(this).R(W(i)):W(W(this).R(i));if(X(i))return W(this.R(W(i)));if(0>this.X(tl)&&0>i.X(tl))return U(this.ea()*i.ea());for(var h=this.g.length+i.g.length,f=[],m=0;m<2*h;m++)f[m]=0;for(m=0;m<this.g.length;m++)for(var L=0;L<i.g.length;L++){var en=this.D(m)>>>16,er=65535&this.D(m),ei=i.D(L)>>>16,es=65535&i.D(L);f[2*m+2*L]+=er*es,$d(f,2*m+2*L),f[2*m+2*L+1]+=en*es,$d(f,2*m+2*L+1),f[2*m+2*L+1]+=er*ei,$d(f,2*m+2*L+1),f[2*m+2*L+2]+=en*ei,$d(f,2*m+2*L+2)}for(m=0;m<h;m++)f[m]=f[2*m+1]<<16|f[2*m];for(m=h;m<2*h;m++)f[m]=0;return new T(f,0)},eo.gb=function(i){return Yd(this,i).h},eo.and=function(i){for(var h=Math.max(this.g.length,i.g.length),f=[],m=0;m<h;m++)f[m]=this.D(m)&i.D(m);return new T(f,this.h&i.h)},eo.or=function(i){for(var h=Math.max(this.g.length,i.g.length),f=[],m=0;m<h;m++)f[m]=this.D(m)|i.D(m);return new T(f,this.h|i.h)},eo.xor=function(i){for(var h=Math.max(this.g.length,i.g.length),f=[],m=0;m<h;m++)f[m]=this.D(m)^i.D(m);return new T(f,this.h^i.h)},Od.prototype.createWebChannel=Od.prototype.g,Q.prototype.send=Q.prototype.u,Q.prototype.open=Q.prototype.m,Q.prototype.close=Q.prototype.close,e$.NO_ERROR=0,e$.TIMEOUT=8,e$.HTTP_ERROR=6,ez.COMPLETE="complete",Wb.EventType=eK,eK.OPEN="a",eK.CLOSE="b",eK.ERROR="c",eK.MESSAGE="d",B.prototype.listen=B.prototype.O,P.prototype.listenOnce=P.prototype.P,P.prototype.getLastError=P.prototype.Sa,P.prototype.getLastErrorCode=P.prototype.Ia,P.prototype.getStatus=P.prototype.da,P.prototype.getResponseJson=P.prototype.Wa,P.prototype.getResponseText=P.prototype.ja,P.prototype.send=P.prototype.ha,P.prototype.setWithCredentials=P.prototype.Oa,S.prototype.digest=S.prototype.l,S.prototype.reset=S.prototype.reset,S.prototype.update=S.prototype.j,T.prototype.add=T.prototype.add,T.prototype.multiply=T.prototype.R,T.prototype.modulo=T.prototype.gb,T.prototype.compare=T.prototype.X,T.prototype.toNumber=T.prototype.ea,T.prototype.toString=T.prototype.toString,T.prototype.getBits=T.prototype.D,T.fromNumber=U,T.fromString=function Vd(i,h){if(0==i.length)throw Error("number format error: empty string");if(2>(h=h||10)||36<h)throw Error("radix out of range: "+h);if("-"==i.charAt(0))return W(Vd(i.substring(1),h));if(0<=i.indexOf("-"))throw Error('number format error: interior "-" character');for(var f=U(Math.pow(h,8)),m=to,L=0;L<i.length;L+=8){var en=Math.min(8,i.length-L),er=parseInt(i.substring(L,L+en),h);8>en?(en=U(Math.pow(h,en)),m=m.R(en).add(U(er))):m=(m=m.R(f)).add(U(er))}return m},ef.createWebChannelTransport=function(){return new Od},ef.getStatEventTarget=function(){return Mb()},ef.ErrorCode=e$,ef.EventType=ez,ef.Event=eG,ef.Stat={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},ef.FetchXmlHttpFactory=ld,ef.WebChannel=Wb,ef.XhrIo=P,ef.Md5=S;var tu=ef.Integer=T;f(3454);let tc="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm2017_V=class index_esm2017_V{constructor(i){this.uid=i}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(i){return i.uid===this.uid}};index_esm2017_V.UNAUTHENTICATED=new index_esm2017_V(null),index_esm2017_V.GOOGLE_CREDENTIALS=new index_esm2017_V("google-credentials-uid"),index_esm2017_V.FIRST_PARTY=new index_esm2017_V("first-party-uid"),index_esm2017_V.MOCK_USER=new index_esm2017_V("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let td="9.23.0",tp=new eu.Yd("@firebase/firestore");function index_esm2017_N(i,...h){if(tp.logLevel<=eu.in.DEBUG){let f=h.map($);tp.debug(`Firestore (${td}): ${i}`,...f)}}function index_esm2017_k(i,...h){if(tp.logLevel<=eu.in.ERROR){let f=h.map($);tp.error(`Firestore (${td}): ${i}`,...f)}}function $(i){if("string"==typeof i)return i;try{return JSON.stringify(i)}catch(h){return i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function index_esm2017_O(i="Unexpected state"){let h=`FIRESTORE (${td}) INTERNAL ASSERTION FAILED: `+i;throw index_esm2017_k(h),Error(h)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tf={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition",UNAVAILABLE:"unavailable"};let index_esm2017_U=class index_esm2017_U extends ec.ZR{constructor(i,h){super(i,h),this.code=i,this.message=h,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm2017_K=class index_esm2017_K{constructor(){this.promise=new Promise((i,h)=>{this.resolve=i,this.reject=h})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm2017_G=class index_esm2017_G{constructor(i,h){this.user=h,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${i}`)}};let index_esm2017_Q=class index_esm2017_Q{getToken(){return Promise.resolve(null)}invalidateToken(){}start(i,h){i.enqueueRetryable(()=>h(index_esm2017_V.UNAUTHENTICATED))}shutdown(){}};let j=class j{constructor(i){this.token=i,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(i,h){this.changeListener=h,i.enqueueRetryable(()=>h(this.token.user))}shutdown(){this.changeListener=null}};let index_esm2017_z=class index_esm2017_z{constructor(i){this.t=i,this.currentUser=index_esm2017_V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(i,h){let f=this.i,s=i=>this.i!==f?(f=this.i,h(i)):Promise.resolve(),m=new index_esm2017_K;this.o=()=>{this.i++,this.currentUser=this.u(),m.resolve(),m=new index_esm2017_K,i.enqueueRetryable(()=>s(this.currentUser))};let r=()=>{let h=m;i.enqueueRetryable(async()=>{await h.promise,await s(this.currentUser)})},o=i=>{index_esm2017_N("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=i,this.auth.addAuthTokenListener(this.o),r()};this.t.onInit(i=>o(i)),setTimeout(()=>{if(!this.auth){let i=this.t.getImmediate({optional:!0});i?o(i):(index_esm2017_N("FirebaseAuthCredentialsProvider","Auth not yet detected"),m.resolve(),m=new index_esm2017_K)}},0),r()}getToken(){let i=this.i,h=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(h).then(h=>this.i!==i?(index_esm2017_N("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):h?("string"==typeof h.accessToken||index_esm2017_O(),new index_esm2017_G(h.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let i=this.auth&&this.auth.getUid();return null===i||"string"==typeof i||index_esm2017_O(),new index_esm2017_V(i)}};let index_esm2017_W=class index_esm2017_W{constructor(i,h,f){this.h=i,this.l=h,this.m=f,this.type="FirstParty",this.user=index_esm2017_V.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);let i=this.p();return i&&this.g.set("Authorization",i),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}};let index_esm2017_H=class index_esm2017_H{constructor(i,h,f){this.h=i,this.l=h,this.m=f}getToken(){return Promise.resolve(new index_esm2017_W(this.h,this.l,this.m))}start(i,h){i.enqueueRetryable(()=>h(index_esm2017_V.FIRST_PARTY))}shutdown(){}invalidateToken(){}};let index_esm2017_J=class index_esm2017_J{constructor(i){this.value=i,this.type="AppCheck",this.headers=new Map,i&&i.length>0&&this.headers.set("x-firebase-appcheck",this.value)}};let index_esm2017_Y=class index_esm2017_Y{constructor(i){this.I=i,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(i,h){let n=i=>{null!=i.error&&index_esm2017_N("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);let f=i.token!==this.T;return this.T=i.token,index_esm2017_N("FirebaseAppCheckTokenProvider",`Received ${f?"new":"existing"} token.`),f?h(i.token):Promise.resolve()};this.o=h=>{i.enqueueRetryable(()=>n(h))};let s=i=>{index_esm2017_N("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){let i=this.I.getImmediate({optional:!0});i?s(i):index_esm2017_N("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let i=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(i).then(i=>i?("string"==typeof i.token||index_esm2017_O(),this.T=i.token,new index_esm2017_J(i.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tt=class tt{static A(){let i="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",h=Math.floor(256/i.length)*i.length,f="";for(;f.length<20;){let m=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){let h="undefined"!=typeof self&&(self.crypto||self.msCrypto),f=new Uint8Array(i);if(h&&"function"==typeof h.getRandomValues)h.getRandomValues(f);else for(let h=0;h<i;h++)f[h]=Math.floor(256*Math.random());return f}(40);for(let L=0;L<m.length;++L)f.length<20&&m[L]<h&&(f+=i.charAt(m[L]%i.length))}return f}};function et(i,h){return i<h?-1:i>h?1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ot=class ot{constructor(i,h,f){void 0===h?h=0:h>i.length&&index_esm2017_O(),void 0===f?f=i.length-h:f>i.length-h&&index_esm2017_O(),this.segments=i,this.offset=h,this.len=f}get length(){return this.len}isEqual(i){return 0===ot.comparator(this,i)}child(i){let h=this.segments.slice(this.offset,this.limit());return i instanceof ot?i.forEach(i=>{h.push(i)}):h.push(i),this.construct(h)}limit(){return this.offset+this.length}popFirst(i){return i=void 0===i?1:i,this.construct(this.segments,this.offset+i,this.length-i)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(i){return this.segments[this.offset+i]}isEmpty(){return 0===this.length}isPrefixOf(i){if(i.length<this.length)return!1;for(let h=0;h<this.length;h++)if(this.get(h)!==i.get(h))return!1;return!0}isImmediateParentOf(i){if(this.length+1!==i.length)return!1;for(let h=0;h<this.length;h++)if(this.get(h)!==i.get(h))return!1;return!0}forEach(i){for(let h=this.offset,f=this.limit();h<f;h++)i(this.segments[h])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(i,h){let f=Math.min(i.length,h.length);for(let m=0;m<f;m++){let f=i.get(m),L=h.get(m);if(f<L)return -1;if(f>L)return 1}return i.length<h.length?-1:i.length>h.length?1:0}};let ut=class ut extends ot{construct(i,h,f){return new ut(i,h,f)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...i){let h=[];for(let f of i){if(f.indexOf("//")>=0)throw new index_esm2017_U(tf.INVALID_ARGUMENT,`Invalid segment (${f}). Paths must not contain // in them.`);h.push(...f.split("/").filter(i=>i.length>0))}return new ut(h)}static emptyPath(){return new ut([])}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ht=class ht{constructor(i){this.path=i}static fromPath(i){return new ht(ut.fromString(i))}static fromName(i){return new ht(ut.fromString(i).popFirst(5))}static empty(){return new ht(ut.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(i){return this.path.length>=2&&this.path.get(this.path.length-2)===i}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(i){return null!==i&&0===ut.comparator(this.path,i.path)}toString(){return this.path.toString()}static comparator(i,h){return ut.comparator(i.path,h.path)}static isDocumentKey(i){return i.length%2==0}static fromSegments(i){return new ht(new ut(i.slice()))}};function Dt(i){return"IndexedDbTransactionError"===i.name}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let pe=class pe{constructor(i,h){this.comparator=i,this.root=h||Te.EMPTY}insert(i,h){return new pe(this.comparator,this.root.insert(i,h,this.comparator).copy(null,null,Te.BLACK,null,null))}remove(i){return new pe(this.comparator,this.root.remove(i,this.comparator).copy(null,null,Te.BLACK,null,null))}get(i){let h=this.root;for(;!h.isEmpty();){let f=this.comparator(i,h.key);if(0===f)return h.value;f<0?h=h.left:f>0&&(h=h.right)}return null}indexOf(i){let h=0,f=this.root;for(;!f.isEmpty();){let m=this.comparator(i,f.key);if(0===m)return h+f.left.size;m<0?f=f.left:(h+=f.left.size+1,f=f.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(i){return this.root.inorderTraversal(i)}forEach(i){this.inorderTraversal((h,f)=>(i(h,f),!1))}toString(){let i=[];return this.inorderTraversal((h,f)=>(i.push(`${h}:${f}`),!1)),`{${i.join(", ")}}`}reverseTraversal(i){return this.root.reverseTraversal(i)}getIterator(){return new Ie(this.root,null,this.comparator,!1)}getIteratorFrom(i){return new Ie(this.root,i,this.comparator,!1)}getReverseIterator(){return new Ie(this.root,null,this.comparator,!0)}getReverseIteratorFrom(i){return new Ie(this.root,i,this.comparator,!0)}};let Ie=class Ie{constructor(i,h,f,m){this.isReverse=m,this.nodeStack=[];let L=1;for(;!i.isEmpty();)if(L=h?f(i.key,h):1,h&&m&&(L*=-1),L<0)i=this.isReverse?i.left:i.right;else{if(0===L){this.nodeStack.push(i);break}this.nodeStack.push(i),i=this.isReverse?i.right:i.left}}getNext(){let i=this.nodeStack.pop(),h={key:i.key,value:i.value};if(this.isReverse)for(i=i.left;!i.isEmpty();)this.nodeStack.push(i),i=i.right;else for(i=i.right;!i.isEmpty();)this.nodeStack.push(i),i=i.left;return h}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let i=this.nodeStack[this.nodeStack.length-1];return{key:i.key,value:i.value}}};let Te=class Te{constructor(i,h,f,m,L){this.key=i,this.value=h,this.color=null!=f?f:Te.RED,this.left=null!=m?m:Te.EMPTY,this.right=null!=L?L:Te.EMPTY,this.size=this.left.size+1+this.right.size}copy(i,h,f,m,L){return new Te(null!=i?i:this.key,null!=h?h:this.value,null!=f?f:this.color,null!=m?m:this.left,null!=L?L:this.right)}isEmpty(){return!1}inorderTraversal(i){return this.left.inorderTraversal(i)||i(this.key,this.value)||this.right.inorderTraversal(i)}reverseTraversal(i){return this.right.reverseTraversal(i)||i(this.key,this.value)||this.left.reverseTraversal(i)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(i,h,f){let m=this,L=f(i,m.key);return(m=L<0?m.copy(null,null,null,m.left.insert(i,h,f),null):0===L?m.copy(null,h,null,null,null):m.copy(null,null,null,null,m.right.insert(i,h,f))).fixUp()}removeMin(){if(this.left.isEmpty())return Te.EMPTY;let i=this;return i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),(i=i.copy(null,null,null,i.left.removeMin(),null)).fixUp()}remove(i,h){let f,m=this;if(0>h(i,m.key))m.left.isEmpty()||m.left.isRed()||m.left.left.isRed()||(m=m.moveRedLeft()),m=m.copy(null,null,null,m.left.remove(i,h),null);else{if(m.left.isRed()&&(m=m.rotateRight()),m.right.isEmpty()||m.right.isRed()||m.right.left.isRed()||(m=m.moveRedRight()),0===h(i,m.key)){if(m.right.isEmpty())return Te.EMPTY;f=m.right.min(),m=m.copy(f.key,f.value,null,null,m.right.removeMin())}m=m.copy(null,null,null,null,m.right.remove(i,h))}return m.fixUp()}isRed(){return this.color}fixUp(){let i=this;return i.right.isRed()&&!i.left.isRed()&&(i=i.rotateLeft()),i.left.isRed()&&i.left.left.isRed()&&(i=i.rotateRight()),i.left.isRed()&&i.right.isRed()&&(i=i.colorFlip()),i}moveRedLeft(){let i=this.colorFlip();return i.right.left.isRed()&&(i=(i=(i=i.copy(null,null,null,null,i.right.rotateRight())).rotateLeft()).colorFlip()),i}moveRedRight(){let i=this.colorFlip();return i.left.left.isRed()&&(i=(i=i.rotateRight()).colorFlip()),i}rotateLeft(){let i=this.copy(null,null,Te.RED,null,this.right.left);return this.right.copy(null,null,this.color,i,null)}rotateRight(){let i=this.copy(null,null,Te.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,i)}colorFlip(){let i=this.left.copy(null,null,!this.left.color,null,null),h=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,i,h)}checkMaxDepth(){let i=this.check();return Math.pow(2,i)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw index_esm2017_O();let i=this.left.check();if(i!==this.right.check())throw index_esm2017_O();return i+(this.isRed()?0:1)}};Te.EMPTY=null,Te.RED=!0,Te.BLACK=!1,Te.EMPTY=new class{constructor(){this.size=0}get key(){throw index_esm2017_O()}get value(){throw index_esm2017_O()}get color(){throw index_esm2017_O()}get left(){throw index_esm2017_O()}get right(){throw index_esm2017_O()}copy(i,h,f,m,L){return this}insert(i,h,f){return new Te(i,h)}remove(i,h){return this}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ee=class Ee{constructor(i){this.comparator=i,this.data=new pe(this.comparator)}has(i){return null!==this.data.get(i)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(i){return this.data.indexOf(i)}forEach(i){this.data.inorderTraversal((h,f)=>(i(h),!1))}forEachInRange(i,h){let f=this.data.getIteratorFrom(i[0]);for(;f.hasNext();){let m=f.getNext();if(this.comparator(m.key,i[1])>=0)return;h(m.key)}}forEachWhile(i,h){let f;for(f=void 0!==h?this.data.getIteratorFrom(h):this.data.getIterator();f.hasNext();)if(!i(f.getNext().key))return}firstAfterOrEqual(i){let h=this.data.getIteratorFrom(i);return h.hasNext()?h.getNext().key:null}getIterator(){return new Ae(this.data.getIterator())}getIteratorFrom(i){return new Ae(this.data.getIteratorFrom(i))}add(i){return this.copy(this.data.remove(i).insert(i,!0))}delete(i){return this.has(i)?this.copy(this.data.remove(i)):this}isEmpty(){return this.data.isEmpty()}unionWith(i){let h=this;return h.size<i.size&&(h=i,i=this),i.forEach(i=>{h=h.add(i)}),h}isEqual(i){if(!(i instanceof Ee)||this.size!==i.size)return!1;let h=this.data.getIterator(),f=i.data.getIterator();for(;h.hasNext();){let i=h.getNext().key,m=f.getNext().key;if(0!==this.comparator(i,m))return!1}return!0}toArray(){let i=[];return this.forEach(h=>{i.push(h)}),i}toString(){let i=[];return this.forEach(h=>i.push(h)),"SortedSet("+i.toString()+")"}copy(i){let h=new Ee(this.comparator);return h.data=i,h}};let Ae=class Ae{constructor(i){this.iter=i}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pe=class Pe extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ve=class Ve{constructor(i){this.binaryString=i}static fromBase64String(i){let h=function(i){try{return atob(i)}catch(i){throw"undefined"!=typeof DOMException&&i instanceof DOMException?new Pe("Invalid base64 string: "+i):i}}(i);return new Ve(h)}static fromUint8Array(i){let h=function(i){let h="";for(let f=0;f<i.length;++f)h+=String.fromCharCode(i[f]);return h}(i);return new Ve(h)}[Symbol.iterator](){let i=0;return{next:()=>i<this.binaryString.length?{value:this.binaryString.charCodeAt(i++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(i){let h=new Uint8Array(i.length);for(let f=0;f<i.length;f++)h[f]=i.charCodeAt(f);return h}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(i){return et(this.binaryString,i.binaryString)}isEqual(i){return this.binaryString===i.binaryString}};function Ce(i){return"number"==typeof i?i:"string"==typeof i?Number(i):0}Ve.EMPTY_BYTE_STRING=new Ve("");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let $e=class $e{constructor(i,h,f,m,L,en,er,ei,es){this.databaseId=i,this.appId=h,this.persistenceKey=f,this.host=m,this.ssl=L,this.forceLongPolling=en,this.autoDetectLongPolling=er,this.longPollingOptions=ei,this.useFetchStreams=es}};let Oe=class Oe{constructor(i,h){this.projectId=i,this.database=h||"(default)"}static empty(){return new Oe("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(i){return i instanceof Oe&&i.projectId===this.projectId&&i.database===this.database}};new pe(ht.comparator),new pe(ht.comparator),new pe(ht.comparator),new Ee(ht.comparator),new Ee(et),(es=ei||(ei={}))[es.OK=0]="OK",es[es.CANCELLED=1]="CANCELLED",es[es.UNKNOWN=2]="UNKNOWN",es[es.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",es[es.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",es[es.NOT_FOUND=5]="NOT_FOUND",es[es.ALREADY_EXISTS=6]="ALREADY_EXISTS",es[es.PERMISSION_DENIED=7]="PERMISSION_DENIED",es[es.UNAUTHENTICATED=16]="UNAUTHENTICATED",es[es.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",es[es.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",es[es.ABORTED=10]="ABORTED",es[es.OUT_OF_RANGE=11]="OUT_OF_RANGE",es[es.UNIMPLEMENTED=12]="UNIMPLEMENTED",es[es.INTERNAL=13]="INTERNAL",es[es.UNAVAILABLE=14]="UNAVAILABLE",es[es.DATA_LOSS=15]="DATA_LOSS",new tu([4294967295,4294967295],0);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let br=class br{constructor(){}_e(i,h){this.me(i,h),h.ge()}me(i,h){var f;if("nullValue"in i)this.ye(h,5);else if("booleanValue"in i)this.ye(h,10),h.pe(i.booleanValue?1:0);else if("integerValue"in i)this.ye(h,15),h.pe(Ce(i.integerValue));else if("doubleValue"in i){let f=Ce(i.doubleValue);isNaN(f)?this.ye(h,13):(this.ye(h,15),0===f&&1/f==-1/0?h.pe(0):h.pe(f))}else if("timestampValue"in i){let f=i.timestampValue;this.ye(h,20),"string"==typeof f?h.Ie(f):(h.Ie(`${f.seconds||""}`),h.pe(f.nanos||0))}else if("stringValue"in i)this.Te(i.stringValue,h),this.Ee(h);else if("bytesValue"in i)this.ye(h,30),h.Ae("string"==typeof(f=i.bytesValue)?Ve.fromBase64String(f):Ve.fromUint8Array(f)),this.Ee(h);else if("referenceValue"in i)this.ve(i.referenceValue,h);else if("geoPointValue"in i){let f=i.geoPointValue;this.ye(h,45),h.pe(f.latitude||0),h.pe(f.longitude||0)}else"mapValue"in i?"__max__"===(((i.mapValue||{}).fields||{}).__type__||{}).stringValue?this.ye(h,Number.MAX_SAFE_INTEGER):(this.Re(i.mapValue,h),this.Ee(h)):"arrayValue"in i?(this.Pe(i.arrayValue,h),this.Ee(h)):index_esm2017_O()}Te(i,h){this.ye(h,25),this.be(i,h)}be(i,h){h.Ie(i)}Re(i,h){let f=i.fields||{};for(let i of(this.ye(h,55),Object.keys(f)))this.Te(i,h),this.me(f[i],h)}Pe(i,h){let f=i.values||[];for(let i of(this.ye(h,50),f))this.me(i,h)}ve(i,h){this.ye(h,37),ht.fromName(i).path.forEach(i=>{this.ye(h,60),this.be(i,h)})}ye(i,h){i.pe(h)}Ee(i){i.pe(2)}};br.Ve=new br,new Uint8Array(0);let so=class so{constructor(i,h,f){this.cacheSizeCollectionThreshold=i,this.percentileToCollect=h,this.maximumSequenceNumbersToCollect=f}static withCacheSize(i){return new so(i,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}};function Ou(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */so.DEFAULT_COLLECTION_PERCENTILE=10,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,so.DEFAULT=new so(41943040,so.DEFAULT_COLLECTION_PERCENTILE,so.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),so.DISABLED=new so(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bu=class Bu{constructor(i,h,f=1e3,m=1.5,L=6e4){this.ii=i,this.timerId=h,this.Po=f,this.bo=m,this.Vo=L,this.So=0,this.Do=null,this.Co=Date.now(),this.reset()}reset(){this.So=0}xo(){this.So=this.Vo}No(i){this.cancel();let h=Math.floor(this.So+this.ko()),f=Math.max(0,Date.now()-this.Co),m=Math.max(0,h-f);m>0&&index_esm2017_N("ExponentialBackoff",`Backing off for ${m} ms (base delay: ${this.So} ms, delay with jitter: ${h} ms, last attempt: ${f} ms ago)`),this.Do=this.ii.enqueueAfterDelay(this.timerId,m,()=>(this.Co=Date.now(),i())),this.So*=this.bo,this.So<this.Po&&(this.So=this.Po),this.So>this.Vo&&(this.So=this.Vo)}Mo(){null!==this.Do&&(this.Do.skipDelay(),this.Do=null)}cancel(){null!==this.Do&&(this.Do.cancel(),this.Do=null)}ko(){return(Math.random()-.5)*this.So}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm2017_Tc=class index_esm2017_Tc{constructor(i,h,f,m,L){this.asyncQueue=i,this.timerId=h,this.targetTimeMs=f,this.op=m,this.removalCallback=L,this.deferred=new index_esm2017_K,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(i=>{})}static createAndSchedule(i,h,f,m,L){let en=Date.now()+f,er=new index_esm2017_Tc(i,h,en,m,L);return er.start(f),er}start(i){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),i)}skipDelay(){return this.handleDelayElapsed()}cancel(i){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new index_esm2017_U(tf.CANCELLED,"Operation cancelled"+(i?": "+i:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(i=>this.deferred.resolve(i))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let index_esm2017_xa=class index_esm2017_xa{constructor(i,h,f,m){this.authCredentials=i,this.appCheckCredentials=h,this.asyncQueue=f,this.databaseInfo=m,this.user=index_esm2017_V.UNAUTHENTICATED,this.clientId=tt.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(f,async i=>{index_esm2017_N("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(f,i=>(index_esm2017_N("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(i){this.authCredentialListener=i}setAppCheckTokenChangeListener(i){this.appCheckCredentialListener=i}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new index_esm2017_U(tf.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let i=new index_esm2017_K;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),i.resolve()}catch(f){let h=function(i,h){if(index_esm2017_k("AsyncQueue",`${h}: ${i}`),Dt(i))return new index_esm2017_U(tf.UNAVAILABLE,`${h}: ${i}`);throw i}(f,"Failed to shutdown persistence");i.reject(h)}}),i.promise}};/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function th(i){let h={};return void 0!==i.timeoutSeconds&&(h.timeoutSeconds=i.timeoutSeconds),h}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tg=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ah=class ah{constructor(i){var h,f;if(void 0===i.host){if(void 0!==i.ssl)throw new index_esm2017_U(tf.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=i.host,this.ssl=null===(h=i.ssl)||void 0===h||h;if(this.credentials=i.credentials,this.ignoreUndefinedProperties=!!i.ignoreUndefinedProperties,this.cache=i.localCache,void 0===i.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==i.cacheSizeBytes&&i.cacheSizeBytes<1048576)throw new index_esm2017_U(tf.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=i.cacheSizeBytes}(function(i,h,f,m){if(!0===h&&!0===m)throw new index_esm2017_U(tf.INVALID_ARGUMENT,`${i} and ${f} cannot be used together.`)})("experimentalForceLongPolling",i.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",i.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!i.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===i.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!i.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=th(null!==(f=i.experimentalLongPollingOptions)&&void 0!==f?f:{}),function(i){if(void 0!==i.timeoutSeconds){if(isNaN(i.timeoutSeconds))throw new index_esm2017_U(tf.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (must not be NaN)`);if(i.timeoutSeconds<5)throw new index_esm2017_U(tf.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (minimum allowed value is 5)`);if(i.timeoutSeconds>30)throw new index_esm2017_U(tf.INVALID_ARGUMENT,`invalid long polling timeout: ${i.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!i.useFetchStreams}isEqual(i){var h,f;return this.host===i.host&&this.ssl===i.ssl&&this.credentials===i.credentials&&this.cacheSizeBytes===i.cacheSizeBytes&&this.experimentalForceLongPolling===i.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===i.experimentalAutoDetectLongPolling&&(h=this.experimentalLongPollingOptions,f=i.experimentalLongPollingOptions,h.timeoutSeconds===f.timeoutSeconds)&&this.ignoreUndefinedProperties===i.ignoreUndefinedProperties&&this.useFetchStreams===i.useFetchStreams}};let hh=class hh{constructor(i,h,f,m){this._authCredentials=i,this._appCheckCredentials=h,this._databaseId=f,this._app=m,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new ah({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new index_esm2017_U(tf.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(i){if(this._settingsFrozen)throw new index_esm2017_U(tf.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new ah(i),void 0!==i.credentials&&(this._authCredentials=function(i){if(!i)return new index_esm2017_Q;switch(i.type){case"firstParty":return new index_esm2017_H(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new index_esm2017_U(tf.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(i.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(i){let h=tg.get(i);h&&(index_esm2017_N("ComponentProvider","Removing Datastore"),tg.delete(i),h.terminate())}(this),Promise.resolve()}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ih=class Ih{constructor(){this.Gc=Promise.resolve(),this.Qc=[],this.jc=!1,this.zc=[],this.Wc=null,this.Hc=!1,this.Jc=!1,this.Yc=[],this.qo=new Bu(this,"async_queue_retry"),this.Xc=()=>{let i=Ou();i&&index_esm2017_N("AsyncQueue","Visibility state changed to "+i.visibilityState),this.qo.Mo()};let i=Ou();i&&"function"==typeof i.addEventListener&&i.addEventListener("visibilitychange",this.Xc)}get isShuttingDown(){return this.jc}enqueueAndForget(i){this.enqueue(i)}enqueueAndForgetEvenWhileRestricted(i){this.Zc(),this.ta(i)}enterRestrictedMode(i){if(!this.jc){this.jc=!0,this.Jc=i||!1;let h=Ou();h&&"function"==typeof h.removeEventListener&&h.removeEventListener("visibilitychange",this.Xc)}}enqueue(i){if(this.Zc(),this.jc)return new Promise(()=>{});let h=new index_esm2017_K;return this.ta(()=>this.jc&&this.Jc?Promise.resolve():(i().then(h.resolve,h.reject),h.promise)).then(()=>h.promise)}enqueueRetryable(i){this.enqueueAndForget(()=>(this.Qc.push(i),this.ea()))}async ea(){if(0!==this.Qc.length){try{await this.Qc[0](),this.Qc.shift(),this.qo.reset()}catch(i){if(!Dt(i))throw i;index_esm2017_N("AsyncQueue","Operation failed with retryable error: "+i)}this.Qc.length>0&&this.qo.No(()=>this.ea())}}ta(i){let h=this.Gc.then(()=>(this.Hc=!0,i().catch(i=>{let h;this.Wc=i,this.Hc=!1;let f=(h=i.message||"",i.stack&&(h=i.stack.includes(i.message)?i.stack:i.message+"\n"+i.stack),h);throw index_esm2017_k("INTERNAL UNHANDLED ERROR: ",f),i}).then(i=>(this.Hc=!1,i))));return this.Gc=h,h}enqueueAfterDelay(i,h,f){this.Zc(),this.Yc.indexOf(i)>-1&&(h=0);let m=index_esm2017_Tc.createAndSchedule(this,i,h,f,i=>this.na(i));return this.zc.push(m),m}Zc(){this.Wc&&index_esm2017_O()}verifyOperationInProgress(){}async sa(){let i;do i=this.Gc,await i;while(i!==this.Gc)}ia(i){for(let h of this.zc)if(h.timerId===i)return!0;return!1}ra(i){return this.sa().then(()=>{for(let h of(this.zc.sort((i,h)=>i.targetTimeMs-h.targetTimeMs),this.zc))if(h.skipDelay(),"all"!==i&&h.timerId===i)break;return this.sa()})}oa(i){this.Yc.push(i)}na(i){let h=this.zc.indexOf(i);this.zc.splice(h,1)}};let vh=class vh extends hh{constructor(i,h,f,m){super(i,h,f,m),this.type="firestore",this._queue=new Ih,this._persistenceKey=(null==m?void 0:m.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||function(i){var h,f,m,L,en,er;let ei=i._freezeSettings(),es=(L=i._databaseId,en=(null===(h=i._app)||void 0===h?void 0:h.options.appId)||"",er=i._persistenceKey,new $e(L,en,er,ei.host,ei.ssl,ei.experimentalForceLongPolling,ei.experimentalAutoDetectLongPolling,th(ei.experimentalLongPollingOptions),ei.useFetchStreams));i._firestoreClient=new index_esm2017_xa(i._authCredentials,i._appCheckCredentials,i._queue,es),(null===(f=ei.cache)||void 0===f?void 0:f._offlineComponentProvider)&&(null===(m=ei.cache)||void 0===m?void 0:m._onlineComponentProvider)&&(i._firestoreClient._uninitializedComponentsProvider={_offlineKind:ei.cache.kind,_offline:ei.cache._offlineComponentProvider,_online:ei.cache._onlineComponentProvider})}(this),this._firestoreClient.terminate()}};function Ph(i,h){let f="object"==typeof i?i:(0,el.Mq)(),m=(0,el.qX)(f,"firestore").getImmediate({identifier:"string"==typeof i?i:h||"(default)"});if(!m._initialized){let i=(0,ec.P0)("firestore");i&&function(i,h,f,m={}){var L;let en=(i=function(i,h){if("_delegate"in i&&(i=i._delegate),!(i instanceof h)){if(h.name===i.constructor.name)throw new index_esm2017_U(tf.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let f=function(i){if(void 0===i)return"undefined";if(null===i)return"null";if("string"==typeof i)return i.length>20&&(i=`${i.substring(0,20)}...`),JSON.stringify(i);if("number"==typeof i||"boolean"==typeof i)return""+i;if("object"==typeof i){if(i instanceof Array)return"an array";{var h;let f=(h=i).constructor?h.constructor.name:null;return f?`a custom ${f} object`:"an object"}}return"function"==typeof i?"a function":index_esm2017_O()}(i);throw new index_esm2017_U(tf.INVALID_ARGUMENT,`Expected type '${h.name}', but it was: ${f}`)}}return i}(i,hh))._getSettings(),er=`${h}:${f}`;if("firestore.googleapis.com"!==en.host&&en.host!==er&&function(i){if(tp.logLevel<=eu.in.WARN){let h=[].map($);tp.warn(`Firestore (${td}): ${i}`,...h)}}("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),i._setSettings(Object.assign(Object.assign({},en),{host:er,ssl:!1})),m.mockUserToken){let h,f;if("string"==typeof m.mockUserToken)h=m.mockUserToken,f=index_esm2017_V.MOCK_USER;else{h=(0,ec.Sg)(m.mockUserToken,null===(L=i._app)||void 0===L?void 0:L.options.projectId);let en=m.mockUserToken.sub||m.mockUserToken.user_id;if(!en)throw new index_esm2017_U(tf.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");f=new index_esm2017_V(en)}i._authCredentials=new j(new index_esm2017_G(h,f))}}(m,...i)}return m}!function(i,h=!0){td=el.Jn,(0,el.Xd)(new eh.wA("firestore",(i,{instanceIdentifier:f,options:m})=>{let L=i.getProvider("app").getImmediate(),en=new vh(new index_esm2017_z(i.getProvider("auth-internal")),new index_esm2017_Y(i.getProvider("app-check-internal")),function(i,h){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new index_esm2017_U(tf.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Oe(i.options.projectId,h)}(L,f),L);return m=Object.assign({useFetchStreams:h},m),en._setSettings(m),en},"PUBLIC").setMultipleInstances(!0)),(0,el.KN)(tc,"3.13.0",void 0),(0,el.KN)(tc,"3.13.0","esm2017")}()},7004:function(i,h,f){"use strict";f.d(h,{$C:function(){return getFunctions},V1:function(){return httpsCallable}});var m,L=f(5816),en=f(4444),er=f(8463);function mapValues(i,h){let f={};for(let m in i)i.hasOwnProperty(m)&&(f[m]=h(i[m]));return f}function decode(i){if(null==i)return i;if(i["@type"])switch(i["@type"]){case"type.googleapis.com/google.protobuf.Int64Value":case"type.googleapis.com/google.protobuf.UInt64Value":{let h=Number(i.value);if(isNaN(h))throw Error("Data cannot be decoded from JSON: "+i);return h}default:throw Error("Data cannot be decoded from JSON: "+i)}return Array.isArray(i)?i.map(i=>decode(i)):"function"==typeof i||"object"==typeof i?mapValues(i,i=>decode(i)):i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ei="functions",es={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};let FunctionsError=class FunctionsError extends en.ZR{constructor(i,h,f){super(`${ei}/${i}`,h||""),this.details=f}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ContextProvider=class ContextProvider{constructor(i,h,f){this.auth=null,this.messaging=null,this.appCheck=null,this.auth=i.getImmediate({optional:!0}),this.messaging=h.getImmediate({optional:!0}),this.auth||i.get().then(i=>this.auth=i,()=>{}),this.messaging||h.get().then(i=>this.messaging=i,()=>{}),this.appCheck||f.get().then(i=>this.appCheck=i,()=>{})}async getAuthToken(){if(this.auth)try{let i=await this.auth.getToken();return null==i?void 0:i.accessToken}catch(i){return}}async getMessagingToken(){if(this.messaging&&"Notification"in self&&"granted"===Notification.permission)try{return await this.messaging.getToken()}catch(i){return}}async getAppCheckToken(i){if(this.appCheck){let h=i?await this.appCheck.getLimitedUseToken():await this.appCheck.getToken();return h.error?null:h.token}return null}async getContext(i){let h=await this.getAuthToken(),f=await this.getMessagingToken(),m=await this.getAppCheckToken(i);return{authToken:h,messagingToken:f,appCheckToken:m}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eo="us-central1";let FunctionsService=class FunctionsService{constructor(i,h,f,m,L=eo,en){this.app=i,this.fetchImpl=en,this.emulatorOrigin=null,this.contextProvider=new ContextProvider(h,f,m),this.cancelAllRequests=new Promise(i=>{this.deleteService=()=>Promise.resolve(i())});try{let i=new URL(L);this.customDomain=i.origin,this.region=eo}catch(i){this.customDomain=null,this.region=L}}_delete(){return this.deleteService()}_url(i){let h=this.app.options.projectId;if(null!==this.emulatorOrigin){let f=this.emulatorOrigin;return`${f}/${h}/${this.region}/${i}`}return null!==this.customDomain?`${this.customDomain}/${i}`:`https://${this.region}-${h}.cloudfunctions.net/${i}`}};async function postJSON(i,h,f,m){let L;f["Content-Type"]="application/json";try{L=await m(i,{method:"POST",body:JSON.stringify(h),headers:f})}catch(i){return{status:0,json:null}}let en=null;try{en=await L.json()}catch(i){}return{status:L.status,json:en}}async function callAtURL(i,h,f,m){let L;f=function encode(i){if(null==i)return null;if(i instanceof Number&&(i=i.valueOf()),"number"==typeof i&&isFinite(i)||!0===i||!1===i||"[object String]"===Object.prototype.toString.call(i))return i;if(i instanceof Date)return i.toISOString();if(Array.isArray(i))return i.map(i=>encode(i));if("function"==typeof i||"object"==typeof i)return mapValues(i,i=>encode(i));throw Error("Data cannot be encoded in JSON: "+i)}(f);let en={data:f},er={},ei=await i.contextProvider.getContext(m.limitedUseAppCheckTokens);ei.authToken&&(er.Authorization="Bearer "+ei.authToken),ei.messagingToken&&(er["Firebase-Instance-ID-Token"]=ei.messagingToken),null!==ei.appCheckToken&&(er["X-Firebase-AppCheck"]=ei.appCheckToken);let eo=m.timeout||7e4,el=(L=null,{promise:new Promise((i,h)=>{L=setTimeout(()=>{h(new FunctionsError("deadline-exceeded","deadline-exceeded"))},eo)}),cancel:()=>{L&&clearTimeout(L)}}),eh=await Promise.race([postJSON(h,en,er,i.fetchImpl),el.promise,i.cancelAllRequests]);if(el.cancel(),!eh)throw new FunctionsError("cancelled","Firebase Functions instance was deleted.");let eu=function(i,h){let f,m=function(i){if(i>=200&&i<300)return"ok";switch(i){case 0:case 500:return"internal";case 400:return"invalid-argument";case 401:return"unauthenticated";case 403:return"permission-denied";case 404:return"not-found";case 409:return"aborted";case 429:return"resource-exhausted";case 499:return"cancelled";case 501:return"unimplemented";case 503:return"unavailable";case 504:return"deadline-exceeded"}return"unknown"}(i),L=m;try{let i=h&&h.error;if(i){let h=i.status;if("string"==typeof h){if(!es[h])return new FunctionsError("internal","internal");m=es[h],L=h}let en=i.message;"string"==typeof en&&(L=en),f=i.details,void 0!==f&&(f=decode(f))}}catch(i){}return"ok"===m?null:new FunctionsError(m,L,f)}(eh.status,eh.json);if(eu)throw eu;if(!eh.json)throw new FunctionsError("internal","Response is not valid JSON object.");let ec=eh.json.data;if(void 0===ec&&(ec=eh.json.result),void 0===ec)throw new FunctionsError("internal","Response is missing data field.");let ep=decode(ec);return{data:ep}}let el="@firebase/functions",eh="0.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function getFunctions(i=(0,L.Mq)(),h=eo){let f=(0,L.qX)((0,en.m9)(i),ei),m=f.getImmediate({identifier:h}),er=(0,en.P0)("functions");return er&&function(i,h,f){(0,en.m9)(i).emulatorOrigin=`http://${h}:${f}`}(m,...er),m}function httpsCallable(i,h,f){var m;return m=(0,en.m9)(i),i=>(function(i,h,f,m){let L=i._url(h);return callAtURL(i,L,f,m)})(m,h,i,f||{})}m=fetch.bind(self),(0,L.Xd)(new er.wA(ei,(i,{instanceIdentifier:h})=>{let f=i.getProvider("app").getImmediate(),L=i.getProvider("auth-internal"),en=i.getProvider("messaging-internal"),er=i.getProvider("app-check-internal");return new FunctionsService(f,L,en,er,h,m)},"PUBLIC").setMultipleInstances(!0)),(0,L.KN)(el,eh,void 0),(0,L.KN)(el,eh,"esm2017")},6650:function(i,h,f){"use strict";f.d(h,{cF:function(){return getStorage}});var m,L,en,er,ei=f(5816),es=f(4444),eo=f(8463);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el="firebasestorage.googleapis.com";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StorageError=class StorageError extends es.ZR{constructor(i,h,f=0){super(prependCode(i),`Firebase Storage: ${h} (${prependCode(i)})`),this.status_=f,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,StorageError.prototype)}get status(){return this.status_}set status(i){this.status_=i}_codeEquals(i){return prependCode(i)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(i){this.customData.serverResponse=i,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}};function prependCode(i){return"storage/"+i}function invalidArgument(i){return new StorageError(en.INVALID_ARGUMENT,i)}function appDeleted(){return new StorageError(en.APP_DELETED,"The Firebase app was deleted.")}(m=en||(en={})).UNKNOWN="unknown",m.OBJECT_NOT_FOUND="object-not-found",m.BUCKET_NOT_FOUND="bucket-not-found",m.PROJECT_NOT_FOUND="project-not-found",m.QUOTA_EXCEEDED="quota-exceeded",m.UNAUTHENTICATED="unauthenticated",m.UNAUTHORIZED="unauthorized",m.UNAUTHORIZED_APP="unauthorized-app",m.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",m.INVALID_CHECKSUM="invalid-checksum",m.CANCELED="canceled",m.INVALID_EVENT_NAME="invalid-event-name",m.INVALID_URL="invalid-url",m.INVALID_DEFAULT_BUCKET="invalid-default-bucket",m.NO_DEFAULT_BUCKET="no-default-bucket",m.CANNOT_SLICE_BLOB="cannot-slice-blob",m.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",m.NO_DOWNLOAD_URL="no-download-url",m.INVALID_ARGUMENT="invalid-argument",m.INVALID_ARGUMENT_COUNT="invalid-argument-count",m.APP_DELETED="app-deleted",m.INVALID_ROOT_OPERATION="invalid-root-operation",m.INVALID_FORMAT="invalid-format",m.INTERNAL_ERROR="internal-error",m.UNSUPPORTED_ENVIRONMENT="unsupported-environment";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Location=class Location{constructor(i,h){this.bucket=i,this.path_=h}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){let i=encodeURIComponent;return"/b/"+i(this.bucket)+"/o/"+i(this.path)}bucketOnlyServerUrl(){let i=encodeURIComponent;return"/b/"+i(this.bucket)+"/o"}static makeFromBucketSpec(i,h){let f;try{f=Location.makeFromUrl(i,h)}catch(h){return new Location(i,"")}if(""===f.path)return f;throw new StorageError(en.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+i+"'.")}static makeFromUrl(i,h){let f=null,m="([A-Za-z0-9.\\-_]+)",L=RegExp("^gs://"+m+"(/(.*))?$","i");function httpModify(i){i.path_=decodeURIComponent(i.path)}let er=h.replace(/[.]/g,"\\."),ei=RegExp(`^https?://${er}/v[A-Za-z0-9_]+/b/${m}/o(/([^?#]*).*)?$`,"i"),es=RegExp(`^https?://${h===el?"(?:storage.googleapis.com|storage.cloud.google.com)":h}/${m}/([^?#]*)`,"i"),eo=[{regex:L,indices:{bucket:1,path:3},postModify:function(i){"/"===i.path.charAt(i.path.length-1)&&(i.path_=i.path_.slice(0,-1))}},{regex:ei,indices:{bucket:1,path:3},postModify:httpModify},{regex:es,indices:{bucket:1,path:2},postModify:httpModify}];for(let h=0;h<eo.length;h++){let m=eo[h],L=m.regex.exec(i);if(L){let i=L[m.indices.bucket],h=L[m.indices.path];h||(h=""),f=new Location(i,h),m.postModify(f);break}}if(null==f)throw new StorageError(en.INVALID_URL,"Invalid URL '"+i+"'.");return f}};let FailRequest=class FailRequest{constructor(i){this.promise_=Promise.reject(i)}getPromise(){return this.promise_}cancel(i=!1){}};function validateNumber(i,h,f,m){if(m<h)throw invalidArgument(`Invalid value for '${i}'. Expected ${h} or greater.`);if(m>f)throw invalidArgument(`Invalid value for '${i}'. Expected ${f} or less.`)}(L=er||(er={}))[L.NO_ERROR=0]="NO_ERROR",L[L.NETWORK_ERROR=1]="NETWORK_ERROR",L[L.ABORT=2]="ABORT";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NetworkRequest=class NetworkRequest{constructor(i,h,f,m,L,en,er,ei,es,eo,el,eh=!0){this.url_=i,this.method_=h,this.headers_=f,this.body_=m,this.successCodes_=L,this.additionalRetryCodes_=en,this.callback_=er,this.errorCallback_=ei,this.timeout_=es,this.progressCallback_=eo,this.connectionFactory_=el,this.retry=eh,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((i,h)=>{this.resolve_=i,this.reject_=h,this.start_()})}start_(){let backoffDone=(i,h)=>{let f=this.resolve_,m=this.reject_,L=h.connection;if(h.wasSuccessCode)try{let i=this.callback_(L,L.getResponse());void 0!==i?f(i):f()}catch(i){m(i)}else if(null!==L){let i=new StorageError(en.UNKNOWN,"An unknown error occurred, please check the error payload for server response.");i.serverResponse=L.getErrorText(),m(this.errorCallback_?this.errorCallback_(L,i):i)}else if(h.canceled){let i=this.appDelete_?appDeleted():new StorageError(en.CANCELED,"User canceled the upload/download.");m(i)}else{let i=new StorageError(en.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.");m(i)}};this.canceled_?backoffDone(!1,new RequestEndStatus(!1,null,!0)):this.backoffId_=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i,h,f){let m=1,L=null,en=null,er=!1,ei=0,es=!1;function triggerCallback(...i){es||(es=!0,h.apply(null,i))}function callWithDelay(h){L=setTimeout(()=>{L=null,i(responseHandler,2===ei)},h)}function clearGlobalTimeout(){en&&clearTimeout(en)}function responseHandler(i,...h){let f;if(es){clearGlobalTimeout();return}if(i){clearGlobalTimeout(),triggerCallback.call(null,i,...h);return}let L=2===ei||er;if(L){clearGlobalTimeout(),triggerCallback.call(null,i,...h);return}m<64&&(m*=2),1===ei?(ei=2,f=0):f=(m+Math.random())*1e3,callWithDelay(f)}let eo=!1;function stop(i){!eo&&(eo=!0,clearGlobalTimeout(),!es&&(null!==L?(i||(ei=2),clearTimeout(L),callWithDelay(0)):i||(ei=1)))}return callWithDelay(0),en=setTimeout(()=>{er=!0,stop(!0)},f),stop}((i,h)=>{if(h){i(!1,new RequestEndStatus(!1,null,!0));return}let f=this.connectionFactory_();this.pendingConnection_=f;let progressListener=i=>{let h=i.loaded,f=i.lengthComputable?i.total:-1;null!==this.progressCallback_&&this.progressCallback_(h,f)};null!==this.progressCallback_&&f.addUploadProgressListener(progressListener),f.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{null!==this.progressCallback_&&f.removeUploadProgressListener(progressListener),this.pendingConnection_=null;let h=f.getErrorCode()===er.NO_ERROR,m=f.getStatus();if(!h||/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i,h){let f=i>=500&&i<600,m=-1!==[408,429].indexOf(i),L=-1!==h.indexOf(i);return f||m||L}(m,this.additionalRetryCodes_)&&this.retry){let h=f.getErrorCode()===er.ABORT;i(!1,new RequestEndStatus(!1,null,h));return}let L=-1!==this.successCodes_.indexOf(m);i(!0,new RequestEndStatus(L,f))})},backoffDone,this.timeout_)}getPromise(){return this.promise_}cancel(i){this.canceled_=!0,this.appDelete_=i||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}};let RequestEndStatus=class RequestEndStatus{constructor(i,h,f){this.wasSuccessCode=i,this.connection=h,this.canceled=!!f}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Reference=class Reference{constructor(i,h){this._service=i,h instanceof Location?this._location=h:this._location=Location.makeFromUrl(h,i.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(i,h){return new Reference(i,h)}get root(){let i=new Location(this._location.bucket,"");return this._newRef(this._service,i)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return function(i){let h=i.lastIndexOf("/",i.length-2);return -1===h?i:i.slice(h+1)}(this._location.path)}get storage(){return this._service}get parent(){let i=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){if(0===i.length)return null;let h=i.lastIndexOf("/");if(-1===h)return"";let f=i.slice(0,h);return f}(this._location.path);if(null===i)return null;let h=new Location(this._location.bucket,i);return new Reference(this._service,h)}_throwIfRoot(i){if(""===this._location.path)throw new StorageError(en.INVALID_ROOT_OPERATION,"The operation '"+i+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}};function extractBucket(i,h){let f=null==h?void 0:h.storageBucket;return null==f?null:Location.makeFromBucketSpec(f,i)}let FirebaseStorageImpl=class FirebaseStorageImpl{constructor(i,h,f,m,L){this.app=i,this._authProvider=h,this._appCheckProvider=f,this._url=m,this._firebaseVersion=L,this._bucket=null,this._host=el,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,null!=m?this._bucket=Location.makeFromBucketSpec(m,this._host):this._bucket=extractBucket(this._host,this.app.options)}get host(){return this._host}set host(i){this._host=i,null!=this._url?this._bucket=Location.makeFromBucketSpec(this._url,i):this._bucket=extractBucket(i,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(i){validateNumber("time",0,Number.POSITIVE_INFINITY,i),this._maxUploadRetryTime=i}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(i){validateNumber("time",0,Number.POSITIVE_INFINITY,i),this._maxOperationRetryTime=i}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;let i=this._authProvider.getImmediate({optional:!0});if(i){let h=await i.getToken();if(null!==h)return h.accessToken}return null}async _getAppCheckToken(){let i=this._appCheckProvider.getImmediate({optional:!0});if(i){let h=await i.getToken();return h.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(i=>i.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(i){return new Reference(this,i)}_makeRequest(i,h,f,m,L=!0){if(this._deleted)return new FailRequest(appDeleted());{let en=function(i,h,f,m,L,en,er=!0){let ei=function(i){let h=encodeURIComponent,f="?";for(let m in i)if(i.hasOwnProperty(m)){let L=h(m)+"="+h(i[m]);f=f+L+"&"}return f.slice(0,-1)}(i.urlParams),es=i.url+ei,eo=Object.assign({},i.headers);return h&&(eo["X-Firebase-GMPID"]=h),null!==f&&f.length>0&&(eo.Authorization="Firebase "+f),eo["X-Firebase-Storage-Version"]="webjs/"+(null!=en?en:"AppManager"),null!==m&&(eo["X-Firebase-AppCheck"]=m),new NetworkRequest(es,i.method,eo,i.body,i.successCodes,i.additionalRetryCodes,i.handler,i.errorHandler,i.timeout,i.progressCallback,L,er)}(i,this._appId,f,m,h,this._firebaseVersion,L);return this._requests.add(en),en.getPromise().then(()=>this._requests.delete(en),()=>this._requests.delete(en)),en}}async makeRequestWithTokens(i,h){let[f,m]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(i,h,f,m).getPromise()}};let eh="@firebase/storage",eu="0.11.2",ec="storage";function getStorage(i=(0,ei.Mq)(),h){i=(0,es.m9)(i);let f=(0,ei.qX)(i,ec),m=f.getImmediate({identifier:h}),L=(0,es.P0)("storage");return L&&function(i,h,f,m={}){!function(i,h,f,m={}){i.host=`${h}:${f}`,i._protocol="http";let{mockUserToken:L}=m;L&&(i._overrideAuthToken="string"==typeof L?L:(0,es.Sg)(L,i.app.options.projectId))}(i,h,f,m)}(m,...L),m}(0,ei.Xd)(new eo.wA(ec,function(i,{instanceIdentifier:h}){let f=i.getProvider("app").getImmediate(),m=i.getProvider("auth-internal"),L=i.getProvider("app-check-internal");return new FirebaseStorageImpl(f,m,L,h,ei.Jn)},"PUBLIC").setMultipleInstances(!0)),(0,ei.KN)(eh,eu,""),(0,ei.KN)(eh,eu,"esm2017")},5076:function(i,h,f){"use strict";let m,L,en,er,ei,es,eo,el,eh,eu,ec;f.d(h,{ng:function(){return tW},Ho:function(){return tj},RE:function(){return Lr},Bs:function(){return tq},Dm:function(){return tV},Xq:function(){return tB},Y5:function(){return ni},$N:function(){return yt},TS:function(){return qr}});var ep,ef,eg,em,e_,ev=f(7294),ey=f(9451),ew=f(5816),eC=f(8463),eI=f(4444),eT=f(3333),eE=f(3454);let eS="@firebase/database",eP="0.14.4",ek="";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DOMStorageWrapper=class DOMStorageWrapper{constructor(i){this.domStorage_=i,this.prefix_="firebase:"}set(i,h){null==h?this.domStorage_.removeItem(this.prefixedName_(i)):this.domStorage_.setItem(this.prefixedName_(i),(0,eI.Wl)(h))}get(i){let h=this.domStorage_.getItem(this.prefixedName_(i));return null==h?null:(0,eI.cI)(h)}remove(i){this.domStorage_.removeItem(this.prefixedName_(i))}prefixedName_(i){return this.prefix_+i}toString(){return this.domStorage_.toString()}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let MemoryStorage=class MemoryStorage{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(i,h){null==h?delete this.cache_[i]:this.cache_[i]=h}get(i){return(0,eI.r3)(this.cache_,i)?this.cache_[i]:null}remove(i){delete this.cache_[i]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let createStoragefor=function(i){try{if("undefined"!=typeof window&&void 0!==window[i]){let h=window[i];return h.setItem("firebase:sentinel","cache"),h.removeItem("firebase:sentinel"),new DOMStorageWrapper(h)}}catch(i){}return new MemoryStorage},eR=createStoragefor("localStorage"),eN=createStoragefor("sessionStorage"),eA=new eT.Yd("@firebase/database"),eO=(ec=1,function(){return ec++}),sha1=function(i){let h=(0,eI.dS)(i),f=new eI.gQ;f.update(h);let m=f.digest();return eI.US.encodeByteArray(m)},buildLogMessage_=function(...i){let h="";for(let f=0;f<i.length;f++){let m=i[f];Array.isArray(m)||m&&"object"==typeof m&&"number"==typeof m.length?h+=buildLogMessage_.apply(null,m):"object"==typeof m?h+=(0,eI.Wl)(m):h+=m,h+=" "}return h},ex=null,eD=!0,enableLogging$1=function(i,h){(0,eI.hu)(!h||!0===i||!1===i,"Can't turn on custom loggers persistently."),!0===i?(eA.logLevel=eT.in.VERBOSE,ex=eA.log.bind(eA),h&&eN.set("logging_enabled",!0)):"function"==typeof i?ex=i:(ex=null,eN.remove("logging_enabled"))},log=function(...i){if(!0===eD&&(eD=!1,null===ex&&!0===eN.get("logging_enabled")&&enableLogging$1(!0)),ex){let h=buildLogMessage_.apply(null,i);ex(h)}},logWrapper=function(i){return function(...h){log(i,...h)}},error=function(...i){let h="FIREBASE INTERNAL ERROR: "+buildLogMessage_(...i);eA.error(h)},fatal=function(...i){let h=`FIREBASE FATAL ERROR: ${buildLogMessage_(...i)}`;throw eA.error(h),Error(h)},warn=function(...i){let h="FIREBASE WARNING: "+buildLogMessage_(...i);eA.warn(h)},warnIfPageIsSecure=function(){"undefined"!=typeof window&&window.location&&window.location.protocol&&-1!==window.location.protocol.indexOf("https:")&&warn("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},isInvalidJSONNumber=function(i){return"number"==typeof i&&(i!=i||i===Number.POSITIVE_INFINITY||i===Number.NEGATIVE_INFINITY)},executeWhenDOMReady=function(i){if((0,eI.Yr)()||"complete"===document.readyState)i();else{let h=!1,wrappedFn=function(){if(!document.body){setTimeout(wrappedFn,Math.floor(10));return}h||(h=!0,i())};document.addEventListener?(document.addEventListener("DOMContentLoaded",wrappedFn,!1),window.addEventListener("load",wrappedFn,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{"complete"===document.readyState&&wrappedFn()}),window.attachEvent("onload",wrappedFn))}},eL="[MIN_NAME]",eF="[MAX_NAME]",nameCompare=function(i,h){if(i===h)return 0;if(i===eL||h===eF)return -1;if(h===eL||i===eF)return 1;{let f=tryParseInt(i),m=tryParseInt(h);return null!==f?null!==m?f-m==0?i.length-h.length:f-m:-1:null!==m?1:i<h?-1:1}},stringCompare=function(i,h){return i===h?0:i<h?-1:1},requireKey=function(i,h){if(h&&i in h)return h[i];throw Error("Missing required key ("+i+") in object: "+(0,eI.Wl)(h))},ObjectToUniqueKey=function(i){if("object"!=typeof i||null===i)return(0,eI.Wl)(i);let h=[];for(let f in i)h.push(f);h.sort();let f="{";for(let m=0;m<h.length;m++)0!==m&&(f+=","),f+=(0,eI.Wl)(h[m])+":"+ObjectToUniqueKey(i[h[m]]);return f+"}"},splitStringBySize=function(i,h){let f=i.length;if(f<=h)return[i];let m=[];for(let L=0;L<f;L+=h)L+h>f?m.push(i.substring(L,f)):m.push(i.substring(L,L+h));return m};function each(i,h){for(let f in i)i.hasOwnProperty(f)&&h(f,i[f])}let doubleToIEEE754String=function(i){let h,f,m,L,en;(0,eI.hu)(!isInvalidJSONNumber(i),"Invalid JSON number"),0===i?(f=0,m=0,h=1/i==-1/0?1:0):(h=i<0,(i=Math.abs(i))>=22250738585072014e-324?(f=(L=Math.min(Math.floor(Math.log(i)/Math.LN2),1023))+1023,m=Math.round(i*Math.pow(2,52-L)-4503599627370496)):(f=0,m=Math.round(i/5e-324)));let er=[];for(en=52;en;en-=1)er.push(m%2?1:0),m=Math.floor(m/2);for(en=11;en;en-=1)er.push(f%2?1:0),f=Math.floor(f/2);er.push(h?1:0),er.reverse();let ei=er.join(""),es="";for(en=0;en<64;en+=8){let i=parseInt(ei.substr(en,8),2).toString(16);1===i.length&&(i="0"+i),es+=i}return es.toLowerCase()},eM=RegExp("^-?(0*)\\d{1,10}$"),tryParseInt=function(i){if(eM.test(i)){let h=Number(i);if(h>=-2147483648&&h<=2147483647)return h}return null},exceptionGuard=function(i){try{i()}catch(i){setTimeout(()=>{let h=i.stack||"";throw warn("Exception was thrown by user callback.",h),i},Math.floor(0))}},beingCrawled=function(){let i="object"==typeof window&&window.navigator&&window.navigator.userAgent||"";return i.search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},setTimeoutNonBlocking=function(i,h){let f=setTimeout(i,h);return"number"==typeof f&&"undefined"!=typeof Deno&&Deno.unrefTimer?Deno.unrefTimer(f):"object"==typeof f&&f.unref&&f.unref(),f};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AppCheckTokenProvider=class AppCheckTokenProvider{constructor(i,h){this.appName_=i,this.appCheckProvider=h,this.appCheck=null==h?void 0:h.getImmediate({optional:!0}),this.appCheck||null==h||h.get().then(i=>this.appCheck=i)}getToken(i){return this.appCheck?this.appCheck.getToken(i):new Promise((h,f)=>{setTimeout(()=>{this.appCheck?this.getToken(i).then(h,f):h(null)},0)})}addTokenChangeListener(i){var h;null===(h=this.appCheckProvider)||void 0===h||h.get().then(h=>h.addTokenListener(i))}notifyForInvalidToken(){warn(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let FirebaseAuthTokenProvider=class FirebaseAuthTokenProvider{constructor(i,h,f){this.appName_=i,this.firebaseOptions_=h,this.authProvider_=f,this.auth_=null,this.auth_=f.getImmediate({optional:!0}),this.auth_||f.onInit(i=>this.auth_=i)}getToken(i){return this.auth_?this.auth_.getToken(i).catch(i=>i&&"auth/token-not-initialized"===i.code?(log("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(i)):new Promise((h,f)=>{setTimeout(()=>{this.auth_?this.getToken(i).then(h,f):h(null)},0)})}addTokenChangeListener(i){this.auth_?this.auth_.addAuthTokenListener(i):this.authProvider_.get().then(h=>h.addAuthTokenListener(i))}removeTokenChangeListener(i){this.authProvider_.get().then(h=>h.removeAuthTokenListener(i))}notifyForInvalidToken(){let i='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?i+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?i+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':i+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',warn(i)}};let EmulatorTokenProvider=class EmulatorTokenProvider{constructor(i){this.accessToken=i}getToken(i){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(i){i(this.accessToken)}removeTokenChangeListener(i){}notifyForInvalidToken(){}};EmulatorTokenProvider.OWNER="owner";let eU=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,ej="websocket",eW="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RepoInfo=class RepoInfo{constructor(i,h,f,m,L=!1,en="",er=!1,ei=!1){this.secure=h,this.namespace=f,this.webSocketOnly=m,this.nodeAdmin=L,this.persistenceKey=en,this.includeNamespaceInQueryParams=er,this.isUsingEmulator=ei,this._host=i.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=eR.get("host:"+i)||this._host}isCacheableHost(){return"s-"===this.internalHost.substr(0,2)}isCustomHost(){return"firebaseio.com"!==this._domain&&"firebaseio-demo.com"!==this._domain}get host(){return this._host}set host(i){i!==this.internalHost&&(this.internalHost=i,this.isCacheableHost()&&eR.set("host:"+this._host,this.internalHost))}toString(){let i=this.toURLString();return this.persistenceKey&&(i+="<"+this.persistenceKey+">"),i}toURLString(){let i=this.secure?"https://":"http://",h=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${i}${this.host}/${h}`}};function repoInfoConnectionURL(i,h,f){let m;if((0,eI.hu)("string"==typeof h,"typeof type must == string"),(0,eI.hu)("object"==typeof f,"typeof params must == object"),h===ej)m=(i.secure?"wss://":"ws://")+i.internalHost+"/.ws?";else if(h===eW)m=(i.secure?"https://":"http://")+i.internalHost+"/.lp?";else throw Error("Unknown connection type: "+h);(i.host!==i.internalHost||i.isCustomHost()||i.includeNamespaceInQueryParams)&&(f.ns=i.namespace);let L=[];return each(f,(i,h)=>{L.push(i+"="+h)}),m+L.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StatsCollection=class StatsCollection{constructor(){this.counters_={}}incrementCounter(i,h=1){(0,eI.r3)(this.counters_,i)||(this.counters_[i]=0),this.counters_[i]+=h}get(){return(0,eI.p$)(this.counters_)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eq={},eV={};function statsManagerGetCollection(i){let h=i.toString();return eq[h]||(eq[h]=new StatsCollection),eq[h]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PacketReceiver=class PacketReceiver{constructor(i){this.onMessage_=i,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(i,h){this.closeAfterResponse=i,this.onClose=h,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(i,h){for(this.pendingResponses[i]=h;this.pendingResponses[this.currentResponseNum];){let i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let h=0;h<i.length;++h)i[h]&&exceptionGuard(()=>{this.onMessage_(i[h])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eB="start";let BrowserPollConnection=class BrowserPollConnection{constructor(i,h,f,m,L,en,er){this.connId=i,this.repoInfo=h,this.applicationId=f,this.appCheckToken=m,this.authToken=L,this.transportSessionId=en,this.lastSessionId=er,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=logWrapper(i),this.stats_=statsManagerGetCollection(h),this.urlFn=i=>(this.appCheckToken&&(i.ac=this.appCheckToken),repoInfoConnectionURL(h,eW,i))}open(i,h){this.curSegmentNum=0,this.onDisconnect_=h,this.myPacketOrderer=new PacketReceiver(i),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(3e4)),executeWhenDOMReady(()=>{if(this.isClosed_)return;this.scriptTagHolder=new FirebaseIFrameScriptHolder((...i)=>{let[h,f,m,L,en]=i;if(this.incrementIncomingBytes_(i),this.scriptTagHolder){if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,h===eB)this.id=f,this.password=m;else if("close"===h)f?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(f,()=>{this.onClosed_()})):this.onClosed_();else throw Error("Unrecognized command received: "+h)}},(...i)=>{let[h,f]=i;this.incrementIncomingBytes_(i),this.myPacketOrderer.handleResponse(h,f)},()=>{this.onClosed_()},this.urlFn);let i={};i[eB]="t",i.ser=Math.floor(1e8*Math.random()),this.scriptTagHolder.uniqueCallbackIdentifier&&(i.cb=this.scriptTagHolder.uniqueCallbackIdentifier),i.v="5",this.transportSessionId&&(i.s=this.transportSessionId),this.lastSessionId&&(i.ls=this.lastSessionId),this.applicationId&&(i.p=this.applicationId),this.appCheckToken&&(i.ac=this.appCheckToken),"undefined"!=typeof location&&location.hostname&&eU.test(location.hostname)&&(i.r="f");let h=this.urlFn(i);this.log_("Connecting via long-poll to "+h),this.scriptTagHolder.addTag(h,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){BrowserPollConnection.forceAllow_=!0}static forceDisallow(){BrowserPollConnection.forceDisallow_=!0}static isAvailable(){return!(0,eI.Yr)()&&(!!BrowserPollConnection.forceAllow_||!BrowserPollConnection.forceDisallow_&&"undefined"!=typeof document&&null!=document.createElement&&!("object"==typeof window&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))&&!("object"==typeof Windows&&"object"==typeof Windows.UI))}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){!this.isClosed_&&(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(i){let h=(0,eI.Wl)(i);this.bytesSent+=h.length,this.stats_.incrementCounter("bytes_sent",h.length);let f=(0,eI.h$)(h),m=splitStringBySize(f,1840);for(let i=0;i<m.length;i++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,m.length,m[i]),this.curSegmentNum++}addDisconnectPingFrame(i,h){if((0,eI.Yr)())return;this.myDisconnFrame=document.createElement("iframe");let f={};f.dframe="t",f.id=i,f.pw=h,this.myDisconnFrame.src=this.urlFn(f),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(i){let h=(0,eI.Wl)(i).length;this.bytesReceived+=h,this.stats_.incrementCounter("bytes_received",h)}};let FirebaseIFrameScriptHolder=class FirebaseIFrameScriptHolder{constructor(i,h,f,m){if(this.onDisconnect=f,this.urlFn=m,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(1e8*Math.random()),this.sendNewPolls=!0,(0,eI.Yr)())this.commandCB=i,this.onMessageCB=h;else{this.uniqueCallbackIdentifier=eO(),window["pLPCommand"+this.uniqueCallbackIdentifier]=i,window["pRTLPCB"+this.uniqueCallbackIdentifier]=h,this.myIFrame=FirebaseIFrameScriptHolder.createIFrame_();let f="";if(this.myIFrame.src&&"javascript:"===this.myIFrame.src.substr(0,11)){let i=document.domain;f='<script>document.domain="'+i+'";</script>'}let m="<html><body>"+f+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(m),this.myIFrame.doc.close()}catch(i){log("frame writing exception"),i.stack&&log(i.stack),log(i)}}}static createIFrame_(){let i=document.createElement("iframe");if(i.style.display="none",document.body){document.body.appendChild(i);try{let h=i.contentWindow.document;h||log("No IE domain setting required")}catch(f){let h=document.domain;i.src="javascript:void((function(){document.open();document.domain='"+h+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return i.contentDocument?i.doc=i.contentDocument:i.contentWindow?i.doc=i.contentWindow.document:i.document&&(i.doc=i.document),i}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{null!==this.myIFrame&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));let i=this.onDisconnect;i&&(this.onDisconnect=null,i())}startLongPoll(i,h){for(this.myID=i,this.myPW=h,this.alive=!0;this.newRequest_(););}newRequest_(){if(!this.alive||!this.sendNewPolls||!(this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)))return!1;{this.currentSerial++;let i={};i.id=this.myID,i.pw=this.myPW,i.ser=this.currentSerial;let h=this.urlFn(i),f="",m=0;for(;this.pendingSegs.length>0;){let i=this.pendingSegs[0];if(i.d.length+30+f.length<=1870){let i=this.pendingSegs.shift();f=f+"&seg"+m+"="+i.seg+"&ts"+m+"="+i.ts+"&d"+m+"="+i.d,m++}else break}return h+=f,this.addLongPollTag_(h,this.currentSerial),!0}}enqueueSegment(i,h,f){this.pendingSegs.push({seg:i,ts:h,d:f}),this.alive&&this.newRequest_()}addLongPollTag_(i,h){this.outstandingRequests.add(h);let doNewRequest=()=>{this.outstandingRequests.delete(h),this.newRequest_()},f=setTimeout(doNewRequest,Math.floor(25e3));this.addTag(i,()=>{clearTimeout(f),doNewRequest()})}addTag(i,h){(0,eI.Yr)()?this.doNodeLongPoll(i,h):setTimeout(()=>{try{if(!this.sendNewPolls)return;let f=this.myIFrame.doc.createElement("script");f.type="text/javascript",f.async=!0,f.src=i,f.onload=f.onreadystatechange=function(){let i=f.readyState;i&&"loaded"!==i&&"complete"!==i||(f.onload=f.onreadystatechange=null,f.parentNode&&f.parentNode.removeChild(f),h())},f.onerror=()=>{log("Long-poll script failed to load: "+i),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(f)}catch(i){}},Math.floor(1))}};let eG=null;"undefined"!=typeof MozWebSocket?eG=MozWebSocket:"undefined"!=typeof WebSocket&&(eG=WebSocket);let WebSocketConnection=class WebSocketConnection{constructor(i,h,f,m,L,en,er){this.connId=i,this.applicationId=f,this.appCheckToken=m,this.authToken=L,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=logWrapper(this.connId),this.stats_=statsManagerGetCollection(h),this.connURL=WebSocketConnection.connectionURL_(h,en,er,m,f),this.nodeAdmin=h.nodeAdmin}static connectionURL_(i,h,f,m,L){let en={};return en.v="5",!(0,eI.Yr)()&&"undefined"!=typeof location&&location.hostname&&eU.test(location.hostname)&&(en.r="f"),h&&(en.s=h),f&&(en.ls=f),m&&(en.ac=m),L&&(en.p=L),repoInfoConnectionURL(i,ej,en)}open(i,h){this.onDisconnect=h,this.onMessage=i,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,eR.set("previous_websocket_failure",!0);try{let i;if((0,eI.Yr)()){let h=this.nodeAdmin?"AdminNode":"Node";i={headers:{"User-Agent":`Firebase/5/${ek}/${eE.platform}/${h}`,"X-Firebase-GMPID":this.applicationId||""}},this.authToken&&(i.headers.Authorization=`Bearer ${this.authToken}`),this.appCheckToken&&(i.headers["X-Firebase-AppCheck"]=this.appCheckToken);let f=eE.env,m=0===this.connURL.indexOf("wss://")?f.HTTPS_PROXY||f.https_proxy:f.HTTP_PROXY||f.http_proxy;m&&(i.proxy={origin:m})}this.mySock=new eG(this.connURL,[],i)}catch(h){this.log_("Error instantiating WebSocket.");let i=h.message||h.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");let h=i.message||i.data;h&&this.log_(h),this.onClosed_()}}start(){}static forceDisallow(){WebSocketConnection.forceDisallow_=!0}static isAvailable(){let i=!1;if("undefined"!=typeof navigator&&navigator.userAgent){let h=navigator.userAgent.match(/Android ([0-9]{0,}\.[0-9]{0,})/);h&&h.length>1&&4.4>parseFloat(h[1])&&(i=!0)}return!i&&null!==eG&&!WebSocketConnection.forceDisallow_}static previouslyFailed(){return eR.isInMemoryStorage||!0===eR.get("previous_websocket_failure")}markConnectionHealthy(){eR.remove("previous_websocket_failure")}appendFrame_(i){if(this.frames.push(i),this.frames.length===this.totalFrames){let i=this.frames.join("");this.frames=null;let h=(0,eI.cI)(i);this.onMessage(h)}}handleNewFrameCount_(i){this.totalFrames=i,this.frames=[]}extractFrameCount_(i){if((0,eI.hu)(null===this.frames,"We already have a frame buffer"),i.length<=6){let h=Number(i);if(!isNaN(h))return this.handleNewFrameCount_(h),null}return this.handleNewFrameCount_(1),i}handleIncomingFrame(i){if(null===this.mySock)return;let h=i.data;if(this.bytesReceived+=h.length,this.stats_.incrementCounter("bytes_received",h.length),this.resetKeepAlive(),null!==this.frames)this.appendFrame_(h);else{let i=this.extractFrameCount_(h);null!==i&&this.appendFrame_(i)}}send(i){this.resetKeepAlive();let h=(0,eI.Wl)(i);this.bytesSent+=h.length,this.stats_.incrementCounter("bytes_sent",h.length);let f=splitStringBySize(h,16384);f.length>1&&this.sendString_(String(f.length));for(let i=0;i<f.length;i++)this.sendString_(f[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){!this.isClosed_&&(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(45e3))}sendString_(i){try{this.mySock.send(i)}catch(i){this.log_("Exception thrown from WebSocket.send():",i.message||i.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}};WebSocketConnection.responsesRequiredToBeHealthy=2,WebSocketConnection.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let TransportManager=class TransportManager{constructor(i){this.initTransports_(i)}static get ALL_TRANSPORTS(){return[BrowserPollConnection,WebSocketConnection]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(i){let h=WebSocketConnection&&WebSocketConnection.isAvailable(),f=h&&!WebSocketConnection.previouslyFailed();if(i.webSocketOnly&&(h||warn("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),f=!0),f)this.transports_=[WebSocketConnection];else{let i=this.transports_=[];for(let h of TransportManager.ALL_TRANSPORTS)h&&h.isAvailable()&&i.push(h);TransportManager.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}};TransportManager.globalTransportInitialized_=!1;let Connection=class Connection{constructor(i,h,f,m,L,en,er,ei,es,eo){this.id=i,this.repoInfo_=h,this.applicationId_=f,this.appCheckToken_=m,this.authToken_=L,this.onMessage_=en,this.onReady_=er,this.onDisconnect_=ei,this.onKill_=es,this.lastSessionId=eo,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=logWrapper("c:"+this.id+":"),this.transportManager_=new TransportManager(h),this.log_("Connection created"),this.start_()}start_(){let i=this.transportManager_.initialTransport();this.conn_=new i(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=i.responsesRequiredToBeHealthy||0;let h=this.connReceiver_(this.conn_),f=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(h,f)},Math.floor(0));let m=i.healthyTimeout||0;m>0&&(this.healthyTimeout_=setTimeoutNonBlocking(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>102400?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>10240?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(m)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(i){return h=>{i===this.conn_?this.onConnectionLost_(h):i===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(i){return h=>{2!==this.state_&&(i===this.rx_?this.onPrimaryMessageReceived_(h):i===this.secondaryConn_?this.onSecondaryMessageReceived_(h):this.log_("message on old connection"))}}sendRequest(i){this.sendData_({t:"d",d:i})}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(i){if("t"in i){let h=i.t;"a"===h?this.upgradeIfSecondaryHealthy_():"r"===h?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):"o"===h&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(i){let h=requireKey("t",i),f=requireKey("d",i);if("c"===h)this.onSecondaryControl_(f);else if("d"===h)this.pendingDataMessages.push(f);else throw Error("Unknown protocol layer: "+h)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:"p",d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:"a",d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:"n",d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(i){let h=requireKey("t",i),f=requireKey("d",i);"c"===h?this.onControl_(f):"d"===h&&this.onDataMessage_(f)}onDataMessage_(i){this.onPrimaryResponse_(),this.onMessage_(i)}onPrimaryResponse_(){!this.isHealthy_&&(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(i){let h=requireKey("t",i);if("d"in i){let f=i.d;if("h"===h){let i=Object.assign({},f);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if("n"===h){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else"s"===h?this.onConnectionShutdown_(f):"r"===h?this.onReset_(f):"e"===h?error("Server Error: "+f):"o"===h?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):error("Unknown control packet command: "+h)}}onHandshake_(i){let h=i.ts,f=i.v,m=i.h;this.sessionId=i.s,this.repoInfo_.host=m,0===this.state_&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,h),"5"!==f&&warn("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){let i=this.transportManager_.upgradeTransport();i&&this.startUpgrade_(i)}startUpgrade_(i){this.secondaryConn_=new i(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=i.responsesRequiredToBeHealthy||0;let h=this.connReceiver_(this.secondaryConn_),f=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(h,f),setTimeoutNonBlocking(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(6e4))}onReset_(i){this.log_("Reset packet received.  New host: "+i),this.repoInfo_.host=i,1===this.state_?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(i,h){this.log_("Realtime connection established."),this.conn_=i,this.state_=1,this.onReady_&&(this.onReady_(h,this.sessionId),this.onReady_=null),0===this.primaryResponsesRequired_?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):setTimeoutNonBlocking(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(5e3))}sendPingOnPrimaryIfNecessary_(){this.isHealthy_||1!==this.state_||(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:"p",d:{}}}))}onSecondaryConnectionLost_(){let i=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===i||this.rx_===i)&&this.close()}onConnectionLost_(i){this.conn_=null,i||0!==this.state_?1===this.state_&&this.log_("Realtime connection lost."):(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(eR.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)),this.close()}onConnectionShutdown_(i){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(i),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(i){if(1!==this.state_)throw"Connection is not connected";this.tx_.send(i)}close(){2!==this.state_&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ServerActions=class ServerActions{put(i,h,f,m){}merge(i,h,f,m){}refreshAuthToken(i){}refreshAppCheckToken(i){}onDisconnectPut(i,h,f){}onDisconnectMerge(i,h,f){}onDisconnectCancel(i,h){}reportStats(i){}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EventEmitter=class EventEmitter{constructor(i){this.allowedEvents_=i,this.listeners_={},(0,eI.hu)(Array.isArray(i)&&i.length>0,"Requires a non-empty array")}trigger(i,...h){if(Array.isArray(this.listeners_[i])){let f=[...this.listeners_[i]];for(let i=0;i<f.length;i++)f[i].callback.apply(f[i].context,h)}}on(i,h,f){this.validateEventType_(i),this.listeners_[i]=this.listeners_[i]||[],this.listeners_[i].push({callback:h,context:f});let m=this.getInitialEvent(i);m&&h.apply(f,m)}off(i,h,f){this.validateEventType_(i);let m=this.listeners_[i]||[];for(let i=0;i<m.length;i++)if(m[i].callback===h&&(!f||f===m[i].context)){m.splice(i,1);return}}validateEventType_(i){(0,eI.hu)(this.allowedEvents_.find(h=>h===i),"Unknown event: "+i)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let OnlineMonitor=class OnlineMonitor extends EventEmitter{constructor(){super(["online"]),this.online_=!0,"undefined"==typeof window||void 0===window.addEventListener||(0,eI.uI)()||(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new OnlineMonitor}getInitialEvent(i){return(0,eI.hu)("online"===i,"Unknown event type: "+i),[this.online_]}currentlyOnline(){return this.online_}};let Path=class Path{constructor(i,h){if(void 0===h){this.pieces_=i.split("/");let h=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[h]=this.pieces_[i],h++);this.pieces_.length=h,this.pieceNum_=0}else this.pieces_=i,this.pieceNum_=h}toString(){let i="";for(let h=this.pieceNum_;h<this.pieces_.length;h++)""!==this.pieces_[h]&&(i+="/"+this.pieces_[h]);return i||"/"}};function newEmptyPath(){return new Path("")}function pathGetFront(i){return i.pieceNum_>=i.pieces_.length?null:i.pieces_[i.pieceNum_]}function pathGetLength(i){return i.pieces_.length-i.pieceNum_}function pathPopFront(i){let h=i.pieceNum_;return h<i.pieces_.length&&h++,new Path(i.pieces_,h)}function pathGetBack(i){return i.pieceNum_<i.pieces_.length?i.pieces_[i.pieces_.length-1]:null}function pathSlice(i,h=0){return i.pieces_.slice(i.pieceNum_+h)}function pathParent(i){if(i.pieceNum_>=i.pieces_.length)return null;let h=[];for(let f=i.pieceNum_;f<i.pieces_.length-1;f++)h.push(i.pieces_[f]);return new Path(h,0)}function pathChild(i,h){let f=[];for(let h=i.pieceNum_;h<i.pieces_.length;h++)f.push(i.pieces_[h]);if(h instanceof Path)for(let i=h.pieceNum_;i<h.pieces_.length;i++)f.push(h.pieces_[i]);else{let i=h.split("/");for(let h=0;h<i.length;h++)i[h].length>0&&f.push(i[h])}return new Path(f,0)}function pathIsEmpty(i){return i.pieceNum_>=i.pieces_.length}function newRelativePath(i,h){let f=pathGetFront(i),m=pathGetFront(h);if(null===f)return h;if(f===m)return newRelativePath(pathPopFront(i),pathPopFront(h));throw Error("INTERNAL ERROR: innerPath ("+h+") is not within outerPath ("+i+")")}function pathEquals(i,h){if(pathGetLength(i)!==pathGetLength(h))return!1;for(let f=i.pieceNum_,m=h.pieceNum_;f<=i.pieces_.length;f++,m++)if(i.pieces_[f]!==h.pieces_[m])return!1;return!0}function pathContains(i,h){let f=i.pieceNum_,m=h.pieceNum_;if(pathGetLength(i)>pathGetLength(h))return!1;for(;f<i.pieces_.length;){if(i.pieces_[f]!==h.pieces_[m])return!1;++f,++m}return!0}let ValidationPath=class ValidationPath{constructor(i,h){this.errorPrefix_=h,this.parts_=pathSlice(i,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=(0,eI.ug)(this.parts_[i]);validationPathCheckValid(this)}};function validationPathCheckValid(i){if(i.byteLength_>768)throw Error(i.errorPrefix_+"has a key path longer than 768 bytes ("+i.byteLength_+").");if(i.parts_.length>32)throw Error(i.errorPrefix_+"path specified exceeds the maximum depth that can be written (32) or object contains a cycle "+validationPathToErrorString(i))}function validationPathToErrorString(i){return 0===i.parts_.length?"":"in property '"+i.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let VisibilityMonitor=class VisibilityMonitor extends EventEmitter{constructor(){let i,h;super(["visible"]),"undefined"!=typeof document&&void 0!==document.addEventListener&&(void 0!==document.hidden?(h="visibilitychange",i="hidden"):void 0!==document.mozHidden?(h="mozvisibilitychange",i="mozHidden"):void 0!==document.msHidden?(h="msvisibilitychange",i="msHidden"):void 0!==document.webkitHidden&&(h="webkitvisibilitychange",i="webkitHidden")),this.visible_=!0,h&&document.addEventListener(h,()=>{let h=!document[i];h!==this.visible_&&(this.visible_=h,this.trigger("visible",h))},!1)}static getInstance(){return new VisibilityMonitor}getInitialEvent(i){return(0,eI.hu)("visible"===i,"Unknown event type: "+i),[this.visible_]}};let PersistentConnection=class PersistentConnection extends ServerActions{constructor(i,h,f,m,L,en,er,ei){if(super(),this.repoInfo_=i,this.applicationId_=h,this.onDataUpdate_=f,this.onConnectStatus_=m,this.onServerInfoUpdate_=L,this.authTokenProvider_=en,this.appCheckTokenProvider_=er,this.authOverride_=ei,this.id=PersistentConnection.nextPersistentConnectionId_++,this.log_=logWrapper("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=1e3,this.maxReconnectDelay_=3e5,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,ei&&!(0,eI.Yr)())throw Error("Auth override specified in options, but not supported on non Node.js platforms");VisibilityMonitor.getInstance().on("visible",this.onVisible_,this),-1===i.host.indexOf("fblocal")&&OnlineMonitor.getInstance().on("online",this.onOnline_,this)}sendRequest(i,h,f){let m=++this.requestNumber_,L={r:m,a:i,b:h};this.log_((0,eI.Wl)(L)),(0,eI.hu)(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(L),f&&(this.requestCBHash_[m]=f)}get(i){this.initConnection_();let h=new eI.BH,f={p:i._path.toString(),q:i._queryObject};this.outstandingGets_.push({action:"g",request:f,onComplete:i=>{let f=i.d;"ok"===i.s?h.resolve(f):h.reject(f)}}),this.outstandingGetCount_++;let m=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(m),h.promise}listen(i,h,f,m){this.initConnection_();let L=i._queryIdentifier,en=i._path.toString();this.log_("Listen called for "+en+" "+L),this.listens.has(en)||this.listens.set(en,new Map),(0,eI.hu)(i._queryParams.isDefault()||!i._queryParams.loadsAllData(),"listen() called for non-default but complete query"),(0,eI.hu)(!this.listens.get(en).has(L),"listen() called twice for same path/queryId.");let er={onComplete:m,hashFn:h,query:i,tag:f};this.listens.get(en).set(L,er),this.connected_&&this.sendListen_(er)}sendGet_(i){let h=this.outstandingGets_[i];this.sendRequest("g",h.request,f=>{delete this.outstandingGets_[i],this.outstandingGetCount_--,0===this.outstandingGetCount_&&(this.outstandingGets_=[]),h.onComplete&&h.onComplete(f)})}sendListen_(i){let h=i.query,f=h._path.toString(),m=h._queryIdentifier;this.log_("Listen on "+f+" for "+m);let L={p:f};i.tag&&(L.q=h._queryObject,L.t=i.tag),L.h=i.hashFn(),this.sendRequest("q",L,L=>{let en=L.d,er=L.s;PersistentConnection.warnOnListenWarnings_(en,h);let ei=this.listens.get(f)&&this.listens.get(f).get(m);ei===i&&(this.log_("listen response",L),"ok"!==er&&this.removeListen_(f,m),i.onComplete&&i.onComplete(er,en))})}static warnOnListenWarnings_(i,h){if(i&&"object"==typeof i&&(0,eI.r3)(i,"w")){let f=(0,eI.DV)(i,"w");if(Array.isArray(f)&&~f.indexOf("no_index")){let i='".indexOn": "'+h._queryParams.getIndex().toString()+'"',f=h._path.toString();warn(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${f} to your security rules for better performance.`)}}}refreshAuthToken(i){this.authToken_=i,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(i)}reduceReconnectDelayIfAdminCredential_(i){let h=i&&40===i.length;(h||(0,eI.GJ)(i))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=3e4)}refreshAppCheckToken(i){this.appCheckToken_=i,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){let i=this.authToken_,h=(0,eI.w9)(i)?"auth":"gauth",f={cred:i};null===this.authOverride_?f.noauth=!0:"object"==typeof this.authOverride_&&(f.authvar=this.authOverride_),this.sendRequest(h,f,h=>{let f=h.s,m=h.d||"error";this.authToken_===i&&("ok"===f?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(f,m))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},i=>{let h=i.s,f=i.d||"error";"ok"===h?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(h,f)})}unlisten(i,h){let f=i._path.toString(),m=i._queryIdentifier;this.log_("Unlisten called for "+f+" "+m),(0,eI.hu)(i._queryParams.isDefault()||!i._queryParams.loadsAllData(),"unlisten() called for non-default but complete query");let L=this.removeListen_(f,m);L&&this.connected_&&this.sendUnlisten_(f,m,i._queryObject,h)}sendUnlisten_(i,h,f,m){this.log_("Unlisten on "+i+" for "+h);let L={p:i};m&&(L.q=f,L.t=m),this.sendRequest("n",L)}onDisconnectPut(i,h,f){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",i,h,f):this.onDisconnectRequestQueue_.push({pathString:i,action:"o",data:h,onComplete:f})}onDisconnectMerge(i,h,f){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",i,h,f):this.onDisconnectRequestQueue_.push({pathString:i,action:"om",data:h,onComplete:f})}onDisconnectCancel(i,h){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",i,null,h):this.onDisconnectRequestQueue_.push({pathString:i,action:"oc",data:null,onComplete:h})}sendOnDisconnect_(i,h,f,m){let L={p:h,d:f};this.log_("onDisconnect "+i,L),this.sendRequest(i,L,i=>{m&&setTimeout(()=>{m(i.s,i.d)},Math.floor(0))})}put(i,h,f,m){this.putInternal("p",i,h,f,m)}merge(i,h,f,m){this.putInternal("m",i,h,f,m)}putInternal(i,h,f,m,L){this.initConnection_();let en={p:h,d:f};void 0!==L&&(en.h=L),this.outstandingPuts_.push({action:i,request:en,onComplete:m}),this.outstandingPutCount_++;let er=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(er):this.log_("Buffering put: "+h)}sendPut_(i){let h=this.outstandingPuts_[i].action,f=this.outstandingPuts_[i].request,m=this.outstandingPuts_[i].onComplete;this.outstandingPuts_[i].queued=this.connected_,this.sendRequest(h,f,f=>{this.log_(h+" response",f),delete this.outstandingPuts_[i],this.outstandingPutCount_--,0===this.outstandingPutCount_&&(this.outstandingPuts_=[]),m&&m(f.s,f.d)})}reportStats(i){if(this.connected_){let h={c:i};this.log_("reportStats",h),this.sendRequest("s",h,i=>{let h=i.s;if("ok"!==h){let h=i.d;this.log_("reportStats","Error sending stats: "+h)}})}}onDataMessage_(i){if("r"in i){this.log_("from server: "+(0,eI.Wl)(i));let h=i.r,f=this.requestCBHash_[h];f&&(delete this.requestCBHash_[h],f(i.b))}else if("error"in i)throw"A server-side error has occurred: "+i.error;else"a"in i&&this.onDataPush_(i.a,i.b)}onDataPush_(i,h){this.log_("handleServerMessage",i,h),"d"===i?this.onDataUpdate_(h.p,h.d,!1,h.t):"m"===i?this.onDataUpdate_(h.p,h.d,!0,h.t):"c"===i?this.onListenRevoked_(h.p,h.q):"ac"===i?this.onAuthRevoked_(h.s,h.d):"apc"===i?this.onAppCheckRevoked_(h.s,h.d):"sd"===i?this.onSecurityDebugPacket_(h):error("Unrecognized action received from server: "+(0,eI.Wl)(i)+"\nAre you using the latest client?")}onReady_(i,h){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(i),this.lastSessionId=h,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(i){(0,eI.hu)(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(i))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(i){!i||this.visible_||this.reconnectDelay_!==this.maxReconnectDelay_||(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)),this.visible_=i}onOnline_(i){i?(this.log_("Browser went online."),this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){if(this.visible_){if(this.lastConnectionEstablishedTime_){let i=new Date().getTime()-this.lastConnectionEstablishedTime_;i>3e4&&(this.reconnectDelay_=1e3),this.lastConnectionEstablishedTime_=null}}else this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime();let i=new Date().getTime()-this.lastConnectionAttemptTime_,h=Math.max(0,this.reconnectDelay_-i);h=Math.random()*h,this.log_("Trying to reconnect in "+h+"ms"),this.scheduleConnect_(h),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,1.3*this.reconnectDelay_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;let i=this.onDataMessage_.bind(this),h=this.onReady_.bind(this),f=this.onRealtimeDisconnect_.bind(this),m=this.id+":"+PersistentConnection.nextConnectionId_++,L=this.lastSessionId,en=!1,er=null,closeFn=function(){er?er.close():(en=!0,f())};this.realtime_={close:closeFn,sendRequest:function(i){(0,eI.hu)(er,"sendRequest call when we're not connected not allowed."),er.sendRequest(i)}};let ei=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{let[es,eo]=await Promise.all([this.authTokenProvider_.getToken(ei),this.appCheckTokenProvider_.getToken(ei)]);en?log("getToken() completed but was canceled"):(log("getToken() completed. Creating connection."),this.authToken_=es&&es.accessToken,this.appCheckToken_=eo&&eo.token,er=new Connection(m,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,i,h,f,i=>{warn(i+" ("+this.repoInfo_.toString()+")"),this.interrupt("server_kill")},L))}catch(i){this.log_("Failed to get token: "+i),en||(this.repoInfo_.nodeAdmin&&warn(i),closeFn())}}}interrupt(i){log("Interrupting connection for reason: "+i),this.interruptReasons_[i]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(i){log("Resuming connection for reason: "+i),delete this.interruptReasons_[i],(0,eI.xb)(this.interruptReasons_)&&(this.reconnectDelay_=1e3,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(i){let h=i-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:h})}cancelSentTransactions_(){for(let i=0;i<this.outstandingPuts_.length;i++){let h=this.outstandingPuts_[i];h&&"h"in h.request&&h.queued&&(h.onComplete&&h.onComplete("disconnect"),delete this.outstandingPuts_[i],this.outstandingPutCount_--)}0===this.outstandingPutCount_&&(this.outstandingPuts_=[])}onListenRevoked_(i,h){let f;f=h?h.map(i=>ObjectToUniqueKey(i)).join("$"):"default";let m=this.removeListen_(i,f);m&&m.onComplete&&m.onComplete("permission_denied")}removeListen_(i,h){let f;let m=new Path(i).toString();if(this.listens.has(m)){let i=this.listens.get(m);f=i.get(h),i.delete(h),0===i.size&&this.listens.delete(m)}else f=void 0;return f}onAuthRevoked_(i,h){log("Auth token revoked: "+i+"/"+h),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),("invalid_token"===i||"permission_denied"===i)&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=3&&(this.reconnectDelay_=3e4,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(i,h){log("App check token revoked: "+i+"/"+h),this.appCheckToken_=null,this.forceTokenRefresh_=!0,("invalid_token"===i||"permission_denied"===i)&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=3&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(i){this.securityDebugCallback_?this.securityDebugCallback_(i):"msg"in i&&console.log("FIREBASE: "+i.msg.replace("\n","\nFIREBASE: "))}restoreState_(){for(let i of(this.tryAuth(),this.tryAppCheck(),this.listens.values()))for(let h of i.values())this.sendListen_(h);for(let i=0;i<this.outstandingPuts_.length;i++)this.outstandingPuts_[i]&&this.sendPut_(i);for(;this.onDisconnectRequestQueue_.length;){let i=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(i.action,i.pathString,i.data,i.onComplete)}for(let i=0;i<this.outstandingGets_.length;i++)this.outstandingGets_[i]&&this.sendGet_(i)}sendConnectStats_(){let i={},h="js";(0,eI.Yr)()&&(h=this.repoInfo_.nodeAdmin?"admin_node":"node"),i["sdk."+h+"."+ek.replace(/\./g,"-")]=1,(0,eI.uI)()?i["framework.cordova"]=1:(0,eI.b$)()&&(i["framework.reactnative"]=1),this.reportStats(i)}shouldReconnect_(){let i=OnlineMonitor.getInstance().currentlyOnline();return(0,eI.xb)(this.interruptReasons_)&&i}};PersistentConnection.nextPersistentConnectionId_=0,PersistentConnection.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let NamedNode=class NamedNode{constructor(i,h){this.name=i,this.node=h}static Wrap(i,h){return new NamedNode(i,h)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Index=class Index{getCompare(){return this.compare.bind(this)}indexedValueChanged(i,h){let f=new NamedNode(eL,i),m=new NamedNode(eL,h);return 0!==this.compare(f,m)}minPost(){return NamedNode.MIN}};let KeyIndex=class KeyIndex extends Index{static get __EMPTY_NODE(){return m}static set __EMPTY_NODE(i){m=i}compare(i,h){return nameCompare(i.name,h.name)}isDefinedOn(i){throw(0,eI.g5)("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(i,h){return!1}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(eF,m)}makePost(i,h){return(0,eI.hu)("string"==typeof i,"KeyIndex indexValue must always be a string."),new NamedNode(i,m)}toString(){return".key"}};let eH=new KeyIndex;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SortedMapIterator=class SortedMapIterator{constructor(i,h,f,m,L=null){this.isReverse_=m,this.resultGenerator_=L,this.nodeStack_=[];let en=1;for(;!i.isEmpty();)if(en=h?f(i.key,h):1,m&&(en*=-1),en<0)i=this.isReverse_?i.left:i.right;else if(0===en){this.nodeStack_.push(i);break}else this.nodeStack_.push(i),i=this.isReverse_?i.right:i.left}getNext(){let i;if(0===this.nodeStack_.length)return null;let h=this.nodeStack_.pop();if(i=this.resultGenerator_?this.resultGenerator_(h.key,h.value):{key:h.key,value:h.value},this.isReverse_)for(h=h.left;!h.isEmpty();)this.nodeStack_.push(h),h=h.right;else for(h=h.right;!h.isEmpty();)this.nodeStack_.push(h),h=h.left;return i}hasNext(){return this.nodeStack_.length>0}peek(){if(0===this.nodeStack_.length)return null;let i=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(i.key,i.value):{key:i.key,value:i.value}}};let LLRBNode=class LLRBNode{constructor(i,h,f,m,L){this.key=i,this.value=h,this.color=null!=f?f:LLRBNode.RED,this.left=null!=m?m:SortedMap.EMPTY_NODE,this.right=null!=L?L:SortedMap.EMPTY_NODE}copy(i,h,f,m,L){return new LLRBNode(null!=i?i:this.key,null!=h?h:this.value,null!=f?f:this.color,null!=m?m:this.left,null!=L?L:this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(i){return this.left.inorderTraversal(i)||!!i(this.key,this.value)||this.right.inorderTraversal(i)}reverseTraversal(i){return this.right.reverseTraversal(i)||i(this.key,this.value)||this.left.reverseTraversal(i)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(i,h,f){let m=this,L=f(i,m.key);return(m=L<0?m.copy(null,null,null,m.left.insert(i,h,f),null):0===L?m.copy(null,h,null,null,null):m.copy(null,null,null,null,m.right.insert(i,h,f))).fixUp_()}removeMin_(){if(this.left.isEmpty())return SortedMap.EMPTY_NODE;let i=this;return i.left.isRed_()||i.left.left.isRed_()||(i=i.moveRedLeft_()),(i=i.copy(null,null,null,i.left.removeMin_(),null)).fixUp_()}remove(i,h){let f,m;if(f=this,0>h(i,f.key))f.left.isEmpty()||f.left.isRed_()||f.left.left.isRed_()||(f=f.moveRedLeft_()),f=f.copy(null,null,null,f.left.remove(i,h),null);else{if(f.left.isRed_()&&(f=f.rotateRight_()),f.right.isEmpty()||f.right.isRed_()||f.right.left.isRed_()||(f=f.moveRedRight_()),0===h(i,f.key)){if(f.right.isEmpty())return SortedMap.EMPTY_NODE;m=f.right.min_(),f=f.copy(m.key,m.value,null,null,f.right.removeMin_())}f=f.copy(null,null,null,null,f.right.remove(i,h))}return f.fixUp_()}isRed_(){return this.color}fixUp_(){let i=this;return i.right.isRed_()&&!i.left.isRed_()&&(i=i.rotateLeft_()),i.left.isRed_()&&i.left.left.isRed_()&&(i=i.rotateRight_()),i.left.isRed_()&&i.right.isRed_()&&(i=i.colorFlip_()),i}moveRedLeft_(){let i=this.colorFlip_();return i.right.left.isRed_()&&(i=(i=(i=i.copy(null,null,null,null,i.right.rotateRight_())).rotateLeft_()).colorFlip_()),i}moveRedRight_(){let i=this.colorFlip_();return i.left.left.isRed_()&&(i=(i=i.rotateRight_()).colorFlip_()),i}rotateLeft_(){let i=this.copy(null,null,LLRBNode.RED,null,this.right.left);return this.right.copy(null,null,this.color,i,null)}rotateRight_(){let i=this.copy(null,null,LLRBNode.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,i)}colorFlip_(){let i=this.left.copy(null,null,!this.left.color,null,null),h=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,i,h)}checkMaxDepth_(){let i=this.check_();return Math.pow(2,i)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw Error("Right child of ("+this.key+","+this.value+") is red");let i=this.left.check_();if(i===this.right.check_())return i+(this.isRed_()?0:1);throw Error("Black depths differ")}};LLRBNode.RED=!0,LLRBNode.BLACK=!1;let SortedMap=class SortedMap{constructor(i,h=SortedMap.EMPTY_NODE){this.comparator_=i,this.root_=h}insert(i,h){return new SortedMap(this.comparator_,this.root_.insert(i,h,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}remove(i){return new SortedMap(this.comparator_,this.root_.remove(i,this.comparator_).copy(null,null,LLRBNode.BLACK,null,null))}get(i){let h;let f=this.root_;for(;!f.isEmpty();){if(0===(h=this.comparator_(i,f.key)))return f.value;h<0?f=f.left:h>0&&(f=f.right)}return null}getPredecessorKey(i){let h,f=this.root_,m=null;for(;!f.isEmpty();){if(0===(h=this.comparator_(i,f.key))){if(f.left.isEmpty()){if(m)return m.key;return null}for(f=f.left;!f.right.isEmpty();)f=f.right;return f.key}h<0?f=f.left:h>0&&(m=f,f=f.right)}throw Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(i){return this.root_.inorderTraversal(i)}reverseTraversal(i){return this.root_.reverseTraversal(i)}getIterator(i){return new SortedMapIterator(this.root_,null,this.comparator_,!1,i)}getIteratorFrom(i,h){return new SortedMapIterator(this.root_,i,this.comparator_,!1,h)}getReverseIteratorFrom(i,h){return new SortedMapIterator(this.root_,i,this.comparator_,!0,h)}getReverseIterator(i){return new SortedMapIterator(this.root_,null,this.comparator_,!0,i)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NAME_ONLY_COMPARATOR(i,h){return nameCompare(i.name,h.name)}function NAME_COMPARATOR(i,h){return nameCompare(i,h)}SortedMap.EMPTY_NODE=new class{copy(i,h,f,m,L){return this}insert(i,h,f){return new LLRBNode(i,h,null)}remove(i,h){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(i){return!1}reverseTraversal(i){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}};let priorityHashText=function(i){return"number"==typeof i?"number:"+doubleToIEEE754String(i):"string:"+i},validatePriorityNode=function(i){if(i.isLeafNode()){let h=i.val();(0,eI.hu)("string"==typeof h||"number"==typeof h||"object"==typeof h&&(0,eI.r3)(h,".sv"),"Priority must be a string or number.")}else(0,eI.hu)(i===L||i.isEmpty(),"priority of unexpected type.");(0,eI.hu)(i===L||i.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};let LeafNode=class LeafNode{constructor(i,h=LeafNode.__childrenNodeConstructor.EMPTY_NODE){this.value_=i,this.priorityNode_=h,this.lazyHash_=null,(0,eI.hu)(void 0!==this.value_&&null!==this.value_,"LeafNode shouldn't be created with null/undefined value."),validatePriorityNode(this.priorityNode_)}static set __childrenNodeConstructor(i){en=i}static get __childrenNodeConstructor(){return en}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(i){return new LeafNode(this.value_,i)}getImmediateChild(i){return".priority"===i?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}getChild(i){return pathIsEmpty(i)?this:".priority"===pathGetFront(i)?this.priorityNode_:LeafNode.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(i,h){return null}updateImmediateChild(i,h){return".priority"===i?this.updatePriority(h):h.isEmpty()&&".priority"!==i?this:LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(i,h).updatePriority(this.priorityNode_)}updateChild(i,h){let f=pathGetFront(i);return null===f?h:h.isEmpty()&&".priority"!==f?this:((0,eI.hu)(".priority"!==f||1===pathGetLength(i),".priority must be the last token in a path"),this.updateImmediateChild(f,LeafNode.__childrenNodeConstructor.EMPTY_NODE.updateChild(pathPopFront(i),h)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(i,h){return!1}val(i){return i&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(null===this.lazyHash_){let i="";this.priorityNode_.isEmpty()||(i+="priority:"+priorityHashText(this.priorityNode_.val())+":");let h=typeof this.value_;i+=h+":","number"===h?i+=doubleToIEEE754String(this.value_):i+=this.value_,this.lazyHash_=sha1(i)}return this.lazyHash_}getValue(){return this.value_}compareTo(i){return i===LeafNode.__childrenNodeConstructor.EMPTY_NODE?1:i instanceof LeafNode.__childrenNodeConstructor?-1:((0,eI.hu)(i.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(i))}compareToLeafNode_(i){let h=typeof i.value_,f=typeof this.value_,m=LeafNode.VALUE_TYPE_ORDER.indexOf(h),L=LeafNode.VALUE_TYPE_ORDER.indexOf(f);return((0,eI.hu)(m>=0,"Unknown leaf type: "+h),(0,eI.hu)(L>=0,"Unknown leaf type: "+f),m!==L)?L-m:"object"===f?0:this.value_<i.value_?-1:this.value_===i.value_?0:1}withIndex(){return this}isIndexed(){return!0}equals(i){return i===this||!!i.isLeafNode()&&this.value_===i.value_&&this.priorityNode_.equals(i.priorityNode_)}};LeafNode.VALUE_TYPE_ORDER=["object","boolean","number","string"];let e$=new class extends Index{compare(i,h){let f=i.node.getPriority(),m=h.node.getPriority(),L=f.compareTo(m);return 0===L?nameCompare(i.name,h.name):L}isDefinedOn(i){return!i.getPriority().isEmpty()}indexedValueChanged(i,h){return!i.getPriority().equals(h.getPriority())}minPost(){return NamedNode.MIN}maxPost(){return new NamedNode(eF,new LeafNode("[PRIORITY-POST]",ei))}makePost(i,h){let f=er(i);return new NamedNode(h,new LeafNode("[PRIORITY-POST]",f))}toString(){return".priority"}},ez=Math.log(2);let Base12Num=class Base12Num{constructor(i){this.count=parseInt(Math.log(i+1)/ez,10),this.current_=this.count-1;let h=parseInt(Array(this.count+1).join("1"),2);this.bits_=i+1&h}nextBitIsOne(){let i=!(this.bits_&1<<this.current_);return this.current_--,i}};let buildChildSet=function(i,h,f,m){i.sort(h);let buildBalancedTree=function(h,m){let L,en;let er=m-h;if(0===er)return null;if(1===er)return L=i[h],en=f?f(L):L,new LLRBNode(en,L.node,LLRBNode.BLACK,null,null);{let ei=parseInt(er/2,10)+h,es=buildBalancedTree(h,ei),eo=buildBalancedTree(ei+1,m);return L=i[ei],en=f?f(L):L,new LLRBNode(en,L.node,LLRBNode.BLACK,es,eo)}},L=new Base12Num(i.length),en=function(h){let m=null,L=null,en=i.length,buildPennant=function(h,m){let L=en-h,er=en;en-=h;let ei=buildBalancedTree(L+1,er),es=i[L],eo=f?f(es):es;attachPennant(new LLRBNode(eo,es.node,m,null,ei))},attachPennant=function(i){m?m.left=i:L=i,m=i};for(let i=0;i<h.count;++i){let f=h.nextBitIsOne(),m=Math.pow(2,h.count-(i+1));f?buildPennant(m,LLRBNode.BLACK):(buildPennant(m,LLRBNode.BLACK),buildPennant(m,LLRBNode.RED))}return L}(L);return new SortedMap(m||h,en)},eK={};let IndexMap=class IndexMap{constructor(i,h){this.indexes_=i,this.indexSet_=h}static get Default(){return(0,eI.hu)(eK&&e$,"ChildrenNode.ts has not been loaded"),es=es||new IndexMap({".priority":eK},{".priority":e$})}get(i){let h=(0,eI.DV)(this.indexes_,i);if(!h)throw Error("No index defined for "+i);return h instanceof SortedMap?h:null}hasIndex(i){return(0,eI.r3)(this.indexSet_,i.toString())}addIndex(i,h){let f;(0,eI.hu)(i!==eH,"KeyIndex always exists and isn't meant to be added to the IndexMap.");let m=[],L=!1,en=h.getIterator(NamedNode.Wrap),er=en.getNext();for(;er;)L=L||i.isDefinedOn(er.node),m.push(er),er=en.getNext();f=L?buildChildSet(m,i.getCompare()):eK;let ei=i.toString(),es=Object.assign({},this.indexSet_);es[ei]=i;let eo=Object.assign({},this.indexes_);return eo[ei]=f,new IndexMap(eo,es)}addToIndexes(i,h){let f=(0,eI.UI)(this.indexes_,(f,m)=>{let L=(0,eI.DV)(this.indexSet_,m);if((0,eI.hu)(L,"Missing index implementation for "+m),f===eK){if(!L.isDefinedOn(i.node))return eK;{let f=[],m=h.getIterator(NamedNode.Wrap),en=m.getNext();for(;en;)en.name!==i.name&&f.push(en),en=m.getNext();return f.push(i),buildChildSet(f,L.getCompare())}}{let m=h.get(i.name),L=f;return m&&(L=L.remove(new NamedNode(i.name,m))),L.insert(i,i.node)}});return new IndexMap(f,this.indexSet_)}removeFromIndexes(i,h){let f=(0,eI.UI)(this.indexes_,f=>{if(f===eK)return f;{let m=h.get(i.name);return m?f.remove(new NamedNode(i.name,m)):f}});return new IndexMap(f,this.indexSet_)}};let ChildrenNode=class ChildrenNode{constructor(i,h,f){this.children_=i,this.priorityNode_=h,this.indexMap_=f,this.lazyHash_=null,this.priorityNode_&&validatePriorityNode(this.priorityNode_),this.children_.isEmpty()&&(0,eI.hu)(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return eo||(eo=new ChildrenNode(new SortedMap(NAME_COMPARATOR),null,IndexMap.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||eo}updatePriority(i){return this.children_.isEmpty()?this:new ChildrenNode(this.children_,i,this.indexMap_)}getImmediateChild(i){if(".priority"===i)return this.getPriority();{let h=this.children_.get(i);return null===h?eo:h}}getChild(i){let h=pathGetFront(i);return null===h?this:this.getImmediateChild(h).getChild(pathPopFront(i))}hasChild(i){return null!==this.children_.get(i)}updateImmediateChild(i,h){if((0,eI.hu)(h,"We should always be passing snapshot nodes"),".priority"===i)return this.updatePriority(h);{let f,m;let L=new NamedNode(i,h);h.isEmpty()?(f=this.children_.remove(i),m=this.indexMap_.removeFromIndexes(L,this.children_)):(f=this.children_.insert(i,h),m=this.indexMap_.addToIndexes(L,this.children_));let en=f.isEmpty()?eo:this.priorityNode_;return new ChildrenNode(f,en,m)}}updateChild(i,h){let f=pathGetFront(i);if(null===f)return h;{(0,eI.hu)(".priority"!==pathGetFront(i)||1===pathGetLength(i),".priority must be the last token in a path");let m=this.getImmediateChild(f).updateChild(pathPopFront(i),h);return this.updateImmediateChild(f,m)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(i){if(this.isEmpty())return null;let h={},f=0,m=0,L=!0;if(this.forEachChild(e$,(en,er)=>{h[en]=er.val(i),f++,L&&ChildrenNode.INTEGER_REGEXP_.test(en)?m=Math.max(m,Number(en)):L=!1}),i||!L||!(m<2*f))return i&&!this.getPriority().isEmpty()&&(h[".priority"]=this.getPriority().val()),h;{let i=[];for(let f in h)i[f]=h[f];return i}}hash(){if(null===this.lazyHash_){let i="";this.getPriority().isEmpty()||(i+="priority:"+priorityHashText(this.getPriority().val())+":"),this.forEachChild(e$,(h,f)=>{let m=f.hash();""!==m&&(i+=":"+h+":"+m)}),this.lazyHash_=""===i?"":sha1(i)}return this.lazyHash_}getPredecessorChildName(i,h,f){let m=this.resolveIndex_(f);if(!m)return this.children_.getPredecessorKey(i);{let f=m.getPredecessorKey(new NamedNode(i,h));return f?f.name:null}}getFirstChildName(i){let h=this.resolveIndex_(i);if(!h)return this.children_.minKey();{let i=h.minKey();return i&&i.name}}getFirstChild(i){let h=this.getFirstChildName(i);return h?new NamedNode(h,this.children_.get(h)):null}getLastChildName(i){let h=this.resolveIndex_(i);if(!h)return this.children_.maxKey();{let i=h.maxKey();return i&&i.name}}getLastChild(i){let h=this.getLastChildName(i);return h?new NamedNode(h,this.children_.get(h)):null}forEachChild(i,h){let f=this.resolveIndex_(i);return f?f.inorderTraversal(i=>h(i.name,i.node)):this.children_.inorderTraversal(h)}getIterator(i){return this.getIteratorFrom(i.minPost(),i)}getIteratorFrom(i,h){let f=this.resolveIndex_(h);if(f)return f.getIteratorFrom(i,i=>i);{let f=this.children_.getIteratorFrom(i.name,NamedNode.Wrap),m=f.peek();for(;null!=m&&0>h.compare(m,i);)f.getNext(),m=f.peek();return f}}getReverseIterator(i){return this.getReverseIteratorFrom(i.maxPost(),i)}getReverseIteratorFrom(i,h){let f=this.resolveIndex_(h);if(f)return f.getReverseIteratorFrom(i,i=>i);{let f=this.children_.getReverseIteratorFrom(i.name,NamedNode.Wrap),m=f.peek();for(;null!=m&&h.compare(m,i)>0;)f.getNext(),m=f.peek();return f}}compareTo(i){return this.isEmpty()?i.isEmpty()?0:-1:i.isLeafNode()||i.isEmpty()?1:i===eQ?-1:0}withIndex(i){if(i===eH||this.indexMap_.hasIndex(i))return this;{let h=this.indexMap_.addIndex(i,this.children_);return new ChildrenNode(this.children_,this.priorityNode_,h)}}isIndexed(i){return i===eH||this.indexMap_.hasIndex(i)}equals(i){if(i===this)return!0;if(i.isLeafNode()||!this.getPriority().equals(i.getPriority())||this.children_.count()!==i.children_.count())return!1;{let h=this.getIterator(e$),f=i.getIterator(e$),m=h.getNext(),L=f.getNext();for(;m&&L;){if(m.name!==L.name||!m.node.equals(L.node))return!1;m=h.getNext(),L=f.getNext()}return null===m&&null===L}}resolveIndex_(i){return i===eH?null:this.indexMap_.get(i.toString())}};ChildrenNode.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;let eQ=new class extends ChildrenNode{constructor(){super(new SortedMap(NAME_COMPARATOR),ChildrenNode.EMPTY_NODE,IndexMap.Default)}compareTo(i){return i===this?0:1}equals(i){return i===this}getPriority(){return this}getImmediateChild(i){return ChildrenNode.EMPTY_NODE}isEmpty(){return!1}};function nodeFromJSON(i,h=null){if(null===i)return ChildrenNode.EMPTY_NODE;if("object"==typeof i&&".priority"in i&&(h=i[".priority"]),(0,eI.hu)(null===h||"string"==typeof h||"number"==typeof h||"object"==typeof h&&".sv"in h,"Invalid priority type found: "+typeof h),"object"==typeof i&&".value"in i&&null!==i[".value"]&&(i=i[".value"]),"object"!=typeof i||".sv"in i){let f=i;return new LeafNode(f,nodeFromJSON(h))}if(i instanceof Array){let f=ChildrenNode.EMPTY_NODE;return each(i,(h,m)=>{if((0,eI.r3)(i,h)&&"."!==h.substring(0,1)){let i=nodeFromJSON(m);(i.isLeafNode()||!i.isEmpty())&&(f=f.updateImmediateChild(h,i))}}),f.updatePriority(nodeFromJSON(h))}{let f=[],m=!1,L=i;if(each(L,(i,h)=>{if("."!==i.substring(0,1)){let L=nodeFromJSON(h);L.isEmpty()||(m=m||!L.getPriority().isEmpty(),f.push(new NamedNode(i,L)))}}),0===f.length)return ChildrenNode.EMPTY_NODE;let en=buildChildSet(f,NAME_ONLY_COMPARATOR,i=>i.name,NAME_COMPARATOR);if(!m)return new ChildrenNode(en,nodeFromJSON(h),IndexMap.Default);{let i=buildChildSet(f,e$.getCompare());return new ChildrenNode(en,nodeFromJSON(h),new IndexMap({".priority":i},{".priority":e$}))}}}Object.defineProperties(NamedNode,{MIN:{value:new NamedNode(eL,ChildrenNode.EMPTY_NODE)},MAX:{value:new NamedNode(eF,eQ)}}),KeyIndex.__EMPTY_NODE=ChildrenNode.EMPTY_NODE,LeafNode.__childrenNodeConstructor=ChildrenNode,L=eQ,ei=eQ,er=nodeFromJSON;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let PathIndex=class PathIndex extends Index{constructor(i){super(),this.indexPath_=i,(0,eI.hu)(!pathIsEmpty(i)&&".priority"!==pathGetFront(i),"Can't create PathIndex with empty path or .priority key")}extractChild(i){return i.getChild(this.indexPath_)}isDefinedOn(i){return!i.getChild(this.indexPath_).isEmpty()}compare(i,h){let f=this.extractChild(i.node),m=this.extractChild(h.node),L=f.compareTo(m);return 0===L?nameCompare(i.name,h.name):L}makePost(i,h){let f=nodeFromJSON(i),m=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,f);return new NamedNode(h,m)}maxPost(){let i=ChildrenNode.EMPTY_NODE.updateChild(this.indexPath_,eQ);return new NamedNode(eF,i)}toString(){return pathSlice(this.indexPath_,0).join("/")}};let eY=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class extends Index{compare(i,h){let f=i.node.compareTo(h.node);return 0===f?nameCompare(i.name,h.name):f}isDefinedOn(i){return!0}indexedValueChanged(i,h){return!i.equals(h)}minPost(){return NamedNode.MIN}maxPost(){return NamedNode.MAX}makePost(i,h){let f=nodeFromJSON(i);return new NamedNode(h,f)}toString(){return".value"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function changeValue(i){return{type:"value",snapshotNode:i}}function changeChildAdded(i,h){return{type:"child_added",snapshotNode:h,childName:i}}function changeChildRemoved(i,h){return{type:"child_removed",snapshotNode:h,childName:i}}function changeChildChanged(i,h,f){return{type:"child_changed",snapshotNode:h,childName:i,oldSnap:f}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let IndexedFilter=class IndexedFilter{constructor(i){this.index_=i}updateChild(i,h,f,m,L,en){(0,eI.hu)(i.isIndexed(this.index_),"A node must be indexed if only a child is updated");let er=i.getImmediateChild(h);return er.getChild(m).equals(f.getChild(m))&&er.isEmpty()===f.isEmpty()?i:(null!=en&&(f.isEmpty()?i.hasChild(h)?en.trackChildChange(changeChildRemoved(h,er)):(0,eI.hu)(i.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):er.isEmpty()?en.trackChildChange(changeChildAdded(h,f)):en.trackChildChange(changeChildChanged(h,f,er))),i.isLeafNode()&&f.isEmpty())?i:i.updateImmediateChild(h,f).withIndex(this.index_)}updateFullNode(i,h,f){return null==f||(i.isLeafNode()||i.forEachChild(e$,(i,m)=>{h.hasChild(i)||f.trackChildChange(changeChildRemoved(i,m))}),h.isLeafNode()||h.forEachChild(e$,(h,m)=>{if(i.hasChild(h)){let L=i.getImmediateChild(h);L.equals(m)||f.trackChildChange(changeChildChanged(h,m,L))}else f.trackChildChange(changeChildAdded(h,m))})),h.withIndex(this.index_)}updatePriority(i,h){return i.isEmpty()?ChildrenNode.EMPTY_NODE:i.updatePriority(h)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RangedFilter=class RangedFilter{constructor(i){this.indexedFilter_=new IndexedFilter(i.getIndex()),this.index_=i.getIndex(),this.startPost_=RangedFilter.getStartPost_(i),this.endPost_=RangedFilter.getEndPost_(i),this.startIsInclusive_=!i.startAfterSet_,this.endIsInclusive_=!i.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(i){let h=this.startIsInclusive_?0>=this.index_.compare(this.getStartPost(),i):0>this.index_.compare(this.getStartPost(),i),f=this.endIsInclusive_?0>=this.index_.compare(i,this.getEndPost()):0>this.index_.compare(i,this.getEndPost());return h&&f}updateChild(i,h,f,m,L,en){return this.matches(new NamedNode(h,f))||(f=ChildrenNode.EMPTY_NODE),this.indexedFilter_.updateChild(i,h,f,m,L,en)}updateFullNode(i,h,f){h.isLeafNode()&&(h=ChildrenNode.EMPTY_NODE);let m=h.withIndex(this.index_);m=m.updatePriority(ChildrenNode.EMPTY_NODE);let L=this;return h.forEachChild(e$,(i,h)=>{L.matches(new NamedNode(i,h))||(m=m.updateImmediateChild(i,ChildrenNode.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(i,m,f)}updatePriority(i,h){return i}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(i){if(!i.hasStart())return i.getIndex().minPost();{let h=i.getIndexStartName();return i.getIndex().makePost(i.getIndexStartValue(),h)}}static getEndPost_(i){if(!i.hasEnd())return i.getIndex().maxPost();{let h=i.getIndexEndName();return i.getIndex().makePost(i.getIndexEndValue(),h)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let LimitedFilter=class LimitedFilter{constructor(i){this.withinDirectionalStart=i=>this.reverse_?this.withinEndPost(i):this.withinStartPost(i),this.withinDirectionalEnd=i=>this.reverse_?this.withinStartPost(i):this.withinEndPost(i),this.withinStartPost=i=>{let h=this.index_.compare(this.rangedFilter_.getStartPost(),i);return this.startIsInclusive_?h<=0:h<0},this.withinEndPost=i=>{let h=this.index_.compare(i,this.rangedFilter_.getEndPost());return this.endIsInclusive_?h<=0:h<0},this.rangedFilter_=new RangedFilter(i),this.index_=i.getIndex(),this.limit_=i.getLimit(),this.reverse_=!i.isViewFromLeft(),this.startIsInclusive_=!i.startAfterSet_,this.endIsInclusive_=!i.endBeforeSet_}updateChild(i,h,f,m,L,en){return(this.rangedFilter_.matches(new NamedNode(h,f))||(f=ChildrenNode.EMPTY_NODE),i.getImmediateChild(h).equals(f))?i:i.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(i,h,f,m,L,en):this.fullLimitUpdateChild_(i,h,f,L,en)}updateFullNode(i,h,f){let m;if(h.isLeafNode()||h.isEmpty())m=ChildrenNode.EMPTY_NODE.withIndex(this.index_);else if(2*this.limit_<h.numChildren()&&h.isIndexed(this.index_)){let i;m=ChildrenNode.EMPTY_NODE.withIndex(this.index_),i=this.reverse_?h.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):h.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let f=0;for(;i.hasNext()&&f<this.limit_;){let h=i.getNext();if(this.withinDirectionalStart(h)){if(this.withinDirectionalEnd(h))m=m.updateImmediateChild(h.name,h.node),f++;else break}}}else{let i;m=(m=h.withIndex(this.index_)).updatePriority(ChildrenNode.EMPTY_NODE),i=this.reverse_?m.getReverseIterator(this.index_):m.getIterator(this.index_);let f=0;for(;i.hasNext();){let h=i.getNext(),L=f<this.limit_&&this.withinDirectionalStart(h)&&this.withinDirectionalEnd(h);L?f++:m=m.updateImmediateChild(h.name,ChildrenNode.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(i,m,f)}updatePriority(i,h){return i}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(i,h,f,m,L){let en;if(this.reverse_){let i=this.index_.getCompare();en=(h,f)=>i(f,h)}else en=this.index_.getCompare();(0,eI.hu)(i.numChildren()===this.limit_,"");let er=new NamedNode(h,f),ei=this.reverse_?i.getFirstChild(this.index_):i.getLastChild(this.index_),es=this.rangedFilter_.matches(er);if(i.hasChild(h)){let eo=i.getImmediateChild(h),el=m.getChildAfterChild(this.index_,ei,this.reverse_);for(;null!=el&&(el.name===h||i.hasChild(el.name));)el=m.getChildAfterChild(this.index_,el,this.reverse_);let eh=null==el?1:en(el,er),eu=es&&!f.isEmpty()&&eh>=0;if(eu)return null!=L&&L.trackChildChange(changeChildChanged(h,f,eo)),i.updateImmediateChild(h,f);{null!=L&&L.trackChildChange(changeChildRemoved(h,eo));let f=i.updateImmediateChild(h,ChildrenNode.EMPTY_NODE),m=null!=el&&this.rangedFilter_.matches(el);return m?(null!=L&&L.trackChildChange(changeChildAdded(el.name,el.node)),f.updateImmediateChild(el.name,el.node)):f}}return f.isEmpty()?i:es&&en(ei,er)>=0?(null!=L&&(L.trackChildChange(changeChildRemoved(ei.name,ei.node)),L.trackChildChange(changeChildAdded(h,f))),i.updateImmediateChild(h,f).updateImmediateChild(ei.name,ChildrenNode.EMPTY_NODE)):i}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryParams=class QueryParams{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=e$}hasStart(){return this.startSet_}isViewFromLeft(){return""===this.viewFrom_?this.startSet_:"l"===this.viewFrom_}getIndexStartValue(){return(0,eI.hu)(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return((0,eI.hu)(this.startSet_,"Only valid if start has been set"),this.startNameSet_)?this.indexStartName_:eL}hasEnd(){return this.endSet_}getIndexEndValue(){return(0,eI.hu)(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return((0,eI.hu)(this.endSet_,"Only valid if end has been set"),this.endNameSet_)?this.indexEndName_:eF}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&""!==this.viewFrom_}getLimit(){return(0,eI.hu)(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===e$}copy(){let i=new QueryParams;return i.limitSet_=this.limitSet_,i.limit_=this.limit_,i.startSet_=this.startSet_,i.startAfterSet_=this.startAfterSet_,i.indexStartValue_=this.indexStartValue_,i.startNameSet_=this.startNameSet_,i.indexStartName_=this.indexStartName_,i.endSet_=this.endSet_,i.endBeforeSet_=this.endBeforeSet_,i.indexEndValue_=this.indexEndValue_,i.endNameSet_=this.endNameSet_,i.indexEndName_=this.indexEndName_,i.index_=this.index_,i.viewFrom_=this.viewFrom_,i}};function queryParamsToRestQueryStringParameters(i){let h;let f={};if(i.isDefault())return f;if(i.index_===e$?h="$priority":i.index_===eY?h="$value":i.index_===eH?h="$key":((0,eI.hu)(i.index_ instanceof PathIndex,"Unrecognized index type!"),h=i.index_.toString()),f.orderBy=(0,eI.Wl)(h),i.startSet_){let h=i.startAfterSet_?"startAfter":"startAt";f[h]=(0,eI.Wl)(i.indexStartValue_),i.startNameSet_&&(f[h]+=","+(0,eI.Wl)(i.indexStartName_))}if(i.endSet_){let h=i.endBeforeSet_?"endBefore":"endAt";f[h]=(0,eI.Wl)(i.indexEndValue_),i.endNameSet_&&(f[h]+=","+(0,eI.Wl)(i.indexEndName_))}return i.limitSet_&&(i.isViewFromLeft()?f.limitToFirst=i.limit_:f.limitToLast=i.limit_),f}function queryParamsGetQueryObject(i){let h={};if(i.startSet_&&(h.sp=i.indexStartValue_,i.startNameSet_&&(h.sn=i.indexStartName_),h.sin=!i.startAfterSet_),i.endSet_&&(h.ep=i.indexEndValue_,i.endNameSet_&&(h.en=i.indexEndName_),h.ein=!i.endBeforeSet_),i.limitSet_){h.l=i.limit_;let f=i.viewFrom_;""===f&&(f=i.isViewFromLeft()?"l":"r"),h.vf=f}return i.index_!==e$&&(h.i=i.index_.toString()),h}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ReadonlyRestClient=class ReadonlyRestClient extends ServerActions{constructor(i,h,f,m){super(),this.repoInfo_=i,this.onDataUpdate_=h,this.authTokenProvider_=f,this.appCheckTokenProvider_=m,this.log_=logWrapper("p:rest:"),this.listens_={}}reportStats(i){throw Error("Method not implemented.")}static getListenId_(i,h){return void 0!==h?"tag$"+h:((0,eI.hu)(i._queryParams.isDefault(),"should have a tag if it's not a default query."),i._path.toString())}listen(i,h,f,m){let L=i._path.toString();this.log_("Listen called for "+L+" "+i._queryIdentifier);let en=ReadonlyRestClient.getListenId_(i,f),er={};this.listens_[en]=er;let ei=queryParamsToRestQueryStringParameters(i._queryParams);this.restRequest_(L+".json",ei,(i,h)=>{let ei=h;404===i&&(ei=null,i=null),null===i&&this.onDataUpdate_(L,ei,!1,f),(0,eI.DV)(this.listens_,en)===er&&m(i?401===i?"permission_denied":"rest_error:"+i:"ok",null)})}unlisten(i,h){let f=ReadonlyRestClient.getListenId_(i,h);delete this.listens_[f]}get(i){let h=queryParamsToRestQueryStringParameters(i._queryParams),f=i._path.toString(),m=new eI.BH;return this.restRequest_(f+".json",h,(i,h)=>{let L=h;404===i&&(L=null,i=null),null===i?(this.onDataUpdate_(f,L,!1,null),m.resolve(L)):m.reject(Error(L))}),m.promise}refreshAuthToken(i){}restRequest_(i,h={},f){return h.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([m,L])=>{m&&m.accessToken&&(h.auth=m.accessToken),L&&L.token&&(h.ac=L.token);let en=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+i+"?ns="+this.repoInfo_.namespace+(0,eI.xO)(h);this.log_("Sending REST request for "+en);let er=new XMLHttpRequest;er.onreadystatechange=()=>{if(f&&4===er.readyState){this.log_("REST Response for "+en+" received. status:",er.status,"response:",er.responseText);let i=null;if(er.status>=200&&er.status<300){try{i=(0,eI.cI)(er.responseText)}catch(i){warn("Failed to parse JSON response for "+en+": "+er.responseText)}f(null,i)}else 401!==er.status&&404!==er.status&&warn("Got unsuccessful REST response for "+en+" Status: "+er.status),f(er.status);f=null}},er.open("GET",en,!0),er.send()})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let SnapshotHolder=class SnapshotHolder{constructor(){this.rootNode_=ChildrenNode.EMPTY_NODE}getNode(i){return this.rootNode_.getChild(i)}updateSnapshot(i,h){this.rootNode_=this.rootNode_.updateChild(i,h)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newSparseSnapshotTree(){return{value:null,children:new Map}}function sparseSnapshotTreeForEachTree(i,h,f){null!==i.value?f(h,i.value):function(i,h){i.children.forEach((i,f)=>{h(f,i)})}(i,(i,m)=>{let L=new Path(h.toString()+"/"+i);sparseSnapshotTreeForEachTree(m,L,f)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StatsListener=class StatsListener{constructor(i){this.collection_=i,this.last_=null}get(){let i=this.collection_.get(),h=Object.assign({},i);return this.last_&&each(this.last_,(i,f)=>{h[i]=h[i]-f}),this.last_=i,h}};let StatsReporter=class StatsReporter{constructor(i,h){this.server_=h,this.statsToReport_={},this.statsListener_=new StatsListener(i),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(1e4+2e4*Math.random()))}reportStats_(){let i=this.statsListener_.get(),h={},f=!1;each(i,(i,m)=>{m>0&&(0,eI.r3)(this.statsToReport_,i)&&(h[i]=m,f=!0)}),f&&this.server_.reportStats(h),setTimeoutNonBlocking(this.reportStats_.bind(this),Math.floor(2*Math.random()*3e5))}};function newOperationSourceUser(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function newOperationSourceServer(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function newOperationSourceServerTaggedQuery(i){return{fromUser:!1,fromServer:!0,queryId:i,tagged:!0}}(ep=eg||(eg={}))[ep.OVERWRITE=0]="OVERWRITE",ep[ep.MERGE=1]="MERGE",ep[ep.ACK_USER_WRITE=2]="ACK_USER_WRITE",ep[ep.LISTEN_COMPLETE=3]="LISTEN_COMPLETE";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let AckUserWrite=class AckUserWrite{constructor(i,h,f){this.path=i,this.affectedTree=h,this.revert=f,this.type=eg.ACK_USER_WRITE,this.source=newOperationSourceUser()}operationForChild(i){if(!pathIsEmpty(this.path))return(0,eI.hu)(pathGetFront(this.path)===i,"operationForChild called for unrelated child."),new AckUserWrite(pathPopFront(this.path),this.affectedTree,this.revert);if(null!=this.affectedTree.value)return(0,eI.hu)(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{let h=this.affectedTree.subtree(new Path(i));return new AckUserWrite(newEmptyPath(),h,this.revert)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ListenComplete=class ListenComplete{constructor(i,h){this.source=i,this.path=h,this.type=eg.LISTEN_COMPLETE}operationForChild(i){return pathIsEmpty(this.path)?new ListenComplete(this.source,newEmptyPath()):new ListenComplete(this.source,pathPopFront(this.path))}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Overwrite=class Overwrite{constructor(i,h,f){this.source=i,this.path=h,this.snap=f,this.type=eg.OVERWRITE}operationForChild(i){return pathIsEmpty(this.path)?new Overwrite(this.source,newEmptyPath(),this.snap.getImmediateChild(i)):new Overwrite(this.source,pathPopFront(this.path),this.snap)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Merge=class Merge{constructor(i,h,f){this.source=i,this.path=h,this.children=f,this.type=eg.MERGE}operationForChild(i){if(!pathIsEmpty(this.path))return(0,eI.hu)(pathGetFront(this.path)===i,"Can't get a merge for a child not on the path of the operation"),new Merge(this.source,pathPopFront(this.path),this.children);{let h=this.children.subtree(new Path(i));return h.isEmpty()?null:h.value?new Overwrite(this.source,newEmptyPath(),h.value):new Merge(this.source,newEmptyPath(),h)}}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CacheNode=class CacheNode{constructor(i,h,f){this.node_=i,this.fullyInitialized_=h,this.filtered_=f}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(i){if(pathIsEmpty(i))return this.isFullyInitialized()&&!this.filtered_;let h=pathGetFront(i);return this.isCompleteForChild(h)}isCompleteForChild(i){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(i)}getNode(){return this.node_}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EventGenerator=class EventGenerator{constructor(i){this.query_=i,this.index_=this.query_._queryParams.getIndex()}};function eventGeneratorGenerateEventsForType(i,h,f,m,L,en){let er=m.filter(i=>i.type===f);er.sort((h,f)=>(function(i,h,f){if(null==h.childName||null==f.childName)throw(0,eI.g5)("Should only compare child_ events.");let m=new NamedNode(h.childName,h.snapshotNode),L=new NamedNode(f.childName,f.snapshotNode);return i.index_.compare(m,L)})(i,h,f)),er.forEach(f=>{let m=("value"===f.type||"child_removed"===f.type||(f.prevName=en.getPredecessorChildName(f.childName,f.snapshotNode,i.index_)),f);L.forEach(L=>{L.respondsTo(f.type)&&h.push(L.createEvent(m,i.query_))})})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function newViewCache(i,h){return{eventCache:i,serverCache:h}}function viewCacheUpdateEventSnap(i,h,f,m){return newViewCache(new CacheNode(h,f,m),i.serverCache)}function viewCacheUpdateServerSnap(i,h,f,m){return newViewCache(i.eventCache,new CacheNode(h,f,m))}function viewCacheGetCompleteEventSnap(i){return i.eventCache.isFullyInitialized()?i.eventCache.getNode():null}function viewCacheGetCompleteServerSnap(i){return i.serverCache.isFullyInitialized()?i.serverCache.getNode():null}let EmptyChildren=()=>(el||(el=new SortedMap(stringCompare)),el);let ImmutableTree=class ImmutableTree{constructor(i,h=EmptyChildren()){this.value=i,this.children=h}static fromObject(i){let h=new ImmutableTree(null);return each(i,(i,f)=>{h=h.set(new Path(i),f)}),h}isEmpty(){return null===this.value&&this.children.isEmpty()}findRootMostMatchingPathAndValue(i,h){if(null!=this.value&&h(this.value))return{path:newEmptyPath(),value:this.value};if(pathIsEmpty(i))return null;{let f=pathGetFront(i),m=this.children.get(f);if(null===m)return null;{let L=m.findRootMostMatchingPathAndValue(pathPopFront(i),h);if(null==L)return null;{let i=pathChild(new Path(f),L.path);return{path:i,value:L.value}}}}}findRootMostValueAndPath(i){return this.findRootMostMatchingPathAndValue(i,()=>!0)}subtree(i){if(pathIsEmpty(i))return this;{let h=pathGetFront(i),f=this.children.get(h);return null!==f?f.subtree(pathPopFront(i)):new ImmutableTree(null)}}set(i,h){if(pathIsEmpty(i))return new ImmutableTree(h,this.children);{let f=pathGetFront(i),m=this.children.get(f)||new ImmutableTree(null),L=m.set(pathPopFront(i),h),en=this.children.insert(f,L);return new ImmutableTree(this.value,en)}}remove(i){if(pathIsEmpty(i))return this.children.isEmpty()?new ImmutableTree(null):new ImmutableTree(null,this.children);{let h=pathGetFront(i),f=this.children.get(h);if(!f)return this;{let m;let L=f.remove(pathPopFront(i));return(m=L.isEmpty()?this.children.remove(h):this.children.insert(h,L),null===this.value&&m.isEmpty())?new ImmutableTree(null):new ImmutableTree(this.value,m)}}}get(i){if(pathIsEmpty(i))return this.value;{let h=pathGetFront(i),f=this.children.get(h);return f?f.get(pathPopFront(i)):null}}setTree(i,h){if(pathIsEmpty(i))return h;{let f;let m=pathGetFront(i),L=this.children.get(m)||new ImmutableTree(null),en=L.setTree(pathPopFront(i),h);return f=en.isEmpty()?this.children.remove(m):this.children.insert(m,en),new ImmutableTree(this.value,f)}}fold(i){return this.fold_(newEmptyPath(),i)}fold_(i,h){let f={};return this.children.inorderTraversal((m,L)=>{f[m]=L.fold_(pathChild(i,m),h)}),h(i,this.value,f)}findOnPath(i,h){return this.findOnPath_(i,newEmptyPath(),h)}findOnPath_(i,h,f){let m=!!this.value&&f(h,this.value);if(m)return m;if(pathIsEmpty(i))return null;{let m=pathGetFront(i),L=this.children.get(m);return L?L.findOnPath_(pathPopFront(i),pathChild(h,m),f):null}}foreachOnPath(i,h){return this.foreachOnPath_(i,newEmptyPath(),h)}foreachOnPath_(i,h,f){if(pathIsEmpty(i))return this;{this.value&&f(h,this.value);let m=pathGetFront(i),L=this.children.get(m);return L?L.foreachOnPath_(pathPopFront(i),pathChild(h,m),f):new ImmutableTree(null)}}foreach(i){this.foreach_(newEmptyPath(),i)}foreach_(i,h){this.children.inorderTraversal((f,m)=>{m.foreach_(pathChild(i,f),h)}),this.value&&h(i,this.value)}foreachChild(i){this.children.inorderTraversal((h,f)=>{f.value&&i(h,f.value)})}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CompoundWrite=class CompoundWrite{constructor(i){this.writeTree_=i}static empty(){return new CompoundWrite(new ImmutableTree(null))}};function compoundWriteAddWrite(i,h,f){if(pathIsEmpty(h))return new CompoundWrite(new ImmutableTree(f));{let m=i.writeTree_.findRootMostValueAndPath(h);if(null!=m){let L=m.path,en=m.value,er=newRelativePath(L,h);return en=en.updateChild(er,f),new CompoundWrite(i.writeTree_.set(L,en))}{let m=new ImmutableTree(f),L=i.writeTree_.setTree(h,m);return new CompoundWrite(L)}}}function compoundWriteAddWrites(i,h,f){let m=i;return each(f,(i,f)=>{m=compoundWriteAddWrite(m,pathChild(h,i),f)}),m}function compoundWriteRemoveWrite(i,h){if(pathIsEmpty(h))return CompoundWrite.empty();{let f=i.writeTree_.setTree(h,new ImmutableTree(null));return new CompoundWrite(f)}}function compoundWriteHasCompleteWrite(i,h){return null!=compoundWriteGetCompleteNode(i,h)}function compoundWriteGetCompleteNode(i,h){let f=i.writeTree_.findRootMostValueAndPath(h);return null!=f?i.writeTree_.get(f.path).getChild(newRelativePath(f.path,h)):null}function compoundWriteGetCompleteChildren(i){let h=[],f=i.writeTree_.value;return null!=f?f.isLeafNode()||f.forEachChild(e$,(i,f)=>{h.push(new NamedNode(i,f))}):i.writeTree_.children.inorderTraversal((i,f)=>{null!=f.value&&h.push(new NamedNode(i,f.value))}),h}function compoundWriteChildCompoundWrite(i,h){if(pathIsEmpty(h))return i;{let f=compoundWriteGetCompleteNode(i,h);return new CompoundWrite(null!=f?new ImmutableTree(f):i.writeTree_.subtree(h))}}function compoundWriteIsEmpty(i){return i.writeTree_.isEmpty()}function compoundWriteApply(i,h){return function applySubtreeWrite(i,h,f){if(null!=h.value)return f.updateChild(i,h.value);{let m=null;return h.children.inorderTraversal((h,L)=>{".priority"===h?((0,eI.hu)(null!==L.value,"Priority writes must always be leaf nodes"),m=L.value):f=applySubtreeWrite(pathChild(i,h),L,f)}),f.getChild(i).isEmpty()||null===m||(f=f.updateChild(pathChild(i,".priority"),m)),f}}(newEmptyPath(),i.writeTree_,h)}function writeTreeDefaultFilter_(i){return i.visible}function writeTreeLayerTree_(i,h,f){let m=CompoundWrite.empty();for(let L=0;L<i.length;++L){let en=i[L];if(h(en)){let i;let h=en.path;if(en.snap)pathContains(f,h)?m=compoundWriteAddWrite(m,i=newRelativePath(f,h),en.snap):pathContains(h,f)&&(i=newRelativePath(h,f),m=compoundWriteAddWrite(m,newEmptyPath(),en.snap.getChild(i)));else if(en.children){if(pathContains(f,h))m=compoundWriteAddWrites(m,i=newRelativePath(f,h),en.children);else if(pathContains(h,f)){if(pathIsEmpty(i=newRelativePath(h,f)))m=compoundWriteAddWrites(m,newEmptyPath(),en.children);else{let h=(0,eI.DV)(en.children,pathGetFront(i));if(h){let f=h.getChild(pathPopFront(i));m=compoundWriteAddWrite(m,newEmptyPath(),f)}}}}else throw(0,eI.g5)("WriteRecord should have .snap or .children")}}return m}function writeTreeCalcCompleteEventCache(i,h,f,m,L){if(m||L){let en=compoundWriteChildCompoundWrite(i.visibleWrites,h);if(!L&&compoundWriteIsEmpty(en))return f;if(!L&&null==f&&!compoundWriteHasCompleteWrite(en,newEmptyPath()))return null;{let en=writeTreeLayerTree_(i.allWrites,function(i){return(i.visible||L)&&(!m||!~m.indexOf(i.writeId))&&(pathContains(i.path,h)||pathContains(h,i.path))},h),er=f||ChildrenNode.EMPTY_NODE;return compoundWriteApply(en,er)}}{let m=compoundWriteGetCompleteNode(i.visibleWrites,h);if(null!=m)return m;{let m=compoundWriteChildCompoundWrite(i.visibleWrites,h);if(compoundWriteIsEmpty(m))return f;if(null==f&&!compoundWriteHasCompleteWrite(m,newEmptyPath()))return null;{let i=f||ChildrenNode.EMPTY_NODE;return compoundWriteApply(m,i)}}}}function writeTreeRefCalcCompleteEventCache(i,h,f,m){return writeTreeCalcCompleteEventCache(i.writeTree,i.treePath,h,f,m)}function writeTreeRefCalcCompleteEventChildren(i,h){return function(i,h,f){let m=ChildrenNode.EMPTY_NODE,L=compoundWriteGetCompleteNode(i.visibleWrites,h);if(L)return L.isLeafNode()||L.forEachChild(e$,(i,h)=>{m=m.updateImmediateChild(i,h)}),m;if(f){let L=compoundWriteChildCompoundWrite(i.visibleWrites,h);return f.forEachChild(e$,(i,h)=>{let f=compoundWriteApply(compoundWriteChildCompoundWrite(L,new Path(i)),h);m=m.updateImmediateChild(i,f)}),compoundWriteGetCompleteChildren(L).forEach(i=>{m=m.updateImmediateChild(i.name,i.node)}),m}{let f=compoundWriteChildCompoundWrite(i.visibleWrites,h);return compoundWriteGetCompleteChildren(f).forEach(i=>{m=m.updateImmediateChild(i.name,i.node)}),m}}(i.writeTree,i.treePath,h)}function writeTreeRefCalcEventCacheAfterServerOverwrite(i,h,f,m){return function(i,h,f,m,L){(0,eI.hu)(m||L,"Either existingEventSnap or existingServerSnap must exist");let en=pathChild(h,f);if(compoundWriteHasCompleteWrite(i.visibleWrites,en))return null;{let h=compoundWriteChildCompoundWrite(i.visibleWrites,en);return compoundWriteIsEmpty(h)?L.getChild(f):compoundWriteApply(h,L.getChild(f))}}(i.writeTree,i.treePath,h,f,m)}function writeTreeRefShadowingWrite(i,h){var f,m;return f=i.writeTree,m=pathChild(i.treePath,h),compoundWriteGetCompleteNode(f.visibleWrites,m)}function writeTreeRefCalcCompleteChild(i,h,f){return function(i,h,f,m){let L=pathChild(h,f),en=compoundWriteGetCompleteNode(i.visibleWrites,L);if(null!=en)return en;if(!m.isCompleteForChild(f))return null;{let h=compoundWriteChildCompoundWrite(i.visibleWrites,L);return compoundWriteApply(h,m.getNode().getImmediateChild(f))}}(i.writeTree,i.treePath,h,f)}function writeTreeRefChild(i,h){return newWriteTreeRef(pathChild(i.treePath,h),i.writeTree)}function newWriteTreeRef(i,h){return{treePath:i,writeTree:h}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ChildChangeAccumulator=class ChildChangeAccumulator{constructor(){this.changeMap=new Map}trackChildChange(i){let h=i.type,f=i.childName;(0,eI.hu)("child_added"===h||"child_changed"===h||"child_removed"===h,"Only child changes supported for tracking"),(0,eI.hu)(".priority"!==f,"Only non-priority child changes can be tracked.");let m=this.changeMap.get(f);if(m){let L=m.type;if("child_added"===h&&"child_removed"===L)this.changeMap.set(f,changeChildChanged(f,i.snapshotNode,m.snapshotNode));else if("child_removed"===h&&"child_added"===L)this.changeMap.delete(f);else if("child_removed"===h&&"child_changed"===L)this.changeMap.set(f,changeChildRemoved(f,m.oldSnap));else if("child_changed"===h&&"child_added"===L)this.changeMap.set(f,changeChildAdded(f,i.snapshotNode));else if("child_changed"===h&&"child_changed"===L)this.changeMap.set(f,changeChildChanged(f,i.snapshotNode,m.oldSnap));else throw(0,eI.g5)("Illegal combination of changes: "+i+" occurred after "+m)}else this.changeMap.set(f,i)}getChanges(){return Array.from(this.changeMap.values())}};let eJ=new /**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class{getCompleteChild(i){return null}getChildAfterChild(i,h,f){return null}};let WriteTreeCompleteChildSource=class WriteTreeCompleteChildSource{constructor(i,h,f=null){this.writes_=i,this.viewCache_=h,this.optCompleteServerCache_=f}getCompleteChild(i){let h=this.viewCache_.eventCache;if(h.isCompleteForChild(i))return h.getNode().getImmediateChild(i);{let h=null!=this.optCompleteServerCache_?new CacheNode(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return writeTreeRefCalcCompleteChild(this.writes_,i,h)}}getChildAfterChild(i,h,f){var m;let L=null!=this.optCompleteServerCache_?this.optCompleteServerCache_:viewCacheGetCompleteServerSnap(this.viewCache_),en=function(i,h,f,m,L,en,er){let ei;let es=compoundWriteChildCompoundWrite(i.visibleWrites,h),eo=compoundWriteGetCompleteNode(es,newEmptyPath());if(null!=eo)ei=eo;else{if(null==f)return[];ei=compoundWriteApply(es,f)}if((ei=ei.withIndex(er)).isEmpty()||ei.isLeafNode())return[];{let i=[],h=er.getCompare(),f=en?ei.getReverseIteratorFrom(m,er):ei.getIteratorFrom(m,er),L=f.getNext();for(;L&&i.length<1;)0!==h(L,m)&&i.push(L),L=f.getNext();return i}}((m=this.writes_).writeTree,m.treePath,L,h,0,f,i);return 0===en.length?null:en[0]}};function viewProcessorGenerateEventCacheAfterServerEvent(i,h,f,m,L,en){let er=h.eventCache;if(null!=writeTreeRefShadowingWrite(m,f))return h;{let ei,es;if(pathIsEmpty(f)){if((0,eI.hu)(h.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),h.serverCache.isFiltered()){let f=viewCacheGetCompleteServerSnap(h),L=f instanceof ChildrenNode?f:ChildrenNode.EMPTY_NODE,er=writeTreeRefCalcCompleteEventChildren(m,L);ei=i.filter.updateFullNode(h.eventCache.getNode(),er,en)}else{let f=writeTreeRefCalcCompleteEventCache(m,viewCacheGetCompleteServerSnap(h));ei=i.filter.updateFullNode(h.eventCache.getNode(),f,en)}}else{let eo=pathGetFront(f);if(".priority"===eo){(0,eI.hu)(1===pathGetLength(f),"Can't have a priority with additional path components");let L=er.getNode();es=h.serverCache.getNode();let en=writeTreeRefCalcEventCacheAfterServerOverwrite(m,f,L,es);ei=null!=en?i.filter.updatePriority(L,en):er.getNode()}else{let el;let eh=pathPopFront(f);if(er.isCompleteForChild(eo)){es=h.serverCache.getNode();let i=writeTreeRefCalcEventCacheAfterServerOverwrite(m,f,er.getNode(),es);el=null!=i?er.getNode().getImmediateChild(eo).updateChild(eh,i):er.getNode().getImmediateChild(eo)}else el=writeTreeRefCalcCompleteChild(m,eo,h.serverCache);ei=null!=el?i.filter.updateChild(er.getNode(),eo,el,eh,L,en):er.getNode()}}return viewCacheUpdateEventSnap(h,ei,er.isFullyInitialized()||pathIsEmpty(f),i.filter.filtersNodes())}}function viewProcessorApplyServerOverwrite(i,h,f,m,L,en,er,ei){let es;let eo=h.serverCache,el=er?i.filter:i.filter.getIndexedFilter();if(pathIsEmpty(f))es=el.updateFullNode(eo.getNode(),m,null);else if(el.filtersNodes()&&!eo.isFiltered()){let i=eo.getNode().updateChild(f,m);es=el.updateFullNode(eo.getNode(),i,null)}else{let i=pathGetFront(f);if(!eo.isCompleteForPath(f)&&pathGetLength(f)>1)return h;let L=pathPopFront(f),en=eo.getNode().getImmediateChild(i),er=en.updateChild(L,m);es=".priority"===i?el.updatePriority(eo.getNode(),er):el.updateChild(eo.getNode(),i,er,L,eJ,null)}let eh=viewCacheUpdateServerSnap(h,es,eo.isFullyInitialized()||pathIsEmpty(f),el.filtersNodes()),eu=new WriteTreeCompleteChildSource(L,eh,en);return viewProcessorGenerateEventCacheAfterServerEvent(i,eh,f,L,eu,ei)}function viewProcessorApplyUserOverwrite(i,h,f,m,L,en,er){let ei,es;let eo=h.eventCache,el=new WriteTreeCompleteChildSource(L,h,en);if(pathIsEmpty(f))es=i.filter.updateFullNode(h.eventCache.getNode(),m,er),ei=viewCacheUpdateEventSnap(h,es,!0,i.filter.filtersNodes());else{let L=pathGetFront(f);if(".priority"===L)es=i.filter.updatePriority(h.eventCache.getNode(),m),ei=viewCacheUpdateEventSnap(h,es,eo.isFullyInitialized(),eo.isFiltered());else{let en;let es=pathPopFront(f),eh=eo.getNode().getImmediateChild(L);if(pathIsEmpty(es))en=m;else{let i=el.getCompleteChild(L);en=null!=i?".priority"===pathGetBack(es)&&i.getChild(pathParent(es)).isEmpty()?i:i.updateChild(es,m):ChildrenNode.EMPTY_NODE}if(eh.equals(en))ei=h;else{let f=i.filter.updateChild(eo.getNode(),L,en,es,el,er);ei=viewCacheUpdateEventSnap(h,f,eo.isFullyInitialized(),i.filter.filtersNodes())}}}return ei}function viewProcessorCacheHasChild(i,h){return i.eventCache.isCompleteForChild(h)}function viewProcessorApplyMerge(i,h,f){return f.foreach((i,f)=>{h=h.updateChild(i,f)}),h}function viewProcessorApplyServerMerge(i,h,f,m,L,en,er,ei){let es;if(h.serverCache.getNode().isEmpty()&&!h.serverCache.isFullyInitialized())return h;let eo=h;es=pathIsEmpty(f)?m:new ImmutableTree(null).setTree(f,m);let el=h.serverCache.getNode();return es.children.inorderTraversal((f,m)=>{if(el.hasChild(f)){let es=h.serverCache.getNode().getImmediateChild(f),el=viewProcessorApplyMerge(i,es,m);eo=viewProcessorApplyServerOverwrite(i,eo,new Path(f),el,L,en,er,ei)}}),es.children.inorderTraversal((f,m)=>{let es=!h.serverCache.isCompleteForChild(f)&&null===m.value;if(!el.hasChild(f)&&!es){let es=h.serverCache.getNode().getImmediateChild(f),el=viewProcessorApplyMerge(i,es,m);eo=viewProcessorApplyServerOverwrite(i,eo,new Path(f),el,L,en,er,ei)}}),eo}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let View=class View{constructor(i,h){this.query_=i,this.eventRegistrations_=[];let f=this.query_._queryParams,m=new IndexedFilter(f.getIndex()),L=f.loadsAllData()?new IndexedFilter(f.getIndex()):f.hasLimit()?new LimitedFilter(f):new RangedFilter(f);this.processor_={filter:L};let en=h.serverCache,er=h.eventCache,ei=m.updateFullNode(ChildrenNode.EMPTY_NODE,en.getNode(),null),es=L.updateFullNode(ChildrenNode.EMPTY_NODE,er.getNode(),null),eo=new CacheNode(ei,en.isFullyInitialized(),m.filtersNodes()),el=new CacheNode(es,er.isFullyInitialized(),L.filtersNodes());this.viewCache_=newViewCache(el,eo),this.eventGenerator_=new EventGenerator(this.query_)}get query(){return this.query_}};function viewIsEmpty(i){return 0===i.eventRegistrations_.length}function viewRemoveEventRegistration(i,h,f){let m=[];if(f){(0,eI.hu)(null==h,"A cancel should cancel all event registrations.");let L=i.query._path;i.eventRegistrations_.forEach(i=>{let h=i.createCancelEvent(f,L);h&&m.push(h)})}if(h){let f=[];for(let m=0;m<i.eventRegistrations_.length;++m){let L=i.eventRegistrations_[m];if(L.matches(h)){if(h.hasAnyCallback()){f=f.concat(i.eventRegistrations_.slice(m+1));break}}else f.push(L)}i.eventRegistrations_=f}else i.eventRegistrations_=[];return m}function viewApplyOperation(i,h,f,m){var L,en;h.type===eg.MERGE&&null!==h.source.queryId&&((0,eI.hu)(viewCacheGetCompleteServerSnap(i.viewCache_),"We should always have a full cache before handling merges"),(0,eI.hu)(viewCacheGetCompleteEventSnap(i.viewCache_),"Missing event cache, even though we have a server cache"));let er=i.viewCache_,ei=function(i,h,f,m,L){let en,er;let ei=new ChildChangeAccumulator;if(f.type===eg.OVERWRITE)f.source.fromUser?en=viewProcessorApplyUserOverwrite(i,h,f.path,f.snap,m,L,ei):((0,eI.hu)(f.source.fromServer,"Unknown source."),er=f.source.tagged||h.serverCache.isFiltered()&&!pathIsEmpty(f.path),en=viewProcessorApplyServerOverwrite(i,h,f.path,f.snap,m,L,er,ei));else if(f.type===eg.MERGE){var es,eo;let el;f.source.fromUser?(es=f.path,eo=f.children,el=h,eo.foreach((f,en)=>{let er=pathChild(es,f);viewProcessorCacheHasChild(h,pathGetFront(er))&&(el=viewProcessorApplyUserOverwrite(i,el,er,en,m,L,ei))}),eo.foreach((f,en)=>{let er=pathChild(es,f);viewProcessorCacheHasChild(h,pathGetFront(er))||(el=viewProcessorApplyUserOverwrite(i,el,er,en,m,L,ei))}),en=el):((0,eI.hu)(f.source.fromServer,"Unknown source."),er=f.source.tagged||h.serverCache.isFiltered(),en=viewProcessorApplyServerMerge(i,h,f.path,f.children,m,L,er,ei))}else if(f.type===eg.ACK_USER_WRITE)en=f.revert?function(i,h,f,m,L,en){let er;if(null!=writeTreeRefShadowingWrite(m,f))return h;{let ei;let es=new WriteTreeCompleteChildSource(m,h,L),eo=h.eventCache.getNode();if(pathIsEmpty(f)||".priority"===pathGetFront(f)){let f;if(h.serverCache.isFullyInitialized())f=writeTreeRefCalcCompleteEventCache(m,viewCacheGetCompleteServerSnap(h));else{let i=h.serverCache.getNode();(0,eI.hu)(i instanceof ChildrenNode,"serverChildren would be complete if leaf node"),f=writeTreeRefCalcCompleteEventChildren(m,i)}ei=i.filter.updateFullNode(eo,f,en)}else{let L=pathGetFront(f),el=writeTreeRefCalcCompleteChild(m,L,h.serverCache);null==el&&h.serverCache.isCompleteForChild(L)&&(el=eo.getImmediateChild(L)),(ei=null!=el?i.filter.updateChild(eo,L,el,pathPopFront(f),es,en):h.eventCache.getNode().hasChild(L)?i.filter.updateChild(eo,L,ChildrenNode.EMPTY_NODE,pathPopFront(f),es,en):eo).isEmpty()&&h.serverCache.isFullyInitialized()&&(er=writeTreeRefCalcCompleteEventCache(m,viewCacheGetCompleteServerSnap(h))).isLeafNode()&&(ei=i.filter.updateFullNode(ei,er,en))}return er=h.serverCache.isFullyInitialized()||null!=writeTreeRefShadowingWrite(m,newEmptyPath()),viewCacheUpdateEventSnap(h,ei,er,i.filter.filtersNodes())}}(i,h,f.path,m,L,ei):function(i,h,f,m,L,en,er){if(null!=writeTreeRefShadowingWrite(L,f))return h;let ei=h.serverCache.isFiltered(),es=h.serverCache;if(null!=m.value){if(pathIsEmpty(f)&&es.isFullyInitialized()||es.isCompleteForPath(f))return viewProcessorApplyServerOverwrite(i,h,f,es.getNode().getChild(f),L,en,ei,er);if(!pathIsEmpty(f))return h;{let m=new ImmutableTree(null);return es.getNode().forEachChild(eH,(i,h)=>{m=m.set(new Path(i),h)}),viewProcessorApplyServerMerge(i,h,f,m,L,en,ei,er)}}{let eo=new ImmutableTree(null);return m.foreach((i,h)=>{let m=pathChild(f,i);es.isCompleteForPath(m)&&(eo=eo.set(i,es.getNode().getChild(m)))}),viewProcessorApplyServerMerge(i,h,f,eo,L,en,ei,er)}}(i,h,f.path,f.affectedTree,m,L,ei);else if(f.type===eg.LISTEN_COMPLETE)en=function(i,h,f,m,L){let en=h.serverCache,er=viewCacheUpdateServerSnap(h,en.getNode(),en.isFullyInitialized()||pathIsEmpty(f),en.isFiltered());return viewProcessorGenerateEventCacheAfterServerEvent(i,er,f,m,eJ,L)}(i,h,f.path,m,ei);else throw(0,eI.g5)("Unknown operation type: "+f.type);let el=ei.getChanges();return function(i,h,f){let m=h.eventCache;if(m.isFullyInitialized()){let L=m.getNode().isLeafNode()||m.getNode().isEmpty(),en=viewCacheGetCompleteEventSnap(i);!(f.length>0)&&i.eventCache.isFullyInitialized()&&(!L||m.getNode().equals(en))&&m.getNode().getPriority().equals(en.getPriority())||f.push(changeValue(viewCacheGetCompleteEventSnap(h)))}}(h,en,el),{viewCache:en,changes:el}}(i.processor_,er,h,f,m);return L=i.processor_,en=ei.viewCache,(0,eI.hu)(en.eventCache.getNode().isIndexed(L.filter.getIndex()),"Event snap not indexed"),(0,eI.hu)(en.serverCache.getNode().isIndexed(L.filter.getIndex()),"Server snap not indexed"),(0,eI.hu)(ei.viewCache.serverCache.isFullyInitialized()||!er.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),i.viewCache_=ei.viewCache,viewGenerateEventsForChanges_(i,ei.changes,ei.viewCache.eventCache.getNode(),null)}function viewGenerateEventsForChanges_(i,h,f,m){let L=m?[m]:i.eventRegistrations_;return function(i,h,f,m){let L=[],en=[];return h.forEach(h=>{if("child_changed"===h.type&&i.index_.indexedValueChanged(h.oldSnap,h.snapshotNode)){var f;en.push((f=h.childName,{type:"child_moved",snapshotNode:h.snapshotNode,childName:f}))}}),eventGeneratorGenerateEventsForType(i,L,"child_removed",h,m,f),eventGeneratorGenerateEventsForType(i,L,"child_added",h,m,f),eventGeneratorGenerateEventsForType(i,L,"child_moved",en,m,f),eventGeneratorGenerateEventsForType(i,L,"child_changed",h,m,f),eventGeneratorGenerateEventsForType(i,L,"value",h,m,f),L}(i.eventGenerator_,h,f,L)}let SyncPoint=class SyncPoint{constructor(){this.views=new Map}};function syncPointApplyOperation(i,h,f,m){let L=h.source.queryId;if(null!==L){let en=i.views.get(L);return(0,eI.hu)(null!=en,"SyncTree gave us an op for an invalid query."),viewApplyOperation(en,h,f,m)}{let L=[];for(let en of i.views.values())L=L.concat(viewApplyOperation(en,h,f,m));return L}}function syncPointGetQueryViews(i){let h=[];for(let f of i.views.values())f.query._queryParams.loadsAllData()||h.push(f);return h}function syncPointGetCompleteServerCache(i,h){let f=null;for(let m of i.views.values())f=f||function(i,h){let f=viewCacheGetCompleteServerSnap(i.viewCache_);return f&&(i.query._queryParams.loadsAllData()||!pathIsEmpty(h)&&!f.getImmediateChild(pathGetFront(h)).isEmpty())?f.getChild(h):null}(m,h);return f}function syncPointViewForQuery(i,h){let f=h._queryParams;if(f.loadsAllData())return syncPointGetCompleteView(i);{let f=h._queryIdentifier;return i.views.get(f)}}function syncPointHasCompleteView(i){return null!=syncPointGetCompleteView(i)}function syncPointGetCompleteView(i){for(let h of i.views.values())if(h.query._queryParams.loadsAllData())return h;return null}let eX=1;let SyncTree=class SyncTree{constructor(i){this.listenProvider_=i,this.syncPointTree_=new ImmutableTree(null),this.pendingWriteTree_={visibleWrites:CompoundWrite.empty(),allWrites:[],lastWriteId:-1},this.tagToQueryMap=new Map,this.queryToTagMap=new Map}};function syncTreeAckUserWrite(i,h,f=!1){let m=function(i,h){for(let f=0;f<i.allWrites.length;f++){let m=i.allWrites[f];if(m.writeId===h)return m}return null}(i.pendingWriteTree_,h),L=function(i,h){let f=i.allWrites.findIndex(i=>i.writeId===h);(0,eI.hu)(f>=0,"removeWrite called with nonexistent writeId.");let m=i.allWrites[f];i.allWrites.splice(f,1);let L=m.visible,en=!1,er=i.allWrites.length-1;for(;L&&er>=0;){let h=i.allWrites[er];h.visible&&(er>=f&&function(i,h){if(i.snap)return pathContains(i.path,h);for(let f in i.children)if(i.children.hasOwnProperty(f)&&pathContains(pathChild(i.path,f),h))return!0;return!1}(h,m.path)?L=!1:pathContains(m.path,h.path)&&(en=!0)),er--}if(!L)return!1;if(en)return i.visibleWrites=writeTreeLayerTree_(i.allWrites,writeTreeDefaultFilter_,newEmptyPath()),i.allWrites.length>0?i.lastWriteId=i.allWrites[i.allWrites.length-1].writeId:i.lastWriteId=-1,!0;if(m.snap)i.visibleWrites=compoundWriteRemoveWrite(i.visibleWrites,m.path);else{let h=m.children;each(h,h=>{i.visibleWrites=compoundWriteRemoveWrite(i.visibleWrites,pathChild(m.path,h))})}return!0}(i.pendingWriteTree_,h);if(!L)return[];{let h=new ImmutableTree(null);return null!=m.snap?h=h.set(newEmptyPath(),!0):each(m.children,i=>{h=h.set(new Path(i),!0)}),syncTreeApplyOperationToSyncPoints_(i,new AckUserWrite(m.path,h,f))}}function syncTreeApplyServerOverwrite(i,h,f){return syncTreeApplyOperationToSyncPoints_(i,new Overwrite(newOperationSourceServer(),h,f))}function syncTreeRemoveEventRegistration(i,h,f,m,L=!1){let en=h._path,er=i.syncPointTree_.get(en),ei=[];if(er&&("default"===h._queryIdentifier||null!=syncPointViewForQuery(er,h))){let es=function(i,h,f,m){let L=h._queryIdentifier,en=[],er=[],ei=syncPointHasCompleteView(i);if("default"===L)for(let[h,L]of i.views.entries())er=er.concat(viewRemoveEventRegistration(L,f,m)),viewIsEmpty(L)&&(i.views.delete(h),L.query._queryParams.loadsAllData()||en.push(L.query));else{let h=i.views.get(L);h&&(er=er.concat(viewRemoveEventRegistration(h,f,m)),viewIsEmpty(h)&&(i.views.delete(L),h.query._queryParams.loadsAllData()||en.push(h.query)))}return ei&&!syncPointHasCompleteView(i)&&en.push(new((0,eI.hu)(eh,"Reference.ts has not been loaded"),eh)(h._repo,h._path)),{removed:en,events:er}}(er,h,f,m);0===er.views.size&&(i.syncPointTree_=i.syncPointTree_.remove(en));let eo=es.removed;if(ei=es.events,!L){let f=-1!==eo.findIndex(i=>i._queryParams.loadsAllData()),L=i.syncPointTree_.findOnPath(en,(i,h)=>syncPointHasCompleteView(h));if(f&&!L){let h=i.syncPointTree_.subtree(en);if(!h.isEmpty()){let f=h.fold((i,h,f)=>{if(h&&syncPointHasCompleteView(h)){let i=syncPointGetCompleteView(h);return[i]}{let i=[];return h&&(i=syncPointGetQueryViews(h)),each(f,(h,f)=>{i=i.concat(f)}),i}});for(let h=0;h<f.length;++h){let m=f[h],L=m.query,en=syncTreeCreateListenerForView_(i,m);i.listenProvider_.startListening(syncTreeQueryForListening_(L),syncTreeTagForQuery(i,L),en.hashFn,en.onComplete)}}}L||!(eo.length>0)||m||(f?i.listenProvider_.stopListening(syncTreeQueryForListening_(h),null):eo.forEach(h=>{let f=i.queryToTagMap.get(syncTreeMakeQueryKey_(h));i.listenProvider_.stopListening(syncTreeQueryForListening_(h),f)}))}!function(i,h){for(let f=0;f<h.length;++f){let m=h[f];if(!m._queryParams.loadsAllData()){let h=syncTreeMakeQueryKey_(m),f=i.queryToTagMap.get(h);i.queryToTagMap.delete(h),i.tagToQueryMap.delete(f)}}}(i,eo)}return ei}function syncTreeAddEventRegistration(i,h,f,m=!1){let L;let en=h._path,er=null,ei=!1;i.syncPointTree_.foreachOnPath(en,(i,h)=>{let f=newRelativePath(i,en);er=er||syncPointGetCompleteServerCache(h,f),ei=ei||syncPointHasCompleteView(h)});let es=i.syncPointTree_.get(en);if(es?(ei=ei||syncPointHasCompleteView(es),er=er||syncPointGetCompleteServerCache(es,newEmptyPath())):(es=new SyncPoint,i.syncPointTree_=i.syncPointTree_.set(en,es)),null!=er)L=!0;else{L=!1,er=ChildrenNode.EMPTY_NODE;let h=i.syncPointTree_.subtree(en);h.foreachChild((i,h)=>{let f=syncPointGetCompleteServerCache(h,newEmptyPath());f&&(er=er.updateImmediateChild(i,f))})}let eo=null!=syncPointViewForQuery(es,h);if(!eo&&!h._queryParams.loadsAllData()){let f=syncTreeMakeQueryKey_(h);(0,eI.hu)(!i.queryToTagMap.has(f),"View does not exist, but we have a tag");let m=eX++;i.queryToTagMap.set(f,m),i.tagToQueryMap.set(m,f)}let el=newWriteTreeRef(en,i.pendingWriteTree_),eh=function(i,h,f,m,L,en){let er=function(i,h,f,m,L){let en=h._queryIdentifier,er=i.views.get(en);if(!er){let i=writeTreeRefCalcCompleteEventCache(f,L?m:null),en=!1;i?en=!0:(i=m instanceof ChildrenNode?writeTreeRefCalcCompleteEventChildren(f,m):ChildrenNode.EMPTY_NODE,en=!1);let er=newViewCache(new CacheNode(i,en,!1),new CacheNode(m,L,!1));return new View(h,er)}return er}(i,h,m,L,en);return i.views.has(h._queryIdentifier)||i.views.set(h._queryIdentifier,er),!function(i,h){i.eventRegistrations_.push(h)}(er,f),function(i,h){let f=i.viewCache_.eventCache,m=[];if(!f.getNode().isLeafNode()){let i=f.getNode();i.forEachChild(e$,(i,h)=>{m.push(changeChildAdded(i,h))})}return f.isFullyInitialized()&&m.push(changeValue(f.getNode())),viewGenerateEventsForChanges_(i,m,f.getNode(),h)}(er,f)}(es,h,f,el,er,L);if(!eo&&!ei&&!m){let f=syncPointViewForQuery(es,h);eh=eh.concat(function(i,h,f){let m=h._path,L=syncTreeTagForQuery(i,h),en=syncTreeCreateListenerForView_(i,f),er=i.listenProvider_.startListening(syncTreeQueryForListening_(h),L,en.hashFn,en.onComplete),ei=i.syncPointTree_.subtree(m);if(L)(0,eI.hu)(!syncPointHasCompleteView(ei.value),"If we're adding a query, it shouldn't be shadowed");else{let h=ei.fold((i,h,f)=>{if(!pathIsEmpty(i)&&h&&syncPointHasCompleteView(h))return[syncPointGetCompleteView(h).query];{let i=[];return h&&(i=i.concat(syncPointGetQueryViews(h).map(i=>i.query))),each(f,(h,f)=>{i=i.concat(f)}),i}});for(let f=0;f<h.length;++f){let m=h[f];i.listenProvider_.stopListening(syncTreeQueryForListening_(m),syncTreeTagForQuery(i,m))}}return er}(i,h,f))}return eh}function syncTreeCalcCompleteEventCache(i,h,f){let m=i.pendingWriteTree_,L=i.syncPointTree_.findOnPath(h,(i,f)=>{let m=newRelativePath(i,h),L=syncPointGetCompleteServerCache(f,m);if(L)return L});return writeTreeCalcCompleteEventCache(m,h,L,f,!0)}function syncTreeApplyOperationToSyncPoints_(i,h){var f;return function syncTreeApplyOperationHelper_(i,h,f,m){if(pathIsEmpty(i.path))return function syncTreeApplyOperationDescendantsHelper_(i,h,f,m){let L=h.get(newEmptyPath());null==f&&null!=L&&(f=syncPointGetCompleteServerCache(L,newEmptyPath()));let en=[];return h.children.inorderTraversal((h,L)=>{let er=f?f.getImmediateChild(h):null,ei=writeTreeRefChild(m,h),es=i.operationForChild(h);es&&(en=en.concat(syncTreeApplyOperationDescendantsHelper_(es,L,er,ei)))}),L&&(en=en.concat(syncPointApplyOperation(L,i,m,f))),en}(i,h,f,m);{let L=h.get(newEmptyPath());null==f&&null!=L&&(f=syncPointGetCompleteServerCache(L,newEmptyPath()));let en=[],er=pathGetFront(i.path),ei=i.operationForChild(er),es=h.children.get(er);if(es&&ei){let i=f?f.getImmediateChild(er):null,h=writeTreeRefChild(m,er);en=en.concat(syncTreeApplyOperationHelper_(ei,es,i,h))}return L&&(en=en.concat(syncPointApplyOperation(L,i,m,f))),en}}(h,i.syncPointTree_,null,(f=i.pendingWriteTree_,newWriteTreeRef(newEmptyPath(),f)))}function syncTreeCreateListenerForView_(i,h){let f=h.query,m=syncTreeTagForQuery(i,f);return{hashFn:()=>{let i=h.viewCache_.serverCache.getNode()||ChildrenNode.EMPTY_NODE;return i.hash()},onComplete:h=>{if("ok"===h){var L;return m?function(i,h,f){let m=syncTreeQueryKeyForTag_(i,f);if(!m)return[];{let f=syncTreeParseQueryKey_(m),L=f.path,en=f.queryId,er=newRelativePath(L,h),ei=new ListenComplete(newOperationSourceServerTaggedQuery(en),er);return syncTreeApplyTaggedOperation_(i,L,ei)}}(i,f._path,m):(L=f._path,syncTreeApplyOperationToSyncPoints_(i,new ListenComplete(newOperationSourceServer(),L)))}{let m=function(i,h){let f="Unknown Error";"too_big"===i?f="The data requested exceeds the maximum size that can be accessed with a single request.":"permission_denied"===i?f="Client doesn't have permission to access the desired data.":"unavailable"===i&&(f="The service is unavailable");let m=Error(i+" at "+h._path.toString()+": "+f);return m.code=i.toUpperCase(),m}(h,f);return syncTreeRemoveEventRegistration(i,f,null,m)}}}}function syncTreeTagForQuery(i,h){let f=syncTreeMakeQueryKey_(h);return i.queryToTagMap.get(f)}function syncTreeMakeQueryKey_(i){return i._path.toString()+"$"+i._queryIdentifier}function syncTreeQueryKeyForTag_(i,h){return i.tagToQueryMap.get(h)}function syncTreeParseQueryKey_(i){let h=i.indexOf("$");return(0,eI.hu)(-1!==h&&h<i.length-1,"Bad queryKey."),{queryId:i.substr(h+1),path:new Path(i.substr(0,h))}}function syncTreeApplyTaggedOperation_(i,h,f){let m=i.syncPointTree_.get(h);(0,eI.hu)(m,"Missing sync point for query tag that we're tracking");let L=newWriteTreeRef(h,i.pendingWriteTree_);return syncPointApplyOperation(m,f,L,null)}function syncTreeQueryForListening_(i){return i._queryParams.loadsAllData()&&!i._queryParams.isDefault()?new((0,eI.hu)(eu,"Reference.ts has not been loaded"),eu)(i._repo,i._path):i}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ExistingValueProvider=class ExistingValueProvider{constructor(i){this.node_=i}getImmediateChild(i){let h=this.node_.getImmediateChild(i);return new ExistingValueProvider(h)}node(){return this.node_}};let DeferredValueProvider=class DeferredValueProvider{constructor(i,h){this.syncTree_=i,this.path_=h}getImmediateChild(i){let h=pathChild(this.path_,i);return new DeferredValueProvider(this.syncTree_,h)}node(){return syncTreeCalcCompleteEventCache(this.syncTree_,this.path_)}};let resolveDeferredLeafValue=function(i,h,f){return i&&"object"==typeof i?((0,eI.hu)(".sv"in i,"Unexpected leaf node or priority contents"),"string"==typeof i[".sv"])?resolveScalarDeferredValue(i[".sv"],h,f):"object"==typeof i[".sv"]?resolveComplexDeferredValue(i[".sv"],h):void(0,eI.hu)(!1,"Unexpected server value: "+JSON.stringify(i,null,2)):i},resolveScalarDeferredValue=function(i,h,f){if("timestamp"===i)return f.timestamp;(0,eI.hu)(!1,"Unexpected server value: "+i)},resolveComplexDeferredValue=function(i,h,f){i.hasOwnProperty("increment")||(0,eI.hu)(!1,"Unexpected server value: "+JSON.stringify(i,null,2));let m=i.increment;"number"!=typeof m&&(0,eI.hu)(!1,"Unexpected increment value: "+m);let L=h.node();if((0,eI.hu)(null!=L,"Expected ChildrenNode.EMPTY_NODE for nulls"),!L.isLeafNode())return m;let en=L.getValue();return"number"!=typeof en?m:en+m};function resolveDeferredValue(i,h,f){let m;let L=i.getPriority().val(),en=resolveDeferredLeafValue(L,h.getImmediateChild(".priority"),f);if(!i.isLeafNode())return m=i,en!==i.getPriority().val()&&(m=m.updatePriority(new LeafNode(en))),i.forEachChild(e$,(i,L)=>{let en=resolveDeferredValue(L,h.getImmediateChild(i),f);en!==L&&(m=m.updateImmediateChild(i,en))}),m;{let m=resolveDeferredLeafValue(i.getValue(),h,f);return m!==i.getValue()||en!==i.getPriority().val()?new LeafNode(m,nodeFromJSON(en)):i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tree=class Tree{constructor(i="",h=null,f={children:{},childCount:0}){this.name=i,this.parent=h,this.node=f}};function treeSubTree(i,h){let f=h instanceof Path?h:new Path(h),m=i,L=pathGetFront(f);for(;null!==L;){let i=(0,eI.DV)(m.node.children,L)||{children:{},childCount:0};m=new Tree(L,m,i),L=pathGetFront(f=pathPopFront(f))}return m}function treeGetValue(i){return i.node.value}function treeSetValue(i,h){i.node.value=h,function treeUpdateParents(i){null!==i.parent&&function(i,h,f){let m=void 0===treeGetValue(f)&&!treeHasChildren(f),L=(0,eI.r3)(i.node.children,h);m&&L?(delete i.node.children[h],i.node.childCount--,treeUpdateParents(i)):m||L||(i.node.children[h]=f.node,i.node.childCount++,treeUpdateParents(i))}(i.parent,i.name,i)}(i)}function treeHasChildren(i){return i.node.childCount>0}function treeForEachChild(i,h){each(i.node.children,(f,m)=>{h(new Tree(f,i,m))})}function treeGetPath(i){return new Path(null===i.parent?i.name:treeGetPath(i.parent)+"/"+i.name)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eZ=/[\[\].#$\/\u0000-\u001F\u007F]/,e0=/[\[\].#$\u0000-\u001F\u007F]/,isValidKey=function(i){return"string"==typeof i&&0!==i.length&&!eZ.test(i)},isValidPathString=function(i){return"string"==typeof i&&0!==i.length&&!e0.test(i)},validateFirebaseData=function(i,h,f){let m=f instanceof Path?new ValidationPath(f,i):f;if(void 0===h)throw Error(i+"contains undefined "+validationPathToErrorString(m));if("function"==typeof h)throw Error(i+"contains a function "+validationPathToErrorString(m)+" with contents = "+h.toString());if(isInvalidJSONNumber(h))throw Error(i+"contains "+h.toString()+" "+validationPathToErrorString(m));if("string"==typeof h&&h.length>3495253.3333333335&&(0,eI.ug)(h)>10485760)throw Error(i+"contains a string greater than 10485760 utf8 bytes "+validationPathToErrorString(m)+" ('"+h.substring(0,50)+"...')");if(h&&"object"==typeof h){let f=!1,L=!1;if(each(h,(h,en)=>{if(".value"===h)f=!0;else if(".priority"!==h&&".sv"!==h&&(L=!0,!isValidKey(h)))throw Error(i+" contains an invalid key ("+h+") "+validationPathToErrorString(m)+'.  Keys must be non-empty strings and can\'t contain ".", "#", "$", "/", "[", or "]"');m.parts_.length>0&&(m.byteLength_+=1),m.parts_.push(h),m.byteLength_+=(0,eI.ug)(h),validationPathCheckValid(m),validateFirebaseData(i,en,m),function(i){let h=i.parts_.pop();i.byteLength_-=(0,eI.ug)(h),i.parts_.length>0&&(i.byteLength_-=1)}(m)}),f&&L)throw Error(i+' contains ".value" child '+validationPathToErrorString(m)+" in addition to actual children.")}},validatePathString=function(i,h,f,m){if((!m||void 0!==f)&&!isValidPathString(f))throw Error((0,eI.gK)(i,h)+'was an invalid path = "'+f+'". Paths must be non-empty strings and can\'t contain ".", "#", "$", "[", or "]"')},validateRootPathString=function(i,h,f,m){f&&(f=f.replace(/^\/*\.info(\/|$)/,"/")),validatePathString(i,h,f,m)},validateUrl=function(i,h){var f;let m=h.path.toString();if("string"!=typeof h.repoInfo.host||0===h.repoInfo.host.length||!isValidKey(h.repoInfo.namespace)&&"localhost"!==h.repoInfo.host.split(":")[0]||0!==m.length&&((f=m)&&(f=f.replace(/^\/*\.info(\/|$)/,"/")),!isValidPathString(f)))throw Error((0,eI.gK)(i,"url")+'must be a valid firebase URL and the path can\'t contain ".", "#", "$", "[", or "]".')};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let EventQueue=class EventQueue{constructor(){this.eventLists_=[],this.recursionDepth_=0}};function eventQueueQueueEvents(i,h){let f=null;for(let m=0;m<h.length;m++){let L=h[m],en=L.getPath();null===f||pathEquals(en,f.path)||(i.eventLists_.push(f),f=null),null===f&&(f={events:[],path:en}),f.events.push(L)}f&&i.eventLists_.push(f)}function eventQueueRaiseEventsAtPath(i,h,f){eventQueueQueueEvents(i,f),eventQueueRaiseQueuedEventsMatchingPredicate(i,i=>pathEquals(i,h))}function eventQueueRaiseEventsForChangedPath(i,h,f){eventQueueQueueEvents(i,f),eventQueueRaiseQueuedEventsMatchingPredicate(i,i=>pathContains(i,h)||pathContains(h,i))}function eventQueueRaiseQueuedEventsMatchingPredicate(i,h){i.recursionDepth_++;let f=!0;for(let m=0;m<i.eventLists_.length;m++){let L=i.eventLists_[m];if(L){let en=L.path;h(en)?(function(i){for(let h=0;h<i.events.length;h++){let f=i.events[h];if(null!==f){i.events[h]=null;let m=f.getEventRunner();ex&&log("event: "+f.toString()),exceptionGuard(m)}}}(i.eventLists_[m]),i.eventLists_[m]=null):f=!1}}f&&(i.eventLists_=[]),i.recursionDepth_--}let Repo=class Repo{constructor(i,h,f,m){this.repoInfo_=i,this.forceRestClient_=h,this.authTokenProvider_=f,this.appCheckProvider_=m,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new EventQueue,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=newSparseSnapshotTree(),this.transactionQueueTree_=new Tree,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}};function repoGenerateServerValues(i){var h;return(h=h={timestamp:function(i){let h=i.infoData_.getNode(new Path(".info/serverTimeOffset")),f=h.val()||0;return new Date().getTime()+f}(i)}).timestamp=h.timestamp||new Date().getTime(),h}function repoOnDataUpdate(i,h,f,m,L){i.dataUpdateCount++;let en=new Path(h);f=i.interceptServerDataCallback_?i.interceptServerDataCallback_(h,f):f;let er=[];if(L){if(m){let h=(0,eI.UI)(f,i=>nodeFromJSON(i));er=function(i,h,f,m){let L=syncTreeQueryKeyForTag_(i,m);if(!L)return[];{let m=syncTreeParseQueryKey_(L),en=m.path,er=m.queryId,ei=newRelativePath(en,h),es=ImmutableTree.fromObject(f),eo=new Merge(newOperationSourceServerTaggedQuery(er),ei,es);return syncTreeApplyTaggedOperation_(i,en,eo)}}(i.serverSyncTree_,en,h,L)}else{let h=nodeFromJSON(f);er=function(i,h,f,m){let L=syncTreeQueryKeyForTag_(i,m);if(null==L)return[];{let m=syncTreeParseQueryKey_(L),en=m.path,er=m.queryId,ei=newRelativePath(en,h),es=new Overwrite(newOperationSourceServerTaggedQuery(er),ei,f);return syncTreeApplyTaggedOperation_(i,en,es)}}(i.serverSyncTree_,en,h,L)}}else if(m){let h=(0,eI.UI)(f,i=>nodeFromJSON(i));er=function(i,h,f){let m=ImmutableTree.fromObject(f);return syncTreeApplyOperationToSyncPoints_(i,new Merge(newOperationSourceServer(),h,m))}(i.serverSyncTree_,en,h)}else{let h=nodeFromJSON(f);er=syncTreeApplyServerOverwrite(i.serverSyncTree_,en,h)}let ei=en;er.length>0&&(ei=repoRerunTransactions(i,en)),eventQueueRaiseEventsForChangedPath(i.eventQueue_,ei,er)}function repoOnConnectStatus(i,h){repoUpdateInfo(i,"connected",h),!1===h&&function(i){repoLog(i,"onDisconnectEvents");let h=repoGenerateServerValues(i),f=newSparseSnapshotTree();sparseSnapshotTreeForEachTree(i.onDisconnect_,newEmptyPath(),(m,L)=>{var en;let er=(en=i.serverSyncTree_,resolveDeferredValue(L,new DeferredValueProvider(en,m),h));!function sparseSnapshotTreeRemember(i,h,f){if(pathIsEmpty(h))i.value=f,i.children.clear();else if(null!==i.value)i.value=i.value.updateChild(h,f);else{let m=pathGetFront(h);i.children.has(m)||i.children.set(m,newSparseSnapshotTree());let L=i.children.get(m);sparseSnapshotTreeRemember(L,h=pathPopFront(h),f)}}(f,m,er)});let m=[];sparseSnapshotTreeForEachTree(f,newEmptyPath(),(h,f)=>{m=m.concat(syncTreeApplyServerOverwrite(i.serverSyncTree_,h,f));let L=function(i,h){let f=treeGetPath(repoGetAncestorTransactionNode(i,h)),m=treeSubTree(i.transactionQueueTree_,h);return function(i,h,f){let m=i.parent;for(;null!==m;){if(h(m))return!0;m=m.parent}}(m,h=>{repoAbortTransactionsOnNode(i,h)}),repoAbortTransactionsOnNode(i,m),function treeForEachDescendant(i,h,f,m){f&&!m&&h(i),treeForEachChild(i,i=>{treeForEachDescendant(i,h,!0,m)}),f&&m&&h(i)}(m,h=>{repoAbortTransactionsOnNode(i,h)}),f}(i,h);repoRerunTransactions(i,L)}),i.onDisconnect_=newSparseSnapshotTree(),eventQueueRaiseEventsForChangedPath(i.eventQueue_,newEmptyPath(),m)}(i)}function repoUpdateInfo(i,h,f){let m=new Path("/.info/"+h),L=nodeFromJSON(f);i.infoData_.updateSnapshot(m,L);let en=syncTreeApplyServerOverwrite(i.infoSyncTree_,m,L);eventQueueRaiseEventsForChangedPath(i.eventQueue_,m,en)}function repoRemoveEventCallbackForQuery(i,h,f){let m;m=".info"===pathGetFront(h._path)?syncTreeRemoveEventRegistration(i.infoSyncTree_,h,f):syncTreeRemoveEventRegistration(i.serverSyncTree_,h,f),eventQueueRaiseEventsAtPath(i.eventQueue_,h._path,m)}function repoLog(i,...h){let f="";i.persistentConnection_&&(f=i.persistentConnection_.id+":"),log(f,...h)}function repoGetLatestState(i,h,f){return syncTreeCalcCompleteEventCache(i.serverSyncTree_,h,f)||ChildrenNode.EMPTY_NODE}function repoRerunTransactions(i,h){let f=repoGetAncestorTransactionNode(i,h),m=treeGetPath(f),L=repoBuildTransactionQueue(i,f);return function(i,h,f){if(0===h.length)return;let m=[],L=[],en=h.filter(i=>0===i.status),er=en.map(i=>i.currentWriteId);for(let en=0;en<h.length;en++){let ei=h[en],es=newRelativePath(f,ei.path),eo=!1,el;if((0,eI.hu)(null!==es,"rerunTransactionsUnderNode_: relativePath should not be null."),4===ei.status)eo=!0,el=ei.abortReason,L=L.concat(syncTreeAckUserWrite(i.serverSyncTree_,ei.currentWriteId,!0));else if(0===ei.status){if(ei.retryCount>=25)eo=!0,el="maxretry",L=L.concat(syncTreeAckUserWrite(i.serverSyncTree_,ei.currentWriteId,!0));else{let f=repoGetLatestState(i,ei.path,er);ei.currentInputSnapshot=f;let m=h[en].update(f.val());if(void 0!==m){validateFirebaseData("transaction failed: Data returned ",m,ei.path);let h=nodeFromJSON(m),en="object"==typeof m&&null!=m&&(0,eI.r3)(m,".priority");en||(h=h.updatePriority(f.getPriority()));let es=ei.currentWriteId,eo=repoGenerateServerValues(i),el=resolveDeferredValue(h,new ExistingValueProvider(f),eo);ei.currentOutputSnapshotRaw=h,ei.currentOutputSnapshotResolved=el,ei.currentWriteId=i.nextWriteId_++,er.splice(er.indexOf(es),1),L=(L=L.concat(function(i,h,f,m,L){var en,er;return(en=i.pendingWriteTree_,er=L,(0,eI.hu)(m>en.lastWriteId,"Stacking an older write on top of newer ones"),void 0===er&&(er=!0),en.allWrites.push({path:h,snap:f,writeId:m,visible:er}),er&&(en.visibleWrites=compoundWriteAddWrite(en.visibleWrites,h,f)),en.lastWriteId=m,L)?syncTreeApplyOperationToSyncPoints_(i,new Overwrite(newOperationSourceUser(),h,f)):[]}(i.serverSyncTree_,ei.path,el,ei.currentWriteId,ei.applyLocally))).concat(syncTreeAckUserWrite(i.serverSyncTree_,es,!0))}else eo=!0,el="nodata",L=L.concat(syncTreeAckUserWrite(i.serverSyncTree_,ei.currentWriteId,!0))}}eventQueueRaiseEventsForChangedPath(i.eventQueue_,f,L),L=[],eo&&(h[en].status=2,setTimeout(h[en].unwatcher,Math.floor(0)),h[en].onComplete&&("nodata"===el?m.push(()=>h[en].onComplete(null,!1,h[en].currentInputSnapshot)):m.push(()=>h[en].onComplete(Error(el),!1,null))))}repoPruneCompletedTransactionsBelowNode(i,i.transactionQueueTree_);for(let i=0;i<m.length;i++)exceptionGuard(m[i]);(function repoSendReadyTransactions(i,h=i.transactionQueueTree_){if(h||repoPruneCompletedTransactionsBelowNode(i,h),treeGetValue(h)){let f=repoBuildTransactionQueue(i,h);(0,eI.hu)(f.length>0,"Sending zero length transaction queue");let m=f.every(i=>0===i.status);m&&function(i,h,f){let m=f.map(i=>i.currentWriteId),L=repoGetLatestState(i,h,m),en=L,er=L.hash();for(let i=0;i<f.length;i++){let m=f[i];(0,eI.hu)(0===m.status,"tryToSendTransactionQueue_: items in queue should all be run."),m.status=1,m.retryCount++;let L=newRelativePath(h,m.path);en=en.updateChild(L,m.currentOutputSnapshotRaw)}let ei=en.val(!0);i.server_.put(h.toString(),ei,m=>{repoLog(i,"transaction put response",{path:h.toString(),status:m});let L=[];if("ok"===m){let m=[];for(let h=0;h<f.length;h++)f[h].status=2,L=L.concat(syncTreeAckUserWrite(i.serverSyncTree_,f[h].currentWriteId)),f[h].onComplete&&m.push(()=>f[h].onComplete(null,!0,f[h].currentOutputSnapshotResolved)),f[h].unwatcher();repoPruneCompletedTransactionsBelowNode(i,treeSubTree(i.transactionQueueTree_,h)),repoSendReadyTransactions(i,i.transactionQueueTree_),eventQueueRaiseEventsForChangedPath(i.eventQueue_,h,L);for(let i=0;i<m.length;i++)exceptionGuard(m[i])}else{if("datastale"===m)for(let i=0;i<f.length;i++)3===f[i].status?f[i].status=4:f[i].status=0;else{warn("transaction at "+h.toString()+" failed: "+m);for(let i=0;i<f.length;i++)f[i].status=4,f[i].abortReason=m}repoRerunTransactions(i,h)}},er)}(i,treeGetPath(h),f)}else treeHasChildren(h)&&treeForEachChild(h,h=>{repoSendReadyTransactions(i,h)})})(i,i.transactionQueueTree_)}(i,L,m),m}function repoGetAncestorTransactionNode(i,h){let f;let m=i.transactionQueueTree_;for(f=pathGetFront(h);null!==f&&void 0===treeGetValue(m);)m=treeSubTree(m,f),f=pathGetFront(h=pathPopFront(h));return m}function repoBuildTransactionQueue(i,h){let f=[];return function repoAggregateTransactionQueuesForNode(i,h,f){let m=treeGetValue(h);if(m)for(let i=0;i<m.length;i++)f.push(m[i]);treeForEachChild(h,h=>{repoAggregateTransactionQueuesForNode(i,h,f)})}(i,h,f),f.sort((i,h)=>i.order-h.order),f}function repoPruneCompletedTransactionsBelowNode(i,h){let f=treeGetValue(h);if(f){let i=0;for(let h=0;h<f.length;h++)2!==f[h].status&&(f[i]=f[h],i++);f.length=i,treeSetValue(h,f.length>0?f:void 0)}treeForEachChild(h,h=>{repoPruneCompletedTransactionsBelowNode(i,h)})}function repoAbortTransactionsOnNode(i,h){let f=treeGetValue(h);if(f){let m=[],L=[],en=-1;for(let h=0;h<f.length;h++)3===f[h].status||(1===f[h].status?((0,eI.hu)(en===h-1,"All SENT items should be at beginning of queue."),en=h,f[h].status=3,f[h].abortReason="set"):((0,eI.hu)(0===f[h].status,"Unexpected transaction status in abort"),f[h].unwatcher(),L=L.concat(syncTreeAckUserWrite(i.serverSyncTree_,f[h].currentWriteId,!0)),f[h].onComplete&&m.push(f[h].onComplete.bind(null,Error("set"),!1,null))));-1===en?treeSetValue(h,void 0):f.length=en+1,eventQueueRaiseEventsForChangedPath(i.eventQueue_,treeGetPath(h),L);for(let i=0;i<m.length;i++)exceptionGuard(m[i])}}let parseRepoInfo=function(i,h){let f=parseDatabaseURL(i),m=f.namespace;"firebase.com"===f.domain&&fatal(f.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),m&&"undefined"!==m||"localhost"===f.domain||fatal("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),f.secure||warnIfPageIsSecure();let L="ws"===f.scheme||"wss"===f.scheme;return{repoInfo:new RepoInfo(f.host,f.secure,m,L,h,"",m!==f.subdomain),path:new Path(f.pathString)}},parseDatabaseURL=function(i){let h="",f="",m="",L="",en="",er=!0,ei="https",es=443;if("string"==typeof i){let eo=i.indexOf("//");eo>=0&&(ei=i.substring(0,eo-1),i=i.substring(eo+2));let el=i.indexOf("/");-1===el&&(el=i.length);let eh=i.indexOf("?");-1===eh&&(eh=i.length),h=i.substring(0,Math.min(el,eh)),el<eh&&(L=/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i){let h="",f=i.split("/");for(let i=0;i<f.length;i++)if(f[i].length>0){let m=f[i];try{m=decodeURIComponent(m.replace(/\+/g," "))}catch(i){}h+="/"+m}return h}(i.substring(el,eh)));let eu=function(i){let h={};for(let f of("?"===i.charAt(0)&&(i=i.substring(1)),i.split("&"))){if(0===f.length)continue;let m=f.split("=");2===m.length?h[decodeURIComponent(m[0])]=decodeURIComponent(m[1]):warn(`Invalid query segment '${f}' in query '${i}'`)}return h}(i.substring(Math.min(i.length,eh)));(eo=h.indexOf(":"))>=0?(er="https"===ei||"wss"===ei,es=parseInt(h.substring(eo+1),10)):eo=h.length;let ec=h.slice(0,eo);if("localhost"===ec.toLowerCase())f="localhost";else if(ec.split(".").length<=2)f=ec;else{let i=h.indexOf(".");m=h.substring(0,i).toLowerCase(),f=h.substring(i+1),en=m}"ns"in eu&&(en=eu.ns)}return{host:h,port:es,domain:f,subdomain:m,secure:er,scheme:ei,pathString:L,namespace:en}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let DataEvent=class DataEvent{constructor(i,h,f,m){this.eventType=i,this.eventRegistration=h,this.snapshot=f,this.prevName=m}getPath(){let i=this.snapshot.ref;return"value"===this.eventType?i._path:i.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+(0,eI.Wl)(this.snapshot.exportVal())}};let CancelEvent=class CancelEvent{constructor(i,h,f){this.eventRegistration=i,this.error=h,this.path=f}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CallbackContext=class CallbackContext{constructor(i,h){this.snapshotCallback=i,this.cancelCallback=h}onValue(i,h){this.snapshotCallback.call(null,i,h)}onCancel(i){return(0,eI.hu)(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,i)}get hasCancelCallback(){return!!this.cancelCallback}matches(i){return this.snapshotCallback===i.snapshotCallback||void 0!==this.snapshotCallback.userCallback&&this.snapshotCallback.userCallback===i.snapshotCallback.userCallback&&this.snapshotCallback.context===i.snapshotCallback.context}};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let QueryImpl=class QueryImpl{constructor(i,h,f,m){this._repo=i,this._path=h,this._queryParams=f,this._orderByCalled=m}get key(){return pathIsEmpty(this._path)?null:pathGetBack(this._path)}get ref(){return new ReferenceImpl(this._repo,this._path)}get _queryIdentifier(){let i=queryParamsGetQueryObject(this._queryParams),h=ObjectToUniqueKey(i);return"{}"===h?"default":h}get _queryObject(){return queryParamsGetQueryObject(this._queryParams)}isEqual(i){if(!((i=(0,eI.m9)(i))instanceof QueryImpl))return!1;let h=this._repo===i._repo,f=pathEquals(this._path,i._path),m=this._queryIdentifier===i._queryIdentifier;return h&&f&&m}toJSON(){return this.toString()}toString(){return this._repo.toString()+function(i){let h="";for(let f=i.pieceNum_;f<i.pieces_.length;f++)""!==i.pieces_[f]&&(h+="/"+encodeURIComponent(String(i.pieces_[f])));return h||"/"}(this._path)}};let ReferenceImpl=class ReferenceImpl extends QueryImpl{constructor(i,h){super(i,h,new QueryParams,!1)}get parent(){let i=pathParent(this._path);return null===i?null:new ReferenceImpl(this._repo,i)}get root(){let i=this;for(;null!==i.parent;)i=i.parent;return i}};let DataSnapshot=class DataSnapshot{constructor(i,h,f){this._node=i,this.ref=h,this._index=f}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(i){let h=new Path(i),f=child(this.ref,i);return new DataSnapshot(this._node.getChild(h),f,e$)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(i){if(this._node.isLeafNode())return!1;let h=this._node;return!!h.forEachChild(this._index,(h,f)=>i(new DataSnapshot(f,child(this.ref,h),e$)))}hasChild(i){let h=new Path(i);return!this._node.getChild(h).isEmpty()}hasChildren(){return!this._node.isLeafNode()&&!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}};function child(i,h){return null===pathGetFront((i=(0,eI.m9)(i))._path)?validateRootPathString("child","path",h,!1):validatePathString("child","path",h,!1),new ReferenceImpl(i._repo,pathChild(i._path,h))}let ValueEventRegistration=class ValueEventRegistration{constructor(i){this.callbackContext=i}respondsTo(i){return"value"===i}createEvent(i,h){let f=h._queryParams.getIndex();return new DataEvent("value",this,new DataSnapshot(i.snapshotNode,new ReferenceImpl(h._repo,h._path),f))}getEventRunner(i){return"cancel"===i.getEventType()?()=>this.callbackContext.onCancel(i.error):()=>this.callbackContext.onValue(i.snapshot,null)}createCancelEvent(i,h){return this.callbackContext.hasCancelCallback?new CancelEvent(this,i,h):null}matches(i){return i instanceof ValueEventRegistration&&(!i.callbackContext||!this.callbackContext||i.callbackContext.matches(this.callbackContext))}hasAnyCallback(){return null!==this.callbackContext}};let ChildEventRegistration=class ChildEventRegistration{constructor(i,h){this.eventType=i,this.callbackContext=h}respondsTo(i){let h="children_added"===i?"child_added":i;return h="children_removed"===h?"child_removed":h,this.eventType===h}createCancelEvent(i,h){return this.callbackContext.hasCancelCallback?new CancelEvent(this,i,h):null}createEvent(i,h){(0,eI.hu)(null!=i.childName,"Child events should have a childName.");let f=child(new ReferenceImpl(h._repo,h._path),i.childName),m=h._queryParams.getIndex();return new DataEvent(i.type,this,new DataSnapshot(i.snapshotNode,f,m),i.prevName)}getEventRunner(i){return"cancel"===i.getEventType()?()=>this.callbackContext.onCancel(i.error):()=>this.callbackContext.onValue(i.snapshot,i.prevName)}matches(i){return i instanceof ChildEventRegistration&&this.eventType===i.eventType&&(!this.callbackContext||!i.callbackContext||this.callbackContext.matches(i.callbackContext))}hasAnyCallback(){return!!this.callbackContext}};function addEventListener(i,h,f,m,L){var en;let er,ei;if("object"==typeof m&&(er=void 0,L=m),"function"==typeof m&&(er=m),L&&L.onlyOnce){let h=f,onceCallback=(f,m)=>{repoRemoveEventCallbackForQuery(i._repo,i,eo),h(f,m)};onceCallback.userCallback=f.userCallback,onceCallback.context=f.context,f=onceCallback}let es=new CallbackContext(f,er||void 0),eo="value"===h?new ValueEventRegistration(es):new ChildEventRegistration(h,es);return en=i._repo,ei=".info"===pathGetFront(i._path)?syncTreeAddEventRegistration(en.infoSyncTree_,i,eo):syncTreeAddEventRegistration(en.serverSyncTree_,i,eo),eventQueueRaiseEventsAtPath(en.eventQueue_,i._path,ei),()=>repoRemoveEventCallbackForQuery(i._repo,i,eo)}(0,eI.hu)(!eh,"__referenceConstructor has already been defined"),eh=ReferenceImpl,(0,eI.hu)(!eu,"__referenceConstructor has already been defined"),eu=ReferenceImpl;let e1={};let Database=class Database{constructor(i,h){this._repoInternal=i,this.app=h,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(function(i,h,f){if(i.stats_=statsManagerGetCollection(i.repoInfo_),i.forceRestClient_||beingCrawled())i.server_=new ReadonlyRestClient(i.repoInfo_,(h,f,m,L)=>{repoOnDataUpdate(i,h,f,m,L)},i.authTokenProvider_,i.appCheckProvider_),setTimeout(()=>repoOnConnectStatus(i,!0),0);else{if(null!=f){if("object"!=typeof f)throw Error("Only objects are supported for option databaseAuthVariableOverride");try{(0,eI.Wl)(f)}catch(i){throw Error("Invalid authOverride provided: "+i)}}i.persistentConnection_=new PersistentConnection(i.repoInfo_,h,(h,f,m,L)=>{repoOnDataUpdate(i,h,f,m,L)},h=>{repoOnConnectStatus(i,h)},h=>{each(h,(h,f)=>{repoUpdateInfo(i,h,f)})},i.authTokenProvider_,i.appCheckProvider_,f),i.server_=i.persistentConnection_}i.authTokenProvider_.addTokenChangeListener(h=>{i.server_.refreshAuthToken(h)}),i.appCheckProvider_.addTokenChangeListener(h=>{i.server_.refreshAppCheckToken(h.token)}),i.statsReporter_=function(i,h){let f=i.toString();return eV[f]||(eV[f]=h()),eV[f]}(i.repoInfo_,()=>new StatsReporter(i.stats_,i.server_)),i.infoData_=new SnapshotHolder,i.infoSyncTree_=new SyncTree({startListening:(h,f,m,L)=>{let en=[],er=i.infoData_.getNode(h._path);return er.isEmpty()||(en=syncTreeApplyServerOverwrite(i.infoSyncTree_,h._path,er),setTimeout(()=>{L("ok")},0)),en},stopListening:()=>{}}),repoUpdateInfo(i,"connected",!1),i.serverSyncTree_=new SyncTree({startListening:(h,f,m,L)=>(i.server_.listen(h,m,f,(f,m)=>{let en=L(f,m);eventQueueRaiseEventsForChangedPath(i.eventQueue_,h._path,en)}),[]),stopListening:(h,f)=>{i.server_.unlisten(h,f)}})}(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ReferenceImpl(this._repo,newEmptyPath())),this._rootInternal}_delete(){return null!==this._rootInternal&&(function(i,h){let f=e1[h];f&&f[i.key]===i||fatal(`Database ${h}(${i.repoInfo_}) has already been deleted.`),i.persistentConnection_&&i.persistentConnection_.interrupt("repo_interrupt"),delete f[i.key]}(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(i){null===this._rootInternal&&fatal("Cannot call "+i+" on a deleted database.")}};PersistentConnection.prototype.simpleListen=function(i,h){this.sendRequest("q",{p:i},h)},PersistentConnection.prototype.echo=function(i,h){this.sendRequest("echo",{d:i},h)},ek=ew.Jn,(0,ew.Xd)(new eC.wA("database",(i,{instanceIdentifier:h})=>{let f=i.getProvider("app").getImmediate(),m=i.getProvider("auth-internal"),L=i.getProvider("app-check-internal");return function(i,h,f,m,L){var en,er;let ei,es,eo,el,eh=m||i.options.databaseURL;void 0===eh&&(i.options.projectId||fatal("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),log("Using default host for project ",i.options.projectId),eh=`${i.options.projectId}-default-rtdb.firebaseio.com`);let eu=parseRepoInfo(eh,L),ec=eu.repoInfo;void 0!==eE&&eE.env&&(eo=eE.env.FIREBASE_DATABASE_EMULATOR_HOST),eo?(el=!0,ec=(eu=parseRepoInfo(eh=`http://${eo}?ns=${ec.namespace}`,L)).repoInfo):el=!eu.repoInfo.secure;let ep=L&&el?new EmulatorTokenProvider(EmulatorTokenProvider.OWNER):new FirebaseAuthTokenProvider(i.name,i.options,h);validateUrl("Invalid Firebase Database URL",eu),pathIsEmpty(eu.path)||fatal("Database URL must point to the root of a Firebase Database (not including a child path).");let ef=(en=ec,er=new AppCheckTokenProvider(i.name,f),(ei=e1[i.name])||(ei={},e1[i.name]=ei),(es=ei[en.toURLString()])&&fatal("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),es=new Repo(en,!1,ep,er),ei[en.toURLString()]=es,es);return new Database(ef,i)}(f,m,L,h)},"PUBLIC").setMultipleInstances(!0)),(0,ew.KN)(eS,eP,void 0),(0,ew.KN)(eS,eP,"esm2017"),/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(0,ew.KN)("firebase","9.23.0","app"),f(6100);var e2=f(7004);f(6650),f(6292);let e4="@firebase/remote-config",e9="0.4.4",e6=new eI.LL("remoteconfig","Remote Config",{"registration-window":"Undefined window object. This SDK only supports usage in a browser environment.","registration-project-id":"Undefined project identifier. Check Firebase app initialization.","registration-api-key":"Undefined API key. Check Firebase app initialization.","registration-app-id":"Undefined app identifier. Check Firebase app initialization.","storage-open":"Error thrown when opening storage. Original error: {$originalErrorMessage}.","storage-get":"Error thrown when reading from storage. Original error: {$originalErrorMessage}.","storage-set":"Error thrown when writing to storage. Original error: {$originalErrorMessage}.","storage-delete":"Error thrown when deleting from storage. Original error: {$originalErrorMessage}.","fetch-client-network":"Fetch client failed to connect to a network. Check Internet connection. Original error: {$originalErrorMessage}.","fetch-timeout":'The config fetch request timed out.  Configure timeout using "fetchTimeoutMillis" SDK setting.',"fetch-throttle":'The config fetch request timed out while in an exponential backoff state. Configure timeout using "fetchTimeoutMillis" SDK setting. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.',"fetch-client-parse":"Fetch client could not parse response. Original error: {$originalErrorMessage}.","fetch-status":"Fetch server returned an HTTP error status. HTTP status: {$httpStatus}.","indexed-db-unavailable":"Indexed DB is not supported by current browser"});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let CachingClient=class CachingClient{constructor(i,h,f,m){this.client=i,this.storage=h,this.storageCache=f,this.logger=m}isCachedDataFresh(i,h){if(!h)return this.logger.debug("Config fetch cache check. Cache unpopulated."),!1;let f=Date.now()-h,m=f<=i;return this.logger.debug(`Config fetch cache check. Cache age millis: ${f}. Cache max age millis (minimumFetchIntervalMillis setting): ${i}. Is cache hit: ${m}.`),m}async fetch(i){let[h,f]=await Promise.all([this.storage.getLastSuccessfulFetchTimestampMillis(),this.storage.getLastSuccessfulFetchResponse()]);if(f&&this.isCachedDataFresh(i.cacheMaxAgeMillis,h))return f;i.eTag=f&&f.eTag;let m=await this.client.fetch(i),L=[this.storageCache.setLastSuccessfulFetchTimestampMillis(Date.now())];return 200===m.status&&L.push(this.storage.setLastSuccessfulFetchResponse(m)),await Promise.all(L),m}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let RestClient=class RestClient{constructor(i,h,f,m,L,en){this.firebaseInstallations=i,this.sdkVersion=h,this.namespace=f,this.projectId=m,this.apiKey=L,this.appId=en}async fetch(i){let h,f,m;let[L,en]=await Promise.all([this.firebaseInstallations.getId(),this.firebaseInstallations.getToken()]),er=window.FIREBASE_REMOTE_CONFIG_URL_BASE||"https://firebaseremoteconfig.googleapis.com",ei=`${er}/v1/projects/${this.projectId}/namespaces/${this.namespace}:fetch?key=${this.apiKey}`,es={"Content-Type":"application/json","Content-Encoding":"gzip","If-None-Match":i.eTag||"*"},eo={sdk_version:this.sdkVersion,app_instance_id:L,app_instance_id_token:en,app_id:this.appId,language_code:/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(i=navigator){return i.languages&&i.languages[0]||i.language}()},el={method:"POST",headers:es,body:JSON.stringify(eo)},eh=fetch(ei,el),eu=new Promise((h,f)=>{i.signal.addEventListener(()=>{let i=Error("The operation was aborted.");i.name="AbortError",f(i)})});try{await Promise.race([eh,eu]),h=await eh}catch(h){let i="fetch-client-network";throw(null==h?void 0:h.name)==="AbortError"&&(i="fetch-timeout"),e6.create(i,{originalErrorMessage:null==h?void 0:h.message})}let ec=h.status,ep=h.headers.get("ETag")||void 0;if(200===h.status){let i;try{i=await h.json()}catch(i){throw e6.create("fetch-client-parse",{originalErrorMessage:null==i?void 0:i.message})}f=i.entries,m=i.state}if("INSTANCE_STATE_UNSPECIFIED"===m?ec=500:"NO_CHANGE"===m?ec=304:("NO_TEMPLATE"===m||"EMPTY_CONFIG"===m)&&(f={}),304!==ec&&200!==ec)throw e6.create("fetch-status",{httpStatus:ec});return{status:ec,eTag:ep,config:f}}};let RetryingClient=class RetryingClient{constructor(i,h){this.client=i,this.storage=h}async fetch(i){let h=await this.storage.getThrottleMetadata()||{backoffCount:0,throttleEndTimeMillis:Date.now()};return this.attemptFetch(i,h)}async attemptFetch(i,{throttleEndTimeMillis:h,backoffCount:f}){var m;await (m=i.signal,new Promise((i,f)=>{let L=Math.max(h-Date.now(),0),en=setTimeout(i,L);m.addEventListener(()=>{clearTimeout(en),f(e6.create("fetch-throttle",{throttleEndTimeMillis:h}))})}));try{let h=await this.client.fetch(i);return await this.storage.deleteThrottleMetadata(),h}catch(m){if(!function(i){if(!(i instanceof eI.ZR)||!i.customData)return!1;let h=Number(i.customData.httpStatus);return 429===h||500===h||503===h||504===h}(m))throw m;let h={throttleEndTimeMillis:Date.now()+(0,eI.$s)(f),backoffCount:f+1};return await this.storage.setThrottleMetadata(h),this.attemptFetch(i,h)}}};let RemoteConfig=class RemoteConfig{constructor(i,h,f,m,L){this.app=i,this._client=h,this._storageCache=f,this._storage=m,this._logger=L,this._isInitializationComplete=!1,this.settings={fetchTimeoutMillis:6e4,minimumFetchIntervalMillis:432e5},this.defaultConfig={}}get fetchTimeMillis(){return this._storageCache.getLastSuccessfulFetchTimestampMillis()||-1}get lastFetchStatus(){return this._storageCache.getLastFetchStatus()||"no-fetch-yet"}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function toFirebaseError(i,h){let f=i.target.error||void 0;return e6.create(h,{originalErrorMessage:f&&(null==f?void 0:f.message)})}let e5="app_namespace_store";let Storage=class Storage{constructor(i,h,f,m=new Promise((i,h)=>{try{let f=indexedDB.open("firebase_remote_config",1);f.onerror=i=>{h(toFirebaseError(i,"storage-open"))},f.onsuccess=h=>{i(h.target.result)},f.onupgradeneeded=i=>{let h=i.target.result;0===i.oldVersion&&h.createObjectStore(e5,{keyPath:"compositeKey"})}}catch(i){h(e6.create("storage-open",{originalErrorMessage:null==i?void 0:i.message}))}})){this.appId=i,this.appName=h,this.namespace=f,this.openDbPromise=m}getLastFetchStatus(){return this.get("last_fetch_status")}setLastFetchStatus(i){return this.set("last_fetch_status",i)}getLastSuccessfulFetchTimestampMillis(){return this.get("last_successful_fetch_timestamp_millis")}setLastSuccessfulFetchTimestampMillis(i){return this.set("last_successful_fetch_timestamp_millis",i)}getLastSuccessfulFetchResponse(){return this.get("last_successful_fetch_response")}setLastSuccessfulFetchResponse(i){return this.set("last_successful_fetch_response",i)}getActiveConfig(){return this.get("active_config")}setActiveConfig(i){return this.set("active_config",i)}getActiveConfigEtag(){return this.get("active_config_etag")}setActiveConfigEtag(i){return this.set("active_config_etag",i)}getThrottleMetadata(){return this.get("throttle_metadata")}setThrottleMetadata(i){return this.set("throttle_metadata",i)}deleteThrottleMetadata(){return this.delete("throttle_metadata")}async get(i){let h=await this.openDbPromise;return new Promise((f,m)=>{let L=h.transaction([e5],"readonly"),en=L.objectStore(e5),er=this.createCompositeKey(i);try{let i=en.get(er);i.onerror=i=>{m(toFirebaseError(i,"storage-get"))},i.onsuccess=i=>{let h=i.target.result;h?f(h.value):f(void 0)}}catch(i){m(e6.create("storage-get",{originalErrorMessage:null==i?void 0:i.message}))}})}async set(i,h){let f=await this.openDbPromise;return new Promise((m,L)=>{let en=f.transaction([e5],"readwrite"),er=en.objectStore(e5),ei=this.createCompositeKey(i);try{let i=er.put({compositeKey:ei,value:h});i.onerror=i=>{L(toFirebaseError(i,"storage-set"))},i.onsuccess=()=>{m()}}catch(i){L(e6.create("storage-set",{originalErrorMessage:null==i?void 0:i.message}))}})}async delete(i){let h=await this.openDbPromise;return new Promise((f,m)=>{let L=h.transaction([e5],"readwrite"),en=L.objectStore(e5),er=this.createCompositeKey(i);try{let i=en.delete(er);i.onerror=i=>{m(toFirebaseError(i,"storage-delete"))},i.onsuccess=()=>{f()}}catch(i){m(e6.create("storage-delete",{originalErrorMessage:null==i?void 0:i.message}))}})}createCompositeKey(i){return[this.appId,this.appName,this.namespace,i].join()}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let StorageCache=class StorageCache{constructor(i){this.storage=i}getLastFetchStatus(){return this.lastFetchStatus}getLastSuccessfulFetchTimestampMillis(){return this.lastSuccessfulFetchTimestampMillis}getActiveConfig(){return this.activeConfig}async loadFromStorage(){let i=this.storage.getLastFetchStatus(),h=this.storage.getLastSuccessfulFetchTimestampMillis(),f=this.storage.getActiveConfig(),m=await i;m&&(this.lastFetchStatus=m);let L=await h;L&&(this.lastSuccessfulFetchTimestampMillis=L);let en=await f;en&&(this.activeConfig=en)}setLastFetchStatus(i){return this.lastFetchStatus=i,this.storage.setLastFetchStatus(i)}setLastSuccessfulFetchTimestampMillis(i){return this.lastSuccessfulFetchTimestampMillis=i,this.storage.setLastSuccessfulFetchTimestampMillis(i)}setActiveConfig(i){return this.activeConfig=i,this.storage.setActiveConfig(i)}};(0,ew.Xd)(new eC.wA("remote-config",function(i,{instanceIdentifier:h}){let f=i.getProvider("app").getImmediate(),m=i.getProvider("installations-internal").getImmediate();if("undefined"==typeof window)throw e6.create("registration-window");if(!(0,eI.hl)())throw e6.create("indexed-db-unavailable");let{projectId:L,apiKey:en,appId:er}=f.options;if(!L)throw e6.create("registration-project-id");if(!en)throw e6.create("registration-api-key");if(!er)throw e6.create("registration-app-id");h=h||"firebase";let ei=new Storage(er,f.name,h),es=new StorageCache(ei),eo=new eT.Yd(e4);eo.logLevel=eT.in.ERROR;let el=new RestClient(m,ew.Jn,h,L,en,er),eh=new RetryingClient(el,ei),eu=new CachingClient(eh,ei,es,eo),ec=new RemoteConfig(f,eu,es,ei,eo);return function(i){let h=(0,eI.m9)(i);h._initializePromise||(h._initializePromise=h._storageCache.loadFromStorage().then(()=>{h._isInitializationComplete=!0})),h._initializePromise}(ec),ec},"PUBLIC").setMultipleInstances(!0)),(0,ew.KN)(e4,e9),(0,ew.KN)(e4,e9,"esm2017");var ce=function(i,h){return(ce=Object.setPrototypeOf||({__proto__:[]})instanceof Array&&function(i,h){i.__proto__=h}||function(i,h){for(var f in h)Object.prototype.hasOwnProperty.call(h,f)&&(i[f]=h[f])})(i,h)};function x(i,h){if("function"!=typeof h&&null!==h)throw TypeError("Class extends value "+String(h)+" is not a constructor or null");function n(){this.constructor=i}ce(i,h),i.prototype=null===h?Object.create(h):(n.prototype=h.prototype,new n)}function He(i,h){var f,m,L,en,er={label:0,sent:function(){if(1&L[0])throw L[1];return L[1]},trys:[],ops:[]};return en={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(en[Symbol.iterator]=function(){return this}),en;function a(en){return function(ei){return function(en){if(f)throw TypeError("Generator is already executing.");for(;er;)try{if(f=1,m&&(L=2&en[0]?m.return:en[0]?m.throw||((L=m.return)&&L.call(m),0):m.next)&&!(L=L.call(m,en[1])).done)return L;switch(m=0,L&&(en=[2&en[0],L.value]),en[0]){case 0:case 1:L=en;break;case 4:return er.label++,{value:en[1],done:!1};case 5:er.label++,m=en[1],en=[0];continue;case 7:en=er.ops.pop(),er.trys.pop();continue;default:if(!(L=(L=er.trys).length>0&&L[L.length-1])&&(6===en[0]||2===en[0])){er=0;continue}if(3===en[0]&&(!L||en[1]>L[0]&&en[1]<L[3])){er.label=en[1];break}if(6===en[0]&&er.label<L[1]){er.label=L[1],L=en;break}if(L&&er.label<L[2]){er.label=L[2],er.ops.push(en);break}L[2]&&er.ops.pop(),er.trys.pop();continue}en=h.call(i,er)}catch(i){en=[6,i],m=0}finally{f=L=0}if(5&en[0])throw en[1];return{value:en[0]?en[1]:void 0,done:!0}}([en,ei])}}}function V(i){var h="function"==typeof Symbol&&Symbol.iterator,f=h&&i[h],m=0;if(f)return f.call(i);if(i&&"number"==typeof i.length)return{next:function(){return i&&m>=i.length&&(i=void 0),{value:i&&i[m++],done:!i}}};throw TypeError(h?"Object is not iterable.":"Symbol.iterator is not defined.")}function D(i,h){var f="function"==typeof Symbol&&i[Symbol.iterator];if(!f)return i;var m,L,en=f.call(i),er=[];try{for(;(void 0===h||h-- >0)&&!(m=en.next()).done;)er.push(m.value)}catch(i){L={error:i}}finally{try{m&&!m.done&&(f=en.return)&&f.call(en)}finally{if(L)throw L.error}}return er}function R(i,h,f){if(f||2==arguments.length)for(var m,L=0,en=h.length;L<en;L++)!m&&L in h||(m||(m=Array.prototype.slice.call(h,0,L)),m[L]=h[L]);return i.concat(m||Array.prototype.slice.call(h))}function U(i){return this instanceof U?(this.v=i,this):new U(i)}function b(i){return"function"==typeof i}function me(i){var h=i(function(i){Error.call(i),i.stack=Error().stack});return h.prototype=Object.create(Error.prototype),h.prototype.constructor=h,h}var e3=me(function(i){return function(h){i(this),this.message=h?h.length+` errors occurred during unsubscription:
`+h.map(function(i,h){return h+1+") "+i.toString()}).join(`
  `):"",this.name="UnsubscriptionError",this.errors=h}});function B(i,h){if(i){var f=i.indexOf(h);0<=f&&i.splice(f,1)}}var e7=function(){var i;function e(i){this.initialTeardown=i,this.closed=!1,this._parentage=null,this._finalizers=null}return e.prototype.unsubscribe=function(){var i,h,f,m,L;if(!this.closed){this.closed=!0;var en=this._parentage;if(en){if(this._parentage=null,Array.isArray(en))try{for(var er=V(en),ei=er.next();!ei.done;ei=er.next())ei.value.remove(this)}catch(h){i={error:h}}finally{try{ei&&!ei.done&&(h=er.return)&&h.call(er)}finally{if(i)throw i.error}}else en.remove(this)}var es=this.initialTeardown;if(b(es))try{es()}catch(i){L=i instanceof e3?i.errors:[i]}var eo=this._finalizers;if(eo){this._finalizers=null;try{for(var el=V(eo),eh=el.next();!eh.done;eh=el.next()){var eu=eh.value;try{We(eu)}catch(i){L=null!=L?L:[],i instanceof e3?L=R(R([],D(L)),D(i.errors)):L.push(i)}}}catch(i){f={error:i}}finally{try{eh&&!eh.done&&(m=el.return)&&m.call(el)}finally{if(f)throw f.error}}}if(L)throw new e3(L)}},e.prototype.add=function(i){var h;if(i&&i!==this){if(this.closed)We(i);else{if(i instanceof e){if(i.closed||i._hasParent(this))return;i._addParent(this)}(this._finalizers=null!==(h=this._finalizers)&&void 0!==h?h:[]).push(i)}}},e.prototype._hasParent=function(i){var h=this._parentage;return h===i||Array.isArray(h)&&h.includes(i)},e.prototype._addParent=function(i){var h=this._parentage;this._parentage=Array.isArray(h)?(h.push(i),h):h?[h,i]:i},e.prototype._removeParent=function(i){var h=this._parentage;h===i?this._parentage=null:Array.isArray(h)&&B(h,i)},e.prototype.remove=function(i){var h=this._finalizers;h&&B(h,i),i instanceof e&&i._removeParent(this)},e.EMPTY=((i=new e).closed=!0,i),e}(),e8=e7.EMPTY;function Ge(i){return i instanceof e7||i&&"closed"in i&&b(i.remove)&&b(i.add)&&b(i.unsubscribe)}function We(i){b(i)?i():i.unsubscribe()}var te={Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1},tn={setTimeout:function(i,h){for(var f=[],m=2;m<arguments.length;m++)f[m-2]=arguments[m];var L=tn.delegate;return null!=L&&L.setTimeout?L.setTimeout.apply(L,R([i,h],D(f))):setTimeout.apply(void 0,R([i,h],D(f)))},clearTimeout:function(i){var h=tn.delegate;return((null==h?void 0:h.clearTimeout)||clearTimeout)(i)},delegate:void 0};function Je(i){tn.setTimeout(function(){throw i})}function fe(){}var ti=null;function z(i){if(te.useDeprecatedSynchronousErrorHandling){var h=!ti;if(h&&(ti={errorThrown:!1,error:null}),i(),h){var f=ti,m=f.errorThrown,L=f.error;if(ti=null,m)throw L}}else i()}var ts=function(i){function t(h){var f=i.call(this)||this;return f.isStopped=!1,h?(f.destination=h,Ge(h)&&h.add(f)):f.destination=tu,f}return x(t,i),t.create=function(i,h,f){return new tl(i,h,f)},t.prototype.next=function(i){this.isStopped||this._next(i)},t.prototype.error=function(i){this.isStopped||(this.isStopped=!0,this._error(i))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,i.prototype.unsubscribe.call(this),this.destination=null)},t.prototype._next=function(i){this.destination.next(i)},t.prototype._error=function(i){try{this.destination.error(i)}finally{this.unsubscribe()}},t.prototype._complete=function(){try{this.destination.complete()}finally{this.unsubscribe()}},t}(e7),to=Function.prototype.bind;function ue(i,h){return to.call(i,h)}var ta=function(){function e(i){this.partialObserver=i}return e.prototype.next=function(i){var h=this.partialObserver;if(h.next)try{h.next(i)}catch(i){Je(i)}},e.prototype.error=function(i){var h=this.partialObserver;if(h.error)try{h.error(i)}catch(i){Je(i)}else Je(i)},e.prototype.complete=function(){var i=this.partialObserver;if(i.complete)try{i.complete()}catch(i){Je(i)}},e}(),tl=function(i){function t(h,f,m){var L,en,er=i.call(this)||this;return b(h)||!h?en={next:null!=h?h:void 0,error:null!=f?f:void 0,complete:null!=m?m:void 0}:er&&te.useDeprecatedNextContext?((L=Object.create(h)).unsubscribe=function(){return er.unsubscribe()},en={next:h.next&&ue(h.next,L),error:h.error&&ue(h.error,L),complete:h.complete&&ue(h.complete,L)}):en=h,er.destination=new ta(en),er}return x(t,i),t}(ts),tu={closed:!0,next:fe,error:function(i){throw i},complete:fe},tc="function"==typeof Symbol&&Symbol.observable||"@@observable";function W(i){return i}var td=function(){function e(i){i&&(this._subscribe=i)}return e.prototype.lift=function(i){var h=new e;return h.source=this,h.operator=i,h},e.prototype.subscribe=function(i,h,f){var m,L=this,en=(m=i)&&m instanceof ts||m&&b(m.next)&&b(m.error)&&b(m.complete)&&Ge(m)?i:new tl(i,h,f);return z(function(){var i=L.operator,h=L.source;en.add(i?i.call(en,h):h?L._subscribe(en):L._trySubscribe(en))}),en},e.prototype._trySubscribe=function(i){try{return this._subscribe(i)}catch(h){i.error(h)}},e.prototype.forEach=function(i,h){var f=this;return new(h=qe(h))(function(h,m){var L=new tl({next:function(h){try{i(h)}catch(i){m(i),L.unsubscribe()}},error:m,complete:h});f.subscribe(L)})},e.prototype._subscribe=function(i){var h;return null===(h=this.source)||void 0===h?void 0:h.subscribe(i)},e.prototype[tc]=function(){return this},e.prototype.pipe=function(){for(var i=[],h=0;h<arguments.length;h++)i[h]=arguments[h];return(0===i.length?W:1===i.length?i[0]:function(h){return i.reduce(function(i,h){return h(i)},h)})(this)},e.prototype.toPromise=function(i){var h=this;return new(i=qe(i))(function(i,f){var m;h.subscribe(function(i){return m=i},function(i){return f(i)},function(){return i(m)})})},e.create=function(i){return new e(i)},e}();function qe(i){var h;return null!==(h=null!=i?i:te.Promise)&&void 0!==h?h:Promise}function _(i){return function(h){if(b(null==h?void 0:h.lift))return h.lift(function(h){try{return i(h,this)}catch(i){this.error(i)}});throw TypeError("Unable to lift unknown Observable type")}}function w(i,h,f,m,L){return new tp(i,h,f,m,L)}var tp=function(i){function t(h,f,m,L,en,er){var ei=i.call(this,h)||this;return ei.onFinalize=en,ei.shouldUnsubscribe=er,ei._next=f?function(i){try{f(i)}catch(i){h.error(i)}}:i.prototype._next,ei._error=L?function(i){try{L(i)}catch(i){h.error(i)}finally{this.unsubscribe()}}:i.prototype._error,ei._complete=m?function(){try{m()}catch(i){h.error(i)}finally{this.unsubscribe()}}:i.prototype._complete,ei}return x(t,i),t.prototype.unsubscribe=function(){var h;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){var f=this.closed;i.prototype.unsubscribe.call(this),f||null===(h=this.onFinalize)||void 0===h||h.call(this)}},t}(ts),tf=me(function(i){return function(){i(this),this.name="ObjectUnsubscribedError",this.message="object unsubscribed"}}),tg=function(i){function t(){var h=i.call(this)||this;return h.closed=!1,h.currentObservers=null,h.observers=[],h.isStopped=!1,h.hasError=!1,h.thrownError=null,h}return x(t,i),t.prototype.lift=function(i){var h=new tm(this,this);return h.operator=i,h},t.prototype._throwIfClosed=function(){if(this.closed)throw new tf},t.prototype.next=function(i){var h=this;z(function(){var f,m;if(h._throwIfClosed(),!h.isStopped){h.currentObservers||(h.currentObservers=Array.from(h.observers));try{for(var L=V(h.currentObservers),en=L.next();!en.done;en=L.next())en.value.next(i)}catch(i){f={error:i}}finally{try{en&&!en.done&&(m=L.return)&&m.call(L)}finally{if(f)throw f.error}}}})},t.prototype.error=function(i){var h=this;z(function(){if(h._throwIfClosed(),!h.isStopped){h.hasError=h.isStopped=!0,h.thrownError=i;for(var f=h.observers;f.length;)f.shift().error(i)}})},t.prototype.complete=function(){var i=this;z(function(){if(i._throwIfClosed(),!i.isStopped){i.isStopped=!0;for(var h=i.observers;h.length;)h.shift().complete()}})},t.prototype.unsubscribe=function(){this.isStopped=this.closed=!0,this.observers=this.currentObservers=null},Object.defineProperty(t.prototype,"observed",{get:function(){var i;return(null===(i=this.observers)||void 0===i?void 0:i.length)>0},enumerable:!1,configurable:!0}),t.prototype._trySubscribe=function(h){return this._throwIfClosed(),i.prototype._trySubscribe.call(this,h)},t.prototype._subscribe=function(i){return this._throwIfClosed(),this._checkFinalizedStatuses(i),this._innerSubscribe(i)},t.prototype._innerSubscribe=function(i){var h=this,f=this.hasError,m=this.isStopped,L=this.observers;return f||m?e8:(this.currentObservers=null,L.push(i),new e7(function(){h.currentObservers=null,B(L,i)}))},t.prototype._checkFinalizedStatuses=function(i){var h=this.hasError,f=this.thrownError,m=this.isStopped;h?i.error(f):m&&i.complete()},t.prototype.asObservable=function(){var i=new td;return i.source=this,i},t.create=function(i,h){return new tm(i,h)},t}(td),tm=function(i){function t(h,f){var m=i.call(this)||this;return m.destination=h,m.source=f,m}return x(t,i),t.prototype.next=function(i){var h,f;null===(f=null===(h=this.destination)||void 0===h?void 0:h.next)||void 0===f||f.call(h,i)},t.prototype.error=function(i){var h,f;null===(f=null===(h=this.destination)||void 0===h?void 0:h.error)||void 0===f||f.call(h,i)},t.prototype.complete=function(){var i,h;null===(h=null===(i=this.destination)||void 0===i?void 0:i.complete)||void 0===h||h.call(i)},t.prototype._subscribe=function(i){var h,f;return null!==(f=null===(h=this.source)||void 0===h?void 0:h.subscribe(i))&&void 0!==f?f:e8},t}(tg),t_={now:function(){return(t_.delegate||Date).now()},delegate:void 0},tv=function(i){function t(h,f,m){void 0===h&&(h=1/0),void 0===f&&(f=1/0),void 0===m&&(m=t_);var L=i.call(this)||this;return L._bufferSize=h,L._windowTime=f,L._timestampProvider=m,L._buffer=[],L._infiniteTimeWindow=!0,L._infiniteTimeWindow=f===1/0,L._bufferSize=Math.max(1,h),L._windowTime=Math.max(1,f),L}return x(t,i),t.prototype.next=function(h){var f=this.isStopped,m=this._buffer,L=this._infiniteTimeWindow,en=this._timestampProvider,er=this._windowTime;f||(m.push(h),L||m.push(en.now()+er)),this._trimBuffer(),i.prototype.next.call(this,h)},t.prototype._subscribe=function(i){this._throwIfClosed(),this._trimBuffer();for(var h=this._innerSubscribe(i),f=this._infiniteTimeWindow,m=this._buffer,L=m.slice(),en=0;en<L.length&&!i.closed;en+=f?1:2)i.next(L[en]);return this._checkFinalizedStatuses(i),h},t.prototype._trimBuffer=function(){var i=this._bufferSize,h=this._timestampProvider,f=this._buffer,m=this._infiniteTimeWindow,L=(m?1:2)*i;if(i<1/0&&L<f.length&&f.splice(0,f.length-L),!m){for(var en=h.now(),er=0,ei=1;ei<f.length&&f[ei]<=en;ei+=2)er=ei;er&&f.splice(0,er+1)}},t}(tg),ty=function(i){function t(h,f){return i.call(this)||this}return x(t,i),t.prototype.schedule=function(i,h){return this},t}(e7),tw={setInterval:function(i,h){for(var f=[],m=2;m<arguments.length;m++)f[m-2]=arguments[m];var L=tw.delegate;return null!=L&&L.setInterval?L.setInterval.apply(L,R([i,h],D(f))):setInterval.apply(void 0,R([i,h],D(f)))},clearInterval:function(i){var h=tw.delegate;return((null==h?void 0:h.clearInterval)||clearInterval)(i)},delegate:void 0},tb=function(i){function t(h,f){var m=i.call(this,h,f)||this;return m.scheduler=h,m.work=f,m.pending=!1,m}return x(t,i),t.prototype.schedule=function(i,h){if(void 0===h&&(h=0),this.closed)return this;this.state=i;var f=this.id,m=this.scheduler;return null!=f&&(this.id=this.recycleAsyncId(m,f,h)),this.pending=!0,this.delay=h,this.id=this.id||this.requestAsyncId(m,this.id,h),this},t.prototype.requestAsyncId=function(i,h,f){return void 0===f&&(f=0),tw.setInterval(i.flush.bind(i,this),f)},t.prototype.recycleAsyncId=function(i,h,f){if(void 0===f&&(f=0),null!=f&&this.delay===f&&!1===this.pending)return h;tw.clearInterval(h)},t.prototype.execute=function(i,h){if(this.closed)return Error("executing a cancelled action");this.pending=!1;var f=this._execute(i,h);if(f)return f;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(i,h){var f,m=!1;try{this.work(i)}catch(i){m=!0,f=i||Error("Scheduled action threw falsy error")}if(m)return this.unsubscribe(),f},t.prototype.unsubscribe=function(){if(!this.closed){var h=this.id,f=this.scheduler,m=f.actions;this.work=this.state=this.scheduler=null,this.pending=!1,B(m,this),null!=h&&(this.id=this.recycleAsyncId(f,h,null)),this.delay=null,i.prototype.unsubscribe.call(this)}},t}(ty),tC=function(){function e(i,h){void 0===h&&(h=e.now),this.schedulerActionCtor=i,this.now=h}return e.prototype.schedule=function(i,h,f){return void 0===h&&(h=0),new this.schedulerActionCtor(this,i).schedule(f,h)},e.now=t_.now,e}(),tI=(new(function(i){function t(h,f){void 0===f&&(f=tC.now);var m=i.call(this,h,f)||this;return m.actions=[],m._active=!1,m._scheduled=void 0,m}return x(t,i),t.prototype.flush=function(i){var h,f=this.actions;if(this._active){f.push(i);return}this._active=!0;do if(h=i.execute(i.state,i.delay))break;while(i=f.shift());if(this._active=!1,h){for(;i=f.shift();)i.unsubscribe();throw h}},t}(tC))(tb),new td(function(i){return i.complete()})),Be=function(i){return i&&"number"==typeof i.length&&"function"!=typeof i};function Xe(i){return b(null==i?void 0:i.then)}function tt(i){return Symbol.asyncIterator&&b(null==i?void 0:i[Symbol.asyncIterator])}function nt(i){return TypeError("You provided "+(null!==i&&"object"==typeof i?"an invalid object":"'"+i+"'")+" where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.")}var tT="function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator";function it(i){return b(null==i?void 0:i[tT])}function ot(i){return function(i,h,f){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var m,L=f.apply(i,h||[]),en=[];return m={},u("next"),u("throw"),u("return"),m[Symbol.asyncIterator]=function(){return this},m;function u(i){L[i]&&(m[i]=function(h){return new Promise(function(f,m){en.push([i,h,f,m])>1||a(i,h)})})}function a(i,h){try{var f;(f=L[i](h)).value instanceof U?Promise.resolve(f.value.v).then(c,l):d(en[0][2],f)}catch(i){d(en[0][3],i)}}function c(i){a("next",i)}function l(i){a("throw",i)}function d(i,h){i(h),en.shift(),en.length&&a(en[0][0],en[0][1])}}(this,arguments,function(){var h,f,m;return He(this,function(L){switch(L.label){case 0:h=i.getReader(),L.label=1;case 1:L.trys.push([1,,9,10]),L.label=2;case 2:return[4,U(h.read())];case 3:return m=(f=L.sent()).value,f.done?[4,U(void 0)]:[3,5];case 4:return[2,L.sent()];case 5:return[4,U(m)];case 6:return[4,L.sent()];case 7:return L.sent(),[3,2];case 8:return[3,10];case 9:return h.releaseLock(),[7];case 10:return[2]}})})}function ut(i){return b(null==i?void 0:i.getReader)}function I(i){if(i instanceof td)return i;if(null!=i){if(b(i[tc]))return new td(function(h){var f=i[tc]();if(b(f.subscribe))return f.subscribe(h);throw TypeError("Provided object does not correctly implement Symbol.observable")});if(Be(i))return new td(function(h){for(var f=0;f<i.length&&!h.closed;f++)h.next(i[f]);h.complete()});if(Xe(i))return new td(function(h){i.then(function(i){h.closed||(h.next(i),h.complete())},function(i){return h.error(i)}).then(null,Je)});if(tt(i))return at(i);if(it(i))return new td(function(h){var f,m;try{for(var L=V(i),en=L.next();!en.done;en=L.next()){var er=en.value;if(h.next(er),h.closed)return}}catch(i){f={error:i}}finally{try{en&&!en.done&&(m=L.return)&&m.call(L)}finally{if(f)throw f.error}}h.complete()});if(ut(i))return at(ot(i))}throw nt(i)}function at(i){return new td(function(h){(function(i,h){var f,m,L,en,er,ei,es,eo;return er=this,ei=void 0,es=void 0,eo=function(){var er;return He(this,function(ei){switch(ei.label){case 0:ei.trys.push([0,5,6,11]),f=function(i){if(!Symbol.asyncIterator)throw TypeError("Symbol.asyncIterator is not defined.");var h,f=i[Symbol.asyncIterator];return f?f.call(i):(i=V(i),h={},r("next"),r("throw"),r("return"),h[Symbol.asyncIterator]=function(){return this},h);function r(f){h[f]=i[f]&&function(h){return new Promise(function(m,L){(function(i,h,f,m){Promise.resolve(m).then(function(h){i({value:h,done:f})},h)})(m,L,(h=i[f](h)).done,h.value)})}}}(i),ei.label=1;case 1:return[4,f.next()];case 2:if((m=ei.sent()).done)return[3,4];if(er=m.value,h.next(er),h.closed)return[2];ei.label=3;case 3:return[3,1];case 4:return[3,11];case 5:return L={error:ei.sent()},[3,11];case 6:return ei.trys.push([6,,9,10]),m&&!m.done&&(en=f.return)?[4,en.call(f)]:[3,8];case 7:ei.sent(),ei.label=8;case 8:return[3,10];case 9:if(L)throw L.error;return[7];case 10:return[7];case 11:return h.complete(),[2]}})},new(es||(es=Promise))(function(i,h){function a(i){try{c(eo.next(i))}catch(i){h(i)}}function s(i){try{c(eo.throw(i))}catch(i){h(i)}}function c(h){var f;h.done?i(h.value):((f=h.value)instanceof es?f:new es(function(i){i(f)})).then(a,s)}c((eo=eo.apply(er,ei||[])).next())})})(i,h).catch(function(i){return h.error(i)})})}function P(i,h,f,m,L){void 0===m&&(m=0),void 0===L&&(L=!1);var en=h.schedule(function(){f(),L?i.add(this.schedule(null,m)):this.unsubscribe()},m);if(i.add(en),!L)return en}function st(i,h){return void 0===h&&(h=0),_(function(f,m){f.subscribe(w(m,function(f){return P(m,i,function(){return m.next(f)},h)},function(){return P(m,i,function(){return m.complete()},h)},function(f){return P(m,i,function(){return m.error(f)},h)}))})}function ct(i,h){return void 0===h&&(h=0),_(function(f,m){m.add(i.schedule(function(){return f.subscribe(m)},h))})}function lt(i,h){if(!i)throw Error("Iterable cannot be null");return new td(function(f){P(f,h,function(){var m=i[Symbol.asyncIterator]();P(f,h,function(){m.next().then(function(i){i.done?f.complete():f.next(i.value)})},0,!0)})})}function O(i,h){return h?function(i,h){if(null!=i){if(b(i[tc]))return I(i).pipe(ct(h),st(h));if(Be(i))return new td(function(f){var m=0;return h.schedule(function(){m===i.length?f.complete():(f.next(i[m++]),f.closed||this.schedule())})});if(Xe(i))return I(i).pipe(ct(h),st(h));if(tt(i))return lt(i,h);if(it(i))return new td(function(f){var m;return P(f,h,function(){m=i[tT](),P(f,h,function(){var i,h,L;try{h=(i=m.next()).value,L=i.done}catch(i){f.error(i);return}L?f.complete():f.next(h)},0,!0)}),function(){return b(null==m?void 0:m.return)&&m.return()}});if(ut(i))return lt(ot(i),h)}throw nt(i)}(i,h):I(i)}function ee(){for(var i,h=[],f=0;f<arguments.length;f++)h[f]=arguments[f];var m=(i=h[h.length-1])&&b(i.schedule)?h.pop():void 0;return O(h,m)}function C(i,h){return _(function(f,m){var L=0;f.subscribe(w(m,function(f){m.next(i.call(h,f,L++))}))})}function ae(i,h){for(var f=[],m=2;m<arguments.length;m++)f[m-2]=arguments[m];if(!0===h){i();return}if(!1!==h){var L=new tl({next:function(){L.unsubscribe(),i()}});return h.apply(void 0,R([],D(f))).subscribe(L)}}me(function(i){return function(){i(this),this.name="EmptyError",this.message="no elements in sequence"}});let tE=ev.createContext(void 0),tS=ev.createContext(!1),tr=(i,h)=>i===h||[...Object.keys(i),...Object.keys(h)].every(f=>i[f]===h[f]);function Lr(i){let{firebaseConfig:h,appName:f,suspense:m}=i,L=ev.useMemo(()=>{if(i.firebaseApp)return i.firebaseApp;let m=(0,ew.C6)().find(i=>i.name===(f||"[DEFAULT]"));if(m){if(h&&tr(m.options,h))return m;throw Error(`Does not match the options already provided to the ${f||"default"} firebase app instance, give this new instance a different appName.`)}{if(!h)throw Error("No firebaseConfig provided");let i=ev.version||"unknown";return(0,ew.KN)("react",i),(0,ew.KN)("reactfire","4.2.3"),(0,ew.ZF)(h,f)}},[i.firebaseApp,h,f]);return ev.createElement(tE.Provider,{value:L},ev.createElement(tS.Provider,Object.assign({value:null!=m&&m},i)))}function yt(){let i=ev.useContext(tE);if(!i)throw Error("Cannot call useFirebaseApp unless your component is within a FirebaseAppProvider");return i}function qr(i){var h,f;if((null==i?void 0:i.hasOwnProperty("requiredClaims"))&&(null==i?void 0:i.hasOwnProperty("validateCustomClaims")))throw Error('Cannot have both "requiredClaims" and "validateCustomClaims". Use one or the other.');let m=tG(),L=`auth:signInCheck:${m.name}::forceRefresh:${!!(null!=i&&i.forceRefresh)}`;null!=i&&i.forceRefresh&&(L=`${L}:forceRefresh:${i.forceRefresh}`),null!=i&&i.hasOwnProperty("requiredClaims")?L=`${L}:requiredClaims:${JSON.stringify(i.requiredClaims)}`:null!=i&&i.hasOwnProperty("validateCustomClaims")&&(L=`${L}:validateCustomClaims:${JSON.stringify(i.validateCustomClaims)}`);let en=new td(function(i){return{unsubscribe:(0,ey.MX)(m,i.next.bind(i),i.error.bind(i),i.complete.bind(i))}}).pipe((h=h=>{var f;return h?i&&(i.hasOwnProperty("requiredClaims")||i.hasOwnProperty("validateCustomClaims"))?O(h.getIdTokenResult(null!==(f=null==i?void 0:i.forceRefresh)&&void 0!==f&&f)).pipe(C(f=>{var m;let L;L=i.hasOwnProperty("requiredClaims")?(m=i.requiredClaims,function(i){let h={};return Object.keys(m).forEach(f=>{m[f]!==i[f]&&(h[f]=[new Me("auth/missing-claim",`Expected "${m[f]}", but user has "${i[f]}" instead`)])}),{hasRequiredClaims:0===Object.keys(h).length,errors:h}}):i.validateCustomClaims;let{hasRequiredClaims:en,errors:er}=L(f.claims);return{signedIn:!0,hasRequiredClaims:en,errors:er,user:h}})):ee({signedIn:!0,hasRequiredClaims:!0,errors:{},user:h}):ee({signedIn:!1,hasRequiredClaims:!1,errors:{},user:null})},_(function(i,m){var L=null,en=0,er=!1,a=function(){return er&&!L&&m.complete()};i.subscribe(w(m,function(i){null==L||L.unsubscribe();var er=0,ei=en++;I(h(i,ei)).subscribe(L=w(m,function(h){return m.next(f?f(i,h,ei,er++):h)},function(){L=null,a()}))},function(){er=!0,a()}))})));return g(L,en)}(ef=e_||(e_={})).added="child_added",ef.removed="child_removed",ef.changed="child_changed",ef.moved="child_moved",ef.value="value",Object.freeze(((em={})[e_.added]=function(i,h,f,m){return addEventListener(i,"child_added",h,f,m)},em[e_.removed]=function(i,h,f,m){return addEventListener(i,"child_removed",h,f,m)},em[e_.changed]=function(i,h,f,m){return addEventListener(i,"child_changed",h,f,m)},em[e_.moved]=function(i,h,f,m){return addEventListener(i,"child_moved",h,f,m)},em[e_.value]=function(i,h,f,m){return addEventListener(i,"value",h,f,m)},em));let tP=globalThis._reactFireDatabaseCachedQueries||[];globalThis._reactFireDatabaseCachedQueries||(globalThis._reactFireDatabaseCachedQueries=tP);let br=class br extends tg{constructor(i,h){var f,m,L,en,er,ei,es,eo,el,eh,eu,ec,ep,ef,eg;super(),this._timeoutWindow=h,this._hasValue=!1,this._error=void 0,this._firstEmission=new Promise(i=>this._resolveFirstEmission=i),this._innerObservable=i.pipe((en=b(f={next:i=>{this._next(i)},error:i=>{this._error=i,this._resolveFirstEmission()}})||m||L?{next:f,error:m,complete:L}:f)?_(function(i,h){null===(f=en.subscribe)||void 0===f||f.call(en);var f,m=!0;i.subscribe(w(h,function(i){var f;null===(f=en.next)||void 0===f||f.call(en,i),h.next(i)},function(){var i;m=!1,null===(i=en.complete)||void 0===i||i.call(en),h.complete()},function(i){var f;m=!1,null===(f=en.error)||void 0===f||f.call(en,i),h.error(i)},function(){var i,h;m&&(null===(i=en.unsubscribe)||void 0===i||i.call(en)),null===(h=en.finalize)||void 0===h||h.call(en)}))}):W,function vt(i){return _(function(h,f){var m,L=null,en=!1;L=h.subscribe(w(f,void 0,void 0,function(er){m=I(i(er,vt(i)(h))),L?(L.unsubscribe(),L=null,m.subscribe(f)):en=!0})),en&&(L.unsubscribe(),L=null,m.subscribe(f))})}(()=>{var i;return i?new td(function(h){return i.schedule(function(){return h.complete()})}):tI}),(el=void 0===(eo=(es={connector:function(){return new tv(1,er,ei)},resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:!1}).connector)?function(){return new tg}:eo,eu=void 0===(eh=es.resetOnError)||eh,ep=void 0===(ec=es.resetOnComplete)||ec,eg=void 0===(ef=es.resetOnRefCountZero)||ef,function(i){var h,f,m,L=0,en=!1,er=!1,$=function(){null==f||f.unsubscribe(),f=void 0},E=function(){$(),h=m=void 0,en=er=!1},j=function(){var i=h;E(),null==i||i.unsubscribe()};return _(function(i,ei){L++,er||en||$();var es=m=null!=m?m:el();ei.add(function(){0!=--L||er||en||(f=ae(j,eg))}),es.subscribe(ei),!h&&L>0&&(h=new tl({next:function(i){return es.next(i)},error:function(i){er=!0,$(),f=ae(E,eu,i),es.error(i)},complete:function(){en=!0,$(),f=ae(E,ep),es.complete()}}),I(i).subscribe(h))})(i)})),this._warmupSubscription=this._innerObservable.subscribe(),this._timeoutHandler=setTimeout(this._reset.bind(this),this._timeoutWindow)}get hasValue(){return this._hasValue||!!this._error}get value(){if(this._error)throw this._error;if(!this.hasValue)throw Error("Can only get value if SuspenseSubject has a value");return this._value}get firstEmission(){return this._firstEmission}_next(i){this._hasValue=!0,this._value=i,this._resolveFirstEmission()}_reset(){this._warmupSubscription&&this._warmupSubscription.unsubscribe(),this._hasValue=!1,this._value=void 0,this._error=void 0,this._firstEmission=new Promise(i=>this._resolveFirstEmission=i)}_subscribe(i){return this._timeoutHandler&&clearTimeout(this._timeoutHandler),this._innerSubscriber=this._innerObservable.subscribe(i),this._innerSubscriber}get ourError(){return this._error}};let tk=globalThis._reactFirePreloadedObservables||new Map;function g(i,h,f={}){var m,L;let en;if(!i)throw Error("cannot call useObservable without an observableId");let er=function(i,h){if(tk.has(h))return tk.get(h);{let f=new br(i,3e4);return tk.set(h,f),f}}(h,i),ei=f.hasOwnProperty("initialData")||f.hasOwnProperty("startWithValue"),es=er.hasValue||ei;if(!0===(L=f.suspense,en=ev.useContext(tS),void 0!==L?L:en)&&!es)throw er.firstEmission;let eo={status:es?"success":"loading",hasEmitted:es,isComplete:!1,data:er.hasValue?er.value:null!==(m=null==f?void 0:f.initialData)&&void 0!==m?m:null==f?void 0:f.startWithValue,error:er.ourError,firstValuePromise:er.firstEmission},[el,eh]=ev.useReducer(function(i,h){let f=Object.assign(Object.assign({},i),{hasEmitted:i.hasEmitted||er.hasValue,error:er.ourError,firstValuePromise:er.firstEmission});switch(er.hasValue&&(f.data=er.value),h){case"value":return f.status="success",f;case"error":return f.status="error",f;case"complete":return f.isComplete=!0,f;default:throw Error(`invalid action "${h}"`)}},eo);return ev.useEffect(()=>{let i=er.subscribe({next:()=>{eh("value")},error:i=>{throw eh("error"),i},complete:()=>{eh("complete")}});return()=>i.unsubscribe()},[er]),el}globalThis._reactFirePreloadedObservables||(globalThis._reactFirePreloadedObservables=tk);let tR=globalThis._reactFireFirestoreQueryCache||[];function ni(i,h){var f,m;let L=Fr(),en=`functions:callableResponse:${i}:${JSON.stringify(null==h?void 0:h.data)}:${JSON.stringify(null==h?void 0:h.httpsCallableOptions)}`,er=(f=null==h?void 0:h.httpsCallableOptions,m=(0,e2.V1)(L,i,f),function(i){return O(m(i)).pipe(C(function(i){return i.data}))})(null==h?void 0:h.data);return g(en,er,h)}globalThis._reactFireFirestoreQueryCache||(globalThis._reactFireFirestoreQueryCache=tR);let tN=ev.createContext(void 0),tA=ev.createContext(void 0),tO=ev.createContext(void 0),tx=ev.createContext(void 0),tD=ev.createContext(void 0),tL=ev.createContext(void 0),tF=ev.createContext(void 0),tM=ev.createContext(void 0),tU=ev.createContext(void 0);function k(i){return function(h){var f,m;if(!h.sdk)throw Error("no sdk provided");let L=yt().name;if((null===(m=null===(f=null==h?void 0:h.sdk)||void 0===f?void 0:f.app)||void 0===m?void 0:m.name)!==L)throw Error("sdk was initialized with a different firebase app");return ev.createElement(i.Provider,Object.assign({value:h.sdk},h))}}function A(i){let h=ev.useContext(i);if(!h)throw Error("SDK not found. useSdk must be called from within a provider");return h}k(tN);let tj=k(tA),tW=k(tO),tq=(k(tx),k(tD)),tV=k(tL),tB=(k(tM),k(tF)),tG=(k(tU),()=>A(tA)),Fr=()=>A(tL);let Me=class Me extends Error{constructor(i,h,f){super(h),this.code=i,this.customData=f,this.name="ReactFireError",Object.setPrototypeOf(this,Me.prototype)}}}},function(i){var __webpack_exec__=function(h){return i(i.s=h)};i.O(0,[774,179],function(){return __webpack_exec__(6840),__webpack_exec__(9974)}),_N_E=i.O()}]);