const accesskey="mYkuAgd-X5yntQZrw05QCHyS7MI_4NvX5Npgi7cJ3rE"; 2696
const form=document.querySelector("form")
const input=document.getElementById("searchimg")
const searchresults=document.querySelector(".searchresults")
const showmore=document.getElementById("showmore")
let inputdata="";
let page=1;

async function searchimage(){

    inputdata= input.value;
    const url=`https://api.unsplash.com/search/photos?page=${page}&query=${inputdata}&client_id=${accesskey}`
    
    const response= await fetch(url)
    const data=await response.json()
    const results= data.results

    if (page===1) {
        searchresults.innerHTML="";
    }

    results.map((result)=>{
        const imagewrapper=document.createElement('div');
        imagewrapper.classList.add("searchresult");
        const image=document.createElement('img');
        image.src=result.urls.small;

        image.alt=result.alt_description;
        const imagelink=document.createElement('a');
        imagelink.href=result.links.html;
        imagelink.target="_blank";
        imagelink.textContent=result.alt_description;

        imagewrapper.appendChild(image);
        imagewrapper.appendChild(imagelink);
        searchresults.appendChild(imagewrapper);
    });
page++

if (page > 1) {
    showmore.style.display="block";
}}

form.addEventListener("submit",(event)=>{
    event.preventDefault()

    page=1;
searchimage()
})
showmore.addEventListener("click",()=>{
    
searchimage()
})
