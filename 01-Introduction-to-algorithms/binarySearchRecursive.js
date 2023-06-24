function binary_search(list, item, low = 0, high = list.length - 1) {
  const mid = Math.floor((low + high) / 2);
  const guess = list[mid];
  if (guess == item) {
    return mid;
  }
  if (guess > item) {
    return binary_search(list, item, low, (high = mid - 1));
  }
  if (guess < item) {
    return binary_search(list, item, (low = mid + 1), high);
  }

  return null;
}

const my_list = [1, 3, 5, 7, 9];
console.log(binary_search(my_list, 3));
