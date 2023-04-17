  document.querySelector('button').addEventListener('click', Nasa)
  function Nasa(){
  const url = 'https://api.nasa.gov/planetary/apod?api_key='
  const api_key = "gin8LiD1FwdqNovxFsetUwL4HST6UoHtMmzPiWLI"
  
  const dateInput = document.getElementById('datepicker');
  const mediaSection = document.querySelector("#media-section");
  const currentDate =new Date().toISOString().slice(0, 10);
  let newDate = "&date="+dateInput.value+"&";
  const imageSection = `<a if="hdimg" href=" target="-blank">
    <div class="image-div">
    <img id="picture" src=" alt="image-by-nasa>
    </div>
    </a>`
    const videoSection = `<div class="video-div"> <iframe id="video" src="" frameborder="0"></iframe></div>`

  function fetchNASAData(){
    try {
      fetch(url+api_key+newDate)
      .then(response => response.json())
      .then(json=>{
        console.log(json)
      displayData(json)
      }) 
    }catch(error) {
      console.log(error)
    }
  }

  function displayData(data){
    date.innerHTML=data.date;
    dateInput.max=currentDate;
    dateInput.min="1995-06-16"
    if(data.media_type == "image"){
      mediaSection.innerHTML = imageSection
      document.getElementById('picture').src = data.url
    }else if(data.media_type =='video'){
      mediaSection.innerHTML = videoSection
      document.getElementById('video').src = data.url
    }
    
    document.getElementById('title').innerText = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('explanation').innerText = data.explanation
  
  }
  
fetchNASAData()
}



