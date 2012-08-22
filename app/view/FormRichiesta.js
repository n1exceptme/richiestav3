Ext.define('AM.view.FormRichiesta', {
    extend: 'Ext.panel.Panel',
    alias: "widget.FormRichiesta",
    title: 'Form di richiesta',
    layout: "fit",
	autoShow: "true",
	collapsible: true,
	
    initComponent: function() {
          	    	
    	this.items = [{
                    xtype: 'form',
                    height: 400,
                    bodyPadding: 10,
                    
				    items   : [
				        {
				            xtype     : 'textfield',
				            name      : 'email',
				            fieldLabel: 'Email Address',
				            vtype: 'email',
				            msgTarget: 'side',
				            allowBlank: false
				        },
				        {
				            xtype: 'fieldcontainer',
				            fieldLabel: 'Date Range',
				            combineErrors: true,
				            msgTarget : 'side',
				            layout: 'hbox',
				            defaults: {
				                flex: 1,
				                hideLabel: true
				            },
				            items: [
				                {
				                    xtype     : 'datefield',
				                    name      : 'startDate',
				                    fieldLabel: 'Start',
				                    margin: '0 5 0 0',
				                    allowBlank: false
				                },
				                {
				                    xtype     : 'datefield',
				                    name      : 'endDate',
				                    fieldLabel: 'End',
				                    allowBlank: false
				                }
				            ]
				        },
				        {
				            xtype: 'fieldset',
				            title: 'Details',
				            collapsible: true,
				            defaults: {
				                labelWidth: 89,
				                anchor: '100%',
				                layout: {
				                    type: 'hbox',
				                    defaultMargins: {top: 0, right: 5, bottom: 0, left: 0}
				                }
				            },
				            items: [
				                {
				                    xtype: 'fieldcontainer',
				                    fieldLabel: 'Phone',
				                    combineErrors: true,
				                    msgTarget: 'under',
				                    defaults: {
				                        hideLabel: true
				                    },
				                    items: [
				                        {xtype: 'displayfield', value: '('},
				                        {xtype: 'textfield',    fieldLabel: 'Phone 1', name: 'phone1', width: 29, allowBlank: false},
				                        {xtype: 'displayfield', value: ')'},
				                        {xtype: 'textfield',    fieldLabel: 'Phone 2', name: 'phone2', width: 29, allowBlank: false, margins: '0 5 0 0'},
				                        {xtype: 'displayfield', value: '-'},
				                        {xtype: 'textfield',    fieldLabel: 'Phone 3', name: 'phone3', width: 48, allowBlank: false}
				                    ]
				                },
				                {
				                    xtype: 'fieldcontainer',
				                    fieldLabel: 'Time worked',
				                    combineErrors: false,
				                    defaults: {
				                        hideLabel: true
				                    },
				                    items: [
				                       {
				                           name : 'hours',
				                           xtype: 'numberfield',
				                           width: 48,
				                           allowBlank: false
				                       },
				                       {
				                           xtype: 'displayfield',
				                           value: 'hours'
				                       },
				                       {
				                           name : 'minutes',
				                           xtype: 'numberfield',
				                           width: 48,
				                           allowBlank: false
				                       },
				                       {
				                           xtype: 'displayfield',
				                           value: 'mins'
				                       }
				                    ]
				                },
				                {
				                    xtype : 'fieldcontainer',
				                    combineErrors: true,
				                    msgTarget: 'side',
				                    fieldLabel: 'Full Name',
				                    defaults: {
				                        hideLabel: true
				                    },
				                    items : [
				                        {
				                            //the width of this field in the HBox layout is set directly
				                            //the other 2 items are given flex: 1, so will share the rest of the space
				                            width:          50,
				
				                            xtype:          'combo',
				                            mode:           'local',
				                            value:          'mrs',
				                            triggerAction:  'all',
				                            forceSelection: true,
				                            editable:       false,
				                            fieldLabel:     'Title',
				                            name:           'title',
				                            displayField:   'name',
				                            valueField:     'value',
				                            queryMode: 'local',
				                            store:          Ext.create('Ext.data.Store', {
				                                fields : ['name', 'value'],
				                                data   : [
				                                    {name : 'Mr',   value: 'mr'},
				                                    {name : 'Mrs',  value: 'mrs'},
				                                    {name : 'Miss', value: 'miss'}
				                                ]
				                            })
				                        },
				                        {
				                            xtype: 'textfield',
				                            flex : 1,
				                            name : 'firstName',
				                            fieldLabel: 'First',
				                            allowBlank: false
				                        },
				                        {
				                            xtype: 'textfield',
				                            flex : 1,
				                            name : 'lastName',
				                            fieldLabel: 'Last',
				                            allowBlank: false,
				                            margins: '0'
				                        }
				                    ]
				                }
				            ]
				        }
				    ],
				    
				        buttons: [
							        {
							            text   : 'Load test data',
							            handler: function() {
							                this.up('form').getForm().loadRecord(Ext.create('AM.model.RichiestaModel', {
							                    'email'    : 'abe@sencha.com',
							                    'title'    : 'mr',
							                    'firstName': 'Abraham',
							                    'lastName' : 'Elias',
							                    'startDate': '01/10/2003',
							                    'endDate'  : '12/11/2009',
							                    'phone1'  : '555',
							                    'phone2'  : '123',
							                    'phone3'  : '4567',
							                    'hours'    : 7,
							                    'minutes'  : 15
							                }));
							            }
							        },
							        {
							            text   : 'Save',
							            handler: function() {
							                var form = this.up('form').getForm(),
							                	record = form.getRecord(), //Nuove righe per l'inserimento  
							                	values = form.getValues(); //dei dati
							                	record.set(values);			//nel database
							                	var store = Ext.getStore('richiestaStore');
										    	store.add( record );
										    	store.sync();
							                	
							                    s = '';
							                if (form.isValid()) {
							                    Ext.iterate(form.getValues(), function(key, value) {
							                        s += Ext.util.Format.format("{0} = {1}<br />", key, value);
							                    }, this);
							
							                    Ext.Msg.alert('Form Values', s);
							                }
							            }
							        },
							
							        {
							            text   : 'Reset',
							            handler: function() {
							                this.up('form').getForm().reset();
							            }
							        }
							    ]
				    
				    
                }
            ];
		

    	this.callParent(arguments);
    }
});