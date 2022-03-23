fetch('https://web0a.herokuapp.com/Data')
  .then(response => response.json())
  .then(json => {
      var RH=document.getElementById('RH')
      var originalContent=`<div>
      <div class="icon"><i class="mangala"></i></div>
      <h4 class="title"><a href="">ABC</a></h4>
      <p class="description">EFG</p>
    </div>`
      for(i=0;i<json.length;i++){

          var myContent=document.createElement('div');
          customizedContent=originalContent;
          customizedContent=customizedContent.replace('ABC',json[i].title)
          customizedContent=customizedContent.replace('EFG',json[i].description)
          customizedContent=customizedContent.replace('mangala',json[i].icon)
          myContent.className='col-lg-4 col-md-6 icon-box'
          myContent.innerHTML=customizedContent;
          RH.appendChild(myContent);


      }

  })