function binarySearch(list, element) {
    if (list.length != 0){
        var low = 0;
        var high = list.length - 1;
        while (low <= high) {
            var mid = Math.floor((low + high) / 2);
            if (list[mid] === element) {
                return mid;
            }
            else if (list[mid] < element) {
                low = mid + 1;
            }
            else {
                high = mid - 1;
            }
        }
        return -1;
    }
    else {
        return -1;
    }
}
