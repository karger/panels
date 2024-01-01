(async function () {
    await Mavo.ready;
    
    Mavo.DOMExpression.special.event("$user", {
				type: "mv-login mv-logout",
				update: (evt) => {
				    return (evt.type=="mv-login") ? evt.backend.user : null;
				}
    });
})();
