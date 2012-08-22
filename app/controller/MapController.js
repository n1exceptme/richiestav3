/**
 * controller watches over grid, and pop up requestions changes from record
 * 
 * from last ajax demo, store was removed from controller attributes, as 
 * controller is created prior to the launching of the application, and store
 * is created then. to get access of store, use Ext.getStore('mapStore');
 */
Ext.define('AM.controller.MapController', 
{
    extend: 'Ext.app.Controller',
    init: function(){
    	console.log( "MapController created");
    	
    	this.control(
    	{'mapview': { itemdblclick: this.editRecord }, 
    	 'mapeditview button[action=save]':{click: this.updateRecord },
    	 'mapeditview button[action=delete]':{click: this.deleteRecord }//,
    	 //'formrichiesta button[action=inoltra]' :{click: this.createRichiesta }      	 
        } );  	
    }, 
    views: [ 'MapView', 'MapEditView', 'MapNewView', 'FormRichiesta', 'schermata'],
    
    editRecord:function( grid, record ){
    	
    	var view = Ext.widget( 'mapeditview' );
    	console.log( view );
    	view.down('form').loadRecord( record );
    	
    },
    
    updateRecord:function( button ){
    	
    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(),
        values = form.getValues();
    	record.set(values);
    	
    	win.close();
    	
    	var store = Ext.getStore('mapStore');
    	store.sync();
    },  
        
    deleteRecord:function( button ){
    	
    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord();  	
    	
    	var store = Ext.getStore('mapStore');
    	store.remove( record );
    	
    	win.close();
    	store.sync();
    },
    
    createrecord:function( button ){
    	var win    = button.up('window'),
        form   = win.down('form'),
        record = form.getRecord(), 
    	values = form.getValues();
    	
    	record.set(values);
    	
    	var store = Ext.getStore('richiestaStore');
    	store.add( record );
    	store.sync();
						    	
    }
   
});