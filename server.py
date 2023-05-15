import http.server

server = http.server.HTTPServer(('localhost', 8000), http.server.CGIHTTPRequestHandler)

server.serve_forever()