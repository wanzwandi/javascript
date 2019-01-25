function panggilspalace(){
  var kota = ['Tangerang','Jakarta','Malang','Medan'];
  console.log(kota)
  kota.splice(2,0,'Palembang')
  return kota
}
console.log(panggilspalace())
