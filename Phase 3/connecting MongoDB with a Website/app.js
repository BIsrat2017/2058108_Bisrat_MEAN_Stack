let express = require("express")

let app=express()

let http = require("http").Server(app)

let socket = require("socket.io")(http)
