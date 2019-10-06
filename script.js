(function () {

///////////////////////////collect files on change///////////////////////////////////////////////////
//global vars
var fileCatcher = document.getElementById('file-catcher');
var fileInput = document.getElementById('file-input');
var fileListDisplay = document.getElementById('file-list-display');
var fileList = [];
var uploadFiles, sendFile;
var images = [];

fileCatcher.addEventListener('submit', function (evnt) {
evnt.preventDefault();
});

fileInput.addEventListener('change', function (evnt) {
fileList = [];
for (var i = 0; i < fileInput.files.length; i++) {
fileList.push(fileInput.files[i]);
}
uploadFiles();
});

////////////////////////////////////////////////////////////////////////////////////
function uploadFiles() {
fileListDisplay.innerHTML = '';
images = [];
fileList.forEach(img=> {
      //get exif  //clean exif  //add exif to images array
    images.push(cleanData(getExif(img)));
  });
  setTimeout(function(){save(images)}, 2000);
// save(images);
window.location.href = "sim.html";
}

async function getExif(img) {
  await EXIF.getData(img, cleanData);
}

function cleanData(){
  var output = EXIF.getAllTags(this);
  setTimeout(function(){

    var exif = output;
    var cleanObject = {};
      if ("GPSLatitude" in exif && "GPSLongitude" in exif){
         cleanObject["lat"] = exif["GPSLatitude"];
         cleanObject["long"] = exif["GPSLongitude"];

         exif["GPSImgDirection"] != undefined ? cleanObject["imgDirection"] = exif["GPSImgDirection"] : console.log();
         exif["GPSImgDirectionRef"] != undefined ? cleanObject["imgDirectionRef"] = exif["GPSImgDirectionRef"] : console.log();
         exif["DateTime"] != undefinead ? cleanObject["date"] = exif["DateTime"] : console.log();
         exif["GPSAltitude"] != undefined ? cleanObject["altitude"] = exif["GPSAltitude"] : console.log();

         images.push(cleanObject);
       }
  }, 4000);
}


//////////////////////////////////HELPER algorithms////////////////////////////

function createCookie(key,value) {
   let cookie = escape(key) + "=" + JSON.stringify(value)+";";
   console.log(cookie);
   document.cookie = cookie;
   console.log("Creating new cookie with key: " + key + " value: " + value);
}

function readCookie(name) {
   let key = name + "=";
   let cookies = document.cookie.split(';');
   for (var i = 0; i < cookies.length; i++) {
     let cookie = cookies[i];
     while (cookie.charAt(0) === ' ') {
             cookie = cookie.substring(1, cookie.length);
         }
     if (cookie.indexOf(key) === 0) {
             return cookie.substring(key.length, cookie.length);
         }
   }
   return null;
 }

function deleteCookie(name) {
   createCookie(name, null);
}

function returnImages(){
  return images;
}

function is_imgs_similar(i, j){
  console.log(i);
  console.log(j);
}

async function save(){
  createCookie('thedata', images);
  //var x = document.cookie;
}

function sortSimilar(){
  var imgArray = returnImages();
  var i,j;
  console.log(imgArray);
  for(i = 0; i<imgArray.length;i++){
    for(j=i+1;j<imgArray.length-1;j++){
      is_imgs_similar(imgArray[i], imgArray[j]);
    }
  }
}

})();
