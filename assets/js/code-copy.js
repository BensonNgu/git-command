document.addEventListener("DOMContentLoaded", () => {
     document.querySelectorAll("pre > code").forEach((codeBlock) => {
          const button = document.createElement("button");
          button.className = "copy-btn";
          button.type = "button";


          const clipboardIcon = `<img src="/assets/icons/clipboard.svg" alt="Copy" >`;
          const checkIcon = `<img src="/assets/icons/clipboard-check.svg" alt="Copied" >`; // you'll need a check.svg too


          button.innerHTML = clipboardIcon;

          button.addEventListener("click", () => {
               navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    button.innerHTML = checkIcon;
                    setTimeout(() => {
                         button.innerHTML = clipboardIcon;
                    }, 1500);
               });
          });

          const pre = codeBlock.parentNode;
          pre.appendChild(button);
     });
});
