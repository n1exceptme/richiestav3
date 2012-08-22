Ext.define('AM.view.MapEditView', {
    extend: 'Ext.window.Window',
    alias: "widget.mapeditview",
    layout: "fit",
	autoShow: "true",
	title: "create new record",
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
		
		this.buttons = [ {text:'Save', action:'save'}, {text:'Delete', action:'delete'}, {text:'Cancel', scope:this, handler:this.close } ];
    	this.callParent(arguments);
    }
});