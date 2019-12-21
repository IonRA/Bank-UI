//insert audio-video iframe

var iframe = document.createElement("iframe");

iframe.setAttribute("class", "bankframes");
iframe.setAttribute("src", "https://www.youtube.com/embed/h9o5Zx7m4Fs");

frames = document.getElementsByClassName("frames")[0];

frames.appendChild(iframe);
