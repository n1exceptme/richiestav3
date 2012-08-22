Ext.define('AM.view.schermata',{
	
	extend: 'Ext.panel.Panel',
	
	id: 'schermata',
    title: 'Richiesta di acquisto materiale lavori',
    width: 600,
    height: 1200,
    renderTo: Ext.getBody(),
    
    layout: {
        type: 'vbox',       // Arrange child items vertically
        align: 'stretch',    // Each takes up full width
        padding: 5
    },
    
	tbar: [
			{
            xtype:'splitbutton',
            text: 'File',
            iconCls: 'add16',
            menu: [	{
            		text: 'Apri...',
            	 	handler: function(){
            				Ext.Msg.prompt('Apri', 'Inserire l\'ID della richiesta da aprire:', function(btn, text){
                			if(btn == 'ok' && text){
                    			action.setText(text);
                    			action.setHandler(function(){
                        				Ext.example.msg('Click','You clicked on "'+text+'".');
		                    			});
				            		}
            					}
            				);
        				}
            		},
            		{
	           		text: 'Inoltra Richiesta',
		            icon: '../richiesta/app/view/add.png',
		            iconCls: 'add16',
		            action: 'richiedi',
            		handler: function() {Ext.Msg.alert('Inoltro', "Richiesta inoltrata")}
            		}
            	]
        	},
        	'-',
        	{
            text: 'Modifica',
            iconCls: 'add16',
            action: 'password',
            handler: function() {Ext.Msg.alert('Nome form', 'Nome del form: "'+this.up('panel').down('formrichiesta').items+'".' );},
			//handler: function() {Ext.Msg.alert('Immetti password per modifica', "PASSWORD: PIPPO123")},
			},
            {
            text: 'PROVA',
			handler: function() {
					//var win = this.up('form');
					var form = Ext.getCmp('formrichiesta').down('form'),
					record = form.getRecord(), 
    				values = form.getValues();
    				
					record.set(values);
    	
			    	var store = Ext.getStore('richiestaStore');
			    	store.add( record );
			    	store.sync();
				},
            iconCls: 'add16'
            },
            {
            text: 'Paste',
            iconCls: 'add16'
            },
            '-',
            {
            text   :'Toggle Enabled',
            handler: function() {
            	this.down('form').items.each(function(item) {
            		item.setDisabled(!item.disabled);
            	});
            	}
            },
            {
                text   : 'Reset Form',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().reset();
                }
            },
            {
                text   : 'Validate',
                handler: function() {
                    Ext.getCmp('form-widgets').getForm().isValid();
                }
            }
        ],    

    items: [
	    	{
	        xtype: 'FormRichiesta',
	        //id: 'formrichiesta2',
			flex: 1
	    	},

	    	{
	        xtype: 'splitter'   // A splitter between the two child items
	    	}, 
	    	
	    	{
	        xtype: 'mapview',
	        flex: 1
	    	}	    	
       	]

 }
);