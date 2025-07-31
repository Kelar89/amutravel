---
title: "Semua Paket Umroh"
layout: "base.njk"
---

<div class="container py-5">
  <div class="text-center mb-5">
    <h1 class="fw-bold">Pilihan Paket Umroh Terbaik</h1>
    <p class="text-muted">Gunakan pencarian untuk menemukan paket yang paling sesuai untuk Anda.</p>
  </div>

  <table id="tabel-paket" class="table table-striped table-bordered" style="width:100%">
    <thead>
        <tr>
            <th>Nama Paket</th>
            <th>Keberangkatan</th>
            <th>Durasi</th>
            <th>Harga</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody>
        {%- for p in paket -%}
        <tr>
            <td>{{ p.nama }}</td>
            <td>{{ p.keberangkatan }}</td>
            <td>{{ p.durasi }}</td>
            <td>{{ p.harga_str }}</td>
            <td>
                <a href="{{ metadata.pathPrefix }}paket/{{ p.id }}/" class="btn btn-primary btn-sm">Lihat Detail</a>
            </td>
        </tr>
        {%- endfor -%}
    </tbody>
  </table>
</div>