function namify(users) {
  const userNames = users.map(function(user) {
    return user.name;
  });
  return userNames;
}
