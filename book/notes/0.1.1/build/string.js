var handleEvent = function (ele, event) {
    return ele + " " + event;
};
handleEvent(document.getElementById('header'), 'scroll');
handleEvent(document.getElementById('footer'), 'keyup');
