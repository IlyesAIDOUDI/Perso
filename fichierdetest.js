function OnPrinterStateChanged(state) {
    var evt = new CustomEvent('printerstatechanged', { detail: state });

    window.dispatchEvent(evt);
}


//Listen to your custom event
window.addEventListener('printerstatechanged', function (e) {
    console.log('printer state changed', e.detail);
});