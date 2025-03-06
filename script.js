//your JS code here. If required.
const output = document.getElementById("output");
let loading = document.createElement("div");
loading.id = "loading";
loading.innerText = "Loading";
loading.style.display = "none";
document.body.appendChild(loading);

let errordiv = document.createElement("div");
errordiv.id = "error";
errordiv.style.color = "red";
document.body.appendChild(errordiv);

const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url) {
	return new Promise((resolve,reject)=>{
		const img = new Image();
		img.src = url;
		img.onload = () => resolve(img);
		img.onerror = () => reject(`Failed to load image : ${url}`);
	});
}

async function downloadImages() {
  output.innerHTML = "";
  errorDiv.innerHTML = "";
  loading.style.display = "block"; // Show loading spinner

  try {
    const images = await Promise.all(imageUrls.map(downloadImage));
    images.forEach((img) => output.appendChild(img));
  } catch (error) {
    errorDiv.innerText = error;
  } finally {
    loading.style.display = "none"; // Hide loading spinner
  }
}

const btn = document.createElement("button");
btn.id = "download-images-button";
btn.innerText = "Download Images";
btn.onclick = downloadImages;
document.body.insertBefore(btn, output);