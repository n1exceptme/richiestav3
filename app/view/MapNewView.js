Ext.define('AM.view.MapNewView', {
    extend: 'Ext.window.Window',
    alias: "widget.mapnewview",
    layout: "fit",
	autoShow: "true",
    initComponent: function() {
          	    	
    	this.items = [{
                    xtype: 'form',
                    height: 210,
                    bodyPadding: 10,
                    items: [
                        {
                            xtype: 'textfield',
                            name:'name',
                            fieldLabel: 'name',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'address',
                            fieldLabel: 'address',
                            anchor: '100%'
                        },
                        {
                            xtype: 'textfield',
                            name: 'state',
                            fieldLabel: 'state',
                            anchor: '100%'
                        } ]
                }
            ];
		
		this.buttons = [{
						text:'Create', 
						//action:'create'
						handler: function(){
						    	var win    = this.up('window'),
						        form   = win.down('form'),
						        record = form.getRecord(), 
						    	values = form.getValues();
						    	
						    	record.set(values);
						    	
						    	var store = Ext.getStore('mapStore');
						    	store.add( record );
						    	store.sync();
						    	
						    	win.close();
						    }
						
						}, 
						
						{text:'Cancel', scope:this, handler:this.close }  
						];
    	this.callParent(arguments);
    }
});