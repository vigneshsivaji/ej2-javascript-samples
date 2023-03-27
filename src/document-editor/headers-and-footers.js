this.default = function () {

    //Documenteditor control rendering starts
    var hostUrl = 'https://services.syncfusion.com/js/production/api/documenteditor/';
    var container = new ej.documenteditor.DocumentEditorContainer({ serviceUrl:hostUrl,height:'590px' });
    ej.documenteditor.DocumentEditorContainer.Inject(ej.documenteditor.Toolbar);
    container.appendTo('#container');
    var defaultDocument = {"sfdt":"UEsDBAoAAAAIAEaJbVbG8ruutgwAAG/iAAAEAAAAc2ZkdO1dSW/cyBX+KwRzCwSj1Zts3SxbsseWZMGSDQzGPlSTxWZZJIsmi1psCAg8p1wCBJgEOWSA3HIIggyQATLIJT/GgI1k8iOmFnaryS5KlNUsqYlnG67uWt9Wj7W85vfepjEjIXmH9z2X2essyfCKnWLHXv/mvc3TOLHX39vxsb0+XO2u2LFvr6/d4x+CkH/gaZKnLE9Heep6sb2+ylOK1Qfftdd7wxXby9MRsdc7POEj2bv4eA+Nsc37H0cpz7ifoBFx+PfIoUEq2+O3xzINRsyRLVXJN6/PeCeS2tgTpI7cJBUp48O+52UBU2kyVuko/+6r5EgkPE1ZJAihSYgCPm5AvLzA8VRFIseYfGMB797epgkOLRKnWWi5NKCJlRJm2Wcr5YooxEyTvaKr69CIy51hliWaUm3vLolJ6pBoXLMBDoienBS7nBFtE5KlIXVrDsBwGNO65JPIIS5xs4jVbJBpKwZoxNVhYa0CpHawFaJxhLQiDMjbDGkK7lgvtB3iiIQ6KpBrhYSX6doc8UYorGsHbzOS1hRIRFM+cbXKwSc4cQhDjNBIK8sgQKFDaw4kZawnKyIpqa+sKhWQuK4Jn2hzUc3mDg25NdPatfmU5PbBtAbykCtKy1DGcN0pkGSJtq7yKkSrugTHCfZx5OJEO50rmh3RIIu5QdSl7ajCW2jln6Z1u3VIEGRhJc9Y231Ws3MvGxNUl+hIzIGadWOU8I61nvmOrv7miYNjhmu78pTU9oLUcRB2anPpZDFxEdPXj/TOIU4ocXFU8azgDluYmJMFMbL41NUS6XnEIXWl6+IUJ/WfAyEN6psmqnDYxNUbMruKS9Qa8h377LXIvda6RK5+7nTW7q0Oh8NBZ22t27nXXxP5TK6Cvmjd8spbBGkXD217/H/7AQ2JY+2jKLV29nklz0Pa3MjD2nxNdpGnJoept8hrnoLi6rH58VaMcqdd7zY/rFkNalboLWOxuEowYaRzmxUDTJZ3QS1TYnnf1jL2dDvNlrGYmWXtfNNdscM24FtLW/fmRyydCRhwO4W1qwG1ak4xmh+1fDzStoVO8UCnZX5n7gjKAH8VZ1sGnGz50Kxlypw75jPAX+n8sHVPSuOPxNmjVCOT0ewjEbVWe3Nn063jb+403cSarXRMb2AWFs7/27aVKt5YGOBOcxXS/KgVdywG2DXMqOZWqGUWe2T6hMrs87Bw89a2J0bprtCUt8FmVZi1VoHl+9i2bX6LN8gt427+ztvEcs3kaJpb+pbpsBhX0DLm5iMh2vb8m4/dMHEiY/hUbT7axMgt4gVhLAZMtxwf0zLLnY/oaRmD5Riktp0kmr55KoRjmdg2sXaf4pvdNkHI27q9QemhdT9i8lZ6It65TCXduez5XF242+KHuEqoW1Oj68LcmhprxRhXF4S3NTWkOY1VhrUtPWu6w8LmjLEilK0x5vRhbEuvNH342tKzVR22tvSsZe1jqWZIXGM+WRsO19Ro2lC4xtyWZjPSmLlUhsA1NaI+/G35F0C6sLeln+QV4W6N8XVhqFtjzlkf5tYOD23QKLWhbfBEvdojbT6crcHJZu6RhlqnrYrwtRbwVRG21tzaShuy1tgs04SrLf/WSRem1hhXlSFqTY14YXhaY2waZLAyLG3pLfPI5AmTueeZJgxt+T2/NvysWS+Czaksa53C9OFmy7/p1IWZLT1XVeFlzS2rTI1UGVa29DrThZMtPVNVYWTL//yqCh9r7sTD4ClVVdhYg7d1l4aMNWai+nCxpbfQqjCxpWdMHx62/CdyJm9iNCFhzW1fWnofaW77IkPAXq/YvhzKl8FW1389K+PUdSfxV48xcnGii79K39nrq3dX9Bym78Q7Z1XxYmOyzA2rZHzgk9Ti/6jrWjEaY8uXElGi57W8BUldiXuLUjYrbk5F3rcMx3N50u31ee4b+Z0FPJFktCMobk7YnpKHofn0yphHEq9gLr7h0FMBl75oJN4Mbco17t1/tGlZ1qtXv7Z2Np8/2tx69nzn/sE8bV1DBPXmRl7NZxq+SQc3F5tbdjULfc+i2aGLcw8f4WjW000cHb59nq4Fb7ycl7re5TVJwyujcflXdn2N/kjgS91fk0R1K12gFzfiA6uD7IUj6namPqfb0XmqcoWiZXskSVnZoayYgBCYyOw2Oa6Kn0xohFX2A9rp+iWz6jrGP227WmGjZyK7gGUhISyE3UpQCx2WRb9TwrLolLEsOgrLotsHLAvAsmgMywKAK5YZuAJQKgClAlAqAKUCUCoApQJQKgClAlAqAKUCUCoApQJQKgClAlAqAKUCUCoApQJQKgClAlAqAKUCUCoApQJQKtqBUmF2uwiIGICIAYgYgIgBiBiAiAGIGICIAYgYgIgBiBiAiLEEp82AvgHoG4C+AegbgL4B6BsL/V0DAGUAUAYAZQBQBgBlAFAGAGVciSUAsAAACwCwAAALALAAAAsAsAAACwCwAAALALAAAAsAsAAACwCwAAALALAAAAsAsAAACwCwAAALALBYZgALc/oDoAwAygCgDADKAKCMhoEyLn6BfPElxIASASgRgBIBKBGAEgEoEYASASgRzaFEnImFjjOZhh4KUiytNf+kvMbqxGuggIwSwgfL8ohz9XZ9pGSt3pjviXft/6qT/+F1R6Pz/sio0Lf0ObJ38Wmmf+ScN3FlrU53MJXItNpUFjM5hQzO6/Vi7kkkmUry1MtTplgepTJBPLl7eYD+1CvNCOFQEDL5fBxNPx87E7u1mRcIys/lwPNcdmyv94a8UAkdR57SASfc5mJI89QL1dCxSlyfhYFixFOABw4N41yXp2ykypgfqieGkyfCtz4T+3YBnhCiN16qCgLp1SK5QmdcMrzpueytbTL2mUBb4Hmdbmer0+P/i799+akvLTJSkQo1ajnphbVeK6t+bz+Jkaj+6aefPn748eOHf3389tuPH/4xpeYxirjK7Z//+vv/f/8b63///MvP3/1BZQtIiM9//+3nf/9ntrLg6NMff/j84w+f/vS7//7tO54rcCOEmyUhTq1dfGw9pyES3D/Go0RbcOAjYd/3o3GKIiSKeOYm80Xm7ikKhAA2sCTsJTc1V3x/lL0Rne37ScaEZT/1Q/F9h9Jggyay26eiJh8vi8aqRcLnpf0coSPR4IFiaTOLfRwSUeGBj0UXewFni3vMCDNLZNFDLBT7NSGCnh3iJDSlHrO+JtYGInLwAyImyEzZYxJysk+RYk5QsfPS2qCBqPwQH8kMLmn5c5ADHAi6HqGMoVD2hoQV2tuI+aKD/dNE+IzNlHG2xjig1qaL01QUPUtORVdPuUkpHneC01BmJIwcioxtRCnPeEgPH/gojGV/JOLT2P4qPeSyQtYeZbIllfIVCScTRVPeXhLMtFp7wa2gwLTIyMT64hGmUjengYdwJE0ijCSiCJEcb2RjIcptjAN0zBc82HrxlcimMS10+MTnSn+MBRVPkBSaSCKcYusAnwgL3CapkN0+HtO8k51TZQenKApRMqm3eyjFsMknXigFFziHwriI+EkOUi2fpSGarbPnIyERkaRxroioQhG86E11Ea4q4oZapuIABbgghAPEfQVWJVmhRChDlmay2JMKzMkX3jkkUS1XNOs4BrWc0KCWExrUcELca3z68/c1Hc9lLmdiX7mjmXzN3csDmrjket7lIcqiPcynDziXhTqXiabApdxql6K2kqdTXzL9RWO+ilrAzzeH4s9at9u9tzYc3h3MrQ5nDgSjk3MSJg5IHC1wa7VWF0OUWMAKoC2kFrKXrWBpoNCxtMcaw+IuYbqIUhuC7tagf2+4tTVz2DAsLejPWxSX9TP5mmyFzDXz49NZKXEXhMTsulCUk0pMrYhvDUsPsYeygFl7KEHjBMW+tUXzC6aourjAx1mZ2e7i7OZqZtOtMpveVWXca9xsunXMplttNjfL0iVmM6G/d1OW0KuyhO6FYlvd6q0NewWxdRu3hF4dS+hVW8LNslTTEvo3ZQn9eUsg6tij7gSS50mTBo1aQr+OJfR1lnAbWKppCYObsoRBFf7TpR60Wa0P6mh9oJ3/hsmvqeHhTWl4eCUNz3rGZjU8rKPh4RU13Aj5l2h4lzKcLka7Qq3DXK2VGxRBk3JTo4nHKsu5SqQ4WRydnSo6Zy//5K2fqw66xeVfd3L5tyKL+8NOoXigA2LWWhBOLjOf8xqzy/JaGp1eZy69qBQnF4mqWOPKojogLMAGJFXCOr9b9VDP8c3vNua+JMMXCbRQYW5hapbyKuW9FnIVUU9c6oFKnVClSf71RKUkHKf51WUkmEivHzKg1/OXvUQr63Q6vTxqzLmFtPUntEWGMMzz8A7Q1ZLo6uwXUEsBAhQACgAAAAgARoltVsbyu662DAAAb+IAAAQAAAAAAAAAAAAAAAAAAAAAAHNmZHRQSwUGAAAAAAEAAQAyAAAA2AwAAAAA"};
    var waitingPopUp = document.getElementById('waiting-popup');
    container.documentEditor.open(JSON.stringify(defaultDocument));    
    container.documentEditor.documentName = 'Headers and Footers';    
    // TitleBar sample starts
    titleBarDiv = document.getElementById('documenteditor_titlebar');
    initializeTitleBar(true); 
    updateDocumentTitle();
    wireEventsInTitleBar();
    container.documentChange = function () {
        updateDocumentTitle();
    };
     var documentTitle;
     var documentTitleContentEditor;
     var titleBarDiv;
     var print;
     var openBtn;
     var download;
     var isPropertiesPaneEnabled;
     function initializeTitleBar(isShareNeeded) {
         documentTitle = ej.base.createElement('label', { id: 'documenteditor_title_name', styles: 'text-transform:capitalize;font-weight:400;text-overflow:ellipsis;white-space:pre;overflow:hidden;user-select:none;cursor:text' });
         documentTitleContentEditor = ej.base.createElement('div', { id: 'documenteditor_title_contentEditor', className: 'single-line' });
         documentTitleContentEditor.appendChild(documentTitle);
         titleBarDiv.appendChild(documentTitleContentEditor);
         documentTitleContentEditor.setAttribute('title', 'Document Name. Click or tap to rename this document.');
         var btnStyles = 'float:right;background: transparent;box-shadow:none; font-family: inherit;border-color: transparent;' +
             'border-radius: 2px;color:inherit;font-size:12px;text-transform:capitalize;margin-top:4px;height:28px;font-weight:400';
         print = addButton('e-de-icon-Print e-de-padding-right', 'Print', btnStyles, 'de-print', 'Print this document (Ctrl+P).', false);
         openBtn = addButton('e-de-icon-Open e-de-padding-right', 'open', btnStyles, 'de-open', 'Open', false);
         var items = [
             { text: 'Microsoft Word (.docx)', id: 'word' },
             { text: 'Syncfusion Document Text (.sfdt)', id: 'sfdt' },
         ];
         download = addButton('e-de-icon-Download e-de-padding-right', 'Download', btnStyles, 'documenteditor-share', 'Download this document.', true, items);
         if (!isShareNeeded) {
             download.element.style.display = 'none';
         }
         else {
             openBtn.element.style.display = 'none';
         }
     }
     function wireEventsInTitleBar() {
         print.element.addEventListener('click', onPrint);
         openBtn.element.addEventListener('click', function (e) {
             if (e.target.id === 'de-open') {
                 var fileUpload = document.getElementById('uploadfileButton');
                 fileUpload.value = '';
                 fileUpload.click();
             }
         });
         documentTitleContentEditor.addEventListener('keydown', function (e) {
             if (e.keyCode === 13) {
                 e.preventDefault();
                 documentTitleContentEditor.contentEditable = 'false';
                 if (documentTitleContentEditor.textContent === '') {
                     documentTitleContentEditor.textContent = 'Document1';
                 }
             }
         });
         documentTitleContentEditor.addEventListener('blur', function () {
             if (documentTitleContentEditor.textContent === '') {
                 documentTitleContentEditor.textContent = 'Document1';
             }
             documentTitleContentEditor.contentEditable = 'false';
             container.documentEditor.documentName = documentTitle.textContent;
         });
         documentTitleContentEditor.addEventListener('click', function () {
             updateDocumentEditorTitle();
         });
     }
     function updateDocumentEditorTitle() {
         documentTitleContentEditor.contentEditable = 'true';
         documentTitleContentEditor.focus();
         window.getSelection().selectAllChildren(documentTitleContentEditor);
     }
     function updateDocumentTitle() {
         if (container.documentEditor.documentName === '') {
             container.documentEditor.documentName = 'Untitled';
         }
         documentTitle.textContent = container.documentEditor.documentName;
     }
     function onPrint() {
         container.documentEditor.print();
     }
     function onExportClick(args) {
         var value = args.item.id;
         switch (value) {
             case 'word':
                 save('Docx');
                 break;
             case 'sfdt':
                 save('Sfdt');
                 break;
         }
     }
     function save(format) {
         container.documentEditor.save(container.documentEditor.documentName === '' ? 'sample' : container.documentEditor.documentName, format);
     }
     function setTooltipForPopup() {
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[0].setAttribute('title', 'Download a copy of this document to your computer as a DOCX file.');
         document.getElementById('documenteditor-share-popup').querySelectorAll('li')[1].setAttribute('title', 'Download a copy of this document to your computer as an SFDT file.');
     }
     function addButton(iconClass, btnText, styles, id, tooltipText, isDropDown, items) {
         var button = ej.base.createElement('button', { id: id, styles: styles });
         titleBarDiv.appendChild(button);
         button.setAttribute('title', tooltipText);
         if (isDropDown) {
             var dropButton = new ej.splitbuttons.DropDownButton({ select: onExportClick, items: items, iconCss: iconClass, cssClass: 'e-caret-hide', content: btnText, open: function () { setTooltipForPopup(); } }, button);
             return dropButton;
         }
         else {
             var ejButton = new ej.buttons.Button({ iconCss: iconClass, content: btnText }, button);
             return ejButton;
         }
     } 
};