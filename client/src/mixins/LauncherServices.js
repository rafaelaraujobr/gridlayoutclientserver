import { mapActions, mapGetters } from "vuex";
import { uid } from "quasar";
import { sendEvent } from "@/plugins/socketio";
export default {
    methods: {
        ...mapActions([
            "ActionSetLauncher",
        ]),
        addGridItem(data) {
            this.sendAddGridItem({
                x: this.positionAddGridItem.x,
                y: this.positionAddGridItem.y,
                h: 1,
                w: 1,
                i: uid(),
                maximize: false,
                type: data.type,
                name: data.name,
                extras: data.extras,
            });
            this.ActionSetLauncher(false)
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
    },
    computed: {
        ...mapGetters([
            "launcher",
            "positionAddGridItem"
        ]),
    },
};
