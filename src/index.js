/* eslint global-require: "off" */
const Express = require("express");
const App = Express();
const DiscordClient = require('./Structures/Client');
const Client = new DiscordClient();
Client.run();
const Title = Client;

App.use(Express.static("./public/"));

App.get("/", function(Req, Res) {
  console.log(Client);
  Res.render("index.ejs", {
    Req: Req,
    Res: Res,
    Title: Title
  });
});

App.listen(process.env.PORT);
