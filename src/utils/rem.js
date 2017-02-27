export default function rem(designWidth, remSize) {
    let percent = remSize / designWidth;
    let doc = window.document;
    let docEl = doc.documentElement;

    function setRootSize() {
        let width = docEl.getBoundingClientRect().width;
        // 绝对值（px）
        docEl.style.fontSize = width * percent + 'px';
        // 相对值
        // docEl.style.fontSize = width * percent * 100 / 16 + '%';
    }
    setRootSize();
    window.addEventListener('resize', setRootSize);
}
