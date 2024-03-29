(()=>{"use strict";var t={908:function(t,e,i){var n=this&&this.__createBinding||(Object.create?function(t,e,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(e,i);o&&!("get"in o?!e.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return e[i]}}),Object.defineProperty(t,n,o)}:function(t,e,i,n){void 0===n&&(n=i),t[n]=e[i]}),o=this&&this.__exportStar||function(t,e){for(var i in t)"default"===i||Object.prototype.hasOwnProperty.call(e,i)||n(e,t,i)};Object.defineProperty(e,"__esModule",{value:!0}),e.nonce=void 0,e.nonce={},o(i(824),e),o(i(320),e)},824:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r};Object.defineProperty(e,"__esModule",{value:!0}),e.DashboardTab=void 0;const o=i(102);let a=class{};a=n([(0,o.PreventIframe)("/dashboardTab/index.html")],a),e.DashboardTab=a},320:function(t,e,i){var n=this&&this.__decorate||function(t,e,i,n){var o,a=arguments.length,r=a<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,i,n);else for(var s=t.length-1;s>=0;s--)(o=t[s])&&(r=(a<3?o(r):a>3?o(e,i,r):o(e,i))||r);return a>3&&r&&Object.defineProperty(e,i,r),r},o=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.HinachosTeamsClientBot=void 0;const a=i(102),r=i(576),s=i(856),c=i(248),l=i(808),d=i(132);r("msteams");let u=class extends c.DialogBot{constructor(t,e){super(t,e,new l.MainDialog),this.onMembersAdded(((t,e)=>o(this,void 0,void 0,(function*(){const i=t.activity.membersAdded;if(i&&i.length>0)for(let e=0;e<i.length;e++)i[e].id!==t.activity.recipient.id&&(yield this.sendWelcomeCard(t));yield e()}))))}sendWelcomeCard(t){return o(this,void 0,void 0,(function*(){const e=s.CardFactory.adaptiveCard(d.default);yield t.sendActivity({attachments:[e]})}))}};u=n([(0,a.BotDeclaration)("/api/messages",new s.MemoryStorage,process.env.MICROSOFT_APP_ID,process.env.MICROSOFT_APP_PASSWORD)],u),e.HinachosTeamsClientBot=u},132:(t,e,i)=>{Object.defineProperty(e,"__esModule",{value:!0});const n=i(864);e.default=n},248:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.DialogBot=void 0;const o=i(856);class a extends o.TeamsActivityHandler{constructor(t,e,i){super(),this.conversationState=t,this.userState=e,this.dialog=i,this.conversationState=t,this.userState=e,this.dialog=i,this.dialogState=this.conversationState.createProperty("DialogState"),this.onMessage(((t,e)=>n(this,void 0,void 0,(function*(){yield this.dialog.run(t,this.dialogState),yield e()}))))}run(t){const e=Object.create(null,{run:{get:()=>super.run}});return n(this,void 0,void 0,(function*(){yield e.run.call(this,t),yield this.conversationState.saveChanges(t,!1),yield this.userState.saveChanges(t,!1)}))}}e.DialogBot=a},216:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.HelpDialog=void 0;const o=i(760),a=i(856),r="helpWaterfallDialog";class s extends o.ComponentDialog{constructor(){super("helpDialog"),this.addDialog(new o.TextPrompt("TextPrompt")).addDialog(new o.WaterfallDialog(r,[this.introStep.bind(this)])),this.initialDialogId=r}run(t,e){return n(this,void 0,void 0,(function*(){const i=new o.DialogSet(e);i.add(this);const n=yield i.createContext(t);(yield n.continueDialog()).status===o.DialogTurnStatus.empty&&(yield n.beginDialog(this.id))}))}introStep(t){return n(this,void 0,void 0,(function*(){const e=a.MessageFactory.text("I am terribly sorry, but my developer hasn't trained me to do anything yet 😂. Please refer to [this link](https://docs.microsoft.com/en-us/microsoftteams/platform/bots/what-are-bots) to see how to develop bots for Teams");return yield t.context.sendActivity(e),yield t.endDialog()}))}}e.HelpDialog=s},808:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.MainDialog=void 0;const o=i(760),a=i(856),r=i(776),s=i(216),c=i(692),l="mainWaterfallDialog";class d extends o.ComponentDialog{constructor(){super("mainDialog"),this.addDialog(new o.TextPrompt("TextPrompt")).addDialog(new r.TeamsInfoDialog).addDialog(new s.HelpDialog).addDialog(new c.MentionUserDialog).addDialog(new o.WaterfallDialog(l,[this.introStep.bind(this),this.actStep.bind(this),this.finalStep.bind(this)])),this.initialDialogId=l,this.onboarding=!1}run(t,e){return n(this,void 0,void 0,(function*(){const i=new o.DialogSet(e);i.add(this);const n=yield i.createContext(t);(yield n.continueDialog()).status===o.DialogTurnStatus.empty&&(yield n.beginDialog(this.id))}))}introStep(t){return n(this,void 0,void 0,(function*(){if(t.options.restartMsg){const e=t.options.restartMsg?t.options.restartMsg:"What can I help you with today?",i=a.MessageFactory.text(e,e,a.InputHints.ExpectingInput);return yield t.prompt("TextPrompt",{prompt:i})}return this.onboarding=!0,yield t.next()}))}actStep(t){return n(this,void 0,void 0,(function*(){if(t.result)switch(t.result.trim().toLocaleLowerCase()){case"who":case"who am i?":return yield t.beginDialog("teamsInfoDialog");case"get help":case"help":return yield t.beginDialog("helpDialog");case"mention me":case"mention":return yield t.beginDialog("mentionUserDialog");default:return yield t.context.sendActivity("Ok, maybe next time 😉"),yield t.next()}else if(this.onboarding)switch(t.context.activity.text){case"who":return yield t.beginDialog("teamsInfoDialog");case"help":return yield t.beginDialog("helpDialog");case"mention":return yield t.beginDialog("mentionUserDialog");default:return yield t.context.sendActivity("Ok, maybe next time 😉"),yield t.next()}return yield t.next()}))}finalStep(t){return n(this,void 0,void 0,(function*(){return yield t.replaceDialog(this.initialDialogId,{restartMsg:"What else can I do for you?"})}))}}e.MainDialog=d},692:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.MentionUserDialog=void 0;const o=i(760),a=i(856),r="mentionUserWaterfallDialog";class s extends o.ComponentDialog{constructor(){super("mentionUserDialog"),this.addDialog(new o.TextPrompt("TextPrompt")).addDialog(new o.WaterfallDialog(r,[this.introStep.bind(this)])),this.initialDialogId=r}run(t,e){return n(this,void 0,void 0,(function*(){const i=new o.DialogSet(e);i.add(this);const n=yield i.createContext(t);(yield n.continueDialog()).status===o.DialogTurnStatus.empty&&(yield n.beginDialog(this.id))}))}introStep(t){return n(this,void 0,void 0,(function*(){const e={mentioned:t.context.activity.from,text:`<at>${(new TextEncoder).encode(t.context.activity.from.name)}</at>`,type:"mention"},i=a.MessageFactory.text(`Hi ${e.text}`);return i.entities=[e],yield t.context.sendActivity(i),yield t.endDialog()}))}}e.MentionUserDialog=s},776:function(t,e,i){var n=this&&this.__awaiter||function(t,e,i,n){return new(i||(i=Promise))((function(o,a){function r(t){try{c(n.next(t))}catch(t){a(t)}}function s(t){try{c(n.throw(t))}catch(t){a(t)}}function c(t){var e;t.done?o(t.value):(e=t.value,e instanceof i?e:new i((function(t){t(e)}))).then(r,s)}c((n=n.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.TeamsInfoDialog=void 0;const o=i(760),a=i(856),r="teamsInfoWaterfallDialog";let s;class c extends o.ComponentDialog{constructor(){super("teamsInfoDialog"),this.addDialog(new o.TextPrompt("TextPrompt")).addDialog(new o.WaterfallDialog(r,[this.introStep.bind(this),this.actStep.bind(this),this.finalStep.bind(this)])),this.initialDialogId=r}run(t,e){return n(this,void 0,void 0,(function*(){const i=new o.DialogSet(e);i.add(this);const n=yield i.createContext(t);(yield n.continueDialog()).status===o.DialogTurnStatus.empty&&(yield n.beginDialog(this.id))}))}introStep(t){return n(this,void 0,void 0,(function*(){const e=a.MessageFactory.text("Do you want me to send you the current Teams member info?\n\nSay **yes** if you do like to see the context or **no** if you don't");return yield t.prompt("TextPrompt",{prompt:e})}))}actStep(t){return n(this,void 0,void 0,(function*(){if(t.result){if("yes"!==t.result)return yield t.context.sendActivity("Ok, maybe next time 😉"),yield t.next();s=yield a.TeamsInfo.getMember(t.context,t.context.activity.from.id),yield t.context.sendActivity(`Your name: **${s.name}**\n\nYour Teams ID: **${s.id}**\n\nYour email: **${s.email}**`)}return yield t.next()}))}finalStep(t){return n(this,void 0,void 0,(function*(){return yield t.context.sendActivity("Now it's time to add more functionality to your bot, so head over to the [docs](https://aka.ms/yoTeams) and start building"),yield t.endDialog()}))}}e.TeamsInfoDialog=c},856:t=>{t.exports=require("botbuilder")},760:t=>{t.exports=require("botbuilder-dialogs")},900:t=>{t.exports=require("compression")},576:t=>{t.exports=require("debug")},520:t=>{t.exports=require("dotenv")},224:t=>{t.exports=require("express")},102:t=>{t.exports=require("express-msteams-host")},558:t=>{t.exports=require("morgan")},136:t=>{t.exports=require("http")},72:t=>{t.exports=require("path")},864:t=>{t.exports=JSON.parse('{"$schema":"http://adaptivecards.io/schemas/adaptive-card.json","type":"AdaptiveCard","version":"1.4","body":[{"type":"ColumnSet","columns":[{"type":"Column","width":"auto","items":[{"type":"Image","url":"https://raw.githubusercontent.com/pnp/media/master/parker/teams/300w/parker-teams-300.png","size":"Medium"}],"verticalContentAlignment":"Center","spacing":"Large"},{"type":"Column","width":"stretch","items":[{"type":"TextBlock","spacing":"Medium","size":"Large","weight":"Bolder","text":"Welcome to hinachos-teams-client","wrap":true,"maxLines":0},{"type":"TextBlock","size":"default","text":"Hello, nice to meet you! I\'m hinachos-teams-client created using #yoTeams and happy to assist you 😀","wrap":true,"maxLines":0}]}]},{"type":"ActionSet","actions":[{"type":"Action.OpenUrl","title":"Learn more about Yo Teams","url":"https://aka.ms/yoteams"},{"type":"Action.OpenUrl","title":"Learn more about bots in Teams","url":"https://docs.microsoft.com/en-us/microsoftteams/platform/bots/what-are-bots"}],"height":"stretch","horizontalAlignment":"Center"},{"type":"ActionSet","actions":[{"type":"Action.Submit","title":"Who am I?","data":{"msteams":{"type":"messageBack","displayText":"who am i?","text":"who"}}},{"type":"Action.Submit","title":"Mention me","data":{"msteams":{"type":"messageBack","displayText":"mention me","text":"mention"}}},{"type":"Action.Submit","title":"Get help","data":{"msteams":{"type":"messageBack","displayText":"get help","text":"help"}}}]}]}')}},e={};function i(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n].call(a.exports,a,a.exports,i),a.exports}(()=>{const t=i(224),e=i(136),n=i(72),o=i(558),a=i(102),r=i(576),s=i(900),c=r("msteams");c("Initializing Microsoft Teams Express hosted App..."),i(520).config();const l=i(908),d=t(),u=process.env.port||process.env.PORT||3007;d.use(t.json({verify:(t,e,i,n)=>{t.rawBody=i.toString()}})),d.use(t.urlencoded({extended:!0})),d.set("views",n.join(__dirname,"/")),d.use(o("tiny")),d.use(s()),d.use("/scripts",t.static(n.join(__dirname,"web/scripts"))),d.use("/assets",t.static(n.join(__dirname,"web/assets"))),d.use((0,a.MsTeamsApiRouter)(l)),d.use((0,a.MsTeamsPageRouter)({root:n.join(__dirname,"web/"),components:l})),d.use("/",t.static(n.join(__dirname,"web/"),{index:"index.html"})),d.set("port",u),e.createServer(d).listen(u,(()=>{c(`Server running on ${u}`)}))})()})();
//# sourceMappingURL=server.js.map