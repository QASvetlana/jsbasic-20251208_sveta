function namify(users) {
  let userNames = users.map(function(user) {
    return user.name;
  });
  return userNames;
}
