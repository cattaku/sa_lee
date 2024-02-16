// 사용자의 현재 위치를 알려주는 함수
 function getCurrentLocation(callback) {
   if (navigator.geolocation) {
     // 위치 정보를 요청
     navigator.geolocation.getCurrentPosition(function(position) {
       // 성공적으로 위치를 받았을 때
       var latitude = position.coords.latitude;
       var longitude = position.coords.longitude;
       callback(null, { latitude: latitude, longitude: longitude });
     }, function(error) {
       // 위치 정보를 받지 못했을 때
       callback(error, null);
     });
   } else {
     // 브라우저가 Geolocation을 지원하지 않을 때
     callback(new Error("Geolocation is not supported by this browser."), null);
   }
 }

 // 사용법 예시


export default getCurrentLocation;