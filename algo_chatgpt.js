function findDisjoint(nums1, nums2) {
    let unums1 = new Map(nums1);
    let unums2 = new Map(nums2);

    return [
        nums1.filter((n) => !unums2.has(n)),
        nums2.filter((n) => !unums1.has(n))
    ];
}