function panggilPerulangan() {
  var data = ['Jakarta', 'Tangerang', 'Lembang'];
  data.map((item, index, array) => {
    console.log(item);
    console.log(index);
    console.log(array);
  });
}

panggilPerulangan();
