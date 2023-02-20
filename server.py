// Use this only when you want to host this website locally
import http.server

server = http.server.HTTPServer(('localhost', 8000), http.server.CGIHTTPRequestHandler)

server.serve_forever()