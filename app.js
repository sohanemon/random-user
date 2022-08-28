fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    setUser(data.results);
  });

const setUser = ([result]) => {
  document.getElementById("loading").style.display = "none";
  let user = document.createElement("div");
  user.innerHTML = `
   <div
      class="relative max-w-md mx-auto md:max-w-2xl min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-xl mt-32"
    >
      <div class="px-6">
        <div class="flex flex-wrap justify-center">
          <div class="w-full flex justify-center">
            <div class="relative">
              <img
                src=${result.picture.large}
                class="shadow-xl rounded-full border-none absolute left-1/2 -translate-x-1/2 -top-16 max-w-[150px]"
              />
            </div>
          </div>
          <div class="w-full text-center mt-14">
            <div class="flex justify-center pt-4 items-center">
              <div class="p-3 text-center">
                <span
                  class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                >${
                  result.gender === "male"
                    ? "<i class='fa-solid fa-mars'></i>"
                    : "<i class='fa-solid fa-venus'></i>"
                }
                  
                  
                </span>
                <span class="text-sm text-slate-400">Gender</span>
              </div>
              <div class="p-3 text-center">
                <span
                  class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                  >${result.nat}</span
                >
                <span class="text-sm text-slate-400">Nation</span>
              </div>

              <div class="p-3 text-center">
                <span
                  class="text-xl font-bold block uppercase tracking-wide text-slate-700"
                  >${result.dob.age}</span
                >
                <span class="text-sm text-slate-400">Age</span>
              </div>
            </div>
          </div>
        </div>
        <p
          class="text-center text-lg text-slate-400 leading-relaxed tracking-wider hover:text-blue-500 cursor-pointer font-medium lowercase"
        >
          @${result.login.username}
        </p>
        <div class="text-center mt-2">
          <h3 id='title' class="text-2xl select-text text-slate-700 font-bold leading-normal mb-1">
           ${result.name.first} ${result.name.last}
          </h3>

          <div class="text-xs mt-0 mb-2 text-slate-400 font-bold uppercase">
            <i class="fas fa-map-marker-alt mr-2 text-slate-400 opacity-75"></i
            >${result.location.state}, ${result.location.country}
          </div>
        </div>

        <div class="mt-6 py-6 border-t border-slate-200 text-center">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-20">
              <div id="icons" class="text-slate-400 flex text-2xl justify-evenly mb-6">
                <i class="fa-solid fa-user icon"></i>
                <i class="fa-solid fa-phone icon"></i>
                <i class="fa-solid fa-envelope icon"></i>
                <i class="fa-solid fa-cake-candles icon"></i>
              </div>
              <a
                href="https://twitter.com/${
                  result.login.username
                }" target="_blank"
                class="ring-1 rounded-full px-4 pb-1 font-semibold ring-current bg-white hover:bg-blue-400 text-blue-400 hover:text-white"
                >Connect User</a
              >
            </div>
          </div>
        </div>
      </div> <button onclick="location.reload()"
      type="button"
      class="text-white bg-blue-400 hover:after:content-['Shuffle'] transition-all duration-300  hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 absolute -top-10 right-6"
    >
      <i class="fa-solid fa-shuffle"></i>
    </button>
    
      </div>
     
  `;
  document.getElementById("root").appendChild(user);
  const title = user.querySelector("#title");
  const x = user.querySelector("#icons");
  x.addEventListener("mouseover", (e) => {
    switch (e.target) {
      case x.children[0]:
        title.innerText = `${result.name.first} ${result.name.last}`;
        break;
      case x.children[1]:
        title.innerText = result.phone;
        break;
      case x.children[2]:
        title.innerText = result.email;
        break;
      case x.children[3]:
        title.innerText = result.dob.date.slice(0, 10);
        break;
    }
  });
};
