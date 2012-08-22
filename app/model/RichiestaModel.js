/*
Ext.define('AM.model.RichiestaModel', {
    extend: 'Ext.data.Model',
    fields: ['id', 'richiedente', 'progetto', 'cliente']
});
*/

Ext.define('AM.model.RichiestaModel', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'email',     type: 'string'},
        {name: 'title',     type: 'string'},
        {name: 'firstName', type: 'string'},
        {name: 'lastName',  type: 'string'},
        {name: 'phone1',   type: 'number'},
        {name: 'phone2',   type: 'number'},
        {name: 'phone3',   type: 'number'},
        {name: 'hours',     type: 'number'},
        {name: 'minutes',   type: 'number'},
        {name: 'startDate', type: 'date'},
        {name: 'endDate',   type: 'date'}
    ]
});