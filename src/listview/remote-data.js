/**
 * ListView Remote Sample
 */
this.default = function () {

    //Initialize ListView component
    var remoteListObj = new ej.lists.ListView({

        //Initialize dataSource with the DataManager instance.
        dataSource: new ej.data.DataManager({
            url: 'http://services.odata.org/V4/Northwind/Northwind.svc',
            adaptor: new ej.data.ODataV4Adaptor()
        }),

        //Initialize query with the Query instance to get specified set of data
        query: new ej.data.Query().from('Products').select('ProductID,ProductName').take(10),

        //Map the appropriate columns to fields property
        fields: { id: 'ProductID', text: 'ProductName' },

        //Set header title
        headerTitle: 'Products',

        //Set true to show header title
        showHeader: true

    });

    //Render initialized ListView component
    remoteListObj.appendTo('#listview');

};