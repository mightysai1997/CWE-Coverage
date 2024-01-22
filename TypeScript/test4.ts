import ESAPI from 'node-esapi'


function crossSiteScriptingCompliant() {

  let url = window.location.search.slice(1)


  // Compliant: url is sanitized before ajax call.

  url = ESAPI.encoder().encodeForURL(url)


  $.ajax({url: url, data: "Hello"})

}
