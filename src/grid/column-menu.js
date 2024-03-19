this.default = function () {
    var grid = new ej.grids.Grid({
        dataSource: window.orderDatas,
        allowGrouping: true,
        allowSorting: true,
        allowFiltering: true,
        filterSettings: { type: 'CheckBox' },
        allowPaging: true,
        groupSettings: { showGroupedColumn: true },
        showColumnMenu: true,
        columns: [
            { field: 'OrderID', headerText: 'Order ID', width: 160, textAlign: 'Right', showInColumnChooser: false },
            { field: 'CustomerName', headerText: 'Customer Name', width: 200 },
            { field: 'Freight', format: 'C2', width: 160, textAlign: 'Right' },
            { field: 'ShipName', headerText: 'Ship Name', width: 200 },
            { field: 'ShipCountry', visible: false, headerText: 'Ship Country', width: 200 },
            { field: 'ShipCity', headerText: 'Ship City', width: 150 }
        ]
    });
    grid.appendTo('#Grid');
};
