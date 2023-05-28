if (Platform.isClientEnvironment()) {
    Java.loadClass("pie.ilikepiefoo.events.AdditionalEvents").register(); //Force load of ArchEvents to fabric version work correct.
    let CLIENTRAWINPUTEVENT = Java.loadClass('dev.architectury.event.events.client.ClientRawInputEvent');
    let RESULT = Java.loadClass("dev.architectury.event.EventResult");

    ArchEvents.registry(event => {
        event.register('ClientRawInputEvent.MouseScrolled', CLIENTRAWINPUTEVENT, 'MOUSE_SCROLLED');
    });

    ArchEvents.handle('ClientRawInputEvent.MouseScrolled', event => {
        if (Client.player.mainHandItem == 'create:create_manual' &&
            (Client.player.isCrouching() || Client.isKeyDown(340))) { //isCrouching() doesn't work if player is flying.
            Client.player.sendData('create_manual_change_screen', {})
            event.setResult(RESULT.interruptFalse()) //Cancel event.
            return;
        }
        event.setResult(RESULT.interruptTrue()) //Don't cancel event.
    })
}

StartupEvents.registry('item', event => {
    event.create('create:create_manual')
})