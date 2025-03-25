function diffArray (arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);

    return [
        ...arr1.filter(item => !set2.has(item)),
        ...arr2.filter(item => !set1.has(item))
    ];
}

console.log(diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
     ["diorite", "andesite", "grass", "dirt", "dead shrub"]
    ));