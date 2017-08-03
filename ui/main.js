console.log('Loaded!');
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';
var img = document.getElementById('modi')
var marginleft = 0;
function moveright(){
    marginleft = marginleft + 1;
    img.style.marginleft = marginleft+'px';
}
img.onclick = function() {
    var interval = setinterval(moveright,50);
};
//counter code

button.onclick = function(){
    //make a request to counter endpoint
    var request = new XMLhttprequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange = function() {
        if(request.readystate === XMLhttprequest.DONE) {
            //take some action
            if(request.status === 200) {
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.tostring();
            }
        }
    };
//render the variable in the correct span
//make the request
var button = document.getElemenyById('counter')
var counter = 0;
request.open('GET', 'http://gokhu.imad.hasura-app.io/counter',true);
request.send(null);
};

//submit name
var nameinput = document.getElementById('name');
var name = nameinput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function() {
    //make a request to a server and send the name
    
    
    
    
    //capture the list of names and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0;i<name.length;i++) {
        list += '<li>' + name[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerhtml = list;
};
        
    }
}