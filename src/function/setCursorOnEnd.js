function setCursonEnd(node) {
    var sel = "";
    if (window.getSelection && (sel = window.getSelection())) {
        var selectedRange = sel.getRangeAt(0);
        node.focus();
        sel.selectAllChildren(node);
        sel.collapseToEnd();
    }

}