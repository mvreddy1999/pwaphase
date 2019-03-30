function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json")
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if (xhr.readyState === 4 && xhr.status == "200") {
      callback(xhr.responseText);

    }
  };
  xhr.send();
}

loadJson("dynamic.json",function(text){
  let data= JSON.parse(text);
  console.log(data);
  profile(data.profile)
  career(data.career)
  education(data.education)
  skills(data.skills)
  })
   var left=document.querySelector(".left");
  function profile(p){
    var image=document.createElement("img");
    image.src=p.image;
    left.append(image);

    var h2 = document.createElement("h2");
    h2.textContent=p.name;
    left.append(h2);

    var h3 = document.createElement("h3");
    h3.textContent=p.designation;
    left.append(h3);

    var h4 = document.createElement("h4");
    h4.textContent=p.mbl;
    left.append(h4);

    var h5 = document.createElement("h5");
    h5.textContent=p.Email;
    left.append(h5);
}

    var right=document.querySelector(".right");
   function career(c){
     var h1 = document.createElement("h1");
     h1.textContent="Career Objective";
     right.append(h1);
     var hr=document.createElement("hr");
     right.append(hr);
     var h2=document.createElement("h2");
     h2.textContent=c.info;
     right.append(h2);

  }
      function education(e){
         var h1 = document.createElement("h1");
         h1.textContent="education Skills";
         right.append(h1);
         var hr=document.createElement("hr");
         right.append(hr);

         var table = document.createElement("table");
          var tr1 ="<tr><th>Qualification</th><th>Institute</th><th>YOP</th><th>per</th></tr>";
          var tr2= " ";
           for(var i=0;i<e.length;i++)
          {
            tr2=tr2+"<tr><td>"+e[i].Qualification+"</td><td>"+e[i].Institute+"</td><td>"+e[i].YOP+"</td><td>"+e[i].per+"</td></tr>";
          }
          table.innerHTML=tr1+tr2;
          right.append(table);

        }
            function skills(s){
              var h1 = document.createElement("h1");
              h1.textContent="Skills";
              right.append(h1);
              var hr=document.createElement("hr");
              right.append(hr);
              var ul = document.createElement("ul");
                for(var i in s){
                  var li=document.createElement("li");
                  li.innerHTML=s[i].name+":-"+s[i].info;
                  ul.append(li);
                }
                right.append(ul);



            }
