---
title: "Galeri Perjalanan"
layout: "base.njk"
---

<div class="container py-5">
  <div class="text-center mb-5">
    <h1 class="fw-bold">Galeri Perjalanan Bersama AMU Travel</h1>
    <p class="text-muted">Kenangan dan momen tak terlupakan para jamaah di Tanah Suci.</p>
  </div>
  <div class="row">
    {# Loop untuk menampilkan 9 gambar contoh #}
    {%- for i in range(1, 10) -%}
    <div class="col-lg-4 col-md-6 mb-4">
      <a href="https://picsum.photos/1200/800?random={{10 + i}}">
         <img src="https://picsum.photos/400/300?random={{10 + i}}" alt="Galeri Umroh {{i}}" class="img-fluid rounded shadow">
      </a>
    </div>
    {%- endfor -%}
  </div>
</div>