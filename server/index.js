const express = require("express");
const http = require("http").Server(express);
const socketio = require("socket.io")(http, {
    cors: {
        origin: "*",
    },
});
const port = 3000;

let layoutGrid = []

let optionsGrid = {
    maxRows: 4,
    colNum: 6,
    margin: 0
};

let displaySize = {
    width: 800,
    height: 600
};

let mousePosition = {}


socketio.on("connection", (socket) => {
    console.log("conected id:", socket.id);
    socketio.emit("init-grid", { data: { layoutGrid, optionsGrid, displaySize } });

    socket.on("display-size", (eventData) => {
        displaySize = eventData.message
        socketio.emit("display-size", { data: displaySize });
        console.log("display-size", eventData.message);
    });

    socket.on("add-grid-item", (eventData) => {
        layoutGrid.push(eventData.message)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("add-grid-item", eventData.message);
    });

    socket.on("move-mouse", (eventData) => {
        mousePosition = eventData.message
        socketio.emit("move-mouse", { data: mousePosition });
        console.log("move-mouse", eventData.message);
    });

    socket.on("remove-grid-item", (eventData) => {
        layoutGrid = layoutGrid.filter(item => item.i != eventData.message);
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("remove-grid", eventData.message);
    });

    socket.on("resize-grid-item", (eventData) => {
        const item = layoutGrid.find(item => item.i == eventData.message.i)
        let newItem = { ...item }
        newItem.w = eventData.message.w
        newItem.h = eventData.message.h
        Object.assign(item, newItem)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("resize-grid-item", eventData.message);
    });

    socket.on("move-grid-item", (eventData) => {
        const item = layoutGrid.find(item => item.i == eventData.message.i)
        let newItem = { ...item }
        newItem.x = eventData.message.x
        newItem.y = eventData.message.y
        Object.assign(item, newItem)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("move-grid-item", eventData.message);
    });

    socket.on("update-grid", (eventData) => {
        layoutGrid = eventData.message
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("update-grid", eventData.message);
    });

    socket.on("thumb-grid-item", (eventData) => {
        const item = layoutGrid.find(item => item.i == eventData.message.i)
        let newItem = { ...item }
        newItem.extras['thumb'] = eventData.message.thumb
        Object.assign(item, newItem)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("thumb-grid-item", eventData.message.i);
    });

    socket.on("mute-grid-item", (eventData) => {
        const item = layoutGrid.find(item => item.i == eventData.message.i)
        let newItem = { ...item }
        newItem.extras.mute = eventData.message.mute
        Object.assign(item, newItem)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("mute-grid-item", eventData.message);
    });

    socket.on("maximize-grid-item", (eventData) => {
        const item = layoutGrid.find(item => item.i == eventData.message.i)
        let newItem = { ...item }
        newItem.maximize = eventData.message.maximize
        Object.assign(item, newItem)
        socketio.emit("update-grid", { data: layoutGrid });
        console.log("maximize-grid-item", eventData.message);
    });
});

http.listen(port, () => {
    console.log("Server started on port", port);
});
