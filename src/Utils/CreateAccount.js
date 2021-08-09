function CreateAccount(msg) {
  let data = {
    id: msg.author.id,
    uang: 0,
    bank: 0,
    role: "user",
  }
  return this.client.accountDB.set(msg.author.id, data);
}

module.exports = { CreateAccount }
