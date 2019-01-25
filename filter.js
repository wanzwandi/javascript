function panggilfilter(){
  var arr = [
    {negara: 'Indonesia', benua: 'Asia'},
    {negara: 'Jerman', benua: 'Eropa'},
    {negara: 'spanyol', benua: 'Eropa'},
    {negara: 'korea', benua: 'Asia'},
    {negara: 'portugal', benua: 'Eropa'},
    {negara: 'Amerika Serikat', benua: 'Amerika Serikat'},
  ];
  var benuaEropa = arr.filter(function(item) {
  return item.benua === 'Asia';
});
return benuaEropa;
}
console.log(panggilfilter());
