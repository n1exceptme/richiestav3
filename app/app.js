Ext.Loader.setConfig({enabled:true});

Ext.application( {
	name:"AM", 
	appFolder:"app", 
	launch: function(){
		
		/**
		 * Controllers have no reference of the Store,
		 * but instead the store is instantiated after they are defined.
		 */		
		Ext.create('AM.store.MapStore');
		Ext.create('AM.store.RichiestaStore');
		
		Ext.create('AM.view.schermata');

	}
,
requires: ['AM.model.MapModel', 'AM.model.RichiestaModel' ],
controllers: ['MapController', 'MapCreateController']
});