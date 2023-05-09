const PonderRegistry = Java.loadClass('com.simibubi.create.foundation.ponder.PonderRegistry')

ClientEvents.loggedIn(event => {
    JsonIO.write('kubejs/ponder.json', {ponder: String(PonderRegistry.ALL.keySet())})
})