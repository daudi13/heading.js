
const appearBtn = document.getElementById('appear');


const passage = document.createElement('p');
passage.classList.add('intro');

appearBtn.addEventListener('click', appears);
function appears() {
    passage.classList.toggle('hidden');

    if (passage.classList.contains('hidden')) {
        appearBtn.textContent = `appear`;
    } else {
        appearBtn.textContent = 'Disappear';
    }
}
passage.innerText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis faucibus odio eu mollis suscipit. Duis maximus quis tellus sit amet eleifend. Duis cursus pulvinar lorem, eget commodo dolor molestie quis. In tempor lacus eget sagittis suscipit. Mauris eget pellentesque enim, in suscipit lacus. Praesent a commodo dui, vitae placerat magna. Cras vel sagittis dui, non placerat diam.

Interdum et malesuada fames ac ante ipsum primis in faucibus. Praesent iaculis sodales fringilla. Aliquam vitae nulla id urna egestas viverra nec at turpis. Praesent tincidunt ligula eros. Mauris non nibh venenatis, malesuada elit vitae, eleifend lectus. Nullam libero diam, consectetur ut risus in, dignissim mollis velit. In euismod sagittis imperdiet. Phasellus cursus, mauris non bibendum posuere, leo odio finibus diam, eu accumsan est urna id lorem. Nunc mollis mauris et metus tempor, vel dignissim nisi faucibus. Integer porta neque felis. Curabitur vel aliquet lorem. Ut sed iaculis urna. Proin ornare risus velit.`;

document.getElementById('header').appendChild(passage);



