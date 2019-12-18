// const init = () => {
console.log('Events');
AFRAME.registerComponent('markerhandler', {
    init: function() {
        const marker = document.querySelector('#marker');
        const text = document.querySelector('#text');

        // let selected = false;
        // let origX = 0.0;
        // let endX = 0.0;
        // let deltaX = 0.0;
        // const rotationSpeed = 0.5;

        marker.addEventListener('mousedown', function(ev, target) {
            const intersectedElement = ev && ev.detail && ev.detail.intersectedEl;
            if (text && intersectedElement === text) {
                // selected = true;
                // origX = ev.clientX;

                alert('Click!');
            }

            // function onMouseMove(ev) {
            //     if (selected) {
            //     endX = ev.clientX;
            //     if (origX && endX) {
            //         deltaX = origX - endX;

            //         const rotation = text.getAttribute('rotation');
            //         const newY = rotation.y - deltaX * rotationSpeed;
            //         text.setAttribute('rotation', {x: rotation.x, y: newY, z: rotation.z});
            //     }
            //     origX = endX;
            //     }
            // }

            // document.addEventListener('mousemove', onMouseMove);

            // marker.addEventListener('mouseup', function(ev, target) {
            //     selected = false;
            //     document.removeEventListener('mousemove', onMouseMove);
            //     marker.onmouseup = null;
            // });
        });
    }
});
// };

// export default init;