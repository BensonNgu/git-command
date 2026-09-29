document.addEventListener("DOMContentLoaded", () => {
     document.querySelectorAll("pre > code").forEach((codeBlock) => {
          const pre = codeBlock.parentNode;

          const wrapper = document.createElement("div");
          wrapper.className = "code-block";

          pre.parentNode.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);

          const button = document.createElement("button");
          button.className = "copy-btn";
          button.type = "button";
          button.setAttribute("aria-label", "Copy code");

          const clipboardIcon = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.5" d="M21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.3529 4.10856 18.175 4.01211 16 4H8C5.82497 4.01211 4.64706 4.10856 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983Z" fill="currentColor"/>
                                   <path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" fill="currentColor"/>
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 10.5C6.25 10.0858 6.58579 9.75 7 9.75H17C17.4142 9.75 17.75 10.0858 17.75 10.5C17.75 10.9142 17.4142 11.25 17 11.25H7C6.58579 11.25 6.25 10.9142 6.25 10.5ZM7.25 14C7.25 13.5858 7.58579 13.25 8 13.25H16C16.4142 13.25 16.75 13.5858 16.75 14C16.75 14.4142 16.4142 14.75 16 14.75H8C7.58579 14.75 7.25 14.4142 7.25 14ZM8.25 17.5C8.25 17.0858 8.58579 16.75 9 16.75H15C15.4142 16.75 15.75 17.0858 15.75 17.5C15.75 17.9142 15.4142 18.25 15 18.25H9C8.58579 18.25 8.25 17.9142 8.25 17.5Z" fill="currentColor"/>
                              </svg>`;
          const checkIcon = `<svg width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                   <path opacity="0.5" d="M21 15.9983V9.99826C21 7.16983 21 5.75562 20.1213 4.87694C19.3529 4.10856 18.175 4.01211 16 4H8C5.82497 4.01211 4.64706 4.10856 3.87868 4.87694C3 5.75562 3 7.16983 3 9.99826V15.9983C3 18.8267 3 20.2409 3.87868 21.1196C4.75736 21.9983 6.17157 21.9983 9 21.9983H15C17.8284 21.9983 19.2426 21.9983 20.1213 21.1196C21 20.2409 21 18.8267 21 15.9983Z" fill="currentColor"/>
                                   <path d="M8 3.5C8 2.67157 8.67157 2 9.5 2H14.5C15.3284 2 16 2.67157 16 3.5V4.5C16 5.32843 15.3284 6 14.5 6H9.5C8.67157 6 8 5.32843 8 4.5V3.5Z" fill="currentColor"/>
                                   <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5483 10.4883C15.8309 10.7911 15.8146 11.2657 15.5117 11.5483L11.226 15.5483C10.9379 15.8172 10.4907 15.8172 10.2025 15.5483L8.48826 13.9483C8.18545 13.6657 8.16909 13.1911 8.45171 12.8883C8.73434 12.5855 9.20893 12.5691 9.51174 12.8517L10.7143 13.9741L14.4883 10.4517C14.7911 10.1691 15.2657 10.1855 15.5483 10.4883Z" fill="currentColor"/>
                              </svg>`;
          button.innerHTML = clipboardIcon;

          button.addEventListener("click", () => {
               navigator.clipboard.writeText(codeBlock.innerText).then(() => {
                    button.innerHTML = checkIcon;

                    setTimeout(() => {
                         button.innerHTML = clipboardIcon;
                    }, 1500);
               });
          });

          wrapper.appendChild(button);
     });
});