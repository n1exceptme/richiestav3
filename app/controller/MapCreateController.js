Ext.define('AM.controller.MapCreateController', 
{
    extend: 'Ext.app.Controller',
    init: function(){
    	this.control( 
    		{'panel button[action=pop]':{ click:this.showPopUp },
    		 'mapnewview button[action=create]':{click: this.createRecord },
    		 'formrichiesta button[action=inoltra]':{click: this.createrecord } 
    		 } );
    	
    },
    views: [ 'MapNewView', 'FormRichiesta' ],
    showPopUp: function( button )
    {
    	var view = Ext.widget( 'mapnewview' );
    	view.down('form').loadRecord( Ext.create( 'AM.model.MapModel', {name:"", address:"", state:"" } ) );
    }, 
    
/*    createRecord:function( button ){
    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(), 
    	values = form.getValues();
    	
    	record.set(values);
    	
    	var store = Ext.getStore('mapStore');
    	store.add( record );
    	store.sync();
    	
    	win.close();
    },
 */   
    createrecord:function( button ){
    	var win    = button.up('window');
    	form   = win.down('form'),
        form.loadRecord( Ext.create( 'AM.model.RichiestaModel', {cliente:"", progetto:"", richiedente:"" } ) ),
        record = form.getRecord(), 
    	values = form.getValues();
    	
    	record.set(values);
    	
    	var store = Ext.getStore('richiestaStore');
    	store.add( record );
    	store.sync();
						    	
    }
    
    
});