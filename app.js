const ajax = new XMLHttpRequest();

ajax.onreadystatechange = function() {
  console.log('state changed: ', ajax.readyState, ajax.status);
  if (ajax.readyState === 4 && ajax.status === 200){
    console.log(ajax.responseText);
  }
}
ajax.open('GET', 'https://randomuser.me/api', true);

ajax.send()