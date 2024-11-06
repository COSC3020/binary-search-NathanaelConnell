function binarySearch(list, element) {

    if (list.length == 0){
        return -1;
    } 
    else {
        let low = 0;
        let high = list.length - 1;
        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (list[mid] === element) {
                if(((mid > 0 && list[mid - 1] === element) || (mid < list.length - 1 && list[mid + 1] === element))){
                    return -1;
                }
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
}