const m31CardContainer = document.getElementById("m31-card");
const m32CardContainer = document.getElementById("m32-card");

const totalItems = 30; // Adjust this based on the total number of images
const m31Path = "./M31/";
const m32Path = "./M32/";

for (let i = 1; i <= totalItems; i++) {
  // Create elements for M31
  const m31CardHolder = document.createElement("div");
  m31CardHolder.className = "card-holder";

  const m31Img = document.createElement("img");
  m31Img.src = `${m31Path}M31${i.toString().padStart(2, "0")}.jpg`;
  m31Img.alt = 'Image M31-${i}';
  m31Img.onerror = function () {
    this.style.display = "none";
    this.parentElement.classList.add("shape-fallback");
  };

  m31CardHolder.appendChild(m31Img);
  m31CardContainer.appendChild(m31CardHolder);

  const m31FileName = `M31${i.toString().padStart(2, "0")}.jpg`;
  const m31FileNameTag = document.createElement("p");
  m31FileNameTag.textContent = m31FileName;
  m31FileNameTag.className = "m31FileNameTag"; // Added class name here
  m31CardHolder.appendChild(m31FileNameTag);

  // Create elements for M32
  const m32CardHolder = document.createElement("div");
  m32CardHolder.className = "card-holder";

  const m32Img = document.createElement("img");
  m32Img.src = `${m32Path}M32${i.toString().padStart(2, "0")}.jpg`;
  m32Img.alt = "";
  m32Img.onerror = function () {
    this.style.display = "none";
    this.parentElement.classList.add("shape-fallback");
  };

  m32CardHolder.appendChild(m32Img);
  m32CardContainer.appendChild(m32CardHolder);

  const m32FileName = `M32${i.toString().padStart(2, "0")}.jpg`;
  const m32FileNameTag = document.createElement("p");
  m32FileNameTag.className = "m32FileNameTag"; // Added class name here
  m32FileNameTag.textContent = m32FileName;
  m32CardHolder.appendChild(m32FileNameTag);
}
