/**
 * for now this singleton is creating the direct methods to be assign in the proxy of type direct.
 */
Ext.define('AM.model.RemoteConfig',{
	alternateClassName: ['RemoteConfig'],
	config:{
		operations:[],
		router:'php/router.php',
		type:'remoting'
	},
	query:null,
	singleton:true,
	constructor:function(){
		
		var c = { name:'createRecord', len:1 };
		var r = { name:'getResults', len:1 };
		var u = { name:'updateRecords', len:1 };
		var d = { name:'destroyRecord', len:1 };
		
		this.initConfig({operations:[c,r,u,d]});
		
		Ext.direct.Manager.addProvider(this.getConfigs());
		this.query = QueryOperation;
		return this;
	},
	
	getConfigs:function(){
		return {url:this.getRouter(), type:this.getType(), actions:{QueryOperation:this.getOperations()}};
	}
})