const pathChecker = {
  checkUrl(urlToCheck) {

    if ( /^\/[a-z]*\//g.test(urlToCheck)) {
      urlToCheck= urlToCheck.slice(1, -1);
      return urlToCheck;

    } else if (/^\/[a-z]*/g.test(urlToCheck)) {
      urlToCheck = urlToCheck.slice(1);
      return urlToCheck;
    } 
  }
}

module.exports = pathChecker;

