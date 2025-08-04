document.addEventListener("DOMContentLoaded",()=>{
	let map = document.querySelector("#map")
	map.innerHTML = '<iframe width="534" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=834&amp;height=510&amp;hl=en&amp;q=av%20horacio%20macedo%20Rio%20de%20Janeiro+(Map)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href="/www.versicherungen.at/"></a> <script type="text/javascript" src="https://embedmaps.com/google-maps-authorization/script.js?id=8a62fa79d795242e5f6d2a9d64a8e0067424da56"></script>'
	console.log("Adding map to footer")
})
