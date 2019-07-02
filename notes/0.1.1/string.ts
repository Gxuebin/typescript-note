type EventNames = 'click' | 'scroll' | 'mousemove';
const handleEvent: (a: Element, b: EventNames) => string = (ele: Element, event: EventNames) => {
    return `${ele} ${event}`;
}

handleEvent(document.getElementById('header'), 'scroll');
handleEvent(document.getElementById('footer'), 'keyup');
