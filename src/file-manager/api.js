/**
 * File Manager API sample
 */
this.default = function () {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    var fileObject = new ej.filemanager.FileManager({
        ajaxSettings: {
            url: hostUrl + 'api/FileManager/FileOperations',
            getImageUrl: hostUrl + 'api/FileManager/GetImage',
            uploadUrl: hostUrl + 'api/FileManager/Upload',
            downloadUrl: hostUrl + 'api/FileManager/Download'
        },
        navigationPaneSettings: { visible: false },
        contextMenuSettings: {
            layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
            visible: true
        },
        toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'Cut', 'Copy', 'Paste', 'Delete', 'Download', 'Rename', 'Selection', 'View', 'Details'] },
        view: 'LargeIcons'
    });
    fileObject.appendTo('#filemanager');

    checkBoxObj = new ej.buttons.CheckBox({ checked: true, change: onToolbarChange });
    checkBoxObj.appendTo('#toolbar');

    function onToolbarChange(args) {
        fileObject.toolbarSettings.visible = args.checked;
    }

};