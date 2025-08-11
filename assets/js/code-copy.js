document.addEventListener("DOMContentLoaded", () => {
     document.querySelectorAll("pre > code").forEach((codeBlock) => {
          const button = document.createElement("button");
          button.className = "copy-btn";
          button.type = "button";

          const clipboardIcon = `<img src="/git-command/assets/icons/clipboard.svg" alt="Copy" width="24" height="24">`;
          const checkIcon = `<img src="/git-command/assets/icons/clipboard-check.svg" alt="Copied" width="24" height="24">`; // you'll need a check.svg too


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
          pre.style.position = "relative";
          pre.appendChild(button);
     });
});
