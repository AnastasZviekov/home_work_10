const animalsList =  [
    [`turtle`,`🐢`],
    [`octopus`,`🐙`],
    [`fish`,`🐠`],
    [`flamingo`, `🦩`],
    [`penguin`, `🐧`],
];

    function renderItems (arr) {
        arr.forEach((item, index) => {
            setTimeout(() => document.write(`<p> ${item.join(":")}</p>`), ++index * 1000);
        })
    }

    let animalListResult=renderItems(animalsList);

