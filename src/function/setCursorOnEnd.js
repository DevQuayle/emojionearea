
   function setCursonEnd() {
        var sel = "";
        if (window.getSelection && (sel = window.getSelection()).modify) {
            var selectedRange = sel.getRangeAt(0);

            sel.collapseToEnd();
            sel.modify("extend", "forward", "paragraph");
            sel.collapseToEnd();

        }

    };