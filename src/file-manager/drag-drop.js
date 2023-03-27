/**
 * File Manager Drag and Drop feature sample
 */
this.default = function() {
    var hostUrl = 'https://ej2-aspcore-service.azurewebsites.net/';
    // Initialize the FileManager component
    var fileObject = new ej.filemanager.FileManager({
            ajaxSettings: {
                url: hostUrl + 'api/FileManager/FileOperations',
                getImageUrl: hostUrl + 'api/FileManager/GetImage',
                uploadUrl: hostUrl + 'api/FileManager/Upload',
                downloadUrl: hostUrl + 'api/FileManager/Download'    
            },            
            allowDragAndDrop: true,
            toolbarSettings: { items: ['NewFolder', 'SortBy', 'Refresh', 'View', 'Details', 'Cut', 'Copy', 'Delete', 'Download', 'Rename'] },
            contextMenuSettings: {
                layout: ["SortBy", "View", "Refresh", "|", "Paste", "|", "NewFolder", "|", "Details", "|", "SelectAll"],
                visible: true
            }
    });
    fileObject.appendTo('#filemanager');
};