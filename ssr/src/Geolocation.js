export default function Geolocation(successCallBack) {
  navigator.geolocation.getCurrentPosition(successCallBack);
}
