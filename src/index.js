/* eslint global-require: "off" */
const Express = require("express");
const App = Express();
const DiscordClient = require('./Structures/Client');
const Client = new DiscordClient({fetchAllMembers: true});
const Passport = require("passport");
const Strategy = require("passport-discord").Strategy;
const Session = require("express-session");
require('dotenv').config();

Passport.serializeUser(function(User, Done) {
  Done(null, User);
});

Passport.deserializeUser(function(Obj, Done) {
  Done(null, Obj);
});

App.use(Session({
  secret: "aond9$((_8#8+3!_;&(&84!+58&(+&)?49",
  resave: true,
  saveUninitialized: true
}));
App.use(Passport.initialize());
App.use(Passport.session());

const scopes = ["identify"];
const prompt = "consent";

Passport.use(new Strategy({
  clientID: "702874025189179533",
  clientSecret: process.env.SECRET,
  callbackURL: process.env.CALLBACK,
  scope: scopes,
  prompt: prompt
}, function(AccessToken, RefreshToken, Profile, Cb) {
    process.nextTick(function() {
      return Cb(null, Profile);
    });
  })
)

App.use(Express.static("./public/"));

App.get("/", function(Req, Res) {
  Req.session.url = Req.url;
  console.log(Req.user);
  Res.render("index.ejs", {
    Req: Req,
    Res: Res,
    Bot: Client
  });
});

App.get("/discord/login", Passport.authenticate("discord", { scope: scopes, prompt: prompt }), function(Req, Res) {

});

App.get("/discord/callback", Passport.authenticate("discord", { failureRedirect: "/g" }), async function(Req, Res) {
  Res.redirect(Req.session.url ? Req.session.url : "/");
  Req.session.url = null;
});

App.get("/discord/logout", function(Req, Res) {
  Req.logout();
  Res.redirect("/");
});

Client.run();
App.listen(process.env.PORT);
