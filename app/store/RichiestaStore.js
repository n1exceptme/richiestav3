/*
 * api: http://docs.sencha.com/ext-js/4-0/#!/api/Ext.data.proxy.Server-cfg-api
 */
Ext.define(
'AM.store.RichiestaStore',
{
	extend: 'Ext.data.Store',
	model: 'AM.model.RichiestaModel',
	autoLoad: true,
	storeId: 'richiestaStore',
    proxy:{ 
    		type: 'rest',
    		url: 'php2/rest.php',
    		afterRequest:function( request, success )
    		{
    			console.log( 'request ' + request );
    			console.log( 'success '  + success );
    		}
    			
    }

});