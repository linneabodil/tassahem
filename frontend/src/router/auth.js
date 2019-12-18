module.exports.isAuthenticated = () => {

  if (sessionStorage.getItem(['authentic'])) {
    return true;
  }
  else {
    return false;
  }
};
