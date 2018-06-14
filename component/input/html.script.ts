const $ = require("jquery");
declare const ClassicEditor: any;
declare const CKEDITOR: any;

export function nappInputHtmlRefresh(cont?: any) {
    $(cont || document)
        .find("[napp-input-html]")
        .map((i: number, inp: any) => {
            let conf = JSON.parse($(inp).attr("napp-input-html") || "{}");

            // $(inp).find('textarea').map((i: number, el: any) => {

            //     CKEDITOR.replace(el, conf);
            // });
            $(inp).find("[app-component=html-editor]").map((inx: number, el: any) => {
                let editor = CKEDITOR.inline(el, conf);
                editor.on("change", (evt: any) => {
                    $(inp).find("textarea").val(evt.editor.getData());
                });
            });
        });
}

export function nappInputHtmlBootstrap() {
    // tslint:disable-next-line:no-unused-expression
    CKEDITOR && (CKEDITOR.disableAutoInline = true);
    CKEDITOR.plugins.addExternal("autogrow", "https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0/plugins/autogrow/", "plugin.js");
    CKEDITOR.plugins.addExternal("sourcedialog", "https://cdnjs.cloudflare.com/ajax/libs/ckeditor/4.8.0/plugins/sourcedialog/", "plugin.js");

    window.addEventListener("message", receiveMessage, false);
    function receiveMessage(event: any) {
        if (event && event.data && event.data.cmd === "CKEDITOR") {
            let w: any = window;
            w.CKEDITOR.tools.callFunction(event.data.funcNum, event.data.fileUrl);
        }
    }

    nappInputHtmlRefresh();
}
