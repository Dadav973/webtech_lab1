

module.exports = {

serverHandle: function (req, res) {

  const http = require('http')
  const url = require('url')
  const qs = require('querystring')

  const route = url.parse(req.url)
  const path = route.pathname
  const params = qs.parse(route.query)

  switch(path){

    case '/':
      res.writeHead(200, {'Content-Type': 'text/html'})
      res.write('this is the sample website. Go to the <a href="/hello">Hello page</a>');
      break;


    case '/hello':
      if(params['name']!==undefined)
      {
        res.writeHead(200, {'Content-Type': 'text/plain'})

          if(params['name']=="David")
          {
            res.write('Hello '+params['name']+'\n')
            res.write('I am a student in ECE');
          }
          else{
            res.write('Hello'+params['name']);
          }

      }
      else{
        res.writeHead(200, {'Content-Type': 'text/plain'})
        res.write('You need to provide a name')
      }
      break;

    default:
      res.writeHead(404, {'Content-Type': 'text/html'})
      res.write('Error 404 : This page is not found')
      break;

  }
  res.end();
}
}
