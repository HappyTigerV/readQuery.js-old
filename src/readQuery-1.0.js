/*
http://github.com/HappyTigerV/readQuery.js-old
V1.0 Gold
*/

/////////////////////////////////////////
//  TIPS:THERE ARE A LOT OF BUGS       //
//       PLEASE USE V2 OR MORE HIGHER  //
/////////////////////////////////////////

function query(){
  let q={};
  let pathName=window.location.href.split("/").pop();
  if(pathName.indexOf("?") != -1){
    let arr=pathName.split("?").pop().split("&");
    for(let i of arr){
      q[i.split("=")[0]]=i.split("=")[1];
    }
  }
  return q;
}
