AOS.init();

// Navbar Active
$(document).ready(function () {
  $(".nav-link").click(function () {
    $(".nav-link").removeClass("active");
    $(this).addClass("active");
  });
});

// Get Data

function fetchData() {
  const Url = "http://192.168.90.141:3000/popular-job";
  const Url1 = "http://192.168.90.141:3000/testimonial";
  const Url2 = "http://192.168.90.141:3000/informasi";
  const Url3 = "http://192.168.90.141:3000/job";

  // Fetching API Popular JOB
  fetch(Url)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const job = data.map((item, index) => {
        return `
        <div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="fade-up" data-aos-delay="${
          100 * (index + 1)
        }">
          <a href='#lowongan_pekerjaan/details'>
          <div class="card card-body card-hover">
          <img src="${item.imageUrl}" class="img-company" />
          <p class="company-title">${item.title}</p>
          <hr class="driver" />
          <div class="text-card mt-2">
            <p class="text-job">Posisi : ${item.position}</p>
            <p class="text-job">${item.address}</p>
            <p class="text-date">
              Pendaftaran Ditutup : ${item.dateline}
            </p>
          </div>
        </div>
        </a>
        </div>
        `;
      });

      job.forEach((isi) => {
        document.querySelector("#card-job-popular").innerHTML += isi;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // Fetching API Testimonial

  fetch(Url1)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const testimonial = data.map((item, index) => {
        return `
        <div class="col-lg-3 animate-hide col-sm-6 col-6 mb-4" data-aos="zoom-in" data-aos-delay="${
          100 * (index + 1)
        }">
        <div class="card card-body">
          <img src="${item.imageUrl}" class="img-pict-testi" />
          <div class="text-card mt-2">
            <p class="username">${item.username}</p>
            <p class="pekerjaan">${item.working}</p>
            <p class="testi">
              ${item.testimonial}
            </p>
          </div>
        </div>
      </div>
         `;
      });

      testimonial.forEach((isi) => {
        document.querySelector("#testimonial").innerHTML += isi;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // Fetching API Testimonial

  fetch(Url2)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const informasi = data.map((item, index) => {
        return `
        <div class="mt-2 card card-body bg-secondary informasi card-hover" data-aos="fade-up" data-aos-delay="${
          100 * (index + 1)
        }">
        <img
          src="${item.imageUrl}"
          alt="image"
          class="img-informasi"
        />
        <div
          class="
            text-box
            justify-content-between
            d-flex
            flex-column
            ms-0 ms-sm-3 mt-0 mt-sm-4
          "
        >
          <p class="text-title">${item.title}</p>
          <p class="text-informasi">
          ${item.news}
          </p>
          <p class="text-date">${item.dateline}</p>
        </div>
      </div>`;
      });

      informasi.forEach((isi) => {
        document.querySelector("#informasi-content").innerHTML += isi;
      });
    })
    .catch((err) => {
      console.log(err);
    });

  // Fetching API Testimonial

  fetch(Url3)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      const informasi = data.map((item, index) => {
        return `
      <div class="col-lg-3 col-sm-6 col-6 mb-4" data-aos="fade-up" data-aos-delay="${
        100 * (index + 1)
      }">
        <div class="card card-body bg-secondary card-hover">
        <img src="${item.imageUrl}" class="img-company" />
        <p class="company-title">${item.title}</p>
        <hr class="driver" />
        <div class="text-card mt-2">
          <p class="text-job">Posisi : ${item.position}</p>
          <p class="text-job">${item.address}</p>
          <p class="text-date">
            Pendaftaran Ditutup : ${item.dateline}
          </p>
        </div>
      </div>
      </div>`;
      });

      informasi.forEach((isi) => {
        document.querySelector("#card-job").innerHTML += isi;
      });
    })
    .catch((err) => {
      console.log(err);
    });
}

$(window).ready(function () {
  fetchData();
});
