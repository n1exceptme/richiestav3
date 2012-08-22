Ext.define(
'AM.view.MapView',
	{
		extend: 'Ext.grid.Panel',
		plugins: [
			Ext.create('Ext.grid.plugin.CellEditing', {
				clicksToEdit: 1
			})
		],			
		store: 'mapStore',
		alias: 'widget.mapview',
		title: 'All Users',

		tbar: [{
            text: 'Aggiungi',
            icon: '../richiesta/app/view/add.png',
            iconCls: 'add16',
            action: 'pop'
        }],

		
		initComponent: function()
		{
			
			this.columns = [ 
		           		{header: 'Id', dataIndex: 'id', flex: 1},
		                {header: 'Name',  dataIndex: 'name', editor: 'textfield', flex: 1}, 
			            {header: 'Address', editor: 'textfield', dataIndex: 'address', flex:1 },
			            {header: 'State', editor: 'textfield', dataIndex: 'state', flex:1 }];
			
			this.callParent(arguments);

		}
		

		
	}
);
