var stackContainers = document.querySelectorAll('.engr-stack-img-name');
var stackSkillsContainer = document.querySelector('.select-skill-container');
var eventNameStore;
for (i = 0; i < stackContainers.length; i++) {
    stackContainers[i].addEventListener("click", function (event) {
        event.target.classList.toggle('selected-cliked-stack');
        if (event.target.classList.contains('selected-cliked-stack')) {
            console.log(eventNameStore + ' Container')
        } else {
            console.log(event.target.textContent + ' Not-contained')
            let removeStore = eventNameStore
            stackSkillsContainer.parentNode.removeChild(eventNameStore)
        }
    })
}
(function addStack() {
    document.querySelector(".engineer-stacks-container").addEventListener("click", eve => {
        var parentStack = document.querySelector('.select-skill-container_');
        if (eve.target.matches('.engr-stack-img, .engr-stack-img *')) {
            parentStack.style="    border: 1px solid rgba(0, 0, 0, .4);";
            var shortname = eve.target.dataset.name;
            console.log(parentStack.children.length + "%");
            var stackStore = (parentStack.children.length == 1) ? [] : arrayReturn(parentStack);
            console.log(stackStore);
            console.log(stackStore.includes(shortname))
            if (!stackStore.includes(shortname)) {
                stackStore.push(shortname)
                startStack(eve, parentStack, shortname);
                console.log(stackStore)
            } else {
                console.log("Hi")
            }
        }
    });
})();
function startStack(eve, parentStack, shortname) {
    var url = eve.target.src;
    eve.target.classList.toggle('selected-cliked-stack');
    var createSelectedStack = `
                <div class="selected-stacks">
                    <p class="selected-stack-name">
                        ${shortname}
                    </p>
                    <div class="cancel-stack-icon-container">
                        <span class="iconify cancel-stack-icon" data-icon="ic:round-cancel"></span>
                    </div>
                 </div>
                `;
    parentStack.insertAdjacentHTML("beforeend", createSelectedStack);
}
function arrayReturn(parentStack) {
    var exampleArray = document.querySelector('#demo').textContent.split(',');
    for (let i = 0; i < parentStack.children.length; i++) {
        if (!parentStack.children[i].nodeName.toLowerCase() == 'input') {
            var trimStackName = parentStack.children[i].children[i].textContent.trim();
            exampleArray.push(trimStackName);
            var newStackName = trimStackName + " ,";
            document.querySelector('#demo').textContent += newStackName;
        }
        console.log(parentStack.children[i])
    }
    return exampleArray;
}