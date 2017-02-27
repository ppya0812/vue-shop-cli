/**
 * usage
 * <div v-tap.self.stop.prevent="{callback: goIndex, argus: [1,2]}"><div>
 */
const DEFAULT = {
    speed: 50,
    distance: 10,
    time: 700
};
const eventName = 'wmapptap';

export default function tap(Vue, options) {
    let option = Object.assign({}, DEFAULT, options);
    let startState = null;
    window.addEventListener('touchstart', function ontouchstart(e) {
        startState = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
            time: Date.now()
        };
    });

    window.addEventListener('touchend', function ontouchend(e) {
        if (e.changedTouches.length !== 1 || !startState) {
            startState = null;
            return;
        }
        let endState = {
            x: e.changedTouches[0].clientX,
            y: e.changedTouches[0].clientY,
            time: Date.now()
        };
        let distance = Math.sqrt(Math.pow(endState.x - startState.x, 2) + Math.pow(endState.y - startState.y, 2));
        let time = endState.time - startState.time;
        let speed = distance / time * 1000;
        if (distance <= option.distance && time <= option.time && speed <= option.speed) {
            let ev = document.createEvent('Event');
            ev.initEvent(eventName, true, true);
            ev.pageX = e.changedTouches[0].pageX;
            ev.pageY = e.changedTouches[0].pageY;
            e.target.dispatchEvent(ev);
        }
    });
    Vue.directive('tap', {
        bind: function (el, binding, vnode) {
            el.addEventListener(eventName, function ontap(e) {
                if (binding.modifiers.self && e.target !== el) {
                    return;
                }
                if (binding.modifiers.stop) {
                    e.stopPropagation();
                }
                if (binding.modifiers.prevent) {
                    e.preventDefault();
                }
                if (typeof binding.value.callback !== 'function') {
                    return;
                }
                let argus = binding.value.argus || [];
                argus.push(e);
                binding.value.callback.apply(vnode.context, argus);
            });
        }
    });
}
