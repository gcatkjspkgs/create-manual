ItemEvents.rightClicked(event => {
    if (event.player.mainHandItem == 'create:manual') {
        let ray = event.player.rayTrace(64)
        if (ray.block === null) {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder`)
            return;
        }
        let block = String(ray.block.id)
        if (JsonIO.read('kubejs/ponder.json').get("ponder").includes(block)) {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder ${block}`)
        } else {
            event.server.runCommandSilent(`/execute as ${event.entity.uuid} run create ponder`)
        }
    }
})