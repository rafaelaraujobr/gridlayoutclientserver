import { mapActions, mapGetters } from "vuex";
import { uid } from "quasar";
import { sendEvent, onListener } from "@/plugins/socketio";
export default {
    methods: {
        ...mapActions([
            "ActionSetLayoutControll",
            "ActionSetOptionGrid",
            "ActionSetDisplaySize",
            "ActionUpdateMovedLayout",
            "ActionUpdateResizedLayout",
            "ActionSetPositionAddGridItem"
        ]),
        async getCellFromPixel(event, id) {
            let el = document.getElementById(id);
            let box = el.getBoundingClientRect();
            let position = { left: event.pageX, top: event.pageY };
            let containerPos = { top: 0, left: 0 };
            containerPos = { top: el.offsetTop, left: el.offsetLeft };
            containerPos = {
                top: box.top + document.documentElement.scrollTop,
                left: box.left,
            };
            let relativeLeft = position.left - containerPos.left;
            let relativeTop = position.top - containerPos.top;

            let columnWidth = box.width / this.optionGrid.colNum;
            let rowHeight = box.height / parseInt(this.optionGrid.maxRows);
            this.ActionSetPositionAddGridItem({
                x: Math.floor(relativeLeft / columnWidth),
                y: Math.floor(relativeTop / rowHeight),
            })
            console.log(this.positionAddGridItem);
        },
        addGridItem(type = "webview", extras) {
            this.sendAddGridItem({
                x: this.positionAddGridItem.x,
                y: this.positionAddGridItem.y,
                h: 1,
                w: 1,
                i: uid(),
                maximize: false,
                type,
                extras,
            });
        },
        removeGridItem(i) {
            this.sendRemoveGridItem(i)
        },
        movedEvent(i, x, y) {
            console.log({ i, x, y })
            this.ActionUpdateMovedLayout({ i, x, y })
            this.sendUpdateGrid(this.layoutControll)
        },
        resizedEvent(i, h, w) {
            this.ActionUpdateResizedLayout({ i, h, w })
            this.sendUpdateGrid(this.layoutControll)
        },
        sendAddGridItem(data) {
            sendEvent({
                type: "add-grid-item",
                data: {
                    message: data,
                    sent: Date.now(),
                },
            });
        },
        sendRemoveGridItem(data) {
            sendEvent({
                type: "remove-grid-item",
                data: {
                    message: data,
                    sent: Date.now(),
                },
            });
        },
        sendUpdateGrid(data) {
            sendEvent({
                type: "update-grid",
                data: {
                    message: data,
                    sent: Date.now(),
                },
            });
        },
        onListenerUpdateGrid() {
            onListener({
                type: "update-grid",
                callback: (message) => {
                    if (message.data) {
                        this.ActionSetLayoutControll(message.data);
                    }
                },
            });
        },
        onListenerInitGrid() {
            onListener({
                type: "init-grid",
                callback: (message) => {
                    if (message.data.layoutGrid) {
                        this.ActionSetLayoutControll(message.data.layoutGrid);
                    }
                    this.ActionSetOptionGrid(message.data.optionsGrid);
                    this.ActionSetDisplaySize(message.data.displaySize);

                },
            });
        },
    },
    computed: {
        ...mapGetters([
            "layoutControll",
            "optionGrid",
            "displaySize",
            "positionAddGridItem"
        ]),
    },
};
