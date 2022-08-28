fetch("https://randomuser.me/api/")
  .then((res) => res.json())
  .then((data) => {
    setUser(data.results);
  });

const setUser = ([result]) => {
  console.log(result);
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
          <h3 class="text-2xl text-slate-700 font-bold leading-normal mb-1">
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
              <div class="text-slate-400 flex text-2xl justify-evenly mb-6">
                <i class="fa-solid fa-user icon"></i>
                <i class="fa-solid fa-phone icon"></i>
                <i class="fa-solid fa-envelope icon"></i>
                <i class="fa-solid fa-cake-candles icon"></i>
              </div>
              <a
                href="javascript:;"
                class="ring-1 rounded-full px-4 pb-1 font-semibold ring-current bg-white hover:bg-blue-400 text-blue-400 hover:text-white"
                >Connect User</a
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("root").appendChild(user);
};
