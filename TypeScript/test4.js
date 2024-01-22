function isAuthenticated(user, token) {
  var correctToken = FetchUserTokenFromDB(user);
  return token === correctToken;
}
