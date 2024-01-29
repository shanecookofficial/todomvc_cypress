function getRandomIndices(count, max) {
    const indices = [];
    for (let i = 0; i < max; i++) {
        indices.push(i);
    }

    const selectedIndices = [];
    for (let i = 0; i < count; i++) {
        const index = Math.floor(Math.random() * indices.length);
        selectedIndices.push(indices[index]);
        indices.splice(index, 1);
    }

    return selectedIndices;
}

module.exports = {
    getRandomIndices
};