/*
 * api: http://docs.sencha.com/ext-js/4-0/#!/api/Ext.data.proxy.Server-cfg-api
 */
Ext.define(
'AM.store.MapStore',
{
	extend: 'Ext.data.Store',
	model: 'AM.model.MapModel',
	autoLoad: true,
	storeId: 'mapStore',
    proxy:{ 
    		type: 'rest',
    		url: 'php/rest.php',
    		afterRequest:function( request, success )
    		{
    			console.log( 'request ' + request );
    			console.log( 'success '  + success );
    		}
    			
    }

});