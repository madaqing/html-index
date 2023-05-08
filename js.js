function init(){

    window.setInterval(changeImg,3000)

}

var pathArr = new Array(

    "http://cs.hrbust.edu.cn/_upload/article/images/42/89/28a58a9841b6af08770a4b3c0726/30a9d478-4f02-4591-bff4-1acc93048bf5.jpg",
   "http://cs.hrbust.edu.cn/_upload/article/images/ab/6f/a7431ffc41cbadf6750b86b6833f/12e7dc4e-8f3e-479b-a155-129a96d586fa.jpg",
    "http://cs.hrbust.edu.cn/_upload/article/images/3d/0d/f23460cb4cf8824912dbb174cfa0/06c7d828-3a95-4620-8206-c50bf3da76ba.jpg"

);

var index = 0;

function changeImg(){

    myimg = document.getElementById("myimg");

    index ++;

    if(index>=pathArr.length){

        index = 0;

    }

    myimg.src = pathArr[index];

}