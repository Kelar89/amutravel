---
title: "Beranda"
layout: "base.njk"
---

<header class="hero-section text-white text-center d-flex align-items-center justify-content-center">
  <div class="container">
    <h1 class="display-4 fw-bold">Wujudkan Niat Suci Anda ke Baitullah</h1>
    <p class="lead col-md-8 mx-auto">Bersama AMU Travel, kami layani perjalanan ibadah Anda dengan sepenuh hati, aman, dan nyaman.</p>
    <a href="{{ '/paket/' | url }}" class="btn btn-primary btn-lg mt-3">Lihat Semua Paket</a>
  </div>
</header>

<section id="paket" class="py-5">
  <div class="container">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Paket Umroh Unggulan</h2>
      <p class="text-muted">Pilihan terbaik untuk perjalanan ibadah Anda.</p>
    </div>
    <div class="row">
      {%- for p in paket | slice(0, 3) -%}
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100 shadow-sm">
          <img src="{{ p.image_url | replace('800/600', '400/250') }}" class="card-img-top" alt="{{ p.nama }}">
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold">{{ p.nama }}</h5>
            <p class="card-text text-muted">{{ p.durasi }} | {{ p.keberangkatan }}</p>
            <h4 class="fw-bold text-primary">{{ p.harga_str }}</h4>
            <p class="card-text mt-2">Hotel bintang 5, penerbangan langsung, dan dibimbing oleh muthawwif berpengalaman.</p>
          </div>
          <div class="card-footer bg-white border-0 pb-3 mt-auto">
            <a href="{{ metadata.pathPrefix }}paket/{{ p.id }}/" class="btn btn-primary w-100">Lihat Detail</a>
          </div>
        </div>
      </div>
      {%- endfor -%}
    </div>
  </div>
</section>

<section class="py-5 bg-light">
    <div class="container">
        <div class="text-center mb-5">
            <h2 class="fw-bold">Mengapa Memilih AMU Travel?</h2>
        </div>
        <div class="row text-center">
            <div class="col-md-4 mb-4">
                <h4 class="fw-bold">Pembimbing Ahli</h4>
                <p>Dibimbing oleh para asatidz yang berpengalaman dan mengerti sunnah.</p>
            </div>
            <div class="col-md-4 mb-4">
                <h4 class="fw-bold">Harga Transparan</h4>
                <p>Tidak ada biaya tersembunyi. Semua detail biaya kami jelaskan di awal.</p>
            </div>
            <div class="col-md-4 mb-4">
                <h4 class="fw-bold">Akomodasi Terbaik</h4>
                <p>Kami pilihkan hotel-hotel terbaik dengan jarak yang dekat ke Masjidil Haram & Nabawi.</p>
            </div>
        </div>
    </div>
</section>

<footer class="py-4 bg-dark text-white text-center">
    <div class="container">
        <p class="mb-0">Copyright © AMU Travel 2025</p>
    </div>
</footer>