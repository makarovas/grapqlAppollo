const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
const cors = require("cors");
const app = express();

const createUser = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const users = [
  { id: 1, username: "Sasha" },
  { id: 2, username: "Vasya" },
];

const root = {
  getAllUsers: () => users,
  getUser: ({ id }) => users.find((user) => id == user.id),
  createUser: ({ input }) => {
    const user = createUser(input);
    users.push(user);
    return user;
  },
};

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema,
    rootValue: root,
  })
);

app.listen(5000, () => console.log("run server 5000"));
